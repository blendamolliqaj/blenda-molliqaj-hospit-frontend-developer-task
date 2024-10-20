"use client"; // Mark this component as a client component
import { useState, useEffect } from "react";
import styles from "../styles/UserForm.module.scss";
import { FaUserPlus, FaEdit } from "react-icons/fa";

const UserForm = ({ onSubmit, editingUser, setEditingUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
      setPhone(editingUser.phone);
    } else {
      setName("");
      setEmail("");
      setPhone("");
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, phone };
    onSubmit(user);
    setEditingUser(null); 
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.formHeading}>
        {editingUser ? "Edit User" : "Add User"}
      </h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
        className={styles.inputField}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className={styles.inputField}
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        required
        className={styles.inputField}
      />
      <button
        type="submit"
        className={`${styles.submitButton} ${
          editingUser ? styles.updateButton : styles.addButton
        }`}
      >
        {editingUser ? (
          <FaEdit className="mr-2" />
        ) : (
          <FaUserPlus className="mr-2" />
        )}
        {editingUser ? "Update User" : "Add User"}
      </button>
    </form>
  );
};

export default UserForm;
