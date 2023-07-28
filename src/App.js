import Header from "./components/Header";
import { List } from "./components/List";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
       <BrowserRouter>
      <div className='App'>
          <Header/>
          <Routes>
            <Route  path="/list" element={<List/>}/>
          </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App
