import { HeaderComponent, HeaderLogo, HeaderLogoContainer, HeaderMotto, HeaderText, HeaderWrapper, NavMenu, SeparationLine } from "./styles";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { loginVisibilityActions, loginVisibilitySelectors } from "../../../store/redux/userAreaVisiblitySlice/userAreaVisiblitySlice";
import Button from "../../../components/Button/Button";

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
    <HeaderWrapper>
      <HeaderComponent>
        <HeaderMotto>One Very nice the moto about service</HeaderMotto>
        <NavMenu>
          <HeaderText>MAP</HeaderText>
          <HeaderText>USER AREA</HeaderText>
          <Button onButtonClick={changeVisibility} name="LOGIN" />
        </NavMenu>
      </HeaderComponent>
      <SeparationLine>
        <HeaderLogoContainer>
          <HeaderLogo />
        </HeaderLogoContainer>
      </SeparationLine>
    </HeaderWrapper>
  );
};
