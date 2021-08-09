import React from 'react';
import { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Todo from './Todo';

function App() {
  return (
    <div>
      <Header></Header>
      <Todo></Todo>
      <Footer></Footer>
    </div>
  );
}

export default App;