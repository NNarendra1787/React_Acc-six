import React, { useContext } from "react";
import ContextData from "./ContextData";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Table() {
  const DataContext = useContext(ContextData);
  const navi = useNavigate();

  return (
    <div>
      <Navbar />
      <div id="topup">
        <h1>Student Details</h1>

        <button
          onClick={() => {
            navi("/addnewone");
          }}
          id="btn"
        >
          Add Student
        </button>
      </div>

      <table className="myTable">
        <thead>
          <tr>
            <th className="name">Name</th>
            <th className="re">Age</th>
            <th className="re">Cource</th>
            <th className="re">Batch</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {DataContext.entries.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td className="cha">{item.age}</td>
              <td className="ch">{item.cource}</td>
              <td className="chb">{item.batch}</td>
              <td className="ch">
                <Link to="/editStud" state={{ data: index }}>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
