import React, {useState} from 'react';
import AddUser from './Componenets/Users/AddUser';
import UsersList from './Componenets/Users/UsersList';

function App() {

const [enterUserList, setEnteredUserList]= useState([]);

const onAddUserHandle = (uName , uAge) => {

  setEnteredUserList((preState)=>{

    return [...preState, {name: uName, age: uAge, id: Math.random().toString()}];
  });
};

  return (
    <React.Fragment>
      <AddUser onAddUsers={onAddUserHandle}/>
      <UsersList users={enterUserList}/>
    </React.Fragment>
  );
}

export default App;