import './App.css';
import React from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { About } from './Components/About/About';
import { Home } from './Components/Home/Home';
import { States } from './Components/States/States';
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom'
import Contact from './Components/Contact/Contact';

function App(props) {
  //doesnt work
  // const router = createBrowserRouter (
  //   createRoutesFromElements(
  //     <Route path="/" element={<Root/>}>
  //       <Route index element={<Navbar/>} />
  //       <Route path="/About" element={<About/>}/>
  //     </Route>
  //   )
  // )

  return (
    <div className="App">
{/* 
      <Router>
        <Routes>
          <Route path="/" element={<Root/>}>
            <Route element={<Navbar/>} />
            <Route path="about" element={<About/>}/>
          </Route>
        </Routes>
      </Router> */}

      {/* <RouterProvider route={router}/> */}


      {/*to show whatever is done without the routing confusion*/}
      {/* <Navbar/>
      <Home/> */}
      {/* <About/> */}

      {/*codedamn*/}
        <BrowserRouter>
          <Navbar/>
          <Routes>
            {/* <Route path="/" element={<Navbar/>}> */}

              {/* <Route index element={<Home/>}/> */}
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/States" element={<States />} />
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

// const Root=() => {
//   <>
//     <div>
//       <Link to="/">Home</Link>
//       <Link to="/About">About Us</Link>
//     </div>

//     <div>
//       <Outlet/>
//     </div>
//   </>
// }

export default App;
