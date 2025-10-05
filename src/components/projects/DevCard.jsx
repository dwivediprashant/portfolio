function Devcard() {
  return (
    <div className="d-flex flex-column">
      <div
        className="card m-2 p-4"
        style={{ width: "100%", height: "max-content" }}
      >
        <div className="row">
          <div className="col-4">
            <img
              src="/portfolio/media/images/Screenshot-250.png"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-4">
            <img
              src="/portfolio/media/images/Screenshot-252.png"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">
                WanderLust : Property Rental Web Application
              </h5>

              <ul className="card-text">
                <li>
                  Developed a property rental platform replicating Airbnb as a
                  full-stack project, with search filters, property management,
                  and property listings
                </li>
                <li>
                  Integrated secure user authentication manually via bcrypt,
                  optimized API endpoints, and implemented image uploads using
                  Cloudinary for a seamless user experience and implemented MVC
                  (Model, Views, Controllers) framework
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <div>
              <p>Tools used : </p>
            </div>

            <button type="button" className="btn btn-sm btn-dark me-2">
              Cloudinary
            </button>
            <button type="button" className="btn btn-sm btn-dark me-2">
              MongoDB
            </button>
            <button type="button" className="btn btn-sm btn-dark me-2">
              Express.js
            </button>
            <button type="button" className="btn btn-sm btn-dark me-2">
              bcrypt
            </button>
            <button type="button" className="btn btn-sm btn-dark me-2">
              Node.js
            </button>
            <button type="button" className="btn btn-sm btn-dark me-2">
              Express.js
            </button>
            <button type="button" className="btn btn-sm btn-dark me-2">
              React.js
            </button>
            <button type="button" className="btn btn-sm btn-dark me-2">
              Render
            </button>
          </div>
          <div>
            <a
              href="https://github.com/dwivediprashant/WanderLust-Airbnb-inspired-project"
              className="text-decoration-none text-dark p-2 fs-4"
            >
              <span className="fs-6">Code</span>&nbsp;
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://wanderlust-airbnb-inspired-project-qs8g.onrender.com/list"
              className="text-decoration-none text-dark p-2 fs-4"
            >
              <span className="fs-6">Go to website</span>&nbsp;
              <i className="fa-solid fa-earth-americas"></i>
            </a>
          </div>
        </div>
      </div>
      <div
        className="card m-2 p-4 d-flex flex-wrap"
        style={{ width: "100%", height: "max-content" }}
      >
        <div className="row">
          <div className="col-4">
            <img
              src="/portfolio/media/images/Screenshot-253.png"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Weather React Application</h5>

              <ul className="card-text">
                <li>
                  Built a fast and lightweight weather forecasting web app using
                  React + Vite, delivering real-time weather insights from the
                  OpenWeather API
                </li>
                <li>
                  Implemented city-based search functionality with dynamic API
                  calls to display temperature, humidity, wind speed, and live
                  weather conditions
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <div>
              <p>Tools used : </p>
            </div>
            <button type="button" className="btn btn-sm btn-dark me-2">
              Claude code
            </button>
            <button type="button" className="btn btn-sm btn-dark me-2">
              OpenWeather API
            </button>
            <button type="button" className="btn btn-sm btn-dark me-2">
              Material UI
            </button>
            <button type="button" className="btn btn-sm btn-dark me-2">
              Vite
            </button>
            <button type="button" className="btn btn-sm btn-dark me-2">
              React.js
            </button>
          </div>
          <div>
            <a
              href="https://github.com/dwivediprashant/weather-app"
              className="text-decoration-none text-dark p-2 fs-4"
            >
              <span className="fs-6">Code</span>&nbsp;
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://dwivediprashant.github.io/weather-app/"
              className="text-decoration-none text-dark p-2 fs-4"
            >
              <span className="fs-6">Go to website</span>&nbsp;
              <i className="fa-solid fa-earth-americas"></i>
            </a>
          </div>
        </div>
      </div>
      <div
        className="card m-2 p-4"
        style={{ width: "100%", height: "max-content" }}
      >
        <div className="row">
          <div className="col-4">
            <img
              src="/portfolio/media/images/Screenshot-249.png"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-4">
            <img
              src="/portfolio/media/images/Screenshot-254.png"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">Stock trading platform</h5>

              <ul className="card-text">
                <li>
                  Built a Zerodha-inspired MERN trading platform with separate
                  frontend, backend and admin/dashboard components — featuring a
                  responsive React dashboard for watchlists, holdings and trade
                  actions, plus charted portfolio views for quick market
                  insights.
                </li>
                <li>
                  Implemented secure authentication with bcrypt and token-based
                  sessions, designed RESTful Node/Express endpoints following an
                  MVC pattern, persisted data in MongoDB, and integrated
                  market-data endpoints (mock or external APIs) to drive the UI
                  and simulated order execution.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <div>
              <p>Tools Used:</p>
            </div>

            {/* Frontend */}
            <button type="button" className="btn btn-sm btn-dark me-2">
              Relume AI
            </button>
            <button type="button" className="btn btn-sm btn-dark me-2">
              Bootstrap
            </button>

            {/* Backend */}
            <button type="button" className="btn btn-sm btn-dark me-2">
              Node.js
            </button>
            <button type="button" className="btn btn-sm btn-dark me-2">
              Express.js
            </button>
            <button type="button" className="btn btn-sm btn-dark me-2">
              MongoDB
            </button>

            {/* Auth & Architecture */}
            <button type="button" className="btn btn-sm btn-dark me-2">
              bcrypt
            </button>
            <button type="button" className="btn btn-sm btn-dark me-2">
              JWT token
            </button>

            {/* Dashboard / Features */}
            <button type="button" className="btn btn-sm btn-dark me-2">
              Reactjs
            </button>
            <button type="button" className="btn btn-sm btn-dark me-2">
              AWS
            </button>
          </div>

          <div>
            <a
              href="https://github.com/dwivediprashant/ZERODHA_-Stock_trading_platform-"
              className="text-decoration-none text-dark p-2 fs-4"
            >
              <span className="fs-6">Code</span>&nbsp;
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href=""
              className="text-decoration-none text-dark p-2 fs-4"
              style={{ cursor: "not-allowed" }}
            >
              <span className="fs-6 text-danger">Under development</span>
              &nbsp;
              <i className="fa-solid fa-earth-americas text-danger"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Devcard;
