import { people } from '../../../data';

const List = () => {
	return (
	people.map((person) => {
		<h1>{person.name}</h1>
	})
	);
}

export default List;
