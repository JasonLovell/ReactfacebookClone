import React from 'react';
import './CardBox.css';
import { Button, Card } from 'react-bootstrap';
import cardInfo from '../ListArray/CardInfo';

const CardBox = () => {
  const renderCard = (card, index) => {
    return (
      <div class='flex-container'>
        <Card className='CardBody' key={index}>
          <Card.Img
            variant='top'
            src='holder.js/100px180'
            src={card.image}
            alt='No Image'
          />
          <Card.Body>
            <Card.Title className="CardTitle">{card.name}</Card.Title>
            <Button variant='primary'><Card.Img
            variant='top'
            src='holder.js/200px'
            src={card.image2}
            alt='No Image'
          /></Button>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return <div className='App'>{cardInfo.map(renderCard)}</div>;
};

export default CardBox;
