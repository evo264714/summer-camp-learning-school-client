import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularInstructor></PopularInstructor>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;