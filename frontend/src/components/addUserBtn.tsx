import { useState } from "react";
import AddUser from "./addUser";

export default function AddUserBtn() {
  const [showAddUser, setShowAddUser] = useState(false);
  return (
    <div>
      <button className="cursor-pointer bg-blue-600 rounded-sm px-2 py-1 border-blue-800" onClick={() => setShowAddUser(true)}>
        Add User
      </button>
      {showAddUser && (
        <AddUser onClose={() => setShowAddUser(false)} />
      )}
    </div>
  );
}