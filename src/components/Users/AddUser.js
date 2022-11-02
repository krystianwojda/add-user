import React from "react";

const AddUser = props => {
    return(
        <form>
            <label htmlFor="username">Username</label>
            <input className="username" type="text"/>
            <label htmlFor="userage" >Age (years)</label>
            <input className="userage" type="number"/>
            <label htmlFor="userheight" >Height (cm)</label>
            <input className="userheight" type="number"/>
            <label htmlFor="userheight">Weight (kg)</label>
            <input className="userweight" type="number"/>
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUser;