import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import { TaskPage } from "./pages/TaskPage";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { TaskFormPage } from "./pages/TaskFormPage";
import ProtectedRouthe from "./ProtectedRouthe";

function App(){
  return(
    <>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />

        <Route element={<ProtectedRouthe/>}>
          <Route path="/task" element={<TaskPage></TaskPage>} />
          <Route path="/add-task" element={<TaskFormPage></TaskFormPage>} />
          <Route path="/task/:id"  element={<TaskFormPage></TaskFormPage>} />
          <Route path="/profile" element={<ProfilePage></ProfilePage>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App