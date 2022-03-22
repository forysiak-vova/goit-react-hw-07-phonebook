import styled from '@emotion/styled';

export const Label = styled.label`
display: flex;
flex-direction: column;
   align-items: center;
`;

export const Input = styled.input`
margin-left:10px;
`;

export const Button = styled.button`
display: block;
margin: auto;
margin-top: 20px;
border: none;
padding: 5px;
border-radius: 5px;
position:relative;
  &:hover {
        color: green;
          border: 1px solid green;
          padding: 4px;
      }
`;

export const Add = styled.p`
margin: 0;
`
export const Spinner = styled.h3`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display:flex;
    aline-itens:center;
    justify-content:center;
    text-aline:center;
`