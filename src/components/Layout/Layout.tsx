import { LayoutComponent, HeaderComponent, FooterComponent } from './styles'

function Layout() {
    

    return (
        <LayoutComponent>
            <HeaderComponent /> {/*возможно надо будет сделать отдельный компонент*/}
            <FooterComponent /> 
        </LayoutComponent>
    )
}