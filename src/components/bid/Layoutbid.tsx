import React from "react";
import styled from "styled-components";
import { Outlet, NavLink } from 'react-router-dom';
import { IMenuBid } from "../../redux/appSlice";

const ListRooms = styled.div`
    display: flex;
    width: 100vw;
`
const MenuListRooms = styled.div`
    width: 400px;
    margin-left: 20px;
    text-transform: uppercase;
    margin-left: 10px;
    color: grey;
    margin-top: 30px;
    font-size: 10pt;
`
const Content = styled.div`
    margin: 20px;
    width: 70vw;
`
interface IPropsOptionMenuListRooms {
    isChoise?: boolean,
}

const OptionMenuListRooms = styled.div.attrs(({ isChoise }: IPropsOptionMenuListRooms) => ({
    border: (isChoise ? '1px solid red' : '1px solid black'),
    color: isChoise ? 'red' : null,
})) <{ border: string, color: string }>`
    &:hover{
        color: #ff5757;
    }
    padding:15px;
    cursor: pointer;
    border-left:${({ border, ...props }) => border};
    color:${({ color, ...props }) => color};
`


interface IPropsLayoutBib extends IMenuBid {
    choisePage:string|null,
}

export default function LayoutBid(props:IPropsLayoutBib) {

    return (
        <>

            <ListRooms>
                <Content>
                <Outlet/>
                </Content>
                <MenuListRooms>
                    {props.menuBid.map((i,index) => {
                        return (
                            <NavLink to={i.url}  key={index+"nav"}>
                                <OptionMenuListRooms
                                    isChoise={props.choisePage === i.title ? true : false}
                                    key={index}
                                   >
                                    {i.title}
                                </OptionMenuListRooms>
                            </NavLink>
                        )
                    })}
                </MenuListRooms>
            </ListRooms>

        </>
    )
}