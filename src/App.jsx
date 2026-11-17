import './App.css';
import Header from './components/Header.jsx';
import Card from './components/Card';
import { lifestyleSneakers } from  './App.js';


function App() {

  return (
    <div className='container'>
        <div>
          <Header />
        </div>
      <div className='card'>
        { lifestyleSneakers.map((item) =>(
        <Card 
        link = {item.link}
        name = {item.name}
        price = {item.price}
        gender = {item.gender}
        colors = {item.colors}
        key = {item.id}
        />
      ))}
      </div> 
    </div>                                          
  )
}

export default App
