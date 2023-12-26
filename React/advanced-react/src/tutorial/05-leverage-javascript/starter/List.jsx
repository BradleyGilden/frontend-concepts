import { people } from '../../../data';
import Person from './Person';

const List = () => {
  return (
      people.map((person) => (
        <div key={person.id} className='item'>
          <Person person={person} />
        </div>
      ))
  );
}

export default List;
