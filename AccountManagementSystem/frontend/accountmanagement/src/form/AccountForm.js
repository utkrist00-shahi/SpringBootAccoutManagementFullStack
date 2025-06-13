
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


export default function AccountForm() {

const [FormData, setFormdata] = useState({
firstName: "",
lastName:"",
email:"",
password:""
});

const handleOnChange = (event) => {
const {name, value} = event.target;
setFormdata({
...FormData,
[name]:value
});
}

const navigate = useNavigate();

const handleSubmit = async (e)=> {
e.preventDefault();
console.log(FormData);
try{
  const response = await fetch("http://localhost:8080/api/account/postAccount",{
  method: "POST",
  headers: {"Content-Type" : "application/json"},
  body:JSON.stringify(FormData)
  });

  if(!response){
    const badMessage = await response.text();
    console.log(`error message : ${badMessage},response.status()`);
  }
  const goodMessage = await response.json();
  console.log("Account Created Successfully", goodMessage);
  navigate("/");

}catch(error){
  console.log(error.message);
}
}

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name-control">
        <Form.Control
         type = "text"
         placeholder="enter your first name"
         name = "firstName"
         value = {FormData.firstName}
         onChange = {handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="LastName-control">
        <Form.Control
         type = "text"
         placeholder="enter your last name"
         name = "lastName"
         value = {FormData.lastName}
         onChange = {handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="email-control">
        <Form.Control
         type = "email"
         placeholder="enter your email name"
         name = "email"
         value = {FormData.email}
         onChange = {handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="password-control">
        <Form.Control
         type = "password"
         placeholder="enter your password name"
         name = "password"
         value = {FormData.password}
         onChange = {handleOnChange}
        />
      </Form.Group>
      <Button type = "submit"> Add here </Button>

      </Form>
    </>
  )
}
