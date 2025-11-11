function header() {
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-info">
              <div className="container">
                  <a href="index.html" className="navbar-brand">
                      <i className="fa fa-shopping-bag"></i> Omer's Store
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarrao"
                      aria-controls="navbarrao" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarrao">
                      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <a href="index.html" className="nav-link"><i className="fa fa-home"></i> HOME</a>
                          </li>
                          <li className="nav-item">
                              <a href="about.html" className="nav-link"><i className="fa fa-info-circle"></i> About</a>
                          </li>
                          <li className="nav-item">
                              <a href="products.html" className="nav-link active"><i className="fa fa-cubes"></i> Products</a>
                          </li>
                          <li className="nav-item">
                              <a href="contact.html" className="nav-link"><i className="fa fa-phone"></i> Contact</a>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                  aria-expanded="false">
                                  <i className="fa fa-user"></i> My Account
                              </a>
                              <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="login.html"><i className="fa fa-sign-in"></i> Login</a></li>
                                  <li><a className="dropdown-item" href="register.html"><i className="fa fa-user-plus"></i> Register</a>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                      <a href="cart.html" className="btn btn-warning position-relative mt-1 btn-cart">
                          <i className="fa fa-shopping-cart"></i> Cart
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                              99+
                              <span className="visually-hidden">unread messages</span>
                          </span>
                      </a>
                  </div>
              </div>
          </nav>

    </div>
  )
}

export default header
