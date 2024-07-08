var todayRowInput=document.getElementById('todayRow');
var tomRowInput=document.getElementById('tomdayRow');
var nextdayRowInput=document.getElementById('nextdayRow');
let searchInput = document.getElementById("search");


var weather=[];

async function fetchData(cityName="alexandria") {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4794fdca94324b509bc172710241806&q=${cityName}&days=3`); 
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json(); 
      weather=data;
      diplayTodayData();
      displayTomData();
      displayNextData();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
fetchData();

function diplayTodayData(){
var string=``;
let todaydate=new Date();
console.log(weather);
  string+=`
  
  <div class="col-md-4 m-0 rounded-4 bg-light-gray  ">
  <div class="d-flex justify-content-between py-2 px-3 text-white  bg-small-nav
    " id="today-date">
    <p class="my-auto" id="today-date-name">${todaydate.toLocaleDateString("en-US",{weekday:"long"})}</p>
    <span>
      <span class="my-autoo" id="today-date-number">${todaydate.getDate()}</span>
      <span class="my-autoo" id="today-date-month">${todaydate.toLocaleDateString("en-US",{month:"long"})}</span>

    </span>

  </div>
  <div class="text-start px-3 py-3 pt-5" id="today">
    <p class="fs-5" id="today-location">${weather.location.name}</p>
    <div class="d-flex justify-content-center align-items-center">
      <h3>
      <span class="fs-1 fw-bolder">
      
          <span id="today-temp">${weather.current.temp_c}</span>
          <span><sup>o</sup>c</span>

      </span>
    </h3>

    </div>
    <img id="today-img" src="https:${weather.current.condition.icon}" alt="">

    <p id="today-text" class="fs-5 text-primary">${weather.current.condition.text}</p>


  </div>
  <div class="text-light d-flex icon">
    <div class="d-flex me-4">
      <img class="me-2"  src="images/icon-umberella.png" alt="">
      <p id="umberlla">${weather.current.humidity }</p>

    </div>
    <div class="d-flex me-4">
      <img class="me-2" src="images/icon-wind.png" alt="">
      <p id="wind">${weather.current.wind_kph}km/h</p>
      
    </div>       
     <div class="d-flex me-4">
      <img class="me-2"  src="images/icon-compass.png" alt="">
      <p id="compass">${weather.current.wind_dir}</p>

    </div>
  </div>
</div>
<br>
`
todayRowInput.innerHTML=string;


}

function displayTomData(){
  let tomdate=new Date(weather.forecast.forecastday[1].date);

  var tom='';
      tom+=`<div class="col-md-4 m-0 rounded-4 bg-dark-gray">
  <div class="d-flex justify-content-between py-2 px-3 text-white  bg-dark
    " id="tom-date">
    <p class="my-auto" id="tom-date-name">${tomdate.toLocaleDateString("en-US",{weekday:"long"})}</p>

  </div>
  <div class="text-start px-3 py-3 pt-5" id="tom">
    <div class="text-center">
      <img id="tom-img" src="https:${weather.forecast.forecastday[1].day.condition.icon
}" alt="">

      <h3 class="fs-1 fw-bolder d-block">
        
        <span id="tom-min-temp">${weather.forecast.forecastday[1].day.mintemp_c
}</span>
        <span><sup>o</sup>c</span>
    </h3>
      <span class="fs-6 fw-lighter">
        <span id="tom-max-temp">${weather.forecast.forecastday[1].day.condition.text
}</span>
        <span><sup>o</sup>c</span>
      </span>
      <p id="tom-text" class="fs-5 text-primary">sunny</p>

    </div>



  </div>

</div>
<br>

`
tomRowInput.innerHTML=tom;

  }




  function displayNextData(){
    let nextdate=new Date(weather.forecast.forecastday[2].date);

    var string='';
        string+=`<div class="col-md-4 m-0 rounded-4 bg-dark-gray">
    <div class="d-flex justify-content-between py-2 px-3 text-white  bg-dark
      " id="tom-date">
      <p class="my-auto" id="tom-date-name">${nextdate.toLocaleDateString("en-US",{weekday:"long"})}</p>
  
    </div>
    <div class="text-start px-3 py-3 pt-5" id="tom">
      <div class="text-center">
        <img id="tom-img" src="https:${weather.forecast.forecastday[2].day.condition.icon
  }" alt="">
  
        <h3 class="fs-1 fw-bolder d-block">
          
          <span id="tom-min-temp">${weather.forecast.forecastday[2].day.mintemp_c
  }</span>
          <span><sup>o</sup>c</span>
      </h3>
        <span class="fs-6 fw-lighter">
          <span id="tom-max-temp">${weather.forecast.forecastday[2].day.condition.text
  }</span>
          <span><sup>o</sup>c</span>
        </span>
        <p id="tom-text" class="fs-5 text-primary">sunny</p>
  
      </div>
  
  
  
    </div>
  
  </div>`
  nextdayRowInput.innerHTML=string;
  
    }
    searchInput.addEventListener('input',function(){
      console.log(searchInput.value);
      fetchData(searchInput.value)
    })