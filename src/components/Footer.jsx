function Footer() {
  return (
    <footer className="fs-5 ps-4 pe-4 d-flex justify-content-between align-items-center mt-5 border-top border-secondary  lh-lg ">
      <div>
        <a
          href="https://github.com/dwivediprashant"
          className="text-decoration-none text-dark p-2"
        >
          <i className="fa-brands fa-github text-white"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/dwivediprashant1902/"
          className="text-decoration-none text-dark p-2"
        >
          <i className="fa-brands fa-linkedin text-white"></i>
        </a>
        <a
          href="https://leetcode.com/dwivediprashant"
          className="text-decoration-none text-dark p-2"
        >
          <i className="fa-solid fa-code text-white"></i>
        </a>
      </div>
      <div className="navbar-nav">
        <a className="nav-link text-light" href="#">
          <i className="fa-solid fa-phone-volume text-light"></i> +91 6265691135
        </a>
        <a className="nav-link text-light" href="#">
          <i className="fa-solid fa-envelope"></i>&nbsp;
          <span>prashantdwivedi.0219@gmail.com</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
