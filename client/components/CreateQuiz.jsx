class CreateQuiz extends React.Component {
  constructor() {
    super();
    this.state = {text: 'c'}
  }

  postQuizInfo(e) {
    e.preventDefault();
    console.log('first', this.state.text)
    this.setState({text: this.textInput.value}, () => {
      console.log(this.state.text);
    });
  }

  post(e) {
    console.log('gng')
    e.preventDefault();
    var self = this;
    fetch('http://localhost:3000/api/quizinfo', {
      method: 'POST',
      data: {
        question: self.state.text
      }
    })
    .then(function(response) {
      return response
    })
    .then(function(err) {
      console.log(err)
    })
  }

  render() {
    return (
      <div>

        <form onSubmit={this.postQuizInfo.bind(this)}>

          <input
            type="text"
            className="question"
            ref={(input) => {this.textInput = input;}} />
          <button onClick={this.post.bind(this)}>Wanna Create a Quizz?</button>
        </form>

          <h1>{this.state.text}</h1>

      </div>
    );
  }
}

window.CreateQuiz = CreateQuiz;

// ---
// $('input').val()

// 1. set this.textInput.value to the state
// 2. make that input value show on the page on submit
// 3. send that to server /api/quizinfo