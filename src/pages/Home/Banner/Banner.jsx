import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
    return (
        <AwesomeSlider>
      <div data-src="slide1.jpg">
        <div className="slide-content">
          <h2>Guitar</h2>
          <p>The guitar is a versatile musical instrument with a rich sound and wide range of playing styles. From rock and blues to classical and jazz, the guitar has been a staple in various genres of music.</p>
        </div>
      </div>
      <div data-src="slide2.jpg">
        <div className="slide-content">
          <h2>Piano</h2>
          <p>The piano is a classic instrument that offers a wide range of musical possibilities. Its beautiful sound and expressive capabilities make it a favorite choice for composers and performers alike.</p>
        </div>
      </div>
      <div data-src="slide3.jpg">
        <div className="slide-content">
          <h2>Violin</h2>
          <p>The violin is a string instrument known for its sweet and soaring tones. It has a long history and is highly regarded for its ability to convey emotions and create beautiful melodies.</p>
        </div>
      </div>
      <div data-src="slide4.jpg">
        <div className="slide-content">
          <h2>Drums</h2>
          <p>The drums are the heartbeat of the band, providing rhythm and driving the music forward. With their powerful and energetic sound, drums add excitement and intensity to any musical performance.</p>
        </div>
      </div>
      <div data-src="slide5.jpg">
        <div className="slide-content">
          <h2>Flute</h2>
          <p>The flute is a delicate and melodic instrument that has been used in various musical traditions around the world. Its enchanting sound and versatility make it a popular choice for solo performances and ensemble playing.</p>
        </div>
      </div>
    </AwesomeSlider>
    );
};

export default Banner;