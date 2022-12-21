import React from "react";
import { Outlet } from "react-router-dom";
import { LogoImg, UnWrap } from "../../styles/components";
import * as S from './staled';

export default function Layout() {
    return (
        <>
            <S.Layout>
                <S.MainMenu>
                    <S.OptionGroup>
                        <S.OptionMainMenu>
                            главная
                        </S.OptionMainMenu>
                        <S.OptionMainMenu>
                            <UnWrap />
                            о площадке
                        </S.OptionMainMenu>
                        <S.OptionMainMenu>
                            <UnWrap />
                            Поставщикам/подрядчикам
                        </S.OptionMainMenu>
                        <S.OptionMainMenu>
                            <UnWrap />
                            заказчикам
                        </S.OptionMainMenu>
                        <S.OptionMainMenu>
                            <UnWrap />
                            тарифы
                        </S.OptionMainMenu>
                        <S.OptionMainMenu>
                            <UnWrap />
                            обучение
                        </S.OptionMainMenu>
                    </S.OptionGroup>
                    <S.OptionGroup>
                        <LogoImg />
                    </S.OptionGroup>

                </S.MainMenu>
                <S.Content>
                    <Outlet />
                </S.Content>

            </S.Layout>
        </>
    )
}