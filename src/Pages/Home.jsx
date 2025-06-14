import FeaturesSection from "../Components/Features/Features";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import HeroSection from "../Components/Herosection/Herosection";

function Home(){
    return(
        <div>
            <Header/>
            <HeroSection/>
            <FeaturesSection/>
            <Footer/>
        </div>
    )
}

export default Home;