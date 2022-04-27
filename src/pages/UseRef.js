import React, { useRef, useEffect } from 'react';

const UseRef = () => {
	const myButton = useRef(null);

	// Pretty much just used for grabbing an HTML element
	// Note that it does not trigger a re-render when its value changes
	console.log('Initially', myButton)

	useEffect(() => {
		console.log('After first render', myButton);
	}, [myButton])

	return (
		<>
			<h1>Ref</h1>
			<button ref={myButton}>CLICK ME</button>
		</>
	);
};

export default UseRef;
