class EditQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.singleQuestion.q
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.change = this.change.bind(this);
  }

  handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    console.log(this.textIp.value, 'submitEvent')
    console.log(this.state.text, 'cooo')
    axios.get('/api/delete', {
      params: {
        question: this.state.text
      }
    })
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      'error in deleting the quiz'
    })
  }

  change(e) {
    e.preventDefault();
    this.setState({text: e.target.value});
    console.log(e.target.value, 'e.target.val')
  }

  render() {
    //console.log(this.textIp)
    // console.log('correctOption', this.state.correctOption)
    // console.log('You have selected:', this.state.selectedOption);
    const singleQuestion = this.props.singleQuestion;
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.change} ref={(input) => this.textIp = input}/>
          <button>delete</button>
          </form>
      </div>
    );
  }
}