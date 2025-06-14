import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Events from "../Pages/Events";
import ClubGallery from "../Pages/ClubGallery";
import TeamPage from "../Pages/TeamPage";


function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<ClubGallery />} />
            <Route path="/team" element={<TeamPage />} />
        </Routes>
    );
};

export default CustomRoutes;
