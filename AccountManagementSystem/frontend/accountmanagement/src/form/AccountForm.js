import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function AccountForm() {
  const [FormData, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormdata({
      ...FormData,
      [name]: value
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(FormData);
    try {
      const response = await fetch("http://localhost:8080/api/account/postAccount", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(FormData)
      });

      if (!response.ok) {
        const badMessage = await response.text();
        console.log(`error message: ${badMessage}, ${response.status}`);
        return;
      }
      const goodMessage = await response.json();
      console.log("Account Created Successfully", goodMessage);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name-control" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  value={FormData.firstName}
                  onChange={handleOnChange}
                  className="rounded"
                />
              </Form.Group>
              <Form.Group controlId="LastName-control" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  name="lastName"
                  value={FormData.lastName}
                  onChange={handleOnChange}
                  className="rounded"
                />
              </Form.Group>
              <Form.Group controlId="email-control" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={FormData.email}
                  onChange={handleOnChange}
                  className="rounded"
                />
              </Form.Group>
              <Form.Group controlId="password-control" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={FormData.password}
                  onChange={handleOnChange}
                  className="rounded"
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100 rounded">Add Account</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}