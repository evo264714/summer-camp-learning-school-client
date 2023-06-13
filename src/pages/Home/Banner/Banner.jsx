import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import './Banner.css'
import slider1 from '../../../../src/assets/banner/slider-1.jpg'
import slider2 from '../../../../src/assets/banner/slider-2.jpg'
import slider3 from '../../../../src/assets/banner/slider-3.jpg'
import slider4 from '../../../../src/assets/banner/slider-4.jpg'
import slider5 from '../../../../src/assets/banner/slider-5.jpg'

const Banner = () => {
    return (

        <div className="pb-10">
            <AwesomeSlider className="h-[500px]">
                <div data-src={slider1}>
                    <div className="slide-content">
                        <h2>Guitar</h2>
                        <p>The guitar is a versatile musical instrument with a rich sound and wide range of playing styles. From rock and blues to classical and jazz, the guitar has been a staple in various genres of music.</p>
                    </div>
                </div>
                <div data-src={slider2}>
                    <div className="slide-content">
                        <h2>Piano</h2>
                        <p>The piano is a classic instrument that offers a wide range of musical possibilities. Its beautiful sound and expressive capabilities make it a favorite choice for composers and performers alike.</p>
                    </div>
                </div>
                <div data-src={slider3}>
                    <div className="slide-content">
                        <h2>Violin</h2>
                        <p>The violin is a string instrument known for its sweet and soaring tones. It has a long history and is highly regarded for its ability to convey emotions and create beautiful melodies.</p>
                    </div>
                </div>
                <div data-src={slider4}>
                    <div className="slide-content">
                        <h2>Drums</h2>
                        <p>The drums are the heartbeat of the band, providing rhythm and driving the music forward. With their powerful and energetic sound, drums add excitement and intensity to any musical performance.</p>
                    </div>
                </div>
                <div data-src={slider5}>
                    <div className="slide-content">
                        <h2>Flute</h2>
                        <p>The flute is a delicate and melodic instrument that has been used in various musical traditions around the world. Its enchanting sound and versatility make it a popular choice for solo performances and ensemble playing.</p>
                    </div>
                </div>
            </AwesomeSlider>
        </div>

    );
};

export default Banner;