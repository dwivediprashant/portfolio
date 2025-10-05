function Mlcard() {
  return (
    <>
      <div className="card" style={{ width: "30rem" }}>
        <img
          src="/portfolio/media/images/AQI-project.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Air quality index prediction</h5>
          <p className="card-text">
            Developed a time series forecasting and regression model to predict
            AQI levels using FB Prophet and XGBoost. Utilized scikit-learn for
            data preprocessing, train-test splitting, and evaluation (MSE).
            Visualized trends with Matplotlib, and used Joblib for model
            serialization and deployment.
          </p>
          <a
            href="https://github.com/dwivediprashant/AIR_QUALITY_INDEX_PROJECT"
            className="btn btn-dark"
          >
            Code <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Mlcard;
