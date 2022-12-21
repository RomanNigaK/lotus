import styled,{css} from "styled-components";
import upWrap from './svg/dropdown.svg';
import logo from './svg/Logo.svg';
import reload from './svg/reload.svg'
import saveico from './svg/saveico.svg'
import close from './svg/close.svg'
import report from './svg/report.svg'
import closebid from './svg/closebid.svg'
import chat from './svg/chat.svg'

export const LogoImg = styled.img.attrs({
    src:logo,
    alt:"Logo"
})`
height:inherit;
`
export const UnWrap = styled.img.attrs({
    src:upWrap,
    alt:"arrow"
})`
margin-right:5px;
`

export const SaveIco = styled.div`
    background-image: url(${saveico});
    background-repeat: no-repeat;
    width: 18px;
    height: 25px;
    margin-right: 10px;
`

export const Header = styled.div`
    text-transform: uppercase;
`

export const Reload = styled.div`
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 10px;
    background-color: #bababa;
    text-transform: uppercase;
    font-size: 12px;
    background-image: url(${reload});
    background-size: 18px;
    background-repeat: no-repeat;
    background-position:80px 6px;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;

    &:hover{
        background-position:80px 5px;
        background-size:20px;
    }
    
`
export const ProgressBid = styled.div`
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5b8de8;
    text-transform: uppercase;
    font-size: 12px;
    color: white;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        font-size: 13px;
    }
    
`
interface IBtn{
    bg:string,
    type:"reload"|"chat",
}



const Btn = css`
    font-size: 10pt;
    height: 40px;
    text-transform:uppercase;
    display:flex;
    align-items:center;
    border: 1px solid #000000;
    border-radius: 5px;  
    background-position: right center;
    background-repeat: no-repeat;
    background-size: 20px;
    background-position-x:95%;
    padding-right: 5%;
    padding-left: 10px;
    width: 90px;
    margin-right: 10px;
    margin-left: 10px;
    justify-content: center;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`

export const BtnReload = styled.div`
${Btn}
background-image: url(${reload});
`
export const BtnProgress = styled.div`
    ${Btn};
    background: #5C87DB;
    color:white;
    padding-right: 10px;
`

export const BtnClose = styled.div`
${Btn}
background-image: url(${close});
`
export const BtnReport = styled.div`
${Btn}
background-image: url(${report});
`
export const BtnClosebid = styled.div`
${Btn}
background-image: url(${closebid});
`

export const BtnChat = styled.div`
${Btn}
background-image: url(${chat});
`