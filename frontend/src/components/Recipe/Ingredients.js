import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Ingredients = () => {
  const { id } = useParams();
  const [ingrediant, setIngrediant] = useState(null); 
  const navigate = useNavigate();

  useEffect(()=>{
    rendering();
  },[]);
const rendering =()=>{

  axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=3cfe5e06&app_key=28c3a03ea304f6aaa97589f1f1bd8877`).then((result)=>{
    console.log(result);
  }).catch((err)=>{
    console.log(err)

  })
}



  return (
    <div className="ingredient">
     <div className='ingrediant_page'>
     {ingrediant ? (
        <ul>
          {ingrediant.hits.map(hit => (
            <li key={hit.recipe.uri}>{hit.recipe.label}</li>
          ))}
        </ul>
      ) : (
        <div>No data available</div>
      )}


     </div>
     
    </div>
  );
};

export default Ingredients;
