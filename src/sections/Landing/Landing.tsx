import { Header } from './Header/Header'
import InfoBlock from './InfoBlock/InfoBlock'
import LoginRegForms from './LoginRegForms/LoginRegForms'
import { LandingComponent } from './styles'



export const Landing = () => {

    return (
        <LandingComponent>
            <Header />
            <LoginRegForms />
            <InfoBlock />
        </LandingComponent>
    )
}