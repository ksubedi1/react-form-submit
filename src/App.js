import { useState, useRef } from 'react';
import './App.css';

 export default function App() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();


    return (
      <div>
        <label htmlFor="email">Your email address</label><br/>
        <input type="text" name='email' ref={emailRef} /><br/>

        <label htmlFor="first-name">Your firstname : </label><br/>
        <input type="text" name='first-name' ref={firstNameRef} /><br/>

        <label htmlFor="last-name">Your last name : </label><br/>
        <input type="text" name='last-name' ref={lastNameRef} />
        <br/>
        <br/>

        <button onClick={function (){
          setEmail(emailRef.current.value);
          setFirstName(firstNameRef.current.value);
          setLastName(lastNameRef.current.value);
        }}
        >
          submit the form
        </button>
        <br/>
        <br/>
      
        <div>
          Your email adress is : {email} <br/>
          Your first name : {firstName} <br/>
          Your last name : {lastName} <br/>
        </div>
        
      </div>
    );
  }