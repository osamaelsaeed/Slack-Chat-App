import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
const App = () => {
  return (
    <>
      <SignedIn>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/auth" element={<Navigate to={"/"} replace />}></Route>
        </Routes>
      </SignedIn>
      <SignedOut>
        <Routes>
          <Route path="/auth" element={<AuthPage />}></Route>
          <Route path="*" element={<Navigate to={"/auth"} replace />}></Route>
        </Routes>
      </SignedOut>
    </>
  );
};

export default App;
