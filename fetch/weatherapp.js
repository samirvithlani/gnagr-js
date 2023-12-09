

const search= (e) =>{

  e.preventDefault();
  const city = document.getElementById("city").value;
  console.log(city);
  fetchWeather(city);

}

const fetchWeather = async (city) => {
    const params = new URLSearchParams({
      q: city,
      appid: "fe4feefa8543e06d4f3c66d92c61b69c",
    });
  
    //const url = `https://api.openweathermap.org/data/2.5/weather?${params.toString()}`;
    const url = "https://api.openweathermap.org/data/2.5/weather"+"?"+params.toString();
  
    const res = await fetch(url, {
      method: "GET",
    });
  
    const data = await res.json();
    console.log(data);

    const tempid = document.getElementById("realfeel");
    const cityName = document.getElementById("cityname");
     //fix to 2 decimal places
    tempid.innerHTML = (data.main.temp -273.15).toFixed(2);

    cityName.innerHTML = data.name;
  };

  
  
  