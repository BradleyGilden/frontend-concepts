import React from 'react';
import ReactDOM from 'react-dom/client';
// importing image as component
import bookCover1 from './images/bookcover1.jpg';
import bookCover2 from './images/bookcover2.jpg';
import bookCover3 from './images/bookcover3.jpg';
import bookCover4 from './images/bookcover4.jpg';
import './index.css';

const book1 = {
  title: 'Curious Minds',
  author: 'Jordan Moor',
  img: bookCover1
}

const book2 = {
  title: 'Holly',
  author: 'Stephen King',
  img: bookCover2
}

const book3 = {
  title: 'Dad Jokes',
  author: 'Jimmy Niro',
  img: bookCover3
}

const book4 = {
  title: 'Fourth Wing',
  author: 'Rebecca Yarros',
  img: bookCover4
}

// props
const Book = (props) => {
  return (
    <article className="sm:w-80 w-11/12 bg-white rounded-[30px]">
      <img className="pt-4 w-10/12 mx-auto" src={props.img} alt="cover" />
      <h2 className="text-center px-2 sm:text-lg sm:px-4" >{props.title}</h2>
      {/* we can add some javascript functionality in braces, only expressions are evaluated */}
      <h4 className="text-center text-sm tracking-wider">{props.author.toUpperCase()}</h4>
    </article>
  );
};

function BookList() {
  return (
    <div className="w-full">
      <section className="flex flex-wrap gap-y-6 sm:gap-4 justify-center py-12 px-0 sm:w-10/12 mx-auto">
        <Book img={book1.img} title={book1.title} author={book1.author} />
        <Book img={book2.img} title={book2.title} author={book2.author} />
        <Book img={book3.img} title={book3.title} author={book3.author} />
        <Book img={book4.img} title={book4.title} author={book4.author} />
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
