import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login/Login';
import BlankPage from './pages/BlankPage/BlankPage';
import LoginLayout from './Layout/LoginLayout';

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Dashboard />} />
                <Route path="*" element={<BlankPage />} />
                <Route element={<LoginLayout />}>
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App;
