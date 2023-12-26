import { people } from '../../../data';

const List = () => {
	return (
		people.map((person) => {
			<div key={person.id} className='item'>
				<p>{person.name}</p>
			</div>
		})
	);
}

export default List;
