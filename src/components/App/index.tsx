import { Navigate, Route, Routes } from 'react-router-dom';

import AuthTemplate from '../../templates/Auth';
import AppTemplate from '../../templates/App';

import SignInView from '../../views/auth/SignIn';
import SignUpView from '../../views/auth/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthTemplate />}>
        <Route path="signin" element={<SignInView />} />
        <Route path="signup" element={<SignUpView />} />
      </Route>
      <Route path="/" element={<AppTemplate />}></Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App;
