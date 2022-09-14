import Home from './routes/Home/Home.component';
import NavBar from './routes/NavBar/NavBar.component';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Authentication from './routes/Authentication/Authentication.component';
function Shop() {
  return <h1>New Shop!</h1>
};
function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar/>}>
        <Route index element={<Home/>} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
