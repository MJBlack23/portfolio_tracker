import React from 'react';

import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => (
  <section className='hero is-primary'>
    <div className='hero-body'>
      <div className='container'>
        <h3 className='heading has-text-centered'>{props.ticker}</h3>
        <h1 className='title is-2 has-text-centered'>$ 145.67</h1>
        <Sparklines data={props.data}>
          <SparklinesLine />
        </Sparklines>
      </div>
    </div>

    <nav className='level is-mobile'>
      <div className='level-item has-text-centered'>
        <div>
          <span>Last Trade</span>
        </div>
      </div>
      <div className='level-item has-text-centered'>
        <div>
          <span>$ 145.97</span>
        </div>
      </div>
      <div className='level-item has-text-centered'>
        <div>
          <span> Yesterday 4:05 PM</span>
        </div>
      </div>
    </nav>
  </section>
)