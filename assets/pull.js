const key = 'dcb2da51ee24c60ffa481e4b29571bbd';

const baseURL= 'http://api.openweathermap.org/data/2.5/weather?q=Boston&appid=dcb2da51ee24c60ffa481e4b29571bbd';



const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    // make fetch call - promise call
    const response = await fetch(baseURL + query);

    // promise date
    const data = await response.json();
    return data

}