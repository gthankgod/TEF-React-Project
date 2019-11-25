import React, { Fragment } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Modals from './components/Modals';
import PageContent from './PageContent';


function App() {
  return (
    <Fragment>
      <div className="d-flex" id="wrapper">
        <Sidebar />
        <PageContent />
      </div>
      <Modals />
    </Fragment>

  );
}

export default App;
