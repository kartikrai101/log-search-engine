import './App.css';
import Header from './components/Header'
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import PopulateModal from './components/PopulateModal';
import {useState, useEffect} from 'react';

function App() {
  const [populate, setPopulate] = useState(false);
  return (
    <div className="h-screen relative">
      <Header />
      <MainContent />
      <Footer setPopulate = {setPopulate} />
      {
        populate ? (
          <PopulateModal setPopulate={setPopulate} />
        ) : null
      }
    </div>
  );
}

export default App;
