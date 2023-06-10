import { useState } from 'react';
import './App.css';
import Home from './Routers/Home';
import Contact from './Routers/Contact';
import AddNewOne from './Routers/AddNewOne';
import Table from './Routers/Table';
import { Route, Routes } from 'react-router-dom';
// import Student from './Routers/Student';
import ContextData from './Routers/ContextData';
import Edit from './Routers/Edit';

function App() {

  const [data, setData] = useState([{name: "John", age: "26",cource: "MERN", batch: "October"},
  {name: "Doe", age: "25",cource: "MERN", batch: "November"},
  {name: "Biden", age: "26",cource: "MERN", batch: "September"},
  {name: "Barar", age: "22",cource: "MERN", batch: "September"},
  {name: "Christ", age: "23",cource: "MERN", batch: "October"},
  {name: "Elent", age: "24",cource: "MERN", batch: "November"}]);
  
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/Student' element={
          <ContextData.Provider value={{ entries: data, Update: setData }}>
            <Table />
          </ContextData.Provider>
        } />
        <Route path='/addnewone' element={
          <ContextData.Provider value={{ entries: data, Update: setData }}>
            <AddNewOne />
          </ContextData.Provider>
        } />

        <Route path='/editStud' element={
          <ContextData.Provider value={{ entries: data, Update: setData }}>
            <Edit />
          </ContextData.Provider>}/>

        <Route path='/Contact' element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
