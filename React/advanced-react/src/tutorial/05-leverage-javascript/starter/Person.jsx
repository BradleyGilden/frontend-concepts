import avatar from '../../../assets/default-avatar.svg';

const Person = ({person}) => {
	return (
		<div key={person.id} className='item'>
			<h4>{person.name}</h4>
			{/* conditional returns */}
			<p>{ person.nickName && ('Nickname: ' + person?.nickName ?? '')}</p>
			<img alt={ name } style={{ width: '60px', marginBottom: '0px', marginTop: '1rem' }} src={person?.images?.[0]?.small?.url ?? avatar }></img>
		</div>
	);
}

export default Person;
