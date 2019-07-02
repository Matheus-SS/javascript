class Forecast{
    constructor(){
        this.key = 'cbMQNYW8U4OxpnP44nGuVL2MCVQwRtUE';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
   async updateCity(city){
        //city details
        const cityDets = await this.getCity(city);
        //weather about the city
        const weather = await this.getWeather(cityDets.Key);
        return {cityDets, weather};
    }
    async getCity(city){
        //url to get city information
    const query  = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();
    //return information about the city
    return data[0];
    }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
    
        return data[0];
    }
}


