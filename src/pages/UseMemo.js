import React, { useState, useMemo } from 'react';

const UseMemo = () => {
	let [count, setCount] = useState(2);

	// will memoize a value that was maybe expensive to calculate
	// only changes when its list of dependencies change
	const memoizedValue = useMemo(() => {
		console.log(count);
		return count ** 2 ** 2;
	}, [count]);

	return (
		<>
			<h1>Memo Counter</h1>
			<button onClick={ () => setCount(c => ++c) }>CLICK ME</button>
			<br />
			{count}
			<br />
			{memoizedValue}
		</>
	);
};

export default UseMemo;
