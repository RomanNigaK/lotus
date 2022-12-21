import styled,{css} from "styled-components";
import chart from './../../../styles/svg/chart.svg';
import attention from './../../../styles/svg/attention.svg';
import clock from './../../../styles/svg/clock.svg';

export const Body = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
`
export const Room = styled.div`
    width: 95vw;
    height: 95vh;
    background: #FFFEFE;
    box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.25);
`
export const Header = styled.div`
    width: 100%;
height: 91px;
display: flex;
align-items: center;
background: #FFFEFE;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const Logo = styled.div`
    width: calc(inherit - 10px);
    height: 120px;
    display: flex;
    margin-left: 20px;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #FF0303;
    padding-left: 50px;
    background-image: url(${chart});
    background-position: left center;
    background-repeat: no-repeat;
    margin-right: 50px;

`
 export const Name = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #FF0303;
 `

 export const Attention = styled.div`
    margin-top: 30px;
    height: 35px;
    margin-left: 20px;
    padding-left: 40px;
    background-image: url(${attention});
    background-position: left center;
    background-repeat: no-repeat;
    font-size: 14px;
    color: #000000;
    display: flex;
    align-items: flex-end;
 `
 export const ColumnHeader = styled.div`
    width: 250px;
    flex:1 1 auto;
    border-radius: 10px;
    &:first-child{
        margin-left: 10px;
    }
    &:last-child{
        margin-right: 10px;
    }
    
 `
 const cell = css`
     display: flex;
    align-items: center;
    justify-content: center;
    height: 90px;
 `
 interface IMotionProps{
    active?:boolean,
    bg?:"rgba(247, 3, 3, 0.25)"|"#FFFFFF",
    bsh?:string,
 }
 export const Motion = styled.div.attrs<IMotionProps>((props)=>({
    bg:(props.active?"rgba(247, 3, 3, 0.25)":"#FFFFFF"),

}))<IMotionProps>`
    ${cell}
    text-transform: uppercase;
    height: 50px;
    background: ${(props)=>props.bg};
    border-radius:10px 10px 0px 0px;

 `


export const Parametrs = styled.div`
${cell}
text-transform: uppercase;
border-bottom: 1px solid black;
`
export const NameParametr = styled.div`
    ${cell}
    justify-content: left;
    padding-left: 10px;

    &:nth-child(odd){
        background-color: rgba(217,217,217,0.5);
       
       
       
    }
`
export const Table = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: stretch;

`

export const CellDataParticipant =styled(NameParametr)`
    justify-content: center;
    
`
export const ColumnParticipant = styled(ColumnHeader).attrs<IMotionProps>((props)=>({
    //bsh:(props.active?"inset 0px 10px 10px rgba(247, 3, 3, 0.25)":"none"),
    

}))<IMotionProps>`
    box-shadow: ${(props)=>{return props.active?"inset 0px 10px 10px rgba(247, 3, 3, 0.25)":"none"}};
    border:${(props)=>{return props.active?"1px solid #D9D9D9":"none"}};
    margin-top:${(props)=>{return props.active?"-1px":null}};
    
`
export const Timer = styled.div`
    background-image: url(${clock});
    background-repeat: no-repeat;
    background-position: right center;
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
`
export const OptionGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    height:70px

`