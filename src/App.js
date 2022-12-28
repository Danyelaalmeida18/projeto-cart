import React , {useState} from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './styles/homepage.css';

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setwarning] = useState(false);

  const handleClick = (item) =>{
    let isPresent = false;
    cart.forEach((product)=>{
      if (item.id === product.id)
      isPresent = true;
    })
    if (isPresent){
      setwarning(true);
      setTimeout(()=>{
        setwarning(false);
      }, 2000);
      return ;
    }
    setCart([...cart, item]);

  }

    const handleChange = (item, d) =>{
      let ind = -1;
      cart.forEach((data, index)=>{
        if (data.id === item.id)
        ind= index;
      });
      const tempArr = cart;
      tempArr[ind].amount += d;
      if (tempArr[ind].amount === 0)
        tempArr[ind].amount = 1;
      setCart([...tempArr])

    }


  return (
   
 <React.Fragment>

  
    <Navbar size={cart.length} setShow={setShow} />
    {
      show ? <HomePage handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
    }
 
    {
       warning && <div className='warning'>Item is already added to your cart</div>
    }
   <Footer />
 </React.Fragment>

  )
}

export default App;
