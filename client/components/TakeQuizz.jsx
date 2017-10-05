class TakeQuizz extends React.Component {
  constructor() {
    super();
    this.state = {
      username: 'Meghana',
      data: [],
      value: '',
      score: 0
    }
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
      // console.log('doing get', response.data)
      this.setState({data: response.data})
      // console.log('stateData', this.state.data)
    })
    .catch((error) => {
      console.log(error, 'err from displayQuizzes')
    })
  }

  render() {
    // console.log(Array.isArray(this.state.data), this.state.data)
    return (
      <div>
        <CreateQuiz/>
        <button onClick={this.displayQuizzes.bind(this)}>Take a Quizz...</button>
        <div>
          <ul>
            {this.state.data.map((singleQuestion) => {
              // console.log(singleQuestion, 'singleQuestion')
              return <Question singleQuestion={singleQuestion}/>
            })}
          </ul>
        </div>
      </div>
    );
  }
}