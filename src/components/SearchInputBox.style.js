import styled from 'styled-components';

export const SearchBarContainer = styled.div`
width: 60%;
position: -webkit-sticky;
position: sticky;
top: 0;
background: #fff;
-webkit-box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
padding: 20px 60px;
border-radius: 5px;
border: 1px solid rgba(34,36,38,.15);
`;

export const SearchBar = styled.form`
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  height: 36px;
  margin-top: 10px;
  border: 1px solid rgba(89,89,89);
  border-radius: 1px;
  padding-left: 10px;
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  margin-top: 10px;

`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;