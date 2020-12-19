import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={11}>
            
            <p> blank</p>

            <div className="banner-text">
              <h1>Zaheen Shahriyar</h1>
              <h1>Rising Web Developer</h1>

            <hr/>

          <p>HTML/CSS | JavaScript | React </p>

        <div className="social-links">


          {/* Github */}
          <a href="https://github.com/zaheen23" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;