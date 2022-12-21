import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import { Routes,Route, useParams } from 'react-router';
import Layout from './components/layout/Layout';
import LayoutBid from './components/bid/Layoutbid';
import GlobalStyles from './styles/global';
import Container from './components/bid/container/Container';
import Room from './components/bid/room/Room'
import { useDispatch, useSelector } from 'react-redux';
import { menuBid } from './redux/selectors';
import { RootState, AppDispatch } from './redux/store';
import { setTimer } from './redux/bidSlice';
import { useAppDispatch } from './hooks';




function App() {
const bidMenu = useSelector((state:RootState) => menuBid(state));
const [choise, setChoise] = useState(null);

const dispatch = useAppDispatch();




useEffect(()=>{
  const timerMotion = setInterval(() => {
    dispatch(setTimer())
  }, 1000)
  return(()=>clearInterval(timerMotion))
})

  return (
    <div>
    

      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route path='bid/' element={<LayoutBid menuBid={bidMenu} choisePage={choise}/>}>
                {
                  bidMenu.map((e,i)=>{
                    return(<>
                      <Route 
                        path={e.path} 
                        element={<Container cbstate={setChoise} element={e.path}>{e.title}</Container>}/>
                    </>)
                  })
                }
              <Route index element={<Container />}/>
              
            </Route>
            
        </Route>
        
        <Route path="/room/:id" element={<Room/>}/>
      </Routes>
      
      <GlobalStyles />
    </div>
  );
}

export default App;
