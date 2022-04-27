import React, { useReducer } from 'react';

const UseReducer = () => {
	const reducer = (state, action) => {
		switch (action.type) {
			case 'click': 
				return { count: state.count + 1 };
			default:
				throw new Error();
		}
	};

	let [state, dispatch] = useReducer(reducer, { count: 0 });

	return (
		<>
			<h1>Reducer Counter</h1>
			<button onClick={ () => dispatch({ type: 'click' }) }>CLICK ME</button>
			{state.count}
		</>
	);
};

export default UseReducer;
