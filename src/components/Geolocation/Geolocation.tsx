import { useState } from "react"

const Geolocation = () => {

    const [positionLatitude, setLatitude] = useState<null | number>(null);
    const [positionLongitude, setLongitude] = useState<null | number>(null);

    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
    })

    console.log(positionLatitude);
    console.log(positionLongitude);
    
    return(
        <>
        </>
    )

}
export default Geolocation;