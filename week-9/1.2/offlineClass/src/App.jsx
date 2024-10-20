import { useState } from "react";
function App() {
  return (
    
    <div style={{ backgroundColor: "#f1f2f6", height: "100vh", padding: "20px" }}>
      
      <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "20px" }}>
        <ProfileCard />
        <ToggleMessage />
        <ToggleMessage />
        <ToggleMessage />
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <PostComponent />
        <br />
        <PostComponent />
        <br />
        <PostComponent />
      </div>
    </div>
  );
}

function PostComponent() {
  return (
    <div style={{ width: 300, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }}>
      <div style={{ display: "flex" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/200px-Vellore_Institute_of_Technology_seal_2017.svg.png"
          alt="VIT logo"
          style={{
            width: 30,
            height: 30,
            borderRadius: 10,
          }}
        />
        <div style={{ fontSize: 10, marginLeft: 8 }}>
          Vellore Institute of Technology
          <br />
          <div>285,896 followers</div>
          <div>5h</div>
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        "VIT salutes Ratan Naval Tata, legendary industrialist, philanthropist, and Chairman of Tata Group & Tata Sons. A Padma Vibhushan awardee, his enduring legacy rooted in India's rich values will remain with us forever. RIP!"
      </div>
    </div>
  );
}

function ToggleMessage(){
  const [notificationCount, setNotificationCount] = useState(0);

  return(
    <div>
      <button onClick={()=>setNotificationCount(notificationCount + 1)}>click me</button>
      <div>{notificationCount}</div>
    </div>
  )
}

function ProfileCard() {
  return (
    <div
      style={{
        width: 200,
        backgroundColor: "white",
        borderRadius: 20,
        borderColor: "gray",
        borderWidth: 1,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src="https://w0.peakpx.com/wallpaper/566/863/HD-wallpaper-sasuke-uchiha-red-eyes-mangekyo-sharingan-eterno-manga-naruto.jpg"
          alt="Background"
          style={{
            width: "100%",
            height: "10vh",
            objectFit: "cover",
            zIndex: 1,
            position: "relative",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
        <img
          src="https://w0.peakpx.com/wallpaper/786/361/HD-wallpaper-sasuke-anime-naruto-sharingan-uchiha-uchiha-sasuke.jpg"
          alt="Profile"
          style={{
            width: 50,
            height: 50,
            zIndex: 2,
            position: "absolute",
            top: "7vh",
            left: "25px",
            borderRadius: "50%",
            borderColor: "white",
            borderWidth: 2,
            borderStyle: "solid",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "30px" }}>
        <h3 style={{ margin: 0 }}>Sasuke Uchiha</h3>
        <div>Assassin</div>
        <div style={{ color: "gray", fontSize: "12px" }}>Leaf Town</div>
        <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
          <img
            src="https://media.licdn.com/dms/image/v2/D560BAQEzoABrtkbUrA/company-logo_100_100/company-logo_100_100/0/1694691770686/vitap_university_logo?e=1736380800&v=beta&t=IqC3BUrP7fUXLcty_R3rleJ1SBe3kPqa2SVtBMOWeqA"
            alt="VIT-AP University"
            style={{ width: 15, height: 15, marginRight: 5 }}
          />
          <div style={{ fontSize: "12px", marginBottom: 20}}>Uchiha Clan</div>
        </div>
      </div>
    </div>
  );
}

export default App;
