import React from 'react';

import { Link } from 'react-router-dom';

export default () => (
  <section className='section'>
    <div className='container is-fluid'>
      <div className='columns'>
        <div className='column is-pulled-right'>
          <Link to='/security/new' className='button is-primary is-rounded is-medium'>
            <i className="fas fa-plus fa-fw"></i>
          </Link>
        </div>
      </div>
    </div>
  </section>
)