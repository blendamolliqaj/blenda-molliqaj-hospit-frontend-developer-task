"use client"; // Mark this component as a client component
import styles from "../styles/UserList.module.scss"; 
import { FaEdit, FaTrash, FaEnvelope, FaPhone, FaUser } from "react-icons/fa";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className={styles.userListContainer}>
      {users.length === 0 ? (
        <p className={styles.noUsers}>No users available.</p>
      ) : (
        users.map((user) => (
          <div key={user.id} className={styles.userCard}>
            <div className={styles.userInfo}>
              <p className={styles.userField}>
                <FaUser className={styles.userFieldIcon} />
                {user.name}
              </p>
              <p className={styles.userField}>
                <FaEnvelope className={styles.userFieldIcon} />
                {user.email}
              </p>
              <p className={styles.userField}>
                <FaPhone className={styles.userFieldIcon} />
                {user.phone}
              </p>
            </div>
            <div className={styles.actions}>
              <button
                onClick={() => onEdit(user)} 
                className={styles.editButton}
              >
                <FaEdit className="mr-1" /> Edit
              </button>
              <button
                onClick={() => onDelete(user.id)}
                className={styles.deleteButton}
              >
                <FaTrash className="mr-1" /> Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
