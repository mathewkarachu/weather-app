
 const emoji = document.getElementById("emoji");
 const done = document.getElementById("dn");


async function GetWeatherData() {
    const Api_key = "37350fa60e3c5f78ab6fb73da330bdbf"
    const city = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}`


    const response = await fetch(url);
    const data = await response.json();
    
    const name = data.name
    const humidity = data.main.humidity + "%";
    const windSpeed = data.wind.speed + " mph";
    const temp = ((data.main.temp) -273).toFixed(1) + "°";
    const feels_like = data.main.feels_like;
    const description = data.weather[0].description;
    const country = data.sys.country;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png` ;
    console.log(iconUrl)
    const img = document.createElement("img");
    img.src = iconUrl;
    document.getElementById("emoji").textContent = "";
    document.getElementById("emoji").appendChild(img);
    img.style.width = "20vw";
    img.style.margin = "0";
    

;

     document.getElementById("city").value = ""
    document.getElementById("desc").textContent = description;
    document.getElementById("city_name").textContent = city.toUpperCase() + " , " + country+ "🌍";
    document.getElementById("hum").textContent = humidity;
    document.getElementById("tem").textContent = temp;
    document.getElementById("s").textContent = "Feels like "+ temp;
     document.getElementById("main").textContent = temp;
      document.getElementById("wins").textContent = windSpeed;
      
      console.log(data)
      

      

}


done.addEventListener("click", event=>{
    event.target.style.backgroundColor = "red";
    event.target.style.boxShadow = "  0 8px 32px rgb(255, 0, 0)";
    event.target.style.backdropFilter = "blur(1px)";
    event.target.style.webkitBackdrop = "blur(1px)";

    

})

 done.addEventListener("mouseout", () => {
     
   
    
  
    event.target.style.boxShadow = " 0 8px 32px rgba(89, 241, 129, 0.927)";
    event.target.style.background = "forestgreen";
     event.target.style.backdropFilter= "blur(1px)";
     event.target.style.webkitbackdropFilter = "blur(1px)";
    
  
   
})










