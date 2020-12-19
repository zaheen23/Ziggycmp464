import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Zaheen Shahriyar</h2>
            <h4 style={{color: 'grey'}}>Software Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am Zaheen Shahriyar and I am a 24 year old aspiring coder residing in the Bronx. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Phone</h5>
            <p>(347) 749-8369</p>
            <h5>Email</h5>
            <p>zaheen.shahriyar@lc.cuny.edu</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


               <Education
                 startYear={2019}
                 endYear={2021}
                 schoolName="Lehman College"
                 schoolDescription="CUNY college located in 250 Bedford Park Boulevard West Bronx, NY 10468."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

           <Experience
              startYear={2016}
              endYear={2019}
              jobName="GNC"
              jobDescription="Educated and sold customers vitamins and supplements ranging from fish oils, probiotics, protein and multivitamins "
              />

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Duane Reade"
              jobDescription="Educated patients and counsel them on what medications they are taking.  Help solved third party errors and other health insurance problems "
              />

                <Experience
              startYear={2013}
              endYear={present}
              jobName="Century 21"
              jobDescription="Realtor assistant, did bookeeping and organize client information"
              />    

              
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="React"
                progress={40}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={30}
                  />
                    
                <Skills
                      skill="Javascript"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;