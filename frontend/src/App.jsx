import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AssessmentCover from './pages/AssessmentCover';
import GasTestAssessment from './pages/GasTestAssessment';
import UndergroundServicesAssessment from './pages/UndergroundServicesAssessment';
import ConfinedSpaceAssessment from './pages/ConfinedSpaceAssessment';
import WorkSafelyAtHeightsAssessment from './pages/WorkSafelyAtHeightsAssessment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assessment" element={<AssessmentCover />} />
        <Route path="/gas-test-assessment" element={<GasTestAssessment />} />
        <Route path="/underground-services-assessment" element={<UndergroundServicesAssessment />} />
        <Route path="/confined-space-assessment" element={<ConfinedSpaceAssessment />} />
        <Route path="/work-safely-at-heights-assessment" element={<WorkSafelyAtHeightsAssessment />} />
        <Route path="/heights-assessment" element={<WorkSafelyAtHeightsAssessment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
