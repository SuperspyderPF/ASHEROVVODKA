import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Info About Us</h1>
      <p></p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://cmg-cmg-tv-10040-prod.cdn.arcpublishing.com/resizer/lEwTJFbX0_lir1ZIKSVLkJWJlrQ=/1440x810/filters:format(jpg):quality(70)/d1hfln2sfez66z.cloudfront.net/02-27-2022/t_b17d3bdef766464f9df94cf2a10bbfc6_name_Russian_vodka_removed_from_shelves_in_Kansas__Michigan_Poster.jpg'
              text='Do you Have A Vodka You Want To Import? Please Email Me.'
              contact='Contact me@'
              label='Russian Vodka Shelf'
              contact='Email: Dan@danasherovvodka.com'
              path='/aboutus'
            />
             
            
            
            
          </ul>
        </div>
      </div>
    </div>
  );
}



export default Cards;
