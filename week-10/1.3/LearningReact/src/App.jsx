import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Home = () => {
  //const navigate = useNavigate();
  const [data, setData] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api"); 
        setData(response.data.results); 
      } catch (error) {
        console.error("Error fetching data:", error); 
      }
    };

    fetchData();
  }, []);

 
  const handleCompanyClick = (company) => {
    console.log("navigation works!") 
  };

  return (
    <div>
      <h1>Companies</h1>
      <ul>
        {data.map(company => (
          <li>
            {company.name.first}<br/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;