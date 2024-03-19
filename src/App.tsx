import { Routes, Route, Navigate } from "react-router-dom";
import {
  Dashboard,
  Login,
  Signup,
  SignupFlow,
  ForgotPassword,
  NotFound,
  Metrics,
  Settings,
  Users,
} from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to="/dashboard/metrics" />}
        />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="metrics" element={<Metrics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup-flow" element={<SignupFlow />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
