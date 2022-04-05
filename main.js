let ApiDog = document.querySelector('#ApiDog');// the div for the Api and its content

let ApiImg1 = document.querySelector('#ApiDogPhoto');

let imgDog = document.createElement('img');//img tag to set src for API data

let newDiv = document.createElement('div');

let button1 = document.createElement('button');//bootsrtap button to activate API
button1.type = 'button';
button1.className = 'btn btn-primary';

let allDivs = document.querySelector('.api-section');

allDivs.appendChild(newDiv);

newDiv.appendChild(button1);



ApiDog.appendChild(imgDog);





button1.innerText = 'submit';//..innerText for bootsrtap values
// --------------------------------------------------------------------------------------------------------------------
let button2 = document.createElement('button');//bootsrtap button to activate API
button2.type = 'button';
button2.className = 'btn btn-primary';
button2.innerText = 'Submit';

let p1 = document.createElement('p');

let p2 =  document.createElement('p');

let p3 =  document.createElement('p');

p1.style.color = 'blue';

p2.style.color = 'red';

p3.style.color = 'green';

let Weather = document.querySelector('#Weather');

let newDiv2 = document.createElement('div');

let inputBox = document.createElement('input');

inputBox.type = 'text';

inputBox.className = 'form-control';

console.log('test1');
Weather.appendChild(newDiv2);
// Weather.appendChild(newDiv2);
console.log('test1');
newDiv2.append(inputBox,button2,p1,p2,p3);












console.log('Step 1 - Make API request');




button1.addEventListener('click',function(){
    fetch('https://dog.ceo/api/breeds/image/random')
 
    .then(function (httpResponse){
 
        console.log("Step 2 - get HTTP Response");
 
        //console.log(httpResponse.json());
 
        return httpResponse.json();  //use .json() to parse your response/make it easier to find the data you are looking for
    })
 
    .then(function (data){
 
        console.log("Step 3 - Parse our data receieved from API");
 
        console.log(data); //our JSON object
 
        console.log(data.message); //our random dog URL!
 
        imgDog.src = data.message;
    });

});


function ApiWeather(){
   let city = inputBox.value;
    console.log("Step 2 - get HTTP Response");
    fetch('https://goweather.herokuapp.com/weather/'+city)

    .then(function (httpResponse) { 

        console.log("Step 2 - get HTTP Response");

        return httpResponse.json();
 })

       .then(function(data){


         

         let Temperature = data.temperature;
         let Wind = data.wind;
         let Discrption = data.description;

        p1.innerText = Temperature;
        p2.innerText = Wind;
        p3.innerText = Discrption;

        });

}

button2.addEventListener('click',function(){ApiWeather();});