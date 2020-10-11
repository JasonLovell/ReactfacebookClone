import React from 'react';
import { Card } from 'react-bootstrap';
import ImageComment from './ImageComment';
import LikeCommentShare from './LikeCommentShare';
import cardInfo2 from './ListArray/CardInfo3';
import './MiddleStoryBoard.css';

function MiddleStoryBoard2() {
  const renderCard = (card, index) => {
    return (
      <div class='flex-container2'>
        <Card className='CardBody2' key={index}>
          <img className='VideoChatImg' src={card.image2} alt='Facebook-Icon' />
          <Card.Title className='CardName'>{card.name}</Card.Title>
          <Card.Title className='CardDate'>{card.time} · Public</Card.Title>
          <Card.Title className='CardPosted'>{card.posted}</Card.Title>

          <Card.Img
            className='CardImage2'
            src={card.image}
            alt=' '
          />
          <iframe className="VideoWindow"
          height={card.height}
            margin='auto'
            src={card.image3}
            frameborder='0'
            allow='autoplay'
            allowfullscreen
          ></iframe>
          <Card.Title className='CardPosted'>{card.LikedPost}</Card.Title>
          <Card.Title className='CommentCount'>{card.CommentCount}</Card.Title>
          <hr />
          <LikeCommentShare />
          <hr />
          <ImageComment />
        </Card>
      </div>
    );
  };

  return <div className='App'>{cardInfo2.map(renderCard)}</div>;
}

export default MiddleStoryBoard2;