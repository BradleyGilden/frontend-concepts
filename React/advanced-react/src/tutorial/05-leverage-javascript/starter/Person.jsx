const Person = (person) => {
	return (
		<div key={person.id} className='item'>
			<h4>{person.name}</h4>
			<img src={}></img>
		</div>
	);
}
