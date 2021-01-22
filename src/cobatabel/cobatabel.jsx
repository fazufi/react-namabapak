import React, { Component } from 'react'
import "./cobatabel.css"

class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         students: [
            { id: 1, name: 'setren', age: 21, email: 'setren@email.cuy' },
            { id: 2, name: 'asep', age: 19, email: 'gak bisa bahasa inggris@email.com' },
            { id: 3, name: 'joni', age: 16, email: 'nisa@email.com' },
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
         ]
      }
   }

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
         <div>
            <h1>React Dynamic Table</h1>
         </div>
      )
   }
   renderTableData() {
    return this.state.students.map((student, index) => {
       const { id, name, age, email } = student //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{age}</td>
             <td>{email}</td>
          </tr>
       )
    })
 }

 render() {
    return (
       <div>
          <h1 id='title'>React Dynamic Table</h1>
          <table id='students'>
             <tbody>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
 renderTableHeader() {
  let header = Object.keys(this.state.students[0])
  return header.map((key, index) => {
     return <th key={index}>{key.toUpperCase()}</th>
  })
}

render() {
  return (
     <div>
        <h1 id='title'>React Dynamic Table</h1>
        <table id='students'>
           <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
           </tbody>
        </table>
     </div>
  )
}


}


export default Table //exporting a component make it reusable and this is the beauty of react
