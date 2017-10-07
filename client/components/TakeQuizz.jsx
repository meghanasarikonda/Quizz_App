class TakeQuizz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      data: [],
      value: '',
      score: 0
    }
    this.updateScore = this.updateScore.bind(this);
    this.displayQuizzes = this.displayQuizzes.bind(this);
    this.displayScores = this.displayScores.bind(this);
  }

  displayQuizzes (e) {
    e.preventDefault();
    var self = this;
    console.log(self.state.username)
    axios.get('/api/quizzes', {
      params: {
        username: self.state.username
      }
    })
    .then((response) => {
      // console.log('doing get', response.data)
      // console.log('........>responseFromTakeQuizz', response, '<............')
      this.setState({data: response.data})
      // return (
      //   <button>hi</button>
      // );
      // console.log('stateData', this.state.data)
    })
    .catch((error) => {
      console.log(error, 'err from displayQuizzes')
    })
  }

  updateScore () {
    this.setState({score: this.state.score + 1})
  }

  displayScores() {
    alert('Your score is ' + this.state.score);
    axios.post('/api/userscores', {
      score: this.state.score,
      username: this.state.username
    })
    .then(response => {
      console.log('done');
    })
    .catch(err => {
      console.log(err, 'error in posting scores');
    })
  }

  render() {
    // console.log(Array.isArray(this.state.data), this.state.data)
    // console.log(this.state.score)
    return (
      <div>
        <CreateQuiz username={this.props.username}/>
        <button onClick={this.displayQuizzes}>Take a Quizz...</button>
        <button onClick={this.displayScores}>Done!</button>
        <div>
          {this.state.data.map((singleQuestion) => {
            // console.log(singleQuestion, 'singleQuestion')
            return <Question singleQuestion={singleQuestion} updateScore={this.updateScore}/>
          })}
        </div>
      </div>
    );
  }
}