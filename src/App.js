import './App.css';
import Product from './Pages/Products/Product';
import Item from './Pages/Item/Item'
import { BrowserRouter,Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Product />}/>
        <Route path='/item/:id' element={<Item />} />
       </Routes> 
    </BrowserRouter> 
    <Item />
    </div>
  );
}

export default App;
