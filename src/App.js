// import logo from './logo.svg';
// import './App.css';
// import { useLocation , Routes, Route, BrowserRouter } from 'react-router-dom';
// import Home from './Components/Home';
// import Dashboard from './Components/Dashboard';
// import Header from './Components/Header';
// import Sidebar from './Components/Sidebar';
// import Login from './Components/Login';
// function App() {
//   const location = useLocation();
//   const isLoginPage = location.pathname === '/';
//   return (

//     <BrowserRouter>
//      {!isLoginPage && <Header />}
//       <Routes>
//       <Route exact path='/' element={<Login />}> </Route>
//         <Route exact path='/home' element={<Home />}> </Route>
//         <Route exact path='/dashboard' element={<Dashboard />}> </Route>       
//       </Routes>
//       {!isLoginPage && <Sidebar />}
//     </BrowserRouter>


//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Dashboard from './components/Dashboard';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';


  const App = () => {
    return (
      <Router>
        <Routes>
          <Route
            path="/*"
            element={<AppContent />}
          />
        </Routes>
      </Router>
    );
  };
  
  const AppContent = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/';
  
    return (
      <>
        {!isLoginPage && <Header />}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        {!isLoginPage && <Sidebar />}
      </>
  );
};
export default App;

