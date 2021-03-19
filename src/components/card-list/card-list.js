import React from 'react';
import { Card } from '../card/card';

import './card-list.styles.css';


// we pass in props through params
export const CardList = (props) => (
  <div className='card-list'>
    {
      props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))
    }
  </div>
);















