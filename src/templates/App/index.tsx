import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { getCurrentUser, RootState } from "../../store";
import Navbar from "./components/Navbar";

function App() {
  const user = useSelector<RootState>(getCurrentUser);

  if (!user) {
    return <Navigate to="/auth/signin" />;
  }

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;