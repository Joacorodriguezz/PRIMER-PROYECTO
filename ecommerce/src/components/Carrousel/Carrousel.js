import Carousel from 'react-bootstrap/Carousel';
import "./Carrousel.css";
function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="imagenes"
          src="https://i.ytimg.com/vi/Uhfzyfe7nT0/maxresdefault.jpg"
          alt="First slide"
         
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagenes"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/samsung-galaxy-s22-1644416200.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagenes"
          src="https://armoto.vtexassets.com/arquivos/Motorola-edge30Ultra-Camera-lens-overview-.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;