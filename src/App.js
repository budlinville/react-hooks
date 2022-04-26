import React, { useState } from 'react';
import Header from './Header';
import UseState from './pages/UseState';
import UseEffect from './pages/UseEffect';
import UseContext from './pages/UseContext';

function App() {
  const pages = [
    { id: 1, label: 'home', comp: <>HOME</> },
    { id: 2, label: 'useState', comp: <UseState /> },
    { id: 3, label: 'useEffect', comp: <UseEffect /> },
    { id: 4, label: 'useContext', comp: <UseContext /> }
  ];

  const [page, setPage] = useState( pages[0].comp );

  const changePage = page => {
    setPage(page);
    console.log(page)
  };

  return (
    <div className="App">
      <Header pages={pages} cb={changePage} />
      {page}
    </div>
  );
}

export default App;
