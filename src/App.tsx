import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ImagePage from './pages/ImagePage/ImagePage';

function App() {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div className="App">
      <Header input={inputValue} setInput={setInputValue} />
      <Routes>
        <Route path="/" element={<HomePage input={inputValue} />}></Route>
        <Route path="/images" element={<ImagePage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
