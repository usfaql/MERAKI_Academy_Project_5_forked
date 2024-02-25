import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import "./Recipe.css";

const Recipe = () => {
    const [search, setSearch] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    const fetchRecipes = (query) => {
        axios.get(`https://api.edamam.com/search?q=${query}&app_id=8fe04fdd&app_key=71c0b5bf11e8df07b68092d65bde92da&from=0&to=20&calories=591-722&health=alcohol-free`)
            .then((response) => {
                console.log(response);
                setFilteredRecipes(response.data.hits);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const renderRecipes = (query) => {
        fetchRecipes(query);
    };

    useEffect(() => {
        fetchRecipes('');
    }, []);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearch(query);
        if (query.trim() === '') {
            setFilteredRecipes([]);
        } else {
            fetchRecipes(query);
        }
    };

   

    

    return (
        <div className='recipe'>
            <div className='recipe_card'>
                <div className='search_bar'>
                    <input
                        type="text"
                        placeholder="Search recipes..."
                        value={search}
                        onChange={handleSearchChange}
                        className='searchbar'
                    />
                </div>
                <div className='recipe_buttons'>
                    <Button variant="outline-success" onClick={() => renderRecipes('rice')}>Rice</Button>{' '}
                    <Button variant="outline-success" onClick={() => renderRecipes('meat')}>Meat</Button>{' '}
                    <Button variant="outline-success" onClick={() => renderRecipes('chicken')}>Chicken</Button>{' '}
                    <Button variant="outline-success" onClick={() => renderRecipes('vegetable')}>Vegetables</Button>{' '}
                </div>
                <div className='card'>
                    <Row xs={1} md={4} className="g-2" style={{ background: "#272727" }}>
                        {filteredRecipes.map((recipe, index) => (
                            <Col key={index}>
                                <Card className='ccard' style={{display:"flex"
                            ,justifyContent:"space-between"}}>
                                    <Image src={recipe.recipe.image} roundedCircle className='image_card'  type="button" onClick={()=>{

                                        
                                    }}/>
                                    <Card.Body className='cardbody'>
                                        <Card.Title style={{ fontWeight: "bold" }}>{recipe.recipe.label}</Card.Title>
                                        <Card.Text className='text-card'>
                                        <div className='calory' >
                                       <div style={{color:"red"}}>CALORIES</div>  {recipe.recipe.calories} 
                                        </div>
                                        </Card.Text>
                                        
                                         
                                    </Card.Body>
                                    <Card.Footer>
                                        
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
                
            </div>
        </div>
    );
};

export default Recipe;
