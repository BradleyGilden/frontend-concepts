import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Image = () => <img className="pt-4 w-10/12 mx-auto" src="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/71hwUY5ZmxL._AC_UL600_SR600,400_.jpg" alt="cover" />;
const Title = () => <h2 className="text-center px-2 sm:text-lg sm:px-4" >Interesting Facts For Curious Minds</h2>;
const Author = () => <h4 className="text-center tracking-wide">Jordan Moore</h4>;

const Book = () => {
  return (
    <article className="sm:w-80 w-11/12 bg-white rounded-[30px]">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

function BookList() {
  return (
    <div className="w-full">
      <section className="flex flex-wrap gap-y-6 sm:gap-4 justify-center py-12 px-0 sm:w-10/12 mx-auto">
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
