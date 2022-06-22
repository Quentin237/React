import React from "react";
const quizData = require('./quizz.json');

class MainQuiz extends React.Component {
  state = {
    currentQuestion: 0,
    myValue: null,
    answers: [],
    score: 0,
    disabled: true,
    isEnd: false
  };

  loadQuizData = () => {
    // console.log(quizData[0].question)
    this.setState(() => {
      return {
        questions: quizData[this.state.currentQuestion].question,
        value: quizData[this.state.currentQuestion].value,
        answers: quizData[this.state.currentQuestion].answers
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }
  nextQuestionHandler = () => {
    // console.log('test')
    const { myValue, value, score } = this.state;

    if (myValue === value) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quizData[this.state.currentQuestion].question,
          answers: quizData[this.state.currentQuestion].answers,
          value: quizData[this.state.currentQuestion].value
        };
      });
    }
  }
  //check value
  checkvalue = value => {
    this.setState({ myValue: value, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === quizData.length - 1) {
      this.setState({
        isEnd: true
      });
    }
    if (this.state.answers === this.state.value) {
      
      this.setState({
        score: this.state.score + 1
      });
    }
  };
  render() {
    const { answers, myValue, currentQuestion, isEnd } = this.state;

    if (isEnd) {
      return (
        <div className="result">
          <h3>Votre score est {this.state.score} points </h3>
          <div>
            Les bonnes réponses sont :
            <ul>
              {quizData.map((item, index) => (
                <li className="ui floating message answers" key={index}>
                  {item.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>{`Questions ${currentQuestion + 1} sur ${quizData.length } :`}</h1>
          {answers.map(option => (
            <p
              key={option.id}
              className={`ui floating message answers
         ${myValue === option ? "selected" : null}
         `}
              onClick={() => this.checkvalue(option)}
            >
              {option}
            </p>
          ))}
          {currentQuestion < quizData.length - 1 && (
            <button
              className="ui inverted button"
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Suivant 
            </button> 
          )}
          {currentQuestion === quizData.length - 1 && (
            <button 
              className="ui inverted button" 
              onClick={this.finishHandler}
            >
              Terminer
            </button>
          )}
        </div>
      );
    }
  }
}

export default MainQuiz;
