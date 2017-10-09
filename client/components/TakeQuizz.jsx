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
    axios.get('/api/quizzes', {
      params: {
        username: self.state.username
      }
    })
    .then((response) => {
      if(response.data.length === 0) {
        alert('Hey, currently there are no quizzes, do u wanna create one?')
      }
      this.setState({data: response.data})
    })
    .catch((error) => {
      console.log(error, 'err from displayQuizzes')
    })
  }

  updateScore () {
    this.setState({score: this.state.score + 1})
  }

  displayScores() {
    alert('You got ' + this.state.score + 'points');
    axios.post('/api/userscores', {
      score: this.state.score,
      username: this.state.username
    })
    .then(response => {
      console.log('response from userscores post', response)
      console.log('done');
    })
    .catch(err => {
      console.log(err, 'error in posting scores');
    })
  }

  render() {
    return (
      <div>
        <CreateQuiz username={this.props.username}/>
        <button className="takequizbtn" onClick={this.displayQuizzes}>Take a Quizz...</button>
        <ShowQuizzes username={this.state.username}/>
        <button className="DoneBtn" onClick={this.displayScores}>Done!</button>
        <div>
          {this.state.data.map((singleQuestion) => {
            return <Question singleQuestion={singleQuestion} updateScore={this.updateScore}/>
          })}
        </div>
      </div>
    );
  }
}