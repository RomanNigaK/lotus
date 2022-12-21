import styled from "styled-components";

import days from './../../../styles/svg/days.svg';
import time from './../../../styles/svg/time.svg';
import ok from './../../../styles/svg/ok.svg';


export const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-left: 10px;
    padding-top: 10px;
`
export const Item = styled.div`
    width: 350px;
   
    background: #FFFFFF;
    border-left: 1px solid #000000;
    border-top: 1px solid #000000;
    box-shadow: 5px 4px 4px 1px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`
export const Info = styled.div`
height: 470px;
    background: #FFFFFF;
    border-width: 0px 0px 1px 0px;
    border-style: solid;
    border-color: #000000;
    border-radius: 10px 10px 0px 0px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
`
export const Option = styled.div`
    width: inherit;
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 10px;
    height: 100px;
    align-items: center;

`
export const NameBid = styled.div`
    font-size: 12pt;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    text-align: center;
    color: #FF0303;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
`
export const DataPublic = styled.div`
    font-weight: 400;
    font-size: 12px;
    color: #FF0303;
    margin-top: 20px;
`
export const Timeremains = styled.div`
    display: flex;
    margin-left: 30px;
    margin-right: 30px;
    height: 38px;
    background: #FF7777;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 10px;
    margin-top: 20px;
    justify-content: space-around;
`
export const Days = styled.div`
    display: flex;
    background-image: url(${days});
    background-repeat: no-repeat;
    background-position: center left;
    width: 80px;
    height: inherit;
    align-items: center;
    justify-content: center;

`
export const Time = styled.div`
display: flex;
background-image: url(${time});
    background-repeat: no-repeat;
    background-position: center left;
    width: 90px;
height: inherit;
align-items: center;
justify-content: end;

`
export const Downloads = styled.div`
    margin-top: 20px;
`
export const DownloadFile = styled.div`
    display: flex;
    align-items: flex-end;
`
export const Participants = styled.div`
    margin-top: 30px;
    width: 264px;

    border: 1px solid #6F6F6F;
    border-radius: 10px;
    padding-top: 20px;
    padding-left: 10px;
    padding-bottom: 10px;
`
export const TitleParticipants = styled.div`
    position: absolute;
    margin-top: -30px;
    margin-left: 5px;
    background-color: white;
    padding-left: 5px;
    padding-right: 5px;
    z-index: 1;
`
export const Participant = styled.div`
    width: 100%;
    background-image: url(${ok});
    background-repeat: no-repeat;
    background-position: left center;
    padding-left: 10px;
    margin-left: 20px;
`
export const BtnMag = styled.div`
width: 296px;
height: 33px;
display: flex;
align-items: center;
justify-content: center;
background: #FFFEFE;
border: 1px solid #FF0303;
border-radius: 10px;
font-family: 'Roboto Condensed';
font-style: normal;
font-weight: 400;
font-size: 11px;
color: #FF0303;
margin-top:20px;
`

