import { createSlice } from '@reduxjs/toolkit';

interface IMenuBid{
    menuBid:{
        [key:string]:string,
    }[]
}
export type {IMenuBid}

interface IStste extends IMenuBid{

}


const initialState:IStste = {
    menuBid:[
        { title: 'публикация материалов', url: '/bid/public',path:'Public' },
        { title: 'тендерная платформа', url: '/bid/tender',path:'Tender' },
        { title: 'требование к конкурсам', url: '/bid/rules',path:'Rules' },
        { title: 'запустить торги', url: '/bid/start',path:'Start' },
        { title: 'запланированные торги', url: '/bid/plan',path:'Plan' },
        { title: 'текущие торги', url: '/bid/current',path:'Current' },
        { title: 'архив торгов', url: '/bid/archive',path:'Archive' },
    ]
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {

    }
});




export const { } = appSlice.actions;

export default appSlice.reducer