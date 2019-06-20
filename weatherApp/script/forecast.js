const key = 'cbMQNYW8U4OxpnP44nGuVL2MCVQwRtUE';

//pega as informações sobre o clima
const getWeather = async (id) =>{

    const URL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response  = await fetch(URL + query);
    const data = await response.json();
    
    return data[0];
};
//pega as informações da cidade
const getCity = async (city) =>{
    
  const URL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(URL + query);
  const data = await response.json();

  return data[0];
  
};

//autocompleta o form com as cidades que correspondem as palavras digitadas
const getAutoCompleteCity = async (city) =>{
    
    const URL = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(URL + query);
    const data = await response.json();

    let cityAutocomplete = [];
  
    data.forEach(city=>{
        // Armazena na array capturando somente o nome das cidades
         cityAutocomplete.push(city.LocalizedName+' , '+city.AdministrativeArea.LocalizedName+' '+city.Country.LocalizedName);  
         
    });

    //usando jquery ui para realizar o aucomplete no form
     $('#city').autocomplete({
        source:cityAutocomplete
     });
     
};
 
// getCity('London Arkansas United States').then(data=>{
//       return getWeather(data.Key);
// }).then(data=>{
//     console.log(data);
//   }).catch(err=>{
//     console.log(err)
//   });

//   getCity('London Arkansas United States').then(data=>{
//     console.log(data);
// });