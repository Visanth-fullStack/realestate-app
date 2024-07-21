import React, { useEffect, useState } from "react";
import {
  Table,
  TableRow,
  TableCell,
  EditIcon,
  DeleteIcon,
  ContainerText,
  Wrapper,
  Container,
  TableHead,
  TableHeader,
} from "./UserListing.styled";
import { getUsers } from "../../services/api";

const UserListing = ({ menu, setMenu, setUserProperties, setUser }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUsers(menu)
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    const user = data.filter((user) => user._id === id)
    setUser(user[0]._id)
    setUserProperties(user[0].properties)
    setMenu('listings')
  }

  return (
    <Wrapper>
      <Container>
        <ContainerText>
          Your Customers
        </ContainerText>
        <Table>
          <TableHeader>
            {menu === "customer" && (
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Properties</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            )}
            {menu === "admin" && (
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Contact No.</TableHead>
              </TableRow>
            )}
          </TableHeader>
          <tbody>
            {menu === 'customer' && data && data.length && data.map((user) => (
              <TableRow key={user.id}>
                <TableCell>Customer 1</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.properties.length}</TableCell>
                <TableCell>
                  <EditIcon onClick={() => handleEdit(user._id)} />
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
            {menu === 'admin' && data && data.length && data.map((user) => (
              <TableRow key={user.id}>
                <TableCell>Admin 1</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>+971 123456789</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Container>
    </Wrapper>
  );
};

export default UserListing;
