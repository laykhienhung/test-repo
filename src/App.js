import ToDoList from "./component/ToDoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button/new";
import { useCallback, useEffect, useState } from "react";
import { v4 } from 'uuid';

function App() {
  // state , props
  // const [todoList, setTodoList] = useState([]);
  // const [textInput, setTextInput] = useState("");

  // const onTextInputChange = useCallback((e) => {
  //   setTextInput(e.target.value);
  // }, []);

  // const onAddBtnClick = () => {
  //   // them text input vao danh sach todoList
  //   setTodoList([
  //     { id: v4(), name: textInput, isCompleted: false }, 
  //     ...todoList]);
  //   setTextInput("");
  // };

  // const onCheckBtnClick = useCallback((id) => {
  //   setTodoList(prevState => prevState.map(todo => todo.id === id ? {...todo, isCompleted: true} : todo))
  // }, [])

  // return (
  //   <>
  //     <h3>This is todo ToDoList</h3>
  //     <Textfield name="add-todo" placeholder="Thêm việc cần làm" elemAfterInput={
  //       <Button
  //         style={{"padding": "5px"}}
  //         isDisabled={!textInput}
  //         appearance="primary"
  //         onClick={() => onAddBtnClick()}
  //       >
  //         Thêm
  //       </Button>
  //     }
  //       css={{ padding: "2px 4px 2px" }}
  //       value={textInput}
  //       onChange={onTextInputChange}
  //     ></Textfield>
  //     <ToDoList todoList = {todoList} onCheckBtnClick = {onCheckBtnClick}/>
  //   </>
  // );

  const [count, setCount] = useState(0);
  const [action, setAction] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    console.log('useEffect');
    return () => {
      console.log('use effect - count - clean up');
    }
  }, [count]);

  useEffect(() => {
    fetch(`https://reqres.in/api/${action}`)
    .then((res) =>{
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [action]);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
    })
    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, []);
  return(
    <>
      <div style={{height: '3000px'}}>
          <p> Click {count} times</p>
          <button onClick={() => setCount(count+1)}>Click me</button>
          <button onClick={() => setAction('click1')}>Click 1</button>
          <button onClick={() => setAction('click2')}>Click 2</button>

          <p style={{position: 'fixed', bottom: '20px', left: '20px'}}>{scrollPosition}</p>
      </div>
    </>
  )
}

export default App;
