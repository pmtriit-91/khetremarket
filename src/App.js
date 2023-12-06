import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import BlankPage from './pages/BlankPage/BlankPage';

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<BlankPage />} />
            </Routes>
        </Router>
    )
}

export default App;
