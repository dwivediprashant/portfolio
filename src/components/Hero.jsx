import Education from "./Education";

function Hero() {
  return (
    <div className="container mt-5 pt-3">
      <div className="card mb-3 p-3 hero border-0">
        <h4 className="border-bottom border-tertiary">Profile</h4>
        <div className="d-flex flex-wrap justify-content-between align-items-start pt-2">
          {/* Tech Stack */}
          <div className="d-flex flex-column tech-stack">
            <div className="p-2 pt-0">
              <h5>Web development</h5>
              <button type="button" className="btn btn-sm btn-dark me-2">
                Nodejs
              </button>
              <button type="button" className="btn btn-sm btn-dark me-2">
                Expressjs
              </button>
              <button type="button" className="btn btn-sm btn-dark me-2">
                MongoDB
              </button>
              <button type="button" className="btn btn-sm btn-dark">
                Reactjs
              </button>
            </div>

            <div className="p-2">
              <h5>Machine learning</h5>
              <button type="button" className="btn btn-sm btn-dark me-2">
                Matplotlib
              </button>
              <button type="button" className="btn btn-sm btn-dark me-2">
                Numpy
              </button>
              <button type="button" className="btn btn-sm btn-dark me-2">
                Pandas
              </button>
              <button type="button" className="btn btn-sm btn-dark">
                Python
              </button>
            </div>

            <div className="p-2">
              <h5>DSA</h5>
              <button type="button" className="btn btn-sm btn-dark me-2">
                C++
              </button>
              <button type="button" className="btn btn-sm btn-dark me-2">
                Java
              </button>
            </div>
            <div className="p-2 pt-0">
              <h5>AI tools for development</h5>
              <button type="button" className="btn btn-sm btn-dark me-2">
                Claude
              </button>
              <button type="button" className="btn btn-sm btn-dark me-2">
                Lovable
              </button>
              <button type="button" className="btn btn-sm btn-dark me-2">
                Relume
              </button>
              <button type="button" className="btn btn-sm btn-dark">
                Code vibe
              </button>
            </div>
          </div>

          {/* Description List */}
          <div className="d-flex flex-column justify-content-center lh-lg">
            <ul className="card-text text-dark mb-0">
              <li>
                Data Structure & Algorithms in JAVA{" "}
                <a href="https://github.com/dwivediprashant/DSA-JAVA">
                  Github repo
                </a>
              </li>
              <li>
                MERN stack developer{" "}
                <a href="/media/images/certificate-sigma-60-681cba9a8c8e8811e50bf560_page-0001.jpg">
                  Certificate (Apna college)
                </a>
              </li>
              <li>Machine learning algorithms</li>
            </ul>
          </div>

          {/* Profile Photo & Social */}
          <div className="d-flex flex-column align-items-center text-dark">
            <img
              src="/media/images/myphoto-modified-removebg-preview.png"
              className="profile-photo mb-3"
              alt="logo"
            />
            <div className="fs-5 border px-3 py-2 rounded">
              <span>Social profile :</span>
              <a
                href="https://github.com/dwivediprashant"
                className="text-decoration-none text-dark p-2"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <span className="text-secondary">|</span>
              <a
                href="https://www.linkedin.com/in/dwivediprashant1902/"
                className="text-decoration-none text-dark p-2"
              >
                <i
                  className="fa-brands fa-linkedin"
                  style={{ color: "#1237f3" }}
                ></i>
              </a>
              <span className="text-secondary">|</span>
              <a
                href="https://leetcode.com/dwivediprashant"
                className="text-decoration-none text-dark p-2"
              >
                <i
                  className="fa-solid fa-code"
                  style={{ color: "#f4c10aff" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
        <Education />
      </div>
    </div>
  );
}

export default Hero;
