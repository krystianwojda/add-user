import React from "react";
import Card from "../UI/Card";

const AddUser = props => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };
    return(
        <Card>
            <form onSubmit={addUserHandler}>
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
        </Card>
    );
};

export default AddUser;