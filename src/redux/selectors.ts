import {RootState} from "./store";
export const  menuBid = (store:RootState) => store.app.menuBid;
export const  allBid = (store:RootState) => store.bid.bid;
export const bid = (store:RootState,item:number) => {
    return store.bid.bid.find(i=>i.id===item);
};
export const  motionCompany = (store:RootState,item:number) => {
    return store.bid.bid.find(i=>i.id===item)?.motion;
};


