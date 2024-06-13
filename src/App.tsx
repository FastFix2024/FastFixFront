import Background from "components/Background/Background";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { authSliceSelectors, authSliceActions } from "store/redux/authSlice/authSlice";
import { Header } from "./sections/Landing/Header/Header";

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
