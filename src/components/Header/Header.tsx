import { HeaderComponent, HeaderMotto, HeaderText, NavMenu, SeparationLine } from './styles'

export const Header = () => {
    

    return (
        <>
        <HeaderComponent>
            <HeaderMotto>
            Text in Header
            </HeaderMotto> 
            <NavMenu>            
            <HeaderText>MAP</HeaderText>
            <HeaderText>USER AREA</HeaderText>
            <HeaderText>LOGIN</HeaderText>
            </NavMenu> 
        </HeaderComponent>
        <SeparationLine />
        </>
    )
}