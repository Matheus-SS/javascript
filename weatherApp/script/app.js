const cityForm = document.querySelector('form');
const card = document.querySelector('.card');

const updateInterface = (data)=>{

    const cityDetails = data.cityDetails;
    // console.log(cityDetails);
    const cityWeather = data.cityWeather;
    // console.log(cityWeather);

    card.innerHTML = `
    <img src="clima.jpg" alt="" class="image">
    <h2>${cityDetails.EnglishName} , ${cityDetails.AdministrativeArea.EnglishName}</h2>
    <h4>${cityWeather.WeatherText}</h4>
    <span>${cityWeather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
    `;
};

const updateCity = async (city) =>{
    //pega o detalhe das cidades da funçao getCity do arquivo forecast.js
    cityDetails = await getCity(city);
    //pega o detalhe do clima da funçao getweather do arquivo forecast.js
    cityWeather = await getWeather(cityDetails.Key);
    
    return {
        cityDetails,
        cityWeather
    };
}
//procura por uma cidade
cityForm.addEventListener('keyup',()=>{
    const cityInput = cityForm.city.value.trim();
    
    //IF para nao dar erro na promisse ao ter o input vazio
    if(cityInput === ''){
        cityInput == 'txt';
    }else{
        getAutoCompleteCity(cityInput);
    }
});

cityForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let cityInput = cityForm.city.value.trim();
    //troca o - por espaço para fazer a pesquisa correta
    cityInput = cityInput.replace(/,/g,'');
    cityForm.reset();
    //UPdate a interface web
    updateCity(cityInput)
    .then(data =>{
         updateInterface(data);
    }).catch(err=>{
        console.log(err);
    });
    
     localStorage.setItem('city', cityInput);

});

if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
    .then(data => updateInterface(data))
    .catch(err => console.log(err));
}