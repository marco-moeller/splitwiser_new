import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Groups from "./pages/Groups";
import Activity from "./pages/Activity";
import Account from "./pages/Account";
import Friends from "./pages/friends/Friends";
import Friend from "./pages/friends/Friend";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protected from "./components/layout/Protected";
import ExpenseDetail from "./components/expenses/ExpenseDetail";
import ProtectedFriend from "./components/layout/ProtectedFriend";
import Error from "./pages/Error";
import SettledExpenses from "./pages/friends/SettledExpenses";
import { StatusProvider } from "./context/StatusContext";

function App() {
  return (
    <StatusProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<Protected />}>
              <Route index element={<Friends />} />
              <Route path="friends" element={<Friends />} />
              <Route element={<ProtectedFriend />}>
                <Route path="friend/:id" element={<Friend />}></Route>
                <Route
                  path="friend/:id/settledExpenses"
                  element={<SettledExpenses />}
                ></Route>
              </Route>
              <Route path="groups" element={<Groups />}></Route>
              <Route path="activity" element={<Activity />}></Route>
              <Route path="account" element={<Account />}></Route>
              <Route path="expense/:id" element={<ExpenseDetail />}></Route>
            </Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StatusProvider>
  );
}

export default App;
