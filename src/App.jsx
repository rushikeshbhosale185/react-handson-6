import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Comps/Home';
import Students from './Comps/Students';
import Contact from './Comps/Contact';
import Errors from './Comps/Errors';
import './App.css';
import { useState } from 'react';
import ContextData from './Comps/ContextAPI';
import NewStudent from './Comps/NewStudent';
import UpdateStudent from './Comps/UpdateStudent';

function App() {
  const [data, setData] = useState([
    { Name: "Samuel", Age: "25", Course: "Mern", Batch: "July"},
    { Name: "Dean", Age: "27", Course: "Mern", Batch: "August"},
    { Name: "Winchester", Age: "26", Course: "Mern", Batch: "January"},
    { Name: "Bobby", Age: "23", Course: "Mern", Batch: "May"},
    { Name: "Michael", Age: "25", Course: "Mern", Batch: "September"}
  ])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/students' element={
            <ContextData.Provider value={{ entries: data, updateData: setData }}>
              <Students />
            </ContextData.Provider>
          } />
          <Route path='/newstudent' element={
            <ContextData.Provider value={{ entries: data, updateData: setData }}>
              <NewStudent/>
            </ContextData.Provider>
          } />
          <Route path='/updatestudent' element={
            <ContextData.Provider value={{ entries: data, updateData: setData }}>
              <UpdateStudent/>
            </ContextData.Provider>
          } />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<Errors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;