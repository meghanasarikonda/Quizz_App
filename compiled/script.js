'use strict';

console.log('requirejs', requirejs);
var App = function App(_ref) {
  var _ref$user = _ref.user,
      user = _ref$user === undefined ? prompt('Enter your name') : _ref$user;

  console.log('window', window);
  console.log('window.semanticUIReact', window.semanticUIReact);
  console.log('semanticUIReact', semanticUIReact);
  return React.createElement(
    'div',
    null,
    React.createElement(
      Button,
      { size: 'small', color: 'green' },
      React.createElement(Icon, { name: 'download' }),
      'Download'
    ),
    React.createElement(
      'h1',
      { className: 'titLe' },
      ' Hello ',
      user,
      '! '
    ),
    React.createElement(TakeQuizz, { username: user })
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9zY3JpcHQuanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsInJlcXVpcmVqcyIsIkFwcCIsInVzZXIiLCJwcm9tcHQiLCJ3aW5kb3ciLCJzZW1hbnRpY1VJUmVhY3QiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCQyxTQUF6QjtBQUNBLElBQU1DLE1BQU0sU0FBTkEsR0FBTSxPQUEwQztBQUFBLHVCQUF2Q0MsSUFBdUM7QUFBQSxNQUF2Q0EsSUFBdUMsNkJBQWhDQyxPQUFPLGlCQUFQLENBQWdDOztBQUNwREwsVUFBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JLLE1BQXRCO0FBQ0FOLFVBQVFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ0ssT0FBT0MsZUFBN0M7QUFDQVAsVUFBUUMsR0FBUixDQUFZLGlCQUFaLEVBQStCTSxlQUEvQjtBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxZQUFEO0FBQUEsUUFBUSxNQUFLLE9BQWIsRUFBcUIsT0FBTSxPQUEzQjtBQUNJLDBCQUFDLElBQUQsSUFBTSxNQUFLLFVBQVgsR0FESjtBQUFBO0FBQUEsS0FERjtBQUtFO0FBQUE7QUFBQSxRQUFJLFdBQVUsT0FBZDtBQUFBO0FBQThCSCxVQUE5QjtBQUFBO0FBQUEsS0FMRjtBQU1FLHdCQUFDLFNBQUQsSUFBVyxVQUFVQSxJQUFyQjtBQU5GLEdBREY7QUFVRCxDQWREOztBQW1CQUksU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQXpCIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdyZXF1aXJlanMnLCByZXF1aXJlanMpXG5jb25zdCBBcHAgPSAoeyB1c2VyID0gcHJvbXB0KCdFbnRlciB5b3VyIG5hbWUnKSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKCd3aW5kb3cnLCB3aW5kb3cpXG4gIGNvbnNvbGUubG9nKCd3aW5kb3cuc2VtYW50aWNVSVJlYWN0Jywgd2luZG93LnNlbWFudGljVUlSZWFjdClcbiAgY29uc29sZS5sb2coJ3NlbWFudGljVUlSZWFjdCcsIHNlbWFudGljVUlSZWFjdClcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEJ1dHRvbiBzaXplPSdzbWFsbCcgY29sb3I9J2dyZWVuJz5cbiAgICAgICAgICA8SWNvbiBuYW1lPSdkb3dubG9hZCcgLz5cbiAgICAgICAgICBEb3dubG9hZFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRMZVwiPiBIZWxsbyB7dXNlcn0hIDwvaDE+XG4gICAgICA8VGFrZVF1aXp6IHVzZXJuYW1lPXt1c2VyfS8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiXX0=