"use client"; // Mark this component as a client component

import { useEffect, useState } from "react";
import UserForm from "./components/UserForm"; 
import UserList from "./components/UserList"; 
import {
  fetchUsers,
  addUser,
  updateUser,
  deleteUser,
} from "./services/userService"; 

export default function Page() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);


  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users"));
  }, []);


  const handleAddOrUpdateUser = (user) => {
    if (editingUser) {
      updateUser(editingUser.id, user)
        .then(() => {
          setUsers((prevUsers) =>
            prevUsers.map((u) =>
              u.id === editingUser.id ? { ...u, ...user } : u
            )
          );
          alert("User updated successfully");
        })
        .catch(() => alert("Error updating user"));
    } else {
      addUser(user)
        .then((newUser) => {
          setUsers((prevUsers) => [...prevUsers, newUser]);
          alert("User added successfully");
        })
        .catch(() => alert("Error adding user"));
    }
    setEditingUser(null);
  };


  const handleDeleteUser = (id) => {
    deleteUser(id)
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
        alert("User deleted successfully");
      })
      .catch(() => alert("Error deleting user"));
  };

  return (
    <div className="container mx-auto p-6">
      {/* User Form */}
      <UserForm
        onSubmit={handleAddOrUpdateUser}
        editingUser={editingUser}
        setEditingUser={setEditingUser}
      />

      {/* User List */}
      <UserList
        users={users}
        onEdit={setEditingUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
}
