import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Topbar = ({ loggedInUser }) => {
  return (
    <div
      className="d-flex justify-content-between align-items-center px-4"
      style={{
        backgroundColor: "#007bff",
        color: "#fff",
        height: "40px",
        fontSize: "14px",
      }}
    >
      <div>
        Welcome to Medilink
        {loggedInUser ? (
          <>
            , <b>{loggedInUser.toUpperCase()}</b>
          </>
        ) : (
          ", User"
        )}
      </div>
      <div className="d-flex gap-4 align-items-center">
        <div className="d-flex align-items-center gap-2">
          <FaPhoneAlt />
          <span>(910) 870 - 6780</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <FaEnvelope />
          <span>info@domain.com</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
