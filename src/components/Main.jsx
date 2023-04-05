import { Component } from "react";
import { Container, Button, DropdownButton, Dropdown } from "react-bootstrap";

import MyGallery from "./MyGallery";
import MyFooter from "./MyFooter";

const API_KEY = "8f194417";
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=Harry+Potter`;

class Main extends Component {
    state = {
        movies: []
    };
    fetchMovies= async () =>{
        try {
            console.log(API_URL);
            const response = await fetch(API_URL);
      
            if (response.ok) {
              const data = await response.json();
              console.log("FETCH RESULT: ", data);
              this.setState({ movies:data.Search });
              console.log("SET STATE");
            } 
          } catch (error) {
            console.log(error);
          }
    }

    componentDidMount = () => {
        console.log("COMPONENT DID MOUNT");
        this.fetchMovies();
      };
    

    render() {
        /*const trendingNowMovies = getRandomMovies();
        const watchItAgainMovies = getRandomMovies();
        const newReleasesMovies = getRandomMovies();*/
        return (
            <Container fluid style={{ backgroundColor: "#221f1f" }} className="text-light">
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <h2 className="mb-4">TV Shows</h2>
                        <DropdownButton
                            variant="secondary"
                            size="sm"
                            className="rounded-0 ml-4 mt-1"
                            title="Genres">
                            <Dropdown.Item href="#">Comedy</Dropdown.Item>
                            <Dropdown.Item href="#">Drama</Dropdown.Item>
                            <Dropdown.Item href="#">Thriller</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div>
                        <Button variant="link">
                            <i className="fa fa-th-large icons"></i>
                        </Button>
                        <Button variant="link">
                            <i className="fa fa-th icons"></i>
                        </Button>
                    </div>
                </div>
                <MyGallery title="Trending Now" movies={this.state.movies}  />
                <MyGallery title="Watch it Again" movies={this.state.movies}  />
                <MyGallery title="New Releases" movies={this.state.movies}  />
                <MyFooter />
            </Container>
        );
    }
}

/*function getRandomMovies(movies) {
    console.log(movies);
    const randomMovies = [];
    const usedIndexes = [];

    while (randomMovies.length < 6) {
        const randomIndex = Math.floor(Math.random() * movies.length);
        if (!usedIndexes.includes(randomIndex)) {
            usedIndexes.push(randomIndex);
            randomMovies.push(movies[randomIndex]);
        }
    }

    return randomMovies;
}*/

export default Main;