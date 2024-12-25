import Button from "@atlaskit/button/new";
import React from "react";
import styled, {css} from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";

const ButtonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left;

    ${(p) => p.isCompleted &&
        css`
            text-decoration: line-through;
        `
     }

    &:hover {
        .check-icon {
            display: inline-block;
        }
    }
    .check-icon {
        display:none;

        &:hover{
            background-color:#e2e2e2;
            border-radius: 3px;
        }    
    }

`;

const ToDo = ({todo, onCheckBtnClick}) => {
  return (
    <ButtonStyled 
        isCompleted={todo.isCompleted}
        shouldFitContainer 
        // stuck phut 25 : https://www.youtube.com/watch?v=Up3YNeLA6MQ&list=PLqQ6Lvascx2vJsROoPFq4jfh2EvKev3Sr
        iconAfter={CheckIcon}
        onClick={() => onCheckBtnClick(todo.id)}
    >
        {todo.name}
    </ButtonStyled>
  )
};

export default ToDo;

// export default function Todo({todo}){
//     return <ButtonStyled shouldFitContainer>{todo.name}</ButtonStyled>
// }