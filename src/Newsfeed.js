import React, { useState } from 'react';
import './Newsfeed.css'
import LineGraph from './LineGraph'
import TimeLine from './TimeLine'
import Chip from './Chip';


function Newsfeed() {
    const [ popularTopics,setTopics ]= useState([
        "Technology",
        "Top Movies",
        "Upcoming Earnings",
        "Crypto",
        "Cannabis",
        "Healthcare Supplies",
        "Index ETFs",
        "Technology",
        "China",
        "Pharma",
      
    ]);
    return (
        <div className="newsfeed">

        <div className="newsfeed__container">

        <div className="newsfeed_chartSections">

        <div className="newsfeed__portfolio">
            {/* <h1>$114,656</h1>
            <p>+44.63(+0.04%) Today </p> */}
            <h1> 45,079.55 </h1>
            <p1> +446.90 (1.00%) Today</p1>
            </div>
            <div className="newsfeed__chart">
              <LineGraph  />
              <TimeLine />
              </div>
              </div>
           <div className="newsfeed__buying__section">
               <h2> Buying Power </h2>
               <h2>294.7</h2>
           </div>
           <div className="newsfeed__market__section">
               <div className="newsfeed__market__box">
               <p> Markets Closed</p>
               <h1> Merry Christmas </h1>

               </div>
            </div>
            <div className="newsfeed__popularlists__section">
          <div className="newsfeed__popularlists__intro">
            <h1>Popular lists</h1>
            <p>Show More</p>
          </div>
          <div className="newsfeed_popularlists_badges">
               

         { popularTopics.map((topics) => (
              <Chip 
                className="topic__badge"
                variant="outlined"
                label={topics}
              />
            ))}
          </div>
        </div>
        
        </div>

        </div>
            
    );
}

export default Newsfeed;