import { people } from '../../../data';

const List = () => {
	return (
	<ul>
		{people.map((person) => {
			<li key={person.id}>{person.name}</li>
		})}
	</ul>
	);
}

export default List;
