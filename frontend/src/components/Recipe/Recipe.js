import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Recipe.css"





const Recipe = () => {


    const recipes = [
        {
          id: 1,
          name: 'Chocolate Chip Cookies',
          description: 'These delicious cookies are perfect for any occasion.',
          ingredients: [
            '2 1/4 cups all-purpose flour',
            '1/2 teaspoon baking soda',
            '1 cup unsalted butter, softened',
            '1/2 cup granulated sugar',
            '1 cup packed brown sugar',
            '1 teaspoon vanilla extract',
            '2 large eggs',
            '2 cups semisweet chocolate chips'
          ],
          instructions: [
            'Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.',
            'In a small bowl, combine flour and baking soda. Set aside.',
            'In a large mixing bowl, beat together butter, granulated sugar, brown sugar, and vanilla extract until creamy.',
            'Beat in eggs, one at a time, until well blended.',
            'Gradually add flour mixture, mixing well after each addition.',
            'Stir in chocolate chips.',
            'Drop dough by rounded tablespoons onto prepared baking sheets.',
            'Bake for 9-11 minutes or until golden brown. Cool on baking sheets for 2 minutes before transferring to wire racks to cool completely.'
          ]
        },
        // Add more recipes as needed
      ];  return (
    <div className='recipe'>
{card.map((e,i)=>{
            <div className='recipe_card'>

 <Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="" />
 <Card.Body>
   <Card.Title>{}</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the
     bulk of the card's content.
   </Card.Text>
   <Button variant="primary">Go somewhere</Button>
 </Card.Body>
</Card>

</div>

})}
       
   




        </div>
      
  )
}

export default Recipe
