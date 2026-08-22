import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* We will add more routes here based on the next prompt */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
