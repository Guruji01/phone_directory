import React, {Component} from 'react';

class App extends Component
{
render() {
  let x = 2;
  let y = 4;
  return (
 <div>
    {/*<div>
         Phone Directory
    </div>

    <button> Clic me ! </button>
      
    <div>
        <span> Name</span><br/>
        <span> Phone </span>
    </div> */}
  

    <lable htmlFor = "name">Name</lable>
    <input id="name" type = "text" placeholder="Type Here"
     defaultValue ="Jack"/> <br/>
      
        <input id="name" type = "text" placeholder="Type Here"
        defaultValue ={x+y}/>
          </div> 
  );
}
}

export default App;
