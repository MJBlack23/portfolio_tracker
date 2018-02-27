import React from 'react';

export default ({ netValue }) => (
  <section className='section'>
    <nav className='level'>
      <div className='level-item has-text-centered'>
        <div>
          <p className='heading'>Portfolio Net Value</p>
          <p className='title is-1'>$ {netValue}</p>
        </div>
      </div>
    </nav>
  </section>
)