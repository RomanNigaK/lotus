import { createGlobalStyle } from 'styled-components'
const global =  createGlobalStyle`
input:focus{
  outline: none;
}
input {
  border:none;
}
*{
    font-family: 'Roboto';
    font-style: normal;
}
a {
  text-decoration: none;
  color: inherit;
}

`
export default global;