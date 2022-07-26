import React, { Component } from 'react';
import Mock_Data from './Mock_Data.js';
import './MockData.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import iex from './iexapitoken.js'
import StockRow from "./StockRow.js"

const changeStyle = { 
    color: 'blue',
}
  
function getData(){
    const url = `${iex.base_url}/stock/${'googl'}/peers/?&token=${iex.api_token}`

    fetch(url).then((Response) => Response.json()).then((data) => {
        console.log(data)
        this.setState({
           data: data
        })
    })
}

function MarketData(){
  

    getData("")

    return (
     <div>
         <div className= "container">  
         <div className = "safe">   <h1> Vodka Importers We Work With: </h1>   </div>
           
             <div className= "para"> </div>
        
         <div className = "titledesign">  <h1></h1></div>
         
         <table className ="table">
        <thead>
            <tr className = "chartdesign">
               
                <th className = "publicsans">  </th>
                <th className = "publicsans"> </th>
                <th className = "publicsans">  </th>
                <th className = "publicsans">  </th>
                <th className = "publicsans"> </th>
                <th className = "publicsans"> </th>
                <th className = "publicsans">  </th>
                
              
            </tr>
        </thead>
        <tbody className = "tabledesign">
            
            < StockRow  ticker = "DEO" />
            <StockRow ticker = "STZ" />
            <StockRow ticker = "BUD" />
            <StockRow ticker = "MC" />
            <StockRow ticker = "WVVI" />
            <StockRow ticker = "SAM" />
            <StockRow ticker = "TAP" />
            <StockRow ticker = "ABEV" />
            <StockRow ticker = "VINE" />
            <StockRow ticker = "CCU" />
            <StockRow ticker = "FMX" />
            <StockRow ticker = "EAST" />
            <StockRow ticker = "NAPA" />
            <StockRow ticker = "VWE" />
            <StockRow ticker = "WVVI" />
            <StockRow ticker = "WBEV" />
       
        </tbody>

         </table>
         
         
         </div>
         <div className= "margins"> </div>
     </div>
   
    );

}
export default MarketData
