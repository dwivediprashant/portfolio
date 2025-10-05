import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Dev from "./components/projects/Dev";
import Hackathon from "./components/Events/Hackathon";
import Internship from "./components/Events/Internship";
import Ml from "./components/projects/Ml";
import Footer from "./components/Footer";
import Certificate from "./components/Certificate";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <h4 className="container mt-5 border-bottom border-tertiary">
        {" "}
        Education
      </h4>
      <Education /> */}
      <Hackathon />
      <Internship />
      <h4 className="container mt-5 border-bottom border-tertiary ">
        {" "}
        Web development projects
      </h4>
      <Dev />
      <h4 className="container mt-5 border-bottom border-tertiary">
        {" "}
        Machine learning projects
      </h4>
      <Ml />
      <h4
        className="container mt-5 border-bottom border-tertiary"
        id="certificate-id"
      >
        {" "}
        Certificates
      </h4>
      <Certificate />
      <Footer />
    </>
  );
}

export default Home;
