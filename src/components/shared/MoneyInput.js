import React from 'react';

export default (props) => (
  <div className='columns'>
    <div className='column'>
      <p className='heading'>{props.name}</p>
      <p className='control has-icons-left'>
        <input 
          className='input is-medium'
          type='text'
          placeholder={props.name}
          value={props.value}
          name={props.name}
          onChange={props.onChange}
        />
        <span className='icon is-small is-left'>
          <i className='fas fa-dollar-sign'></i>
        </span>
      </p>
    </div>
  </div>
)