import React, {useState} from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
    const [userList, setUserList] = useState([]);
    const addUserHandler = (uName, uSurname, uAge, uHeight, uWeight) => {
        setUserList((prevUserList) => {
            return [...prevUserList, {
                name: uName,
                surname: uSurname,
                age: uAge,
                height: uHeight,
                weight: uWeight,
                id: Math.random().toString()
            }];
        });
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler}></AddUser>
            <UserList users={userList}></UserList>
        </div>
    );
}

export default App;
