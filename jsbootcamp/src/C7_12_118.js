import React, { Component } from "react"

class C7_12_118 extends Component{
   render(){

      const role = "host"
      const person = "Jools Holland"

      const team = {
         [role]: person
      }

      const key = Object.keys(team)
      const val = Object.values(team)

      return(
         <h1>{`The key is: ${key}, and the value is: ${val}`}</h1>
      )
   }
}

export default C7_12_118