import './App.css';
import { Carousel } from 'react-bootstrap';
import Cart from './Cart';
import { useState } from 'react';
import Items from './Items';

function App() {
  const itemsData = [
    {
      title: 'Item One',
      price: '$24.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      rating: 4,
      added: false
    },
    {
      title: 'Item Two',
      price: '$14.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      rating: 5,
      added: false
    },
    {
      title: 'Item Three',
      price: '$4.99',
      description: 'consectetur adipisicing elit. Amet numquam aspernatur!',
      rating: 3,
      added: false
    },
    {
      title: 'Item Four',
      price: '$19.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      rating: 2,
      added: false
    },
    {
      title: 'Item Five',
      price: '$29.99',
      description: 'Lorem ipsum dolor sit amet, Amet numquam aspernatur!',
      rating: 4,
      added: false
    },
    {
      title: 'Item Six',
      price: '$99.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      rating: 3
    }
  ];

  const [cart, setCart] = useState([]);
  const [data, setData] = useState(itemsData);

  const addToCart = (item) => {
    let added = false;
    cart.every((val) => {
      if (val.name === item.name) {
        added = true;
        return false;
      }
      return true;
    })
    if (!added) {setCart([...cart, item])};
    let updatedData = data.map((val) => {
      if (val.title === item.name) {
        val.added = true;
      }
      return val;
    })
    setData(updatedData);
  }

  const removeFromCart = (name) => {
    let updatedCart = cart.filter((val)=> val.name !== name);
    setCart(updatedCart);
    let updatedData = data.map((val) => {
      if (val.title === name) {
        val.added = false;
      }
      return val;
    })
    setData(updatedData);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <span className="linkCursor navbar-brand">Start Bootstrap</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="linkCursor navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <span className="linkCursor nav-link" href="#">Home
              <span className="linkCursor sr-only">(current)</span>
                </span>
              </li>
              <li className="nav-item">
                <span className="linkCursor nav-link" href="#">About</span>
              </li>
              <li className="nav-item">
                <span className="linkCursor nav-link" href="#">Services</span>
              </li>
              <li className="nav-item">
                <span className="linkCursor nav-link" href="#">Contact</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <Cart cart={cart} render={removeFromCart}></Cart>
          <div className="col-lg-9">
            <Carousel className="my-4">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="http://placehold.it/900x350"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="http://placehold.it/900x350"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="http://placehold.it/900x350"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>

            <Items data = {data} addToCart = {addToCart} removeFromCart={removeFromCart}></Items>
          </div>
        </div>
      </div>
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; Your Website 2020</p>
        </div>
      </footer>
      {/* <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script> */}
    </>
  );
}

export default App;
