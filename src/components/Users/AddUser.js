import React, {useState} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [entredUserName, setEntredUserName] = useState('');
    const [entredSurname, setEntredSurname] = useState('');
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
    const userSurnameChangeHandler = (event) => {
        setEntredSurname(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if (entredUserName.trim().length === 0 || entredSurname.trim().length === 0 || entredUserAge.trim().length === 0 || entredUserHeight.trim().length === 0 || entredUserWeight.trim().length === 0) {
            return;
        }
        if (+entredUserAge < 1 || +entredUserHeight < 1 || +entredUserWeight < 1) {
            return;
        }
        props.onAddUser(entredUserName, entredSurname, entredUserAge, entredUserHeight, entredUserWeight);
        setEntredUserName('');
        setEntredSurname("");
        setEntredUserAge('');
        setEntredUserHeight('');
        setEntredUserWeight('');
    };
    return(
        <div>
            <ErrorModal title={"Wystąpił problem"} message={"Coś poszło nie tak, spóbuj ponownie!"}></ErrorModal>
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input className="username" type="text" onChange={userNameChangeHandler} value={entredUserName}/>
                    <label htmlFor="userSurname">Surname</label>
                    <input className="userSurname" type="text" onChange={userSurnameChangeHandler} value={entredSurname}/>
                    <label htmlFor="userage" >Age (years)</label>
                    <input className="userage" type="number" onChange={userAgeChangeHandler} value={entredUserAge}/>
                    <label htmlFor="userheight" >Height (cm)</label>
                    <input className="userheight" type="number" onChange={userHeightChangeHandler} value={entredUserHeight}/>
                    <label htmlFor="userweight">Weight (kg)</label>
                    <input className="userweight" type="number" onChange={userWeightChangeHandler} value={entredUserWeight}/>
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;