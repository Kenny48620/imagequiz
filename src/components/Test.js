


import React, { useState, useEffect  } from 'react';

import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'

function Test() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(10);


  // const [check, setCheck] = useState(0);
   const [score, setScore] = useState(0);



  useEffect(()=>{
   	document.title = `You clicked ${count} times`;

   	document.getElementById('scoreText').innerText= 'Your current score: '+ count;
  })

  const countIncHandler = (e)=>{

  		setCount(count+1)
  }
  const countDecHandler2 = (e) =>{
  		setCount(count-1);
  }

  // const scoreCount =(e)=>{

  // 		let select = e.target.getAttribute('value');

  // 		if (select === 'Male'){
  // 			setScore(score+1)
  // 		}
  // }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={countIncHandler}>
        Click me
      </button>
      <div></div>
      <button onClick={()=>setCount(count-1)}>
        Dec
      </button>


      	<p id="scoreText"></p>
      	<p >Your current score:  {count}; </p>
    </div>
  );
}

     	// <div >
      //   	<input type="radio" value="Male" name="gender" checked ={check===0} onClick={()=>setCheck(0)} onChange={scoreCount} /> Male
      //   	<input type="radio" value="Female" name="gender" checked ={check===1} onClick={()=>setCheck(1)} onChange={scoreCount}/> Female
      //   	<input type="radio" value="Other" name="gender" checked ={check===2} onClick={()=>setCheck(2)} onChange={scoreCount}/> Other
      // 	</div>



export default Test;