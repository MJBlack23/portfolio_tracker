import React from 'react';
import moment from 'moment';

import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => (
  <section className='hero is-primary'>
    <div className='hero-body'>
      <div className='container'>
        <h3 className='heading has-text-centered'>{props.security.ticker}</h3>
        <h1 className='title is-2 has-text-centered'>$ {(props.security.price * props.security.quantity).toFixed(2)}</h1>
        <Sparklines data={props.security.history}>
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
          <span>$ {props.security.price.toFixed(2)}</span>
        </div>
      </div>
      <div className='level-item has-text-centered'>
        <div>
          <span>{moment.isMoment(props.security.lastUpdate) ? props.security.lastUpdate.fromNow() : ''}</span>
        </div>
      </div>
    </nav>
  </section>
)