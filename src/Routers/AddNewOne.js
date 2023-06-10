import React, { useContext } from 'react'
import ContextData from './ContextData'
import { useNavigate } from 'react-router-dom'

function AddNewOne() {
    const DataContext = useContext(ContextData);
    const nav = useNavigate();

    const newObj = {
      name: "",
      age: "",
      cource: "",
      batch: "",
      change: ""
    }

    const handelWithCare = (e)=>{
      newObj[e.target.name]=e.target.value;
    }

    const Complet = ()=>{
      DataContext.entries.push(newObj);
      nav(-1);
    }
    const Comeback = ()=>{
      nav(-1);
    }
    
    return (
      <div className='myForm'>
        <div className='formEle'>  
          <label >Name:
            <input name="name" onChange={handelWithCare} placeholder='Enter Your Name'/>
          </label>
          <label >Age:
            <input name="age" onChange={handelWithCare} placeholder='Enter Your Age'/>
          </label>
          <label >Cources:
            <input name="cource" onChange={handelWithCare} placeholder='Enter Your Cources'/>
          </label>
          <label >Batch:
            <input name="batch" onChange={handelWithCare} placeholder='Enter Your Batch'/>
          </label>
        </div>
        <div className='myButton'>
          <button onClick={Comeback} id='bbbtn'>Back</button>
          <button onClick={Complet} id='bbtn'>Submit</button>
        </div>
    </div>
  )
}

export default AddNewOne
