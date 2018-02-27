import React from 'react';

export default (props) => (
  <div className='columns'>
    <div className='column'>
      <p className='heading'>{props.name}</p>
      <input
        className='input is-medium'
        type='text'
        placeholder={props.name}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      />
    </div>
  </div>
)