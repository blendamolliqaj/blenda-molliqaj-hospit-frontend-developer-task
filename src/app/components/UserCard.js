import { FaEdit, FaTrash } from "react-icons/fa";

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex justify-between items-center">
      <div>
        <p className="font-bold text-lg">{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => onEdit(user)}
          className="bg-blue-500 p-2 rounded text-white"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="bg-red-500 p-2 rounded text-white"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
