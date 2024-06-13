import React, { useState, useEffect } from 'react';
import { CarFactContainer } from './styles'
import { carFacts } from 'data/data'

const RandomCarFact = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    function displayRandomFact() {
      const randomIndex = Math.floor(Math.random() * carFacts.length);
      setFact(carFacts[randomIndex]);
    }

    displayRandomFact();

    
    const intervalId = setInterval(displayRandomFact, 30000); //180000-3min

    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <CarFactContainer>
      <p>{fact}</p>
    </CarFactContainer>
  );
};

export default RandomCarFact;