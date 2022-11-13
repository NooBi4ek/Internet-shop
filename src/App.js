import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Allphone from './components/Phone/AllPhone/Allphone';
import Modalbusket from './components/Busket/Modalbusket';
import One_phone_info from '../src/components/Phone/OnePhone/One_phone_info';
import Search from './components/Search/Search';

const App = () => {
  const [modal, Setmodal] = useState(false);
  const [modalsearch, Setmodalsearch] = useState(false);
  return (
    <div>
      <Search modalsearch={modalsearch} Setmodalsearch={Setmodalsearch} />
      <Modalbusket modal={modal} Setmodal={Setmodal} />
      <Routes>
        <Route path="/:id" element={<One_phone_info />} />
        <Route
          path="/"
          element={
            <Allphone Setmodal={Setmodal} Setmodalsearch={Setmodalsearch} />
          }
        />
      </Routes>
    </div>
  );
};
export default App;
