import styled from "styled-components";

export const Layout = styled.div`

    width: 100vw;


`
export const MainMenu = styled.div`
    border-left: 1px solid black;
    width: inherit;
    height: 100px;
    box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: space-between;
 
    
`
export const OptionGroup = styled.div`
    display: flex;
    margin-left: 30px;
    margin-right: 30px;
    height: inherit;
    align-items:center;
    
`

export const OptionMainMenu = styled.div`
    text-transform: uppercase;
    font-size: 10pt;
    margin: 10px;
    display: flex;
    align-items: center;
  

`
export const Content = styled.div`
   margin-top: 20px;
`