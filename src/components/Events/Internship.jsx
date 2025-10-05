function Internship() {
  return (
    <div className="container mt-5">
      <h4 className="border-bottom border-tertiary" id="Project-id">
        {" "}
        Internhips
      </h4>
      <div className="d-flex gap-4">
        <div className="card" style={{ width: "30rem" }}>
          <div className="card-body">
            <h5 className="card-title">AIML with green technology</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              AICTE, Edunet foundation
            </h6>
            <p className="card-text">
              Completed 4-week virtual internship on Artificial Intelligence and
              Data Analytics focused on Green Skills & made{" "}
              <b>Air quality index prediction ML model</b> using{" "}
              <b>Xgboost algorithm & facebook prophet model</b>, from{" "}
              <i>25th August 2025</i> to <i>25th September 2025.</i>
            </p>
            <a
              href="/media/images/Prashant Kumar Dwivedi_AICTE_Certificate_page-0001.jpg"
              className="card-link"
            >
              View certificate
            </a>
            <a
              href="https://github.com/dwivediprashant/AIR_QUALITY_INDEX_PROJECT"
              className="card-link"
            >
              Project link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Internship;
