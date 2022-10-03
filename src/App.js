
import './App.css';
import React from 'react'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Todo from './Components/Todo';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exact path="/" element={<TodoList /> }/>
        <Route exact path="/list/:id" element={<Todo />}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
