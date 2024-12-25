import React from "react"
import Button from "@atlaskit/button/new";
import ToDo from "./ToDo";
const ToDoList = ({ todoList, onCheckBtnClick }) => {
    return (
        <>
            {
                todoList.map(todo => 
                    <ToDo key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick}/>)
            }
        </>
    )
};

export default ToDoList;
