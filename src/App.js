import React, { Component } from 'react';

import Profile from './Profile';
import Stream from './Stream';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <section className='maestro-wrapper'>
        <div className='maestro-header'>
          <h2>Learning React, Apollo, GraphQL and Drupal 8</h2>
        </div>
        <div className='maestro-content'>
          <Profile />
          <Stream />
        </div>
        <Footer />
      </section>
    );
  }
}

export default App;
