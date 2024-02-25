import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";






const Ingredients = () => {

    const { query } = useParams();
    const [order, setOrder] = useState(undefined);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
    
        axios
          .get( `https://api.edamam.com/search?q=${query}&app_id=8fe04fdd&app_key=71c0b5bf11e8df07b68092d65bde92da&from=0&to=20&calories=591-722&health=alcohol-free`, {
            
          })
          .then((response) => {
            if (response) {
                console.log(response);
              setOrder(response.data.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);


  return (
    <div className='ingrediant'>
        
      
    </div>
  )
}

export default Ingredients
