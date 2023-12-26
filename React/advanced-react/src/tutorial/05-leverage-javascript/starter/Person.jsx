import avatar from '../../../assets/default-avatar.svg';

const Person = ({person}) => {
	return (
		<div key={person.id} className='item'>
			<h4 style={{  marginBottom: '0px' }}>{person.name}</h4>
			{/* conditional returns */}
			<p style={{  marginBottom: '1rem' }}>{ person.nickName && ('Nickname: ' + person?.nickName ?? '')}</p>
			<img alt={ name } style={{ width: '60px', marginBottom: '2rem' }} src={person?.images?.[0]?.small?.url ?? avatar }></img>
		</div>
	);
}

export default Person;
