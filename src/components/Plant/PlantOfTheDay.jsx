import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../StyledComponents/StyledComponents';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const PlantContainer = styled(Container)`
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

const PlantImage = styled.img`
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 8px;
    margin: 1rem 0;
    object-fit: cover;
`;

const PlantInfo = styled.div`
    margin: 1rem 0;
    padding: 1rem;
    background-color: ${props => props.theme.colors.lightGray};
    border-radius: 8px;
`;

const PlantDetail = styled.div`
    margin: 1rem 0;
    color: white;
    
    strong {
        color: ${props => props.theme.colors.primary};
    }
`;

const LoadingContainer = styled(Container)`
    text-align: center;
    padding: 2rem;
`;

const ErrorContainer = styled(Container)`
    text-align: center;
    padding: 2rem;
    color: red;
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

const PlantOfTheDay = () => {
    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [clientToken, setClientToken] = useState(null);
    const history = useHistory();
    const TOKEN = 'YPL0oCPPmylIEwr78weBx3uvF4s3qv2k4YnjfaBC53M';

    useEffect(() => {
        const getClientToken = async () => {
            try {
                const params = {
                    origin: window.location.origin,
                    token: TOKEN
                };

                const response = await axios({
                    method: 'post',
                    url: 'https://trefle.io/api/auth/claim',
                    data: params,
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });

                if (response.data && response.data.token) {
                    setClientToken(response.data.token);
                } else {
                    throw new Error('No token received');
                }
            } catch (err) {
                console.error('Error getting client token:', err);
                setError('Failed to authenticate with the plant database');
                setLoading(false);
            }
        };

        getClientToken();
    }, []);

    const fetchPlant = async (attemptedIds = new Set()) => {
        if (!clientToken) return;

        try {
            // Get a more random plant ID using timestamp and larger range
            const timestamp = Date.now();
            const randomFactor = Math.random() * 1000000; // Larger range for more variety
            let plantId = Math.floor((timestamp * randomFactor) % 100000) + 1; // Increased range to 100000

            // If this ID has been attempted, try another one with a different random factor
            let attempts = 0;
            while (attemptedIds.has(plantId) && attempts < 10) {
                const newRandomFactor = Math.random() * 1000000;
                plantId = Math.floor((Date.now() * newRandomFactor) % 100000) + 1;
                attempts++;
            }
            
            if (attempts >= 10) {
                // If we've tried too many times, clear the attemptedIds set
                attemptedIds.clear();
            }
            
            attemptedIds.add(plantId);

            const response = await axios.get(
                `https://trefle.io/api/v1/species/${plantId}?token=${clientToken}`,
                {
                    headers: {
                        'Accept': 'application/json'
                    }
                }
            );

            if (response.data && response.data.data) {
                console.log(response.data.data);
                // Only retry if we don't have an image AND we haven't seen this plant before
                if (!response.data.data.image_url && 
                    !attemptedIds.has(response.data.data.id) && 
                    attemptedIds.size < 10) {
                        return fetchPlant(attemptedIds);
                }
                if(!response.data.data.distribution.native && 
                    !attemptedIds.has(response.data.data.id) && 
                    attemptedIds.size < 10) {
                        return fetchPlant(attemptedIds);
                    }
                if(!response.data.data.distribution.year && 
                    !attemptedIds.has(response.data.data.id) && 
                    attemptedIds.size < 10) {
                        return fetchPlant(attemptedIds);
                    }
                // If we've tried all retries and still no image, show the plant with a message
                if (!response.data.data.image_url) {
                    response.data.data.noImageMessage = "Sorry, no image :(";
                }
                if (!response.data.data.distribution.native) {
                    response.data.data.noImageMessage = "Sorry, no native distribution data available :(";
                }
                if (!response.data.data.year) {
                    response.data.data.noImageMessage = "Sorry, no year data available :(";
                }
                setPlant(response.data.data);
                setLoading(false);
            } else {
                throw new Error('Invalid plant data received');
            }
        } catch (err) {
            console.error('Error fetching plant:', err);
            // If we haven't tried enough times and got an error, try another plant
            if (attemptedIds.size < 10) {
                return fetchPlant(attemptedIds);
            }
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (clientToken) {
            fetchPlant();
        }
    }, [clientToken]);

    const handleNext = () => {
        setLoading(true);
        fetchPlant();
    };

    if (loading) {
        return (
            <PlantContainer>
                <h2>Loading plant data...</h2>
            </PlantContainer>
        );
    }

    if (error) {
        return (
            <PlantContainer>
                <h2>Error: {error}</h2>
            </PlantContainer>
        );
    }

    if (!plant) {
        return (
            <PlantContainer>
                <h2>No plant available</h2>
            </PlantContainer>
        );
    }

    return (
        <PlantContainer>
            <h2>{plant.common_name || plant.scientific_name}</h2>
            
            {plant.image_url ? (
                <PlantImage src={plant.image_url} alt={plant.common_name || plant.scientific_name} />
            ) : (
                <PlantDetail>
                    <strong>{plant.noImageMessage}</strong>
                </PlantDetail>
            )}
            
            <PlantInfo>
                {plant.year && (
                    <PlantDetail>
                        <strong>Year Discovered:</strong> {plant.year}
                    </PlantDetail>
                )}
                {plant.distribution?.native && (
                    <PlantDetail>
                        <strong>Origin(s):</strong> {Array.isArray(plant.distribution.native) 
                            ? plant.distribution.native.join(', ') 
                            : plant.distribution.native}
                    </PlantDetail>
                )}
            </PlantInfo>

            <NextButton onClick={handleNext}>Next Plant</NextButton>
        </PlantContainer>
    );
};

export default PlantOfTheDay;
