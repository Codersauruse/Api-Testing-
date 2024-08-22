import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { saveUser } from '../ApiService/ApiService';

function Login() {
  const [User, setUser] = useState({
    name: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const user = {
      name: e.target.elements.name.value,
      password: e.target.elements.password.value
    };

    setUser(user);

    // Save user data after setting the state
    try {
      const response = await saveUser(user);
      console.log(response.data);
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
