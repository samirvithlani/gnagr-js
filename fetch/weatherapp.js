const fetchWeather = async () => {
    const params = new URLSearchParams({
      q: "Ahmedabad",
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
    tempid.innerHTML = data.main.temp;
  };
  
  fetchWeather();
  