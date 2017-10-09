const { Button, Alert, Dropdown } = ReactBootstrap

const App = ({ user = prompt('Enter your name') }) => {
  console.log('window.ReactBootsrap', window.ReactBootstrap)
  return (
    <div className="container">
      <h1 className="titLe"> Hello {user}! </h1>
      <TakeQuizz username={user}/>
    </div>
  );
}




ReactDOM.render(<App />, document.getElementById('root'));