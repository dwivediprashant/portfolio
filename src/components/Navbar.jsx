function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg p-3 sticky-top navbar-dark ">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="d-flex justify-content-between w-100">
            <div className="navbar-nav">
              <a className="nav-link text-light" href="#">
                <i className="fa-solid fa-phone-volume text-light"></i> +91
                6265691135
              </a>
              <a className="nav-link text-light" href="#">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                <span>prashantdwivedi.0219@gmail.com</span>
              </a>
            </div>

            <div className="navbar-nav">
              <a className="nav-link text-light" href="#Project-id">
                Projects
              </a>
              <a className="nav-link text-light" href="#hackathon-id">
                Hackathons
              </a>
              <a className="nav-link text-light" href="#Project-id">
                Internships
              </a>
              <a className="nav-link text-light" href="#certificate-id">
                Certificates
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
