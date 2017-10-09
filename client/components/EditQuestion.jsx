class EditQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevQuestion: this.props.singleQuestion.q,
      text: this.props.singleQuestion.q
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.change = this.change.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    console.log(this.textIp.value, 'submitEvent')
    console.log(this.state.text, 'cooo')
    axios.get('/api/delete', {
      params: {
        question: this.state.prevQuestion
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

  handleUpdate(e) {
    e.preventDefault()
    axios.post('/api/update', {
      question: this.state.text,
      prevQuestion: this.state.prevQuestion
    })
    .then(result => {
      console.log('result after updation', result)
    })
  }

  render() {
    //console.log(this.textIp)
    // console.log('correctOption', this.state.correctOption)
    // console.log('You have selected:', this.state.selectedOption);
    const singleQuestion = this.props.singleQuestion;
    return (
      <div>
          <form>
          <input type="text" value={this.state.text} onChange={this.change} ref={(input) => this.textIp = input}/>
          <button onClick={this.handleUpdate}>update</button>
          <button onClick={this.handleSubmit}>delete</button>
          </form>
      </div>
    );
  }
}