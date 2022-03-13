import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import ThankYou from './pages/ThankYou';
import DisplayImage from './pages/DisplayImage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/copycat' element={<Home />} />
        <Route exact path='/form' element={<Form />} />
        <Route exact path='/thankyou' element={<ThankYou />} />
        <Route exact path='/image' element={<DisplayImage />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </Router>
  );
}
