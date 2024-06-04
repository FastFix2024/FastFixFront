import { FuelStation } from './type';

const FuelCard = () => {
    const fuelStations: FuelStation[] = [
        {
            fuelType: 'Petrol',
            address: '123 Main St, Cityville',
            price: 1.25
        },
        {
            fuelType: 'Diesel',
            address: '456 Elm St, Townsville',
            price: 1.15
        },
        {
            fuelType: 'Electric',
            address: '789 Oak St, Villageville',
            price: 0.30
        },
        {
            fuelType: 'Hybrid',
            address: '101 Pine St, Hamletville',
            price: 1.05
        }
    ];

    return (
        <div>
            {fuelStations.map((station, index) => (
                <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                    <h3>Type: {station.fuelType}</h3>
                    <p>Address: {station.address}</p>
                    <p>Price: {station.price.toFixed(2)} €</p>
                </div>
            ))}
        </div>
    );
}

export default FuelCard;
