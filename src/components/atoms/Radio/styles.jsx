import styled from "styled-components";





export const ClickButton = styled.input`

width: 1.8rem;
height:1.8rem;

opacity : 0;

`




export const Form = styled.form`

display: flex;
align-items:center;


`

export const Label = styled.label`

${ClickButton} + & {
        position: relative;
        padding-left: 30px;
        cursor: pointer;
        display: inline-block;
        color: #666;
        line-height: 25px;
}

 &::before {
        content: "";
        position: absolute;
        top: 20px;
        left: 20px;
        width: 25px;
        height: 25px;
        outline: 2px solid #e6eff1;
        background-color: #fff;
        border-radius: 4px;
}
        ${ClickButton}:checked + &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 18px;
        height: 18px;
        outline: 2px solid #00903a;
        background-color: #fff;
}

`