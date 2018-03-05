import React from 'react';

export default (props) => (
  <div className='card'>
    <div className='card-content'>
      <div className='level is-mobile'>
        <div className='level-item'>
          <div>Buy</div>
        </div>
        <div className='level-item'>
          <div>{props.transaction.quantity}</div>
        </div>
        <div className='level-item'>
          <div>$ {props.transaction.purchasePrice}</div>
        </div>
      </div>

    </div>
  </div>
)