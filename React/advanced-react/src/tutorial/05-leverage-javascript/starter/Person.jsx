const Person = (person) => {
	return (
		<div key={person.id} className='item'>
			<h4>{person.name}</h4>
			<p>{person?.nickName ?? ''}</p>
			<img src={person?.images[0]?.small?.url ?? ''}></img>
		</div>
	);
}

export default Person;
