import React, { useState } from 'react';
import Header from './Header';
import UseState from './pages/UseState';
import UseEffect from './pages/UseEffect';
import UseContext from './pages/UseContext';
import UseCallback from './pages/UseCallback';
import UseMemo from './pages/UseMemo';
import UseRef from './pages/UseRef';
import UseReducer from './pages/UseReducer';
import Custom from './pages/CustomHook';

const App = () => {
  const pages = [
    { id: 1, label: 'home', comp: <>HOME</> },
    { id: 2, label: 'useState', comp: <UseState /> },
    { id: 3, label: 'useEffect', comp: <UseEffect /> },
    { id: 4, label: 'useContext', comp: <UseContext /> },
    { id: 5, label: 'useCallback', comp: <UseCallback /> },
    { id: 6, label: 'useMemo', comp: <UseMemo /> },
    { id: 7, label: 'useRef', comp: <UseRef /> },
    { id: 8, label: 'useReducer', comp: <UseReducer /> },
    { id: 9, label: 'custom', comp: <Custom /> },
  ];

  const [page, setPage] = useState( pages[0].comp );

  const changePage = page => {
    setPage(page);
  };

  return (
    <div className="App">
      <Header pages={pages} cb={changePage} />
      {page}
    </div>
  );
}

export default App;
