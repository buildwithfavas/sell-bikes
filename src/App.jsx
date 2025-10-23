import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectRoute";
import RedirectRoute from "./components/RedirectRoute";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddForm from "./pages/AddForm";
import Edit from "./pages/Edit";
import AddToCart from "./pages/addToCart";
import CheckOutPage from "./pages/CheckOutPage";
import ErrorDemo from "./pages/ErrorDemo";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RedirectRoute>
              <Landing />
            </RedirectRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectRoute>
              <Login />
            </RedirectRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addList"
          element={
            <ProtectedRoute>
              <AddForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute>
              <Edit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addToCart"
          element={
            <ProtectedRoute>
              <AddToCart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkOut"
          element={
            <ProtectedRoute>
              <CheckOutPage />
            </ProtectedRoute>
          }
        />
        <Route path="/error" element={<ErrorDemo />} />
      </Routes>
    </>
  );
};

export default App;
