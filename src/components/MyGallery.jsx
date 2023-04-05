import { Component } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";



class MyGallery extends Component {
    state = {
        selectedMovie: null
    };
    render() {
        const { title, movies } = this.props;
        return (
            <Container fluid>
                <h4>{title}</h4>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
                    {movies.map((movie, index) => {
                        console.log(movie);
                        return (
                            <Col xs={12} md={4} className="mb-2 px-1"
                                key={`movie-${index}`}>
                                <Image fluid src={movie.Poster} alt="movie picture" style={{height:"200px", width:"200px"}}/>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        );
    }
}

export default MyGallery;