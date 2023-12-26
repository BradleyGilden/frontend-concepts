import { people } from '../../../data';

const List = () => {
	return (
    <div>
		people.map((person) => {
			<div key={person.id} className='item'>
				<p>{person.name}</p>
			</div>
    </div>
	);
}

export default List;
