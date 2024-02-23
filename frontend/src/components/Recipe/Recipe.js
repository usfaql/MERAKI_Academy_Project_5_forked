import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "./Recipe.css";
import Image from 'react-bootstrap/Image';

const Recipe = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const gymBoxes = [
        // Recipes data
        {
            id: 1,
            name: 'Chocolate Chip Cookies',
            description: 'These delicious cookies are perfect for any occasion.',
            image: 'https://example.com/cookie_image.jpg',
        },
        {
            id: 2,
            name: 'Spaghetti Carbonara',
            description: 'A classic Italian pasta dish with creamy sauce and crispy bacon.',
            image: 'https://example.com/spaghetti_image.jpg',
            
          },
          {
            id: 3,
            name: 'Chicken Alfredo Pasta',
            description: 'Creamy and rich pasta dish with tender chicken and flavorful Alfredo sauce.',
            image: 'https://example.com/alfredo_image.jpg',
            
          },
          {
            id: 4,
            name: 'Caprese Salad',
            description: 'A refreshing salad with ripe tomatoes, fresh mozzarella, and basil leaves.',
            image: 'https://example.com/caprese_image.jpg',
            
          },
          {
            id: 5,
            name: 'Beef Tacos',
            description: 'Classic Mexican street food with seasoned beef, fresh salsa, and toppings.',
            image: 'https://example.com/tacos_image.jpg',
           
          },
          {
            id: 6,
            name: 'Vegetable Stir-Fry',
            description: 'Healthy and flavorful stir-fried vegetables served with rice or noodles.',
            image: 'https://example.com/stirfry_image.jpg',
            
          },
          {
            id: 7,
            name: 'Margarita Pizza',
            description: 'Classic pizza topped with tomato sauce, fresh mozzarella, and basil leaves.',
            image: 'https://example.com/pizza_image.jpg',
            
          },
          {
            id: 8,
            name: 'Chicken Caesar Salad',
            description: 'A satisfying salad with grilled chicken, crisp romaine lettuce, and Caesar dressing.',
            image: 'https://example.com/caesar_image.jpg',
            
          },
          {
            id: 9,
            name: 'Pancakes',
            description: 'Fluffy pancakes served with butter and maple syrup, perfect for breakfast.',
            image: 'https://example.com/pancakes_image.jpg',
            
          },
          {
            id: 10,
            name: 'Chicken Noodle Soup',
            description: 'Comforting soup with tender chicken, vegetables, and noodles in flavorful broth.',
            image: 'https://example.com/soup_image.jpg',
           
          },
          {
            id: 11,
            name: 'Chocolate Chip Cookies',
            description: 'These delicious cookies are perfect for any occasion.',
            image: 'https://example.com/cookie_image.jpg',
        },
        {
            id: 12,
            name: 'Spaghetti Carbonara',
            description: 'A classic Italian pasta dish with creamy sauce and crispy bacon.',
            image: 'https://example.com/spaghetti_image.jpg',
            
          },
          {
            id: 13,
            name: 'Chicken Alfredo Pasta',
            description: 'Creamy and rich pasta dish with tender chicken and flavorful Alfredo sauce.',
            image: 'https://example.com/alfredo_image.jpg',
            
          },
          {
            id: 14,
            name: 'Caprese Salad',
            description: 'A refreshing salad with ripe tomatoes, fresh mozzarella, and basil leaves.',
            image: 'https://example.com/caprese_image.jpg',
            
          },
          {
            id: 15,
            name: 'Beef Tacos',
            description: 'Classic Mexican street food with seasoned beef, fresh salsa, and toppings.',
            image: 'https://example.com/tacos_image.jpg',
           
          },
          {
            id: 16,
            name: 'Vegetable Stir-Fry',
            description: 'Healthy and flavorful stir-fried vegetables served with rice or noodles.',
            image: 'https://example.com/stirfry_image.jpg',
            
          },
          {
            id: 17,
            name: 'Margarita Pizza',
            description: 'Classic pizza topped with tomato sauce, fresh mozzarella, and basil leaves.',
            image: 'https://example.com/pizza_image.jpg',
            
          },
          {
            id: 18,
            name: 'Chicken Caesar Salad',
            description: 'A satisfying salad with grilled chicken, crisp romaine lettuce, and Caesar dressing.',
            image: 'https://example.com/caesar_image.jpg',
            
          },
          {
            id: 19,
            name: 'Pancakes',
            description: 'Fluffy pancakes served with butter and maple syrup, perfect for breakfast.',
            image: 'https://example.com/pancakes_image.jpg',
            
          },
          {
            id: 20,
            name: 'Chicken Noodle Soup',
            description: 'Comforting soup with tender chicken, vegetables, and noodles in flavorful broth.',
            image: 'https://example.com/soup_image.jpg',
           
          }
    ];

    const filterRecipes = (query) => {
        const filtered = gymBoxes.filter(recipe =>
            recipe.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredRecipes(filtered);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        filterRecipes(e.target.value);
    };

    const initialRecipeRender = searchQuery === '' ? gymBoxes : filteredRecipes;

    const addToFavorites = (recipe) => {
        if (!favorites.some(fav => fav.id === recipe.id)) {
            setFavorites([...favorites, recipe]);
        }
    };

    return (
        <div className='recipe'>
            <div className='recipe_card'>
                <div className='search_bar'>
                    <input
                        type="text"
                        placeholder="Search recipes..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className='searchbar'
                    />
                </div>
                <div className='card'>
                    <Row xs={1} md={4} className="g-2" style={{background:"#272727"} }>
                        {initialRecipeRender.map((recipe, index) => (
                            <Col key={index}>
                                <Card className='ccard'>
                            <Image src="https://sallysbakingaddiction.com/wp-content/uploads/2023/06/healthy-breakfast-recipe-ideas.jpg" roundedCircle  className='image_card'/>

                                    <Card.Body className='cardbody'>
                                        <Card.Title style={{fontWeight:"bold"}}>{recipe.name}</Card.Title>
                                        <Card.Text className='text-card'>
                                            {recipe.description}
                                        </Card.Text>
                                       
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button 
                                            variant="success" 
                                            onClick={() => addToFavorites(recipe)} style={{background:"#ff0000" , float:"left"}}
                                        >
                                            Fav
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className="favorites">
                    <h2>My Favorites</h2>
                    {favorites.map((fav, index) => (
                        <div key={index}>
                            <p>{fav.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Recipe;
