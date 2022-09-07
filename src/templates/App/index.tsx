import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { getCurrentUser, RootState } from "../../store";
import Navbar from "./components/Navbar";

import * as S from "./styles";

function App() {
  const user = useSelector<RootState>(getCurrentUser);

  if (!user) {
    return <Navigate to="/auth/signin" />;
  }

  return (
    <S.Container>
      <Navbar />
      <S.Wrapper fluid="lg">
        <Outlet />
      </S.Wrapper>
    </S.Container>
  );
}

export default App;