import InitialHome from '../../components/Home/InitialHome';
import TeamWorkWith from "../../components/Home/TeamWorkWith";
import Description from "../../components/Home/Description";
import Video from "../../components/Home/Video";
import RoadmapTimeline from "../../components/Home/RoadmapTimeline";
import IDE from "../../components/Home/IDE";
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#f4f5fa' }}>
            <InitialHome />
            <TeamWorkWith />
            <IDE />
            <RoadmapTimeline />
            <Description />
            <Video />
            <Footer />
        </div>
    );
}

export default Home;
