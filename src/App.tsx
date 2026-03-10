
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import { ScrollToTop } from "./components/common/ScrollToTop";
import ContactUs from "./pages/NavPages/ContactUs";
import Home from "./pages/home/Home";
import AppLayout from "./layout/AppLayout";
import SkillingAndEmployeement from "./pages/Program & Services/Skilling&Employeement";
import GalleryPage from "./pages/gallary/GallaryPage";

export default function App() {
  return (
    <>
      <Router>
        {/* <ScrollToTop /> */}
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/skilling-and-employeement" element={<SkillingAndEmployeement />} />
            <Route path="/gallery" element={<GalleryPage />} />



          </Route>

          {/* Auth Layout */}
          {/* <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} /> */}

          {/* Fallback Route */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}
