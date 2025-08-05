import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Details from './pages/Details';
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Layout}>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Details />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


