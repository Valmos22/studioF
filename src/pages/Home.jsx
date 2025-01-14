import Banner from "../components/Banner/Banner"
import Benefits from "../components/Benefits/Benefits"
import Category from "../components/Category/Category"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"
import Recomendado from "../components/Recomendado/Recomendado"
import Taps from "../components/Taps/Taps"


const Home = () => {
    return (
        <>
            {/* <SwiperCont /> */}
            <NavBar />
            <Banner />
            <Taps />
            <Recomendado />
            <Category />
            <Benefits />
            <Footer />
        </>
    )
}

export default Home