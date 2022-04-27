import React, { useState } from 'react';

const UseState = () => {
	let [count, setCount] = useState(0);

	return (
		<>
			<h1>State Counter</h1>
			<button onClick={ () => setCount(c => ++c) }>CLICK ME</button>
			{count}
		</>
	);
};

export default UseState;
