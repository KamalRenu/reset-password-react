import './App.css';
import Login from './login';
import Register from './Register';
import ForgotPassword from './forgotPassword';
import Dashboard from './dashboard';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ResetPassword from './resetpassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resetpassword/:resetToken" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
