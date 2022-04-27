import React, { createContext, useState } from 'react';

import Child from './UseContextChild';


export const CountContext = createContext(1);


const UseContext = () => {
	let [count, setCount] = useState(0);

	return (
		<CountContext.Provider value={count}>
			<button onClick={ () => setCount(++count) }>CLICK ME</button>
			<h1>Context</h1>
			<Child />
		</CountContext.Provider>
	);
};

export default UseContext;
