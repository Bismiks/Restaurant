
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import RestaurantDetails from './components/RestaurantDetails';
function App() {
 const name = "Rins"
  return (
    <Router>
      <h1>{`my name is ${name}`}</h1>
        <Header/>
            <main className='py-3'>
                <Container>
                  <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/details/:id' element={<RestaurantDetails/>}/>
                  </Routes>
                </Container>
            </main> 
        <Footer/>
    </Router>
  );
}

export default App;
   

// <Route path='/details/:id' element={<RestaurantDetails/>}/> - static content but id is dynamic combination of static & dynamic