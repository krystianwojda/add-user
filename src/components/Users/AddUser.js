import React, {useState} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const [entredUserName, setEntredUserName] = useState('');
    const [entredUserAge, setEntredUserAge] = useState('');
    const [entredUserHeight, setEntredUserHeight] = useState('');
    const [entredUserWeight, setEntredUserWeight] = useState('');

    const userNameChangeHandler = (event) => {
        setEntredUserName(event.target.value);
    };
    const userAgeChangeHandler = (event) => {
        setEntredUserAge(event.target.value);
    };
    const userHeightChangeHandler = (event) => {
        setEntredUserHeight(event.target.value);
    };
    const userWeightChangeHandler = (event) => {
        setEntredUserWeight(event.target.value)
    };

    const addUserHandler = (event) => {
        event.preventDefault();
        setEntredUserName('');
        setEntredUserAge('');
        setEntredUserHeight('');
        setEntredUserWeight('');
    };
    return(
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input className="username" type="text" onChange={userNameChangeHandler} value={entredUserName}/>
                <label htmlFor="userage" >Age (years)</label>
                <input className="userage" type="number" onChange={userAgeChangeHandler} value={entredUserAge}/>
                <label htmlFor="userheight" >Height (cm)</label>
                <input className="userheight" type="number" onChange={userHeightChangeHandler} value={entredUserHeight}/>
                <label htmlFor="userweight">Weight (kg)</label>
                <input className="userweight" type="number" onChange={userWeightChangeHandler} value={entredUserWeight}/>
                <Button type="submit">Add user</Button>
            </form>
        </Card>
    );
};

export default AddUser;