import Card from "../UI/Card";
import './AddUser.css';
import Button from "../UI/Button"
import ErrorModal from "../UI/ErrorModal";
import { useRef, useState } from "react";

const AddUser=(props)=>
{
 
  const nameRef=useRef();
  const ageRef=useRef();

  const [error,SetError]=useState('');


    const addUserHandler=(event)=>
    {
            event.preventDefault();
            const enteredName = nameRef.current.value;
            const enteredUserAge = ageRef.current.value;
            if(enteredName.trim().length===0 )
            {
              SetError({
                title:"Error",
                message:"You have entered an invalid Username"
              })
              return;
            }
            if(+enteredUserAge<1 || enteredUserAge.trim().length===0 )
            {
              SetError({
                title:"Error",
                message:"You have entered an invalid Age"
              })
              return;
            }
            //props.onAddUser will point to parent function
            props.onAddUser(enteredName,enteredUserAge)
            nameRef.current.value='';
            ageRef.current.value='';
    }

    const setErrorHandler=()=>
    {
      SetError(null)
    }

        return (
          <>{ error && <ErrorModal title={error.title} message={error.message}  onConfirm={setErrorHandler}/>}
          <Card className="inputt">
            <form onSubmit={addUserHandler}>
              <label htmlFor="username">User Name</label>
              <input id="username" type="text" ref={nameRef} />
              <label htmlFor="age">Age (Years)</label>
              <input id="age" type="number" ref={ageRef} />

              <Button type="submit">Submit</Button>
            </form>
          </Card></>
        )
}

export default AddUser;