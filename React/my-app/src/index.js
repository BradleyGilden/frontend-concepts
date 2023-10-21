import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting () {
  //can't return adjacent elements unless enclosed in react fragment: <> </> OR
  // <React.Fragment></React.Fragment>
  return (
  <>
    <h2>Adacent Header</h2>
    <ul>
      <li><a href='https://youtube.com'>youtube link</a></li>
      <li><a href='https://github.com'>github link</a></li>
    </ul>
  </>
  );
}
// function Greeting () {
//   return React.createElement('h2', {}, 'Hello World')
// }

// you can nest components
function Nested() {
  return (
    <div>
      <Greeting />
      <Message />
    </div>
  );
}

const Message = () => <p>this is a message</p>;

// setting up javascript entry point
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Nested />)
