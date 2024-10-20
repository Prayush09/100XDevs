////never store password like this, always store there hashed password, use npm library like bcrypt.
    //hashing is deterministic, but this can lead to vulnerabilites as two people having the same password will have the same hash
    //therefore we use salting, which is adding a salt (random string) to the password and then hashing that thing.
    // 1231238x1I32 => 123123 is password and 8x1I32 is the salt, now we store the hash and the salt into the db in plain text.

const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const { salt } = require("./salt")
const {z} = require("zod") //for input validation
//input validation : using zod

try{
  mongoose.connect("mongodb+srv://prayushgiri:qwerty123@cluster0.mfjfput.mongodb.net/?retryWrites=true&w=majority&ssl=true");
  console.log("connected to db")
}catch(err){
  console.log("Failed to connect to db")
}

const app = express();
app.use(express.json());
// assigment : Chekc if the password has 1 uppercase car, 1 loweraes char, 1 spl char
app.post("/signup", async function(req, res) {
  try {
    //designing the schema in zod so that it takes care of the validiation
    //it gives alot of high level functions that will validate the inputs for you.
    const requiredBody = z.object({
      email: z.string().email(),
      name: z.string().min(4).max(100), //checks for name
      password: z.string().min(8).max(40).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
        message: "Enter password with one uppercase, one lowercase and one special character!"
      })//checks for password
    })
    //const parsedData = requiredBody.parse(req.body);
    const parsedDataWithSuccess = requiredBody.safeParse(req.body)

    if(!parsedDataWithSuccess.success){
      return res.json({
        message: "Incorrect Format",
        error: parsedDataWithSuccess.error
      })
      
    }

    const { email, password, name } = req.body;

    // Basic validation checks to ensure required fields are present
    if (!email || !password || !name) {
      return res.status(400).json({
        message: "Missing required fields: email, password, and name"
      });
    }

    // Check if the user already exists in the database
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User with this email already exists"
      });
    }

    // Hash the password with a salt
    const saltRounds = 10;  // You can adjust salt rounds for better security
    const hashPassword = await bcrypt.hash(password, saltRounds);

    // Create the user in the database
    await UserModel.create({
      email,
      password: hashPassword, // Store the hashed password
      name
    });

    // Send success response
    res.status(201).json({
      message: "You have successfully signed up"
    });
  } catch (err) {
    // Log the error for debugging purposes
    console.error("Signup failed: ", err);

    // Return a generic error response to the client
    res.status(500).json({
      message: "An error occurred during signup"
    });
  }
});



app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email
    });

    if(!response){
          res.status(403).json({
            message: "User does not exists in DB"
          })
          return
    }

    const passwordMatch = await bcrypt.compare(password, response.password);

    if (passwordMatch) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});


app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000);