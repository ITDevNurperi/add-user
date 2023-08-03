import React, { useState } from 'react';
import Card from './Ui/Card';
import Button from './Ui/Button';
import classes from "./UserList.module.css"
import DeleteModal from './Ui/DeleteModal';

const UserList = (props) => {
const [filteredUsers, setFilteredUsers] = useState([])
const [modul, setModul] = useState(null)

    const deleteHandler = (e) => {
        setModul({
            title: "Удаление пользователя!",
            message: "Вы дейстивительно хотите удалить?"
        })
        const buttonId = e.target.id
        console.log(buttonId);
        const users = props.users.filter((el) => {
            return el.id !== buttonId
        })
        setFilteredUsers([...users])
       
    }

    const confirmHandler = (e) => {
        if (e.target.type === "button") {
            props.onDelete(filteredUsers)
            console.log(filteredUsers);
        }
        setModul(null)
    }

    const notHandler = () => {
        setModul(null)
    }


    return (
        <React.Fragment>
            {modul && <DeleteModal title={modul.title} message={modul.message} onClick={confirmHandler} notHandler={notHandler} />}
            <Card className={classes.users}>
                <ul>
                    {props.users.map(user => (
                        <li key={user.id}>{user.username} {user.age}
                            <Button id={user.id} onClick={deleteHandler}>delete</Button>
                        </li>
                    ))}
                </ul>
            </Card>
        </React.Fragment>

    );
};

export default UserList;