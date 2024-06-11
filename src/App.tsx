
import { useEffect } from "react";
import Background from "./components/Background/Background";
import { Header } from "./sections/Landing/Header/Header";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { authSliceActions, authSliceSelectors } from "./store/redux/authSlice/authSlice";

const App = () => {
  const isAuthenticated = useAppSelector(authSliceSelectors.selectIsAuthenticated);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(authSliceActions.currentUser());
    }
  }, [isAuthenticated]);

  return (
    <>
      <Header />
      <Background />
    </>
  );
};

export default App;
