import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Container, Card, CardBody, Row, Col, Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Icon from './Components/Icon';
import './App.css';

let ttt = new Array(9).fill("");

class App extends React.Component{
  state = {isCross: '', winMsg: ""};

  mark = (c) => {
    (c === "X")? this.setState({isCross: true}) : this.setState({isCross: false}) 
  }

  playAgain = () => {
    this.setState({isCross: '', winMsg: ''});
    ttt.fill("");
  }

  checkWin = () => {
    if(ttt[0] && ttt[0] === ttt[1] && ttt[0] === ttt[2]){
      this.setState({winMsg: ttt[0] + " has won."});
      return toast(ttt[0] + " has won.", {type: "success"});
    }
    else if(ttt[3] && ttt[3] === ttt[4] && ttt[3] === ttt[5]){
      this.setState({winMsg: ttt[3] + " has won."});
      return toast(ttt[3] + " has won.", {type: "success"});
    }
    else if(ttt[6] && ttt[6] === ttt[7] && ttt[6] === ttt[8]){
      this.setState({winMsg: ttt[6] + " has won."});
      return toast(ttt[6] + " has won.", {type: "success"});
    }
    else if(ttt[0] && ttt[0] === ttt[3] && ttt[0] === ttt[6]){
      this.setState({winMsg: ttt[0] + " has won."});
      return toast(ttt[0] + " has won.", {type: "success"});
    }
    else if(ttt[1] && ttt[1] === ttt[4] && ttt[1] === ttt[7]){
      this.setState({winMsg: ttt[1] + " has won."});
      return toast(ttt[1] + " has won.", {type: "success"});
    }
    else if(ttt[2] && ttt[2] === ttt[5] && ttt[2] === ttt[8]){
      this.setState({winMsg: ttt[2] + " has won."});
      return toast(ttt[2] + " has won.", {type: "success"});
    }
    else if(ttt[0] && ttt[0] === ttt[4] && ttt[0] === ttt[8]){
      this.setState({winMsg: ttt[0] + " has won."});
      return toast(ttt[0] + " has won.", {type: "success"});
    }
    else if(ttt[2] && ttt[2] === ttt[4] && ttt[2] === ttt[6]){
      this.setState({winMsg: ttt[2] + " has won."});
      return toast(ttt[2] + " has won.", {type: "success"});
    }
    else if(ttt[0] !== "" && ttt[1] !== "" && ttt[2] !== "" && ttt[3] !== "" && ttt[4] !== "" && ttt[5] !== "" && ttt[6] !== "" && ttt[7] !== "" && ttt[8] !== ""){
      this.setState({winMsg: "Game Draw. Play Again."});
      return toast("Game Draw. Play Again.", {type: "warning"});
    }
    
  }

  chance = (index) => {
    if(this.state.winMsg){
      return toast("Game Completed", {type: "warning"});
    }
    if(ttt[index] === ""){
      ttt[index] = (this.state.isCross)? "X" : "O";
      this.setState({isCross: !this.state.isCross});
    }
    else{
      return toast('Place has already occupied', {type: "error"});
    }
    console.log(ttt);
    this.checkWin()
    
  }
  render(){
    return(
      <div className="App">
        <Container>
          {this.state.isCross === "" ? (
            <Row className="mt-5 mb-2">
              <Col md={3}></Col>
              <Col md={6}>
              <Alert color="info"><h3>Select Your Mark:</h3></Alert>
                <Button color="primary" size="lg" className="m-5" onClick={() => {this.mark('X')}}>
                  <Icon choice="X" />
                </Button>
                <Button color="primary" size="lg" className="m-5" onClick={() => {this.mark('O')}}>
                  <Icon choice="O" />
                </Button>
              </Col>
              <Col md={3}></Col>
            </Row>
          ) : (
            
            <Row className="mt-5 mb-2">
              <ToastContainer position="bottom-center"></ToastContainer>
              <Col md={6} className="offset-md-3">
                {
                  this.state.winMsg ? (
                    <div>
                      <Alert color="success">{this.state.winMsg}</Alert>
                      <Button className="btn-primary" onClick={this.playAgain}>Play Again</Button>
                    </div>
                  ) : (
                    <Alert color="info">
                      <h1>{this.state.isCross? "'X' Turn": "'O' Turn"}</h1>
                    </Alert>
                  )
                }
                <div className="grid">
                  {ttt.map((value, index) => (
                    <Card key={index} onClick={() => this.chance(index)}>
                      <CardBody className="box">
                        <Icon choice={ttt[index]}></Icon>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    );
  }
}



export default App;
