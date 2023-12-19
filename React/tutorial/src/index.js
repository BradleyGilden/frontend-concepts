import React from 'react';
import ReactDOM from 'react-dom/client';
// importing image as component
import bookCover1 from './images/bookcover1.jpg';
import bookCover2 from './images/bookcover2.jpg';
import bookCover3 from './images/bookcover3.jpg';
import bookCover4 from './images/bookcover4.jpg';
import './index.css';

const books = [
  {
    title: 'Curious Minds',
    author: 'Jordan Moor',
    img: bookCover1,
    id: 1
  },
  {
    title: 'Holly',
    author: 'Stephen King',
    img: bookCover2,
    id: 2
  },
  {
    title: 'Dad Jokes',
    author: 'Jimmy Niro',
    img: bookCover3,
    id: 3
  },
  {
    title: 'Fourth Wing',
    author: 'Rebecca Yarros',
    img: bookCover4,
    id: 4
  }
]

// (props)
const Book = ({ img, title, author }) => {
  return (
    <article className="sm:w-80 w-11/12 bg-white rounded-[30px] px-3">
      <img className="pt-4 w-10/12 mx-auto" src={img} alt="cover" />
      <h2 className="text-center px-2 sm:text-lg sm:px-4" >{title}</h2>
      <button className="bg-slate-300 px-3 py-1 block mx-auto my-1 hover:bg-slate-800 hover:text-white text-sm" onClick={() => {console.log(title)}}>Display Title</button>
      {/* we can add some javascript functionality in braces, only expressions are evaluated */}
      <h4 className="text-center text-sm tracking-wider">{author.toUpperCase()}</h4>
    </article>
  );
};

function BookList() {
  // we map book data to the component so it's information gets processed as a prop
  return (
    <div className="w-full">
      <section className="flex flex-wrap gap-y-6 sm:gap-4 justify-center py-12 px-0 sm:w-10/12 mx-auto">
        {/* this is possible because React expands a lists contents onto the DOM */}
        {books.map((book) => {
          return <Book {...book} key={book.id}/>
        })
      }
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
