import logo from './logo.svg';
import './App.css';
import Movies from './pages/Movies';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Error404 from './pages/Error404';
import Nav from './components/Nav';


function App() {
  return (
<>
    <div className='container'>

        <BrowserRouter>
            <Nav/>
            <div className='container my-5'>
                <Routes>
                    <Route path = "/" element = { <Home />} />
                    <Route path ="/movies" element = { <Movies />} />
                    <Route path ="/movies/:id" element = { <Movie />} />
                    <Route path ="*" element = { <Error404 /> } />
                </Routes>
            </div>
        </BrowserRouter>

       

    </div>
     <footer className='py-5'>
     <div className='container'>
         <p className='p-0 m-0 text-center'>CopyRight ...</p>
     </div>
 </footer> 
 </>
  );
}



export default App;
