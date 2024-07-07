var todayRowInput=document.getElementById('todayRow');

var weather=[];

async function fetchData() {
    try {
      const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=4794fdca94324b509bc172710241806&q=alexandria&days=3'); 
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json(); 
      wheatherState=data;
      diplayTodayData();
      console.log(wheatherState);

      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
fetchData();

function diplayTodayData(){
var string=``;
for(var i=0; i<wheatherState.lenght;i++){
  string+=`<div class="col-md-4 m-0 rounded-4 bg-light-gray ">
  <div class="d-flex justify-content-between py-2 px-3 text-white  bg-small-nav
    " id="today-date">
    <p class="my-auto" id="today-date-name">monday</p>
    <span>
      <span class="my-autoo" id="today-date-number">35</span>
      <span class="my-autoo" id="today-date-month">june</span>

    </span>

  </div>
  <div class="text-start px-3 py-3 pt-5" id="today">
    <p class="fs-5" id="today-location">${wheatherState[i].location.name}</p>
    <div class="d-flex justify-content-center align-items-center">
      <h3>
      <span class="fs-1 fw-bolder">
      
          <span id="today-temp">${wheatherState[i].current.temp_c}</span>
          <span><sup>o</sup>c</span>

      </span>
    </h3>

    </div>
    <img id="today-img" src="${wheatherState[i].current.condition.icon}" alt="">

    <p id="today-text" class="fs-5 text-primary">${wheatherState[i].current.condition.text}</p>


  </div>
  <div class="text-light d-flex icon">
    <div class="d-flex me-4">
      <img class="me-2"  src="images/icon-umberella.png" alt="">
      <p id="umberlla">${wheatherState[i].current.wind_mph}</p>

    </div>
    <div class="d-flex me-4">
      <img class="me-2" src="images/icon-wind.png" alt="">
      <p id="wind">${wheatherState[i].current.wind_kph}km/h</p>
      
    </div>       
     <div class="d-flex me-4">
      <img class="me-2"  src="images/icon-compass.png" alt="">
      <p id="compass">${wheatherState[i].current.wind_dir}</p>

    </div>
  </div>
</div>`
}
todayRowInput.innerHTML=string;
}



