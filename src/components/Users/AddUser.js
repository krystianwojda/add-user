import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };
    return(
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input className="username" type="text"/>
                <label htmlFor="userage" >Age (years)</label>
                <input className="userage" type="number"/>
                <label htmlFor="userheight" >Height (cm)</label>
                <input className="userheight" type="number"/>
                <label htmlFor="userheight">Weight (kg)</label>
                <input className="userweight" type="number"/>
                <Button type="submit">Add user</Button>
            </form>
        </Card>
    );
};

export default AddUser;