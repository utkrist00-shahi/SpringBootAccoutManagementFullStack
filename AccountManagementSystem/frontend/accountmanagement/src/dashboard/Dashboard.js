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
        console.error("error fetching accounts", error.message);
      }
    };
    fetchAccounts();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Employees</h1>
          <Table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>email</th>
                <th>password</th>
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
                    <Button>Update</Button>{" "}
                    <Button>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}