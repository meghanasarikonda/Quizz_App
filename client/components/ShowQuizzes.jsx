class ShowQuizzes extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.showCreatedQuiz = this.showCreatedQuiz.bind(this);
  }

  showCreatedQuiz (e) {
    e.preventDefault();
    axios.get('/api/createdQuizzes', {
      params: {
        username: this.props.username
      }
    })
    .then(result => {
      this.setState({data: result.data})
    })
    .catch(err => {
      console.log('err in get request of createdQuizzes')
    })
  }

  render() {
    return (
      <div>
        <button className="showCreatedQuiz" onClick={this.showCreatedQuiz}> Show Created Quizzes </button>
        <div>
          {this.state.data.map((question) =>
            <EditQuestion singleQuestion={question}/>
          )}
        </div>
      </div>
    )
  }
}

window.ShowQuizzes = ShowQuizzes;