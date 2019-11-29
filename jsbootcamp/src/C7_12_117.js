import React, { Component } from "react"

class C7_12_117 extends Component{
   render(){

      const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5]

      const getStats = (arr) => {
         const max = Math.max(...arr)
         const min = Math.min(...arr)
         const sum = arr.reduce((sum, r) => sum + r)
         const avg = sum / arr.length

         return {
            max,
            min,
            sum,
            avg
         }
      }

      const stats = getStats(reviews)

      const { max, min, sum, avg } = stats

      return(
         <h1> { `max: ${max}, min: ${min}, sum: ${sum}, avg: ${avg}` } </h1>
      )
   }
}

export default C7_12_117