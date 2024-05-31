// import { HeaderComponent, HeaderLogo, HeaderLogoContainer, HeaderMotto, HeaderText, HeaderWrapper, NavMenu, SeparationLine } from "./styles";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { loginVisibilityActions, loginVisibilitySelectors } from "../../../store/redux/userAreaVisiblitySlice/userAreaVisiblitySlice";
import Button from "../../../components/Button/Button";
import { HeaderComponent, HeaderComponentContainer, HeaderLogo, HeaderLogoContainer, HeaderMotto, HeaderText, HeaderWpapper, NavMenu, SeparationLine } from "./styles";

export const Header = () => {
  const dispatch = useAppDispatch();

  const visibilityState = useAppSelector(loginVisibilitySelectors.loginVisibilityState);

  const changeVisibility = () => {
    if (visibilityState.isVisible) {
      dispatch(loginVisibilityActions.makeFormsInvisible());
    } else {
      dispatch(loginVisibilityActions.makeFormsVisible());
    }
  };

  return (
    <HeaderWpapper>
      <HeaderComponent>
        <HeaderComponentContainer>
          <HeaderMotto>One Very nice the moto about service</HeaderMotto>
          <NavMenu>
            <HeaderText>MAP</HeaderText>
            <HeaderText>USER AREA</HeaderText>
            <Button onButtonClick={changeVisibility} name="LOGIN" />
          </NavMenu>
        </HeaderComponentContainer>
      </HeaderComponent>
      <SeparationLine>
        <HeaderLogoContainer>
          <HeaderLogo />
        </HeaderLogoContainer>
      </SeparationLine>
    </HeaderWpapper>
  );

};
