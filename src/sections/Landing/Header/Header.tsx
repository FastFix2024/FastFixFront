import { up } from 'assets'
import Button from 'components/Button/Button'
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { userAreaVisibilitySliceSelectors, userAreaVisibilitySliceActions } from 'store/redux/userAreaVisiblitySlice/userAreaVisiblitySlice'
import { HeaderWpapper, HeaderComponent, HeaderComponentContainer, HeaderMotto1, HeaderMotto2, NavMenu, NavMenuButtonContainer, HeaderText, SeparationLine, HeaderLogoContainer, HeaderLogo, BackToTopButton } from './styles'



export const Header = () => {
  const dispatch = useAppDispatch();
  const visibilityState = useAppSelector(userAreaVisibilitySliceSelectors.loginVisibilityState);

  const [showBackToTop, setShowBackToTop] = useState(false);

  const changeVisibility = () => {
    if (visibilityState.isVisible) {
      dispatch(userAreaVisibilitySliceActions.makeFormsInvisible());
    } else {
      dispatch(userAreaVisibilitySliceActions.makeFormsVisible());
    }
  };

  const scrollToSection = (id: any) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const header: any = document.querySelector("header");
    const headerHeight = header.offsetHeight;
    const scrollPosition = window.scrollY;
    setShowBackToTop(scrollPosition > headerHeight);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWpapper>
      <HeaderComponent>
        <HeaderComponentContainer>
          <HeaderMotto1>ON YOUR PATH TO SUCCESS </HeaderMotto1>
          <HeaderMotto2>FASTFIX IS YOUR CONCIERGE</HeaderMotto2>
          <NavMenu>
            <NavMenuButtonContainer>
              <HeaderText onClick={() => scrollToSection("section-map")}>MAP</HeaderText>
              <HeaderText onClick={() => scrollToSection("section-profile")}>USER AREA</HeaderText>
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
      {showBackToTop && <BackToTopButton onClick={scrollToTop} src={up} />}
    </HeaderWpapper>
  );
};
