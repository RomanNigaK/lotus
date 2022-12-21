import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { bid, motionCompany } from "../../../redux/selectors";
import { RootState } from "../../../redux/store";
import * as S from './staled';
import * as C from './../../../styles/components';

interface IProprRoom {
    idBid?: string;
}

export default function Room(props: IProprRoom) {
    let { id } = useParams();
    const item = useSelector((state: RootState) => bid(state, Number(id)));
    const motion  = useSelector((state:RootState)=>motionCompany(state,Number(id)));
    const navigate = useNavigate();
    function closeRoom():void{
       navigate(-1); 
       
    }

    return (<>
    
        <S.Body>
            <S.Room>
                <S.Header>
                    <S.Logo>
                        Ход торгов
                    </S.Logo>
                    <S.Name>
                        {item!.name}
                    </S.Name>
                </S.Header>
                <S.Attention>
                    Уважаемые участники, во время вышего хода вы можете изменить параметры торгов указанных в таблице:
                </S.Attention>
                <S.Table>
                    <S.ColumnHeader>
                        <S.Motion>
                            ход
                        </S.Motion>
                        <S.Parametrs>
                            параметры и требования
                        </S.Parametrs>
                        {
                            item?.parametrs.map(el => {
                                return (
                                    <>
                                        <S.NameParametr>
                                            {el}
                                        </S.NameParametr>
                                    </>
                                )
                            })
                        }


                    </S.ColumnHeader>
                    {
                        item?.participants?.map((el, index) => {
                            let active = index===motion?true:false;
                            return (<>
                                <S.ColumnParticipant active={active}>
                                    <S.Motion  active={active}>
                                        {active?<S.Timer>{item.timer}</S.Timer>:null}
                                    </S.Motion>
                                        
                                    
                                    <S.Parametrs>
                                        Участник №{index + 1}
                                        <br />
                                        {el.data.name}
                                    </S.Parametrs>
                                    {
                                        el.valueParams.map(el => {
                                            return (<>
                                                <S.CellDataParticipant>
                                                    {el}
                                                </S.CellDataParticipant>
                                            </>)
                                        })
                                    }
                                    <br/>
                                </S.ColumnParticipant>

                            </>)
                        })
                    }
                </S.Table>

                <S.OptionGroup>
                    <C.BtnChat>
                        чат
                    </C.BtnChat>
                    <C.BtnReload>
                        обновить
                    </C.BtnReload>
                    <C.BtnClosebid>
                        закрыть торги
                    </C.BtnClosebid>
                    <C.BtnReport>
                        отчет
                    </C.BtnReport>
                <C.BtnClose onClick={closeRoom}>
                        закрыть
                </C.BtnClose>
                </S.OptionGroup>
                
            </S.Room>
        </S.Body>
    </>)
}