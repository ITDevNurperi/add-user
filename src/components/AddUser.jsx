import React, { useState } from 'react';
import Card from './Ui/Card';
import Button from './Ui/Button';
import ErrorModal from './Ui/ErrorModal';
import classes from "./AddUser.module.css"

const AddUser = (props) => {

    const [username, setUserName] = useState("")
    const [age, setAge] = useState("")
    const [error, setError] = useState(null)

    const userNameChangeHandler = (e) => {
        setUserName(e.target.value)
    }

    const ageChangeHandler = (e) => {
        setAge(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (username.trim().length === 0 || age.length == 0) {
            setError({
                title: "Пустое значение",
                message: "вы не можете отправить форму пустым"
            })
            return
        }

        if (age < 5) {
            setError({
                title: "не подходит возраст",
                message: "ты ещо маленький"
            })
            return
        }

        props.onAdd(username, age)
        setUserName("")
        setAge("")
    }

    const closeModalHendler = () => {
        setError(null)
    }


    return (
        <React.Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onClick={closeModalHendler}/>}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="name">User name</label>
                    <input value={username} id="name" type="text" onChange={userNameChangeHandler} />
                    <label htmlFor="age">Age</label>
                    <input value={age} id="age" type="number" onChange={ageChangeHandler} />
                    <Button type='submit'>Add user</Button>
                </form>
            </Card>
        </React.Fragment>
    );
};

export default AddUser;