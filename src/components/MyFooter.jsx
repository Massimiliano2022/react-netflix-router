import { Container, Row, Col, Button } from "react-bootstrap";


const MyFooter = () => {
    return (
        <footer className="text-light" style={{ backgroundColor: "#221f1f" }}>
            <Container fluid>
                <Row className="text-center mt-5">
                    <Col xs={6} className="offset-3">
                        <Row>
                            <Col xs={12} className="text-left mb-2">
                                <a href="#">Facebook</a>
                                <a href="#">Instagram</a>
                                <a href="#">Twitter</a>
                                <a href="#">YouTube</a>
                            </Col>
                        </Row>
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
                            <Col>
                                <Row>
                                    <Col xs={12}>
                                        <a href="#">Audio and Subtitles</a>
                                        <a href="#">Media Center</a>
                                        <a href="#">Privacy</a>
                                        <a href="#">Contact us</a>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col xs={12}>
                                        <a href="#">Audio Description</a>
                                        <a href="#">Investor Relations</a>
                                        <a href="#">Legal Notices</a>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col xs={12}>
                                        <a href="#">Help Center</a>
                                        <a href="#">Jobs</a>
                                        <a href="#">Cookie Preferences</a>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col xs={12}>
                                        <a href="#">Gift Cards</a>
                                        <a href="#">Terms of Use</a>
                                        <a href="#">Corporate Information</a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} className="text-left mb-2">
                                <Button variant="secondary" size="sm" className="rounded-0 mt-3">
                                    Service Code
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} className="text-left mb-2 mt-2">
                                © 1997-2022 Netflix, Inc.
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default MyFooter;