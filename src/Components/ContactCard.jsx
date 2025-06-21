import React from "react";
import { Link } from "react-router-dom";
import user from "../Components/images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contacts;

  return (
    <div className="container mt-3 w-75">
      <div className="d-flex flex-wrap align-items-center justify-content-between p-2 border rounded shadow-sm">
        <div className="d-flex align-items-center flex-wrap">
          <img src={user} alt="user" style={{ width: "40px", margin: "10px" }} />
          <Link 
            to={`/contact/${id}`} 
            state={{ contact: { id, name, email } }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>
              <strong>{name}</strong>
              <div className="text-muted" style={{ fontSize: "14px" }}>{email}</div>
            </div>
          </Link>
        </div>

        <div className="mt-2 mt-md-0 text-end">
          <i
            className="fa-solid fa-trash"
            style={{ color: "red", cursor: "pointer", margin:"6px" }}
            onClick={() => { props.clickHandler(id) }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
