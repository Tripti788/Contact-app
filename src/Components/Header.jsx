import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const [Data, setData] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value, 
    });
  };

  const add = (e) => {
    e.preventDefault(); // Prevents page reload

    if (Data.name.trim() === "" || Data.email.trim() === "") {
      alert("Enter value first!!");
      return;
    }
    props.addContactHandler(Data);
    setData({ name: "", email: "" });

    navigate("/");
    // Clear input fields after successful submission
   
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center mb-4">Contact Manager</h2>
      <form className="w-50 mx-auto p-5 border rounded shadow" onSubmit={add}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter name"
            value={Data.name} 
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
            value={Data.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add
        </button>
      </form>
    </div>
  );
};

export default Header;
