import React, {useState} from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
    const [userList, setUserList] = useState([]);
    const addUserHandler = (uName, uAge, uHeight, uWeight) => {
        setUserList((prevUserList) => {
            return [...prevUserList, {
                name: uName,
                age: uAge,
                height: uHeight,
                weight: uWeight
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
