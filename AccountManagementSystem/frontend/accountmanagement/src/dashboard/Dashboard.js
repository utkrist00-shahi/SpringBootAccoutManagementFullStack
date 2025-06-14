import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function Dashboard() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/account/view");
        const data = await response.json();
        setAccounts(data);
      } catch (error) {
        console.error("Error fetching accounts", error.message);
      }
    };
    fetchAccounts();
  }, []);

  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h1 className="mb-4">Employees</h1>
          <div className="card shadow-sm">
            <Table striped bordered hover className="mb-0">
              <thead className="table-primary">
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((account) => (
                  <tr key={account.id}>
                    <td>{account.firstName}</td>
                    <td>{account.lastName}</td>
                    <td>{account.email}</td>
                    <td>{account.password}</td>
                    <td>
                      <Button variant="success" className="me-2 rounded">Update</Button>
                      <Button variant="danger" className="rounded">Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}