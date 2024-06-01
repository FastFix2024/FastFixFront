// import { HeaderComponent, HeaderLogo, HeaderLogoContainer, HeaderMotto, HeaderText, HeaderWrapper, NavMenu, SeparationLine } from "./styles";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { userAreaVisibilitySliceActions, userAreaVisibilitySliceSelectors } from "../../../store/redux/userAreaVisiblitySlice/userAreaVisiblitySlice";
import Button from "../../../components/Button/Button";
import { HeaderComponent, HeaderComponentContainer, HeaderLogo, HeaderLogoContainer, HeaderMotto, HeaderText, HeaderWpapper, NavMenu, NavMenuButtonContainer, SeparationLine } from "./styles";

export const Header = () => {
  const dispatch = useAppDispatch();

  const visibilityState = useAppSelector(userAreaVisibilitySliceSelectors.loginVisibilityState);

  const changeVisibility = () => {
    if (visibilityState.isVisible) {
      dispatch(userAreaVisibilitySliceActions.makeFormsInvisible());
    } else {
      dispatch(userAreaVisibilitySliceActions.makeFormsVisible());
    }
  };

  return (
    <HeaderWpapper>
      <HeaderComponent>
        <HeaderComponentContainer>
          <HeaderMotto>One Very nice the moto about service</HeaderMotto>
          <NavMenu>
            <NavMenuButtonContainer>
              <HeaderText>MAP</HeaderText>
              <HeaderText>USER AREA</HeaderText>
              <Button onButtonClick={changeVisibility} name="LOGIN" />
            </NavMenuButtonContainer>
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
