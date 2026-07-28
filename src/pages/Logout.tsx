import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import { useAppDispatch } from "../hooks";
import { removeAccessToken } from "../utils/auth";
import { toast } from "react-toastify";

const Logout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    removeAccessToken();
    toast.success("Logout Successfully");
    navigate("/login", { replace: true });
  };

  return (
    <>
      <button onClick={handleLogout}> Logout </button>
    </>
  );
};

export default Logout;
