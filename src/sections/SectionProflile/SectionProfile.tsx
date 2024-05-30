import { Footer, ProfileBackground, Section3Background, SectionContainer } from "./styles";

const SectionProfile = () => {
  return (
    <SectionContainer>
      <Section3Background>
        <ProfileBackground />
      </Section3Background>
      <Footer>
        <h1>Контакты:</h1>
        <h3>Email: delatMneNehui@eblan.com</h3>
        <h3>Телефон: 087823 6294691488 (лучше никогда не звонить этому человеку)</h3>
        <h3>Автор: Ночная Сова🦉</h3>
        <h3>P.S: Всем спокойного утра 😂😝</h3>
      </Footer>
    </SectionContainer>
  );
};

export default SectionProfile;
