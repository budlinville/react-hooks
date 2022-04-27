import React, { useContext } from 'react';

import { CountContext } from './UseContext';

const UseContext = () => {
	const count = useContext(CountContext);
	return (
		<>
			<div style={{ backgroundColor: 'yellow' }}>
				{count}
			</div>

		</>
	);
};

export default UseContext;
