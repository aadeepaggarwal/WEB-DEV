let btn= document.getElementById("btn")
let inp= document.getElementById("inp")

function generateURL(lat, lon, API_KEY){
    let url='https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}'
    return url
}

function  getlatlon(city_name, API_KEY){
    return new Promise((res,rej)=>{
        let url='http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=1&appid=${API_KEY}'
        fetch(url)
            .then(res=> res.json())
            .then(data =>{
                console.log(data)
                res(data[0])
            })
    }
    )
}

btn.addEventListener('click', (ev)=>{
    let city_name=inp.value;
    let API_KEY= '1227e593a7a8a262ec19ec1b096342a9';

    getlatlon(city_name, API_KEY)
        .then((data)=>{
            // const {lat,lon}=data;
            // generateURL(lat,lon,API_KEY); ye callback hell ban jata dobara neeche data variablke use hota in this get url fucntion
            // so we add here also as a promise jo return hoga
            
        })
})