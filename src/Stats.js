import React, { useEffect, useState } from 'react';
import './Stats.css';
import axios from 'axios';
import StatsRow from './StatsRow'
import {db} from './firebase'
const TOKEN = "bvbddn748v6v15ep4s30"
const BASE_URL="https://finnhub.io/api/v1/quote"

function Stats() {
  const [stockData, setstockData] = useState([])
  const [myStocks, setmyStocks] = useState([])
  const getMyStocks = () => {
    db
    .collection('myStocks')
    .onSnapshot(snapshot => {
        let promises = [];
        let tempData = []
        snapshot.docs.map((doc) => {
          promises.push(getStocksData(doc.data().ticker)
          .then(res => {
            tempData.push({
              id: doc.id,
              data: doc.data(),
              info: res.data
            })
          })
        )})
        Promise.all(promises).then(()=>{
            // console.log(tempData);
          setmyStocks(tempData);
        })
    })
  }

  const getStocksData = (stock)=> {
      return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error)=> {
          console.error("Error",error.message);
      });
      

  };

    useEffect(()=> {
        let tempstocksData =[]
        const stocksList =["AAPL","MSFT","TSLA","FB","BABA","UBER","DIS","SBUX","CAV"];
         let promises =[];
         getMyStocks();
         stocksList.map((stock)=> {
             promises.push(getStocksData(stock)
             .then((res)=> {
                 //console.log(res);
                   tempstocksData.push ({
                      name:stock,
                      ...res.data
                 });
             })
             )
         });
          
                   Promise.all(promises).then(()=> {
                       setstockData(tempstocksData)
                       console.log(tempstocksData);
                   })
    },  [] ) 

    return (
        <div className="stats">
         <div className="stats__container">
             <div className="stats__header">
                 <p>Stocks</p>
             </div>
             <div className="stats__content">
                 <div className="stats__rows">
                 {myStocks.map((stock) => (
              <StatsRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                shares={stock.data.shares}
                price={stock.info.c}
              />
            ))}
    {/* for out current stocks */}
                 </div>
             </div>
             <div className="stats__header">
             <p>List</p>
             </div>
             <div className="stats__content">
                 <div className="stats__rows"> 
        {stockData.map((stock)=> (
             <StatsRow 
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                price={stock.c}
             />
        ) ) }
     </div>
         </div>
                </div>
                 </div>
                   
    );
}

export default Stats;