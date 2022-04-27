import React from 'react';


// can use useDebugValue to debug custom hooks in react dev tools
const useRandomNumber = (min, max) => min + Math.floor(Math.random() * (max - min));


const CustomHook = () => {
	const rand = useRandomNumber(1, 10)

	return (
		<>
			<h1>Custom</h1>
			{rand}
		</>
	);
};

export default CustomHook;
