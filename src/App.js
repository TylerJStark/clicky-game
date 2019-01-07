import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import friends from "./friends.json";
import "./App.css";

function randFriends(array) {
    for (let i = array.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

class App extends Component {
    state = {
        friends,
        score: 0,
        highScore: 0,
        rightWrong: "",
        clicked: []
    };

    charClick = id => {
        if (this.state.clicked.indexOf(id) === -1) {
            this.increment();
            this.setState({clicked: this.state.clicked.concat(id)});
        } else {
            this.reset();
        }
    };

    increment = () => {
        const newScore = this.state.score + 1;
        this.setState({
            score: newScore,
            rightWrong: ""
        });
        if (newScore >= this.state.highScore) {
            this.setState({highScore: newScore});
        } else if (newScore === 12) {
            this.setState({rightWrong: "You win!"});
        }
        this.shuffle();
    };

    reset = () => {
        this.setState({
            score: 0,
            highScore: this.state.highScore,
            rightWrong: "",
            clicked: []
        });
        this.shuffle();
    };

    shuffle = () => {
        let randFriend = randFriends(friends);
        this.setState({friends: randFriend});
    };

    render() {
        return (
            <Wrapper>
              <Nav
                title="Clicky Game"
                score={this.state.score}
                highScore={this.state.highScore}
                rightWrong={this.state.rightWrong}
              />
       
              <Title>
                Try to click on each character, but don't hit any duplicates!
              </Title>
       
              <Container>
                <Row>
                  {this.state.friends.map(friend => (
                    <Column size="md-3 sm-6">
                      <FriendCard
                        key={friend.id}
                        charClick={this.charClick}
                        increment={this.increment}
                        reset={this.reset}
                        shuffle={this.shuffle}
                        id={friend.id}
                        image={friend.image}
                      />
                    </Column>
                  ))}
                </Row>
              </Container>
            </Wrapper>
          );
    }
}

export default App;