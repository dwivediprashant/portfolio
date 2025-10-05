function certificate() {
  return (
    <div
      className="d-flex justify-content-center mt-5 scroll  p-2"
      style={{
        maxHeight: "500px",
        overflow: "scroll",
      }}
    >
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide w-50 border"
        data-bs-touch="false"
        style={{ width: "90vw" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/portfolio/media/images/odooHack.jpg"
              className="d-block w-100 certificate-img"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src="/portfolio/media/images/Internshipcertificate.jpg"
              className="d-block w-100 certificate-img"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/portfolio/media/images/certificate-sigma-60-681cba9a8c8e8811e50bf560_page-0001.jpg"
              className="d-block w-100 certificate-img"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/portfolio/media/images/IITpatnaOfferLetter.jpg"
              className="d-block w-100 certificate-img"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default certificate;
