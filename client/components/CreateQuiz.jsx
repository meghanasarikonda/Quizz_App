class CreateQuiz extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      username: 'Meghana',
      quizScores: [],
      userQuiz: [
        {
          Q: 'what time is it?',
          A: '12',
          B: '1',
          C: '2',
          D: '3'
        },
        {
          Q: 'what day is it?',
          A: '12',
          B: '1',
          C: '2',
          D: '3'
        },
      ]
    }
  }

  postQuizInfo(e) {
    e.preventDefault();
    console.log('first', this.state.text)
    this.setState({text: this.textInput.value}, () => {
      console.log(this.state.text);
    });
  }

   post(e) {
    console.log('axioss')
    console.log('gng')
    e.preventDefault();
    var self = this;
    console.log('selfText', self.state.text)
    axios.post('http://localhost:3000/api/quizinfo', {
      "question": self.state.text
    })
    .then(function(response) {
      console.log(response.data, 'postResponseSuccess')
      return response.data;
    })
    .catch(err => console.error)
    .then(function(result) {
      console.log('responseFrom.then', result)
      var data = {
        params: {
          username: self.state.username
        }
      }
      axios.get('http://localhost:3000/api/quizinfo', data)
      .then(function(response) {
        console.log('get response', response);
        self.setState({quizScores: response.data})
        return response
      })
      .catch(function(err) {
        console.log(err)
      })
    })
   }

  render() {
    console.log(2)
    return (
      <div>
        {console.log(3)}
        <form onSubmit={this.postQuizInfo.bind(this)}>

          <input
            type="text"
            className="question"
            ref={(input) => {this.textInput = input;}} />
          <button onClick={this.post.bind(this)}>Wanna Create a Quizz?</button>
        </form>
        <div>{this.state.userQuiz.map((question) => {
          return (
            <li>{question.Q}</li>
            )
        })}</div>

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