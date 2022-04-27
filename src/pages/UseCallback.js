import React, { useCallback, useState } from 'react';

const UseCallback = () => {
	let [count, setCount] = useState(0);

	// Memoizes an entire function until one of its dependencies change
	// Typically used when passing same function to multiple children
	// Will prevent unnecessary re-renders of the child since it will always use the same function object
	// Now, even when this [parent] component re-renders, the same function object gets passed to the children
	const setSuperCount = useCallback(() => {
		return count ** 2;
	}, [count])

	return (
		<>
			<h1>Callback Counter</h1>
			<button onClick={ () => setCount(c => ++c) }>CLICK ME</button>
			<ul>
				<li cb={setSuperCount}>1</li>
				<li cb={setSuperCount}>2</li>
				<li cb={setSuperCount}>3</li>
				<li cb={setSuperCount}>4</li>
				<li cb={setSuperCount}>5</li>
			</ul>
		</>
	);
};

export default UseCallback;
