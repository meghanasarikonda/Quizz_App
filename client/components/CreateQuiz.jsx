class CreateQuiz extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <div>
        <p>Wanna Create a Quizz?</p>
        <form action="http://localhost:3000/api/quizdata" method="post">
          <input type="text" placeholder="Enter the question" name="question"/>
          <input type="text" placeholder="Enter option a" name="a"/>
          <input type="text" placeholder="Enter option b" name="b"/>
          <input type="text" placeholder="Enter option c" name="c"/>
          <input type="text" placeholder="Enter option d" name="d"/>
          <input type="text" placeholder="Enter correct option" name="answer"/>
          <input type="hidden" name="username" value={this.props.username} />
          <input type="submit"/>
        </form>
      </div>
      </div>
    );
  }
}

window.CreateQuiz = CreateQuiz;

