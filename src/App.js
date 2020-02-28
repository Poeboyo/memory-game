import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Container from "./components/Container";
import Title from "./components/Title";
import Row from "./components/Row";
import Witcher from "./components/Witcher";
import Col from "./components/Col";
import witchercard from "./witchercard.json";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    witchercard,
    message: "Click a Character to Start",
    score: 0,
    topScore: 0
  };

  style = { backgroundImage: `url(require("./imgs/witcherSchools.png"))` };

  shuffleImages = () => {
    console.log(this.state.witchercard);
    this.setState({
      witchercard: this.state.witchercard.sort(() => Math.random() - 0.5)
    });
  };

  componentDidMount() {
    this.shuffleImages();
  }

  imageClick = (id, name, clicked) => {
    const witcherImages = this.state.witchercard;

    witcherImages.forEach(witcher => {
      if (witcher.id === id && witcher.clicked) {
        witcherImages.forEach(element => {
          element.clicked = false;
        });
        this.setState({
          message:
            "Sorry - You Already Clicked That Character. Better Luck Next Time...",
          score: 0
        });
      } else if (witcher.id === id && !witcher.clicked) {
        witcher.clicked = true;
        this.setState({
          message: "Great Choice!",
          score: this.state.score + 1,
          topScore:
            this.state.score + 1 > this.state.topScore
              ? this.state.score + 1
              : this.state.topScore
        });
      }
    });

    if (this.state.score + 1 === witcherImages.length) {
      this.setState({
        message: "You won! Play again!",
        score: 0,
        topScore: 0
      });
    }

    this.shuffleImages();
  };

  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <Title
            message={this.state.message}
            score={this.state.score}
            topscore={this.state.topScore}
          ></Title>
          <Row>
            {this.state.witchercard.map(character => (
              <Col size="sm">
                <Witcher
                  id={character.id}
                  key={character.id}
                  name={character.name}
                  image={character.image}
                  shuffle={this.shuffleImages}
                  imageClick={this.imageClick}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
