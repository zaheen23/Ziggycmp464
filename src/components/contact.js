import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Zaheen Shahriyar</h2>
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am a transfer at Lehman College and will be graduating in 2021 with a bachelors in Computer Science. I am just trying to be the very best coder I can be.  Gotta code em all.  </p>

          </Cell>
          <Cell col={6}>
            <h2>Feel free to contact me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (347) 344-2558
                  </ListItemContent>
                </ListItem>

        

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    zaheen.shahriyar@lc.cuny.edu
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;