import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "src/components/layout/Layout";
import Login from "src/pages/Login";
import Landing from "src/pages/Landing";
import { UserContextProvider } from "./context/UserContext/UserContextProvider";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
