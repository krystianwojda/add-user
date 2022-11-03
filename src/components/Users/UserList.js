import React from "react";

import "./UserList.module.css";

const UserList = (props) => {
    return(
        <ul>
            {props.users.map((user) => (
                <li>
                    {user.name}
                    ({user.age} years old)
                    ({user.height} cm)
                    ({user.weight} kg)
                </li>
            ))}
        </ul>
    );
};

export default UserList;