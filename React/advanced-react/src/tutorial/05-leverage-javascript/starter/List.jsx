import { people } from '../../../data';

const List = () => {
	return (
	people.map((person) => {
		<h1>{person.name}</h1>
		{console.log(person.name)}
	})
	);
}

export default List;
