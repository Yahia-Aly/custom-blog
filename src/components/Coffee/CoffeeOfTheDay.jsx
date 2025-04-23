import React, { useState, useEffect } from 'react';
import { Container } from '../StyledComponents/StyledComponents';
import drinksData from '../../data/drinksData';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const DrinkContainer = styled(Container)`
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    width: 100%;
    box-sizing: border-box;
    position: relative;

    @media (max-width: ${props => props.theme.queries.mobile}) {
        padding: 1rem;
    }

    h2 {
        margin-top: 1rem;
    }

    h3 {
        margin-top: 2rem;
    }

    p {
        margin: 1rem auto;
        max-width: 600px;
    }
`;

const DrinkImage = styled.img`
    max-width: 35%;
    max-height: 35%;
    border-radius: 8px;
    margin: 2rem auto;
    display: block;
	object-fit: fill;
`;

const RecipeSection = styled.div`
    margin: 2rem auto;
    text-align: left;
    max-width: 600px;
`;

const IngredientsList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 1rem 0;
`;

const StepList = styled.ol`
    padding-left: 1.5rem;
    margin: 1rem 0;
`;

const VariationList = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
`;

const VariationItem = styled.li`
    background: rgba(255, 255, 255, 0.1);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
`;

const DateDisplay = styled.p`
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    margin-bottom: 1rem;
`;

const NextButton = styled.button`
    background-color: #333;
    color: white;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
    transition: background-color 0.3s;

    &:hover {
        background-color: #555;
    } 
`;

const CoffeeOfTheDay = () => {
    const [currentDrinkIndex, setCurrentDrinkIndex] = useState(0);
    const history = useHistory();

    const handleNext = () => {
        // Generate a random index between 0 and drinksData.length - 1
        const randomIndex = Math.floor(Math.random() * drinksData.length);
        setCurrentDrinkIndex(randomIndex);
    };

    const currentDrink = drinksData[currentDrinkIndex];

    // Format the date
    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <DrinkContainer>
            <DateDisplay>Today's Drink • {today}</DateDisplay>
            <DrinkImage src={currentDrink.image} alt={currentDrink.name} />
            <h2>{currentDrink.name}</h2>
            <p>{currentDrink.description}</p>
            
            <RecipeSection>
                <h3>Ingredients</h3>
                <IngredientsList>
                    {currentDrink.recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </IngredientsList>

                <h3>Steps</h3>
                <StepList>
                    {currentDrink.recipe.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </StepList>
            </RecipeSection>

            <h3>Tasting Notes</h3>
            <VariationList>
                {currentDrink.tastingNotes.map((note, index) => (
                    <VariationItem key={index}>{note}</VariationItem>
                ))}
            </VariationList>

            <h3>Variations</h3>
            <VariationList>
                {currentDrink.variations.map((variation, index) => (
                    <VariationItem key={index}>{variation}</VariationItem>
                ))}
            </VariationList>

            <p>Origin: {currentDrink.origin}</p>
            <NextButton onClick={handleNext}>Next Drink</NextButton>
            <p>Ps: 3o2bal Refouf :)</p>
        </DrinkContainer>
    );
};

export default CoffeeOfTheDay;
