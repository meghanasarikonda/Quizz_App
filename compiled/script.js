'use strict';

var _ReactBootstrap = ReactBootstrap,
    Button = _ReactBootstrap.Button,
    Alert = _ReactBootstrap.Alert,
    Dropdown = _ReactBootstrap.Dropdown;


var App = function App(_ref) {
  var _ref$user = _ref.user,
      user = _ref$user === undefined ? prompt('Enter your name') : _ref$user;

  console.log('window.ReactBootsrap', window.ReactBootstrap);
  return React.createElement(
    'div',
    { className: 'container' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9zY3JpcHQuanMiXSwibmFtZXMiOlsiUmVhY3RCb290c3RyYXAiLCJCdXR0b24iLCJBbGVydCIsIkRyb3Bkb3duIiwiQXBwIiwidXNlciIsInByb21wdCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O3NCQUFvQ0EsYztJQUE1QkMsTSxtQkFBQUEsTTtJQUFRQyxLLG1CQUFBQSxLO0lBQU9DLFEsbUJBQUFBLFE7OztBQUV2QixJQUFNQyxNQUFNLFNBQU5BLEdBQU0sT0FBMEM7QUFBQSx1QkFBdkNDLElBQXVDO0FBQUEsTUFBdkNBLElBQXVDLDZCQUFoQ0MsT0FBTyxpQkFBUCxDQUFnQzs7QUFDcERDLFVBQVFDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ0MsT0FBT1QsY0FBM0M7QUFDQSxTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxRQUFJLFdBQVUsT0FBZDtBQUFBO0FBQThCSyxVQUE5QjtBQUFBO0FBQUEsS0FERjtBQUVFLHdCQUFDLFNBQUQsSUFBVyxVQUFVQSxJQUFyQjtBQUZGLEdBREY7QUFNRCxDQVJEOztBQWFBSyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBekIiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBCdXR0b24sIEFsZXJ0LCBEcm9wZG93biB9ID0gUmVhY3RCb290c3RyYXBcblxuY29uc3QgQXBwID0gKHsgdXNlciA9IHByb21wdCgnRW50ZXIgeW91ciBuYW1lJykgfSkgPT4ge1xuICBjb25zb2xlLmxvZygnd2luZG93LlJlYWN0Qm9vdHNyYXAnLCB3aW5kb3cuUmVhY3RCb290c3RyYXApXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRMZVwiPiBIZWxsbyB7dXNlcn0hIDwvaDE+XG4gICAgICA8VGFrZVF1aXp6IHVzZXJuYW1lPXt1c2VyfS8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiXX0=