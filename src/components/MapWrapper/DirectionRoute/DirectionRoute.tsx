import { RouteInfoContainer, RouteButton } from './styles';

function DirectionRoute({ directionsResponse, distance, duration, clearRoute }: any) {
  return (
    directionsResponse && (
      <RouteInfoContainer>
        <div>Расстояние: {distance}</div>
        <div>Продолжительность: {duration}</div>
        <RouteButton onClick={clearRoute}>X</RouteButton>
      </RouteInfoContainer>
    )
  );
}

export default DirectionRoute;
