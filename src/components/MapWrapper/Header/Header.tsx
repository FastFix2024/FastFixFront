import { useRef } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { SearchContainer, InputContainer, Input, Button, ButtonsContainer, ServiceButton } from './styles';

function Header({ onPlaceChanged, onClearSearch, onFindCarRepair, onFindGasStations }: any) {
  const searchRef = useRef<any>();

  const handleSearchClick = () => {
    const place = searchRef.current.getPlace();
    onPlaceChanged(place);
  };

  return (
    <SearchContainer>
      <Autocomplete
        onLoad={(autocomplete) => (searchRef.current = autocomplete)}
        onPlaceChanged={handleSearchClick}
      >
        <InputContainer>
          <Input type="text" placeholder="Введите место" />
          <Button onClick={handleSearchClick}>🔍</Button>
          <Button onClick={onClearSearch}>X</Button>
        </InputContainer>
      </Autocomplete>
      <ButtonsContainer>
        <ServiceButton onClick={onFindCarRepair}>Автосервисы</ServiceButton>
        <ServiceButton onClick={onFindGasStations}>АЗС</ServiceButton>
        <ServiceButton >Фильтры</ServiceButton>
      </ButtonsContainer>
    </SearchContainer>
  );
}

export default Header;
