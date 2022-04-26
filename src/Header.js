import React from 'react';

const Header = ({ pages, cb }) => {
	return (
		<div className='header'>
			{pages.map(pageItem => (
				<h3 className='headerItem' key={pageItem.id} onClick = { () => cb(pageItem.comp) }>{pageItem.label}</h3>
			))}
		</div>
	);
};

export default Header;