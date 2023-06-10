import React, { useContext } from "react";
import ContextData from "./ContextData";
import { useLocation, useNavigate } from "react-router-dom";

// use of uselocation .state then we can access state object which store in perticuler location and the state object we can pass additional data with in different routs and data

function Edit() {
  const DataContext = useContext(ContextData);
  const nav = useNavigate();

  const locat = useLocation().state.data;

  const currData = {
    name: DataContext.entries[locat].name,
    age: DataContext.entries[locat].age,
    cource: DataContext.entries[locat].cource,
    batch: DataContext.entries[locat].batch,
  };

  const handelWithCare = (e) => {
    currData[e.target.name] = e.target.value;
  };

  const Update = () => {
    DataContext.entries[locat] = currData;
    nav(-1);
  };

  const Comeback = () => {
    nav(-1);
  };

  return (
    <div className="myForm">
      <div className="formEle">
        <label>
          Name:
          <input
            name="name"
            onChange={handelWithCare}
            placeholder={DataContext.entries[locat].name}
          />
        </label>
        <label>
          Age:
          <input
            name="age"
            onChange={handelWithCare}
            placeholder={DataContext.entries[locat].age}
          />
        </label>
        <label>
          Cource:
          <input
            name="cource"
            onChange={handelWithCare}
            placeholder={DataContext.entries[locat].cource}
          />
        </label>
        <label>
          Batch:
          <input
            name="batch"
            onChange={handelWithCare}
            placeholder={DataContext.entries[locat].batch}
          />
        </label>
      </div>
      <div className="myButton">
        <button onClick={Comeback} id="bbbtn">
          Cancle
        </button>
        <button onClick={Update} id="bbtn">
          Update
        </button>
      </div>
    </div>
  );
}

export default Edit;
