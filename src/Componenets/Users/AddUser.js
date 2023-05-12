import React, { useState } from "react";
import Card from '../UI/Card'
import ErrorModel from "../UI/ErrorModel";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState()

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const addUserHandle = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter the correct inputs"
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid Age",
                message: "Entered age must be greater than 1"
            })
            return;
        }
        props.onAddUsers(enteredUsername, enteredAge);

        setEnteredAge('');
        setEnteredUsername('');
        console.log('Submitted')
    }

    const offErrorHandle = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModel title={error.title} message={error.message} onConfirm= {offErrorHandle}>
            </ErrorModel>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandle}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
                    <Button type="submit"> Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}
export default AddUser;