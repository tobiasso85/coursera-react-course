import Hero from "../comps/hero/hero";
import Overview from "../comps/overview/overview";
import Specials from "../comps/specials/specials";
import Testimonials from "../comps/testimonials";

function Home() {
    return (
        <>
            {/* top little lemon */}
            <Hero></Hero>
            {/* specials */}
            <Specials></Specials>
            {/* testimonials */}
            <Testimonials></Testimonials>
            {/* description */}

            <Overview></Overview>
        </>



    )
}

export default Home;