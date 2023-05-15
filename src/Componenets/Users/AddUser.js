import React, { useRef, useState } from "react";
import Card from '../UI/Card'
import ErrorModel from "../UI/ErrorModel";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    // const [enteredUsername, setEnteredUsername] = useState("");
    // const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState()

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // }

    // const ageChangeHandler = (event) => {

    //     setEnteredAge(event.target.value); 
    // }

    const addUserHandle = (event) => {
        event.preventDefault();
        const enterUsername= nameInputRef.current.value;
        const enterAge= ageInputRef.current.value;

        console.log(enterAge);
        console.log(enterUsername);
        if (enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter the correct inputs"
            })
            return;
        }
        if (+enterAge < 1) {
            setError({
                title: "Invalid Age",
                message: "Entered age must be greater than 1"
            })
            return;
        }
        props.onAddUsers(enterUsername, enterAge);

        nameInputRef.current.value="";
        ageInputRef.current.value='';
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
                    <input id="username" type="text" ref={nameInputRef}></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number"  ref={ageInputRef}></input>
                    <Button type="submit"> Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}
export default AddUser;