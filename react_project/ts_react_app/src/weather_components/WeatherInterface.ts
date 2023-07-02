interface WeatherInterface {
    date: number,
    maxTemp: number,
    minTemp: number,
    day: {
        maxtemp_c: number,
        mintemp_c: number,
        condition: {
            code: number,
            icon: string,
            text: string,
        },
    }
}

export default WeatherInterface;