function Education() {
  return (
    <div className="container">
      <table className="table table-hover border mt-4 ">
        <thead>
          <tr>
            <th>Course</th>
            <th>Institution</th>
            <th>Passout year</th>
            <th>CGPA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>B.tech in CS-AIML</td>
            <td>
              Lakshmi Narain College Of Technology, Bhopal, Madhya Pradesh
            </td>
            <td>2027(Expected)</td>
            <td>8.76</td>
          </tr>
          {/* <tr>
            <td>12th</td>
            <td>Jawahar Navodaya vidyalaya, Sidhi, Madhya Pradesh</td>
            <td>2022</td>
            <td>74.6%</td>
          </tr>
          <tr>
            <td>10th</td>
            <td>Jawahar Navodaya vidyalaya, Sidhi, Madhya Pradesh</td>
            <td>2020</td>
            <td>84%</td>
          </tr> */}
          <tr>
            <td>Product mangement & Agentic AI</td>
            <td>
              IIT Patna &nbsp;
              <a href="/portfolio/media/images/IITpatnaOfferLetter.jpg">
                Offer letter
              </a>
            </td>
            <td>6 month duration</td>
            <td>Exams pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Education;
