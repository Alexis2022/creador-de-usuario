import { Routes, Route } from "react-router-dom";
import UserForm from "./pages/UserForm";
import NavBar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import { LoginContextProvider } from "./context/LoginContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";

function App() {
  return (
    <LoginContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Inicio />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </LoginContextProvider>
  );
}

export default App;
