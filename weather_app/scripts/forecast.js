const key = 'cbMQNYW8U4OxpnP44nGuVL2MCVQwRtUE';

//get weather information
const getWeather = async (id)=> {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};


//get city information
const getCity = async (city) =>{

    //url to get city information
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query  = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    //return information about the city
    return data[0];

}

getCity('manchester').then(data => {
    return getWeather(data.Key);
}).then(data => {
    console.log(data);
}).catch(err=>constole.log(err));

