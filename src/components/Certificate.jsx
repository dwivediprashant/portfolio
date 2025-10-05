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
        class="carousel slide w-50 border"
        data-bs-touch="false"
        style={{ width: "90vw" }}
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="/media/images/odooHack.jpg"
              class="d-block w-100 certificate-img"
              alt="..."
            />
          </div>

          <div class="carousel-item">
            <img
              src="/media/images/Prashant Kumar Dwivedi_AICTE_Certificate_page-0001.jpg"
              class="d-block w-100 certificate-img"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/media/images/certificate-sigma-60-681cba9a8c8e8811e50bf560_page-0001.jpg"
              class="d-block w-100 certificate-img"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/media/images/IITpatnaOfferLetter.jpg"
              class="d-block w-100 certificate-img"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default certificate;
