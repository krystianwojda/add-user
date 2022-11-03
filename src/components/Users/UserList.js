import React from "react";

import Card from "../UI/Card";
import classes from "./UserList.module.css";
import card from "../UI/Card";

const UserList = (props) => {
    return(
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} {user.surname} {user.age} years {user.height} cm {user.weight} kg
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UserList;