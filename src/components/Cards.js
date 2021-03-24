import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1>Examples!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/helloEx.jpg"
              text="Hello World"
              label=""
              path="/documentation"
            />
            <CardItem
              src="images/loopEx.jpg"
              text="Runs a loop to find and place all factors of y into an array"
              label=""
              path="/documentation"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/fibEx.jpg"
              text="Function to iteratively find the nth fibonacci number"
              label=""
              path="/documentation"
            />
            <CardItem
              src="images/factEx.jpg"
              text="Function to iteratively find the factorial of n"
              label=""
              path="/documentation"
            />
            <CardItem
              src="images/arraySort.jpg"
              text="Sorts an array"
              label=""
              path="/documentation"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
