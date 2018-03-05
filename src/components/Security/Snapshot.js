import React from 'react';

export default (props) => (
  <section className='section'>
    <nav className='level is-mobile'>
      <div className='level-item has-text-centered'>
        <div>
          <p className='heading'>AVG BUY</p>
          <p className='title is-5'>$ {props.security.purchasePrice.toFixed(2)}</p>
        </div>
      </div>

      <div className='level-item has-text-centered'>
        <div>
          <p className='heading'>QUANTITY</p>
          <p className='title is-5'>{props.security.quantity}</p>
        </div>
      </div>

      <div className='level-item has-text-centered'>
        <div>
          <p className='heading'>GAIN/LOSS</p>
          <p className='title is-5'>$ {((props.security.price - props.security.purchasePrice) * props.security.quantity).toFixed(2)}</p>
        </div>
      </div>
    </nav>
  </section>
)