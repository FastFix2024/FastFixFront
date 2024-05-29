import { Header } from './Header/Header'
import InfoBlock from './InfoBlock/InfoBlock'
import LoginRegForms from './LoginRegForms/LoginRegForms'
import { LandingComponent, LoginRegFormsContainer } from './styles'



export const Landing = () => {
    return (
        <LandingComponent>
            <Header />
            <LoginRegFormsContainer>
                <LoginRegForms />
            </LoginRegFormsContainer>
            <InfoBlock />
        </LandingComponent>
    )
}