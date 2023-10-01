import './App.css';
import PostPage from './Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import 'semantic-ui-css/semantic.min.css'
function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path="/add" element={<PostPage/>}/>
       
      </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
