import React from 'react';

const Header = ({ pages, cb }) => {
	return (
		<div id='header'>
			{pages.map(pageItem => (
				<h3 id='headerItem' key={pageItem.id} onClick = { () => cb(pageItem.comp) }>{pageItem.label}</h3>
			))}
		</div>
	);
};

export default Header;