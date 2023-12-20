import books from './books';

// (props)
const Book = ({ img, title, author, id}) => {
  return (
    <article className="sm:w-80 w-11/12 bg-white rounded-xl">
			<div className='w-10 bg-orange-700 text-white text-center rounded-tl-xl rounded-br-xl absolute text-sm px-3 py-1'>#{id}</div>
      <img className="pt-4 w-10/12 mx-auto" src={img} alt="cover" />
      <h2 className="text-center px-2 sm:text-lg sm:px-4" >{title}</h2>
      {/* we can add some javascript functionality in braces, only expressions are evaluated */}
      <h4 className="text-center text-sm tracking-wider mb-3">{author.toUpperCase()}</h4>
    </article>
  );
};

export default function BookList() {
  // we map book data to the component so it's information gets processed as a prop
  return (
    <div className="w-full">
			<h1 className='text-center text-2xl font-bold mt-4'>Amazon Best Sellers</h1>
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
