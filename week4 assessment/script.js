function toggleMode(){
document.body.classList.toggle("dark-mode");
}




function generateUser(){

fetch("https://randomuser.me/api/")
.then(res => res.json())
.then(data => {

let user = data.results[0]

document.getElementById("userCard").innerHTML =
`
<img src="${user.picture.large}">
<p>${user.name.first} ${user.name.last}</p>
<p>${user.email}</p>
<p>${user.location.country}</p>
`
})
}












function getWeather(){

let city = document.getElementById("cityInput").value

fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
.then(res=>res.json())
.then(data=>{

let lat = data.results[0].latitude
let lon = data.results[0].longitude

fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
.then(res=>res.json())
.then(weather=>{

let w = weather.current_weather

document.getElementById("weatherResult").innerHTML =
`Temperature: ${w.temperature}°C
<br>Wind Speed: ${w.windspeed}`

})
})
}







function addTask(){

let taskInput = document.getElementById("taskInput")
let taskText = taskInput.value

let li = document.createElement("li")

li.innerHTML = `
${taskText}
<button onclick="deleteTask(this)">Delete</button>
`

li.onclick = function(){
li.style.textDecoration="line-through"
}

document.getElementById("taskList").appendChild(li)

taskInput.value=""
}

function deleteTask(btn){
btn.parentElement.remove()
}











function filterProducts(){

let input = document.getElementById("searchInput").value.toLowerCase();

let products = document.querySelectorAll(".product");

products.forEach(product => {

let text = product.textContent.toLowerCase();

if(text.includes(input)){
product.style.display = "block";
}else{
product.style.display = "none";
}

});

}
