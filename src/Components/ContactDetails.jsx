import React from 'react';
import user from "../Components/images/user.png";
import { useLocation, Link } from 'react-router-dom';

const ContactDetails = () => {
    const location = useLocation();
    const contact = location.state?.contact; // ✅ Check if state exists

    // 🔹 Handle case when contact is undefined
    if (!contact) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="text-center">
                    <h2>No contact details available.</h2>
                    <Link to="/" className="btn btn-primary mt-3">Go Back</Link>
                </div>
            </div>
        );
    }

    return (
       < div>
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "20rem" }}>
                <img src={user} className="card-img-top" alt="User" />
                <div className="card-body">
                    <h5 className="card-title">{contact?.name}</h5> 
                    <p className="card-text">{contact?.email}</p>  
                </div>
            </div>
        </div>
                    {/* <Link to="/" className="btn btn-primary">Back to Contacts</Link> */}
                    <div class="d-grid  col-3  mx-auto  position-relative" style={{ top:" -80px"}}>
  <button class="btn btn-primary" type="button"><Link to="/" className="btn btn-primary">Back to Contacts</Link></button>
</div>
                    </div>

    );
};

export default ContactDetails;

//  JSON Server stores data in a simple JSON file (db.json).

