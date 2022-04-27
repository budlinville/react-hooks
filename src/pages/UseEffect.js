import React, { useEffect, useState } from 'react';

const UseEffect = () => {
	let [count, setCount] = useState(0);
	let [stars, setStars] = useState('*');

	useEffect(() => {
		setStars(s => s + '*')
		return( () => console.log('Use Effect unmounted') );
	}, [count, setStars]);

	return (
		<>
			<h1>State Counter</h1>
			<button onClick={ () => setCount(++count) }>CLICK ME</button>
			{count}
			{stars}
		</>
	);
};

export default UseEffect;
