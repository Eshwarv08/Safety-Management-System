import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AssessmentCover from './pages/AssessmentCover';
import GasTestAssessment from './pages/GasTestAssessment';
import UndergroundServicesAssessment from './pages/UndergroundServicesAssessment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assessment" element={<AssessmentCover />} />
        <Route path="/gas-test-assessment" element={<GasTestAssessment />} />
        <Route path="/underground-services-assessment" element={<UndergroundServicesAssessment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
