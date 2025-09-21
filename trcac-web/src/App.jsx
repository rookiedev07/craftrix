import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Page/Home_Page";
import Admissions from "./Components/Admissions/Admissions";
import Navbar from "./Components/Home/Navbar";
import About_Trcac from "./Components/Navbar/About/About_Trcac";
import About_Trust from "./Components/Navbar/About/About_Trust";
import Amenities from "./Components/Navbar/About/Amenities";
import Chairmans_message from "./Components/Navbar/About/Chairmans_message";
import College_coc from "./Components/Navbar/About/College_coc";
import Trustees_message from "./Components/Navbar/About/Trustees_message";
import Feedback from "./Components/Navbar/About/Feedback";
import Incharge_trustee_message from "./Components/Navbar/About/Incharge_trustee_message";
import Infrastructure from "./Components/Navbar/About/Infrastructure";
import Principle_message from "./Components/Navbar/About/Principle_message";
import Statutory_commitee from "./Components/Navbar/About/Statutory_commitee";
import Co_curricular from "./Components/Navbar/Life@trcac/Co_curricular";
import Convocation from "./Components/Navbar/Life@trcac/Convocation";
import Cultural from "./Components/Navbar/Life@trcac/Cultural";
import Green_initiatives from "./Components/Navbar/Life@trcac/Green_initiatives";
import Nss from "./Components/Navbar/Life@trcac/Nss";
import Sports from "./Components/Navbar/Life@trcac/Sports";
import Trcac_socials from "./Components/Navbar/Life@trcac/Trcac_socials";
import Student from "./Components/Navbar/Award/Student";
import Faculty from "./Components/Navbar/Award/Faculty";
import Junior_clg from "./Components/Navbar/Academics/Junior_clg";
import Degree_clg from "./Components/Navbar/Academics/Degree_clg";
import Acdemic_calendar from "./Components/Navbar/Academics/Acdemic_calendar";
import Committee from "./Components/Navbar/Placements/Committee";
import Overview from "./Components/Navbar/Placements/Overview";
import Placement_intership from "./Components/Navbar/Placements/Placement_intership";
import Policies from "./Components/Navbar/Placements/Policies";
import Training_dev from "./Components/Navbar/Placements/Training_dev";
import Edc from "./Components/Navbar/Committee/Edc";
import Wdc from "./Components/Navbar/Committee/Wdc";
import Rdc from "./Components/Navbar/Committee/Rdc";
import Training_placement from "./Components/Navbar/Committee/Training_placement";
import Green_club from "./Components/Navbar/Committee/Green_club";
import Literary_club from "./Components/Navbar/Committee/Literary_club";
// Corrected the import name to be capitalized
import LifeAtTrcac from "./Components/Navbar/Life@trcac/lifeattrcac";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "./Components/ScrollTop";


const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      {/* Navbar should be outside Routes so it shows on every page */}
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Navbar  */}
          {/* AboutRoutes  */}
          <Route path="/abouttrcac" element={<About_Trcac />} />
          <Route path="/abouttrust" element={<About_Trust />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/chairmanmessage" element={<Chairmans_message />} />
          <Route path="/codeofconduct" element={<College_coc />} />
          <Route path="/trustiesmessage" element={<Trustees_message />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/inchargetrustiesmessage" element={<Incharge_trustee_message />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/principlesmessage" element={<Principle_message />} />
          <Route path="/statutory" element={<Statutory_commitee />} />

          {/* Life@trcac  */}
          <Route path="/cocurricular" element={<Co_curricular />} />
          <Route path="/convocation" element={<Convocation />} />
          <Route path="/cultural" element={<Cultural />} />
          <Route path="/greeninnovative" element={<Green_initiatives />} />
          <Route path="/nss" element={<Nss />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/trcacsocials" element={<Trcac_socials />} />
          {/* Corrected the element prop to use the capitalized component name */}
          <Route path="/lifeattrcac" element={<LifeAtTrcac />} />

          {/* Awards  */}
          <Route path="/student" element={<Student />} />
          <Route path="/faculty" element={<Faculty />} />

          {/* Academics  */}
          <Route path="/juniorcollege" element={<Junior_clg />} />
          <Route path="/degreecollege" element={<Degree_clg />} />
          <Route path="/academiccalendar" element={<Acdemic_calendar />} />

          {/* PLacements  */}
          <Route path="/committee" element={<Committee />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/internship" element={<Placement_intership />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/development" element={<Training_dev />} />

          {/* Committee  */}
          <Route path="/edc" element={<Edc />} />
          <Route path="/rdc" element={<Rdc />} />
          <Route path="/wdc" element={<Wdc />} />
          <Route path="/training" element={<Training_placement />} />
          <Route path="/greenclub" element={<Green_club />} />
          <Route path="/literary" element={<Literary_club />} />


          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />



          {/* (Optional) 404 Page */}
          <Route path="*" element={<h1 className="text-center mt-20">Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
