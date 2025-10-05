function Hackathon() {
  return (
    <div className="container" id="hackathon-id">
      <h4 className="border-bottom border-tertiary">Hackathons</h4>
      <div className="d-flex gap-4">
        <div className="card" style={{ width: "30rem" }}>
          <div className="card-body">
            <h5 className="card-title">Odoo hackathon 2025 Finalist</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              at CGC University, Mohali, Punjab
            </h6>
            <p className="card-text">
              A 24-hour hackathon focused on development skills, where we were
              given a problem statement and built a functional product from
              scratch within the competition period. On <i>30-31 August 2025</i>
            </p>
            <a href="/media/images/odooHack.jpg" className="card-link">
              View certificate
            </a>
            <a
              href="https://github.com/VedantGiga/roadguard"
              className="card-link"
            >
              Contribution on team project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hackathon;
