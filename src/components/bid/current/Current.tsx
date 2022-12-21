import React, { ReactNode, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
import { Header, Reload } from "../../../styles/components";
import * as S from "./styled";
import styled from "styled-components";
import * as C from './../../../styles/components';
import { RootState } from "../../../redux/store";
import { allBid } from "../../../redux/selectors";
import Room from "../room/Room";



interface IPropsCurrent {
    titlePage: ReactNode,
}


export const Rooms = styled.div`
    width: 90vw;
    height: 90vh;
    position: absolute;
    display: flex;
    justify-content: center;
    background-color: white;
    z-index: 100;
    
`

export default function Current(props: IPropsCurrent) {
    const bid = useSelector((state: RootState) => allBid(state));


    return (
        <>

            <Header>
                {props.titlePage}
            </Header>
            <S.Body>
                {
                    bid.map((el, index) => {
                       
                        return (<>
                            <S.Item >
                                <S.Info>
                                    <S.NameBid>{el.name}</S.NameBid>
                                    <S.DataPublic>{el.dataPublic.toString()}</S.DataPublic>
                                    <S.Timeremains>
                                        <Timer key={index + "item"}
                                            endTime={el.timeWork}
                                            dataPublic={el.dataPublic}
                                        />
                                    </S.Timeremains>
                                    <S.Downloads>
                                        <S.DownloadFile >
                                            <C.SaveIco />
                                            Скачать фаил №1
                                        </S.DownloadFile>
                                        <S.DownloadFile>
                                            <C.SaveIco />
                                            Скачать фаил №2
                                        </S.DownloadFile>
                                    </S.Downloads>
                                    <S.Participants>
                                        <S.TitleParticipants>
                                            УЧАСТНИКИ ТОРГОВ:
                                        </S.TitleParticipants>
                                        {
                                            !el.participants?"Нет участников":el.participants?.map(e=>{
                                                
                                                return(<>
                                                    <S.Participant>{e.data.name}</S.Participant>
                                                </>)
                                            })
                                           
                                        }
                                    </S.Participants>
                                    <S.BtnMag>
                                    ОПОВЕСТИТЬ О ТЕХНИЧЕСКОЙ ЧАСТИ КОНКУРСА
                                    </S.BtnMag>
                                    <S.BtnMag>
                                    ОПОВЕСТИТЬ О КОММЕРЧЕСКОЙ ЧАСТИ КОНКУРСА
                                    </S.BtnMag>
                                </S.Info>
                                <S.Option>
                                    <C.BtnReload>обновить</C.BtnReload>
                                    <NavLink to={`/room/${el.id}`}>
                                    <C.BtnProgress>ход торгов</C.BtnProgress>
                                    </NavLink>
                                    
                                </S.Option>
                                
                            </S.Item>
                        </>)
                    })
                }

            </S.Body>

        </>
    )
}

interface IPropsTimer {
    endTime: number,
    dataPublic: string,
}
function Timer({ endTime, dataPublic }: IPropsTimer) {

    const [deadLine, setDeadLine] = useState(() => {
        let deadline = new Date(dataPublic);
        deadline.setSeconds(deadline.getSeconds() + endTime);
        return deadline;
    });
    const getTimeRemaining = () => {
        const total = Date.parse(deadLine.toString()) - Date.parse(Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        const days = Math.floor(total / 86400000);
        return {
            total, days, hours, minutes, seconds
        };
    }
    const [timer, setTimer] = useState(() => {
        let { total, hours, minutes, seconds } = getTimeRemaining();
        if (total >= 0) {
            return ((hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds))
        }
        return "00:00:00";
    });
    const [days, setDays] = useState(() => {
        let { days, ...rest } = getTimeRemaining();
        return days >= 1 ? days.toFixed() : "0";
    });


    const startTimer = () => {
        let { total, days,hours, minutes, seconds } = getTimeRemaining();
       
        if (total >= 0) {
            setDays(days >= 1 ?days.toString() : "0");
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        } else {
            clearInterval(timerId);
        }
    }

    const timerId = setInterval(() => {
        startTimer();
    }, 1000)

    return (
        <>
            <S.Days>
                {days}
            </S.Days>
            <S.Time>
                {timer}
            </S.Time>
        </>

    )
}