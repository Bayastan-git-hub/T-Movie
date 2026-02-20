import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import "./Profile.css";

function Profile() {
  const { user, role, loading } = useContext(AuthContext);

  if (loading) return <div className="profile-container">Loading...</div>;
  if (!user) return <h2 className="profile-container">Please login</h2>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-title">Profile</div>

        <div className="profile-row">
          Email: <span className="profile-value">{user.email}</span>
        </div>

        <div className="profile-row">
          Role: <span className="profile-value">{role}</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;