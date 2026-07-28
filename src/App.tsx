import AppRouter from "./routes/AppRouter";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { restoreSession } from "./features/auth/authSlice";
import { getAccessToken } from "./utils/auth";

const App = () => {
  let token = getAccessToken();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      dispatch(restoreSession(token));
    }
  }, [dispatch]);

  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
