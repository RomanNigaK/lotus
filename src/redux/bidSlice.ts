import { createSlice } from '@reduxjs/toolkit';

function convertFormatData(data: Date): number[] {
    let d: number[] | null = [];
    d.push(data.getDate());
    d.push(data.getMonth());
    d.push(data.getFullYear());
    return d;
}

interface IStаte {
    bid: {
        id: number,
        name: string,
        dataPublic: string,
        timeWork: number,
        participants:{
            id:number,
            valueParams:string[],
            data:{
                [key:string]:string,
            }
            
        }[]|null
        status: string,
        parametrs:string[],
        motion:number,
        timer:string
    }[],
    
   
    
}


const initialState: IStаte = {
    bid: [{
            id: 2,
            name: "ИЗГОТОВЛЕНИЕ ПОДОГРЕВАТЕЛЕЙ T-2 LTS BJM WS 8.42-2017041/9- 2ШТ (Конкурс)",
            dataPublic: "2022-12-20",
            timeWork: 400000,
            participants: [{
                id:1,
                valueParams:["-","-","-","-","-",],
                data:{
                    name:"Компания 1"
                }
            },
            {
                id:2,
                valueParams:["-","-","-","-","-",],
                data:{
                    name:"Компания 2"
                }
            },{
                id:3,
                valueParams:["-","-","-","-","-",],
                data:{
                    name:"Компания 3"
                }
            },{
                id:4,
                valueParams:["-","-","-","-","-",],
                data:{
                    name:"Компания 4"
                }
            }],
            status: "run",
            parametrs: ["Наличие комплексов мероприятий, повышающих стандарты качества изготовления",
            "Срок изготовления лота, дней.",
            "Гарантийные обязательства, мес.",
            "Условия оплаты",
            "Стоимость изготовления лота, руб. (без НДС)"],
            motion:0,
            timer:"00:10",

        },
        {
            id: 3,
            name: "ИЗГОТОВЛЕНИЕ ПОДОГРЕВАТЕЛЕЙ T-2 LTS BJM WS 8.42-2017041/9- 2ШТ (Конкурс)",
            dataPublic: "2022-12-19",
            timeWork: 350000,
            participants: [{
                id:1,
                valueParams:["-","-","-","-","-",],
                data:{
                    name:"Компания 1"
                }
            },
            {
                id:2,
                valueParams:["-","-","-","-","-",],
                data:{
                    name:"Компания 2"
                }
            },{
                id:3,
                valueParams:["-","-","-","-","-",],
                data:{
                    name:"Компания 3"
                }
            },],
            status: "run",
            parametrs: ["Наличие комплексов мероприятий, повышающих стандарты качества изготовления",
            "Срок изготовления лота, дней.",
            "Гарантийные обязательства, мес.",
            "Условия оплаты",
            "Стоимость изготовления лота, руб. (без НДС)"],
            motion:0,
            timer:"00:10",

        },
    ],

}

export const bidSlice = createSlice({
    name: 'bid',
    initialState,
    reducers: {
        setTimer: (state) => {
           
            state.bid.forEach(element => {
                let quantity = element.participants?.length;
                let time =  element.timer.split(":");
                let seconds = Number(time[1]);
                let minutes = Number(time[0]);
                let newStart = false;
                if(seconds===0){
                    seconds=59
                    minutes--
                }else{
                    seconds--;
                    if(!seconds)newStart=true;
                }
                
                if(newStart){
                    element.timer="00:10";
    
                    if(quantity){
                        if(element.motion+1===quantity){
                            element.motion=0;
                        }else{
                            element.motion++;
                        }
                    }
                }else{
                    element.timer=(minutes>9?minutes:"0"+minutes)+":"+(seconds>9?seconds:"0"+seconds);
                }
            });
          

        
            
        },
    }
});




export const {setTimer } = bidSlice.actions;

export default bidSlice.reducer