import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./Engredient.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Ingredients = () => {
  const { id } = useParams();
  const [ingredient, setIngredient] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    rendering();
  }, []);
  const rendering = () => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=3cfe5e06&app_key=28c3a03ea304f6aaa97589f1f1bd8877`
      )
      .then((result) => {
        setIngredient(result.data.recipe);
        console.log("fdfwffsadf", result.data.recipe);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="ingredient">
      
      {/* <div className='ingredient_page'> */}
      {ingredient ? (
        // <div className='ingredient_img'>

        <Container className="ingredient_page">
           <Row>
            <Col>
              <img
                src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
                type="submit"
                alt="backBtn"
                onClick={() => {
                  navigate(-1);
                }}
                className="back"
              />
            </Col>
           
          </Row>
          <Row className="Ingredients">
            <Col className="ingredient_img">
              <img
                src={ingredient.image}
                style={{ borderRadius: ".5rem" }}
                alt="Recipe"
              />
              <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around",height:"100%",alignSelf:"center"}}>
               <h1 style={{ fontFamily: "monospace",color:"#7aad28" }}>
                
             {ingredient.label}

              </h1>
               <h2 style={{ fontFamily: "monospace", color: "beige" }}>
                calories :
             {ingredient.calories}

              </h2></div>
            </Col>

           
          </Row>
          <Row className="Row">

          <Col className="Ing">
             
             {/* <div className='Ingredients'> */}
             <h1 style={{ fontFamily: "monospace", color: "beige" }}>
               Ingredients 
             </h1>
             <ul>
               {ingredient.ingredientLines.map((line, index) => (
                 <li key={index}>{line}</li>
               ))}
             </ul>
             {/* </div> */}
           </Col>
        
         
            <Col className="digest" >
              {/* <div className='digest'> */}
              <h1 style={{ fontFamily: "monospace", color: "beige"}}>
                Nutrition 
              </h1>
              <ul id="ul">
                {ingredient.digest.map((item, index) => (
                  <li key={index}>
                    {item.label}: {item.total}
                  </li>
                ))}
              </ul>
              {/* </div> */}
            </Col>
          </Row>
         
        </Container>
      ) : (
        // </div>
        <div>No data available</div>
      )}
      {/* </div> */}
    </div>
  );
};

export default Ingredients;
