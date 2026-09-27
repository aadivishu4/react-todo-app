import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./components/HomePage";
import Todo from "./components/Todo";
import ErrorPage from "./components/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute";
import appStore from "./redux/appStore";
import TosterMessage from "./components/Toster";
import Login from "./components/Login";

const App = () => {
  return (
    <Provider store={appStore}>
      <Router>
        <TosterMessage />
        <Routes>
          {/* Public Route */}
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          {/* Protected Route */}
          <Route
            path='/todo'
            element={
              <ProtectedRoute>
                <Todo />
              </ProtectedRoute>
            }
          />

          {/* Invalid Route */}

          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
