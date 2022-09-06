import { Route, Routes } from 'react-router-dom';

import AuthTemplate from './templates/auth';

import { SigninView } from './views/auth/signin';
import { SignupView } from './views/auth/signup';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthTemplate />}>
        <Route path="signin" element={<SigninView />} />
        <Route path="signup" element={<SignupView />} />
      </Route>
    </Routes>
  )
}

export default App;
