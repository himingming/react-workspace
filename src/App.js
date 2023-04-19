import React, {useState} from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';
//1.인풋창이 있고 버튼이 있다.
//2.인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가된다.
//3.아이템 삭제버튼을 누르면 삭제가 가능하다.
function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])
  const addItem = () =>{
    setTodoList([...todoList,inputValue])
  }
  const delItem = () =>{
    setTodoList([...todoList])
  }
  return (
    <main>
      <input value={inputValue} type='text' onChange=
      {(event)=>setInputValue(event.target.value)}/>
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList}/>
      <button onClick={delItem}>삭제</button>
    </main>
  );
}

export default App;
