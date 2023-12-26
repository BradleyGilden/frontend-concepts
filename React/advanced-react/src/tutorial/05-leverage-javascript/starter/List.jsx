import { people } from '../../../data';

const List = () => {
	return (
	<ul>
		{people.map((person) => {
			<li>{person?.name}</li>
		})}
	</ul>
	);
}

export default List;
