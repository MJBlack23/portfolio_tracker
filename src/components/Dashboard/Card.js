import React from 'react';

export default ({ ticker, price, quantity, isUp }) => (
  <div className='card' style={styles.container}>
    <div className='card-content'>

      <nav className='level is-mobile'>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>{quantity} shares</p>
            <p className='title is-4'>{ticker}</p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Price</p>
            <p 
              className={`title is-5 ${isUp ? 'has-text-success' : 'has-text-danger'}`}>
              $ {price}
            </p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Value</p>
            <p className='title is-5'>$ {price * quantity}</p>
          </div>
        </div>
      </nav>

    </div>
  </div>
)

const styles = {
  container: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },
}