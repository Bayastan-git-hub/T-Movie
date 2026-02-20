import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import "./Admin.css";

function Admin() {
  const { user, role, loading } = useContext(AuthContext);

  if (loading) return <div className="admin-container">Loading...</div>;
  if (!user) return <h2 className="admin-container">Access denied</h2>;
  if (role !== "admin") return <h2 className="admin-container">Not authorized</h2>;

  return <div className="admin-container">Admin Panel</div>;
}

export default Admin; 