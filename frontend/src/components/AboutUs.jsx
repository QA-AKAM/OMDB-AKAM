'use strict';
import { Carousel, Alert } from 'react-bootstrap';
import './Carousel.css';

const AboutUs = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="In-The-Heights.jpg"
                        alt="In the heights img"
                        height="600px"

                    />
                    <Carousel.Caption>
                        <h3>In the Heights</h3>
                        <p>American musical drama film based on the stage musical of the same name, by Lin Manuel Miranda.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="Black-Widow.jpg"
                        alt="Black Widow img"
                        height="600px"

                    />

                    <Carousel.Caption>
                        <h3>Black Widow</h3>
                        <p>American superhero film based on the Marvel Comics character of the same name.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="Fast-and-Furious9.jpg"
                        alt="Fast and Furious img"
                        height="600px"

                    />

                    <Carousel.Caption>
                        <h3>Fast and Furious 9</h3>
                        <p>American action film from the Fast and Furious franchise. Sequel to The Fate of the Furious.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br />
            <div align="center">
                <h2> Welcome to AKAM Cinemas!</h2>
                <h3> About Us:</h3>

                <Alert variant="success">
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <p>
                        <p>Founded in 2021, AKAM Cinema is the largest and best-known cinema chain in the QA Community. Since then, the world-famous AKAM Cinema has been owned by the most special talents of Asshwin, Kevin, Alin and Matthew. You are in the presence of greatness. please do Enjoy...</p>
                    </p>
                </Alert>
            </div>
        </div>
    );
}
export default AboutUs