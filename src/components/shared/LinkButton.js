import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <div className='columns'>
    <div className='column is-right'>
      <Link to='/' className='button is-inverted is-medium is-text' style={{ width: '100%' }}>{props.text}</Link>
    </div>
  </div>
)