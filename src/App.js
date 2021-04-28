import './App.css';
import {Carousel} from 'react-bootstrap';

function App() {
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
          <div className="col-lg-3">
            <h1 className="my-4">Shop Name</h1>
            <div className="list-group">
              <span className="linkCursor list-group-item">Category 1</span>
              <span className="linkCursor list-group-item">Category 2</span>
              <span className="linkCursor list-group-item">Category 3</span>
            </div>
          </div>
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

            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                  <span className="linkCursor"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></span>
                  <div className="card-body">
                    <h4 className="card-title">
                      <span className="linkCursor">Item Two</span>
                    </h4>
                    <h5>$24.99</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                  <span className="linkCursor"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></span>
                  <div className="card-body">
                    <h4 className="card-title">
                      <span className="linkCursor">Item Three</span>
                    </h4>
                    <h5>$24.99</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                  <span className="linkCursor"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></span>
                  <div className="card-body">
                    <h4 className="card-title">
                      <span className="linkCursor">Item Four</span>
                    </h4>
                    <h5>$24.99</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                  <span className="linkCursor"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></span>
                  <div className="card-body">
                    <h4 className="card-title">
                      <span className="linkCursor">Item Five</span>
                    </h4>
                    <h5>$24.99</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                  <span className="linkCursor"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></span>
                  <div className="card-body">
                    <h4 className="card-title">
                      <span className="linkCursor">Item Six</span>
                    </h4>
                    <h5>$24.99</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  </div>
                </div>
              </div>
            </div>
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
