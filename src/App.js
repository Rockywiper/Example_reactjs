import React from 'react';
import Approval from './Components/ApprovalPage';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './Components/Nav';
import Easyform from './Components/Form';

function App() {
  return (
    <div >
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/newad' element={<EasyjobForm></EasyjobForm>}/>
          <Route path='/candidate' element={<Approval></Approval>}/>
        </Routes>

      </BrowserRouter> */}
      <Easyform></Easyform>
    </div>
  );
}

export default App;
