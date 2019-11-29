import React, { Component } from "react"

class C7_12_117 extends Component{
   render(){

      const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5]

      const getStats = (arr) => {
         const max = Math.max(...arr)
         const min = Math.min(...arr)
         const sum = arr.reduce((sum, r) => sum + r)
         const avg = sum / arr.length
         const ran = Math.random()
         const pi  = Math.PI

         return {
            max,
            min,
            sum,
            avg,
            ran,
            pi
         }
      }

      const stats = getStats(reviews)

      const { max, min, sum, avg } = stats
      const key = Object.keys(stats)
      const val = Object.values(stats)
      const display = []

      for(var i = 0; i < key.length; i++){
         display.push(<h1>{`${key[i]}: ${val[i]}`}</h1>)
      }

      return(
         // <h1> { `max: ${max}, min: ${min}, sum: ${sum}, avg: ${avg}` } </h1>
         // <div>
         //    <h1>{`${key[0]}: ${val[0]}`}</h1>
         //    <h2>{`${key[1]}: ${val[1]}`}</h2>
         //    <h3>{`${key[2]}: ${val[2]}`}</h3>
         //    <h4>{`${key[3]}: ${val[3]}`}</h4>
         // </div>
         <div>
            {display}
         </div>
      )
   }
}

export default C7_12_117