import AppRouter from "./routes/AppRouter";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { restoreSession } from "./features/auth/authSlice";
import { getAccessToken } from "./utils/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let token = getAccessToken();
    console.log(token);

    if (token) {
      console.log("restoring session");
      dispatch(restoreSession(token));
    }
  }, [dispatch]);

  return (
    <div>
      <AppRouter />
      <ToastContainer />
    </div>
  );
};

export default App;
