import React from 'react';

export default (props) => (
  <div className='columns'>
    <div className='column is-right'>
      <button
        className='button is-primary is-medium'
        style={{ width: '100%' }}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </div>
  </div>
)