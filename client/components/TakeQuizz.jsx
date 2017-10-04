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
      this.setState({data: response.data})
    })
    .catch((error) => {
      console.log(error, 'err from displayQuizzes')
    })
  }

  handleSubmit (e) {
    e.preventDefault();

  }

  render() {
    return (
      <div>
        <CreateQuiz/>
        <button onClick={this.displayQuizzes.bind(this)}>Take a Quizz...</button>
        <div>{this.state.data.map((singleQuestion) => {
          return (
            <ul>
              <li>{singleQuestion.q}</li>
                <form  onChange={(e) => console.log(e.target.value)} onSubmit={this.handleSubmit.bind(this)}>
                  <input type="radio" value="a" name="answer"/> {singleQuestion.a}
                  <input type="radio" value="b" name="answer"/> {singleQuestion.b}
                  <input type="radio" value="c" name="answer"/> {singleQuestion.c}
                  <input type="radio" value="d" name="answer"/> {singleQuestion.d}
                  <input type="submit" />
                </form>
            </ul>
          )
        })}
        </div>
      </div>
    );
  }
}