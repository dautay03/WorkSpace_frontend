

const whereAmI= function(lat,ing){
    fetch(`https://geocode.xyz/${lat},${ing}?geoit=json`)
    .then(con=>{console.log(con);return con.json()})
    .then(data=>{
        console.log(data,`you are in ${data.city},${data.country}.`);
        return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
    })
    .then(data=>{data.json();console.log(data.json())})
    .then(data=>{console.log(data[0]);renderCountry(data[0])})
    .catch(err=>console.error(err))
}





// const whereAmI1 = function (lat, lng) {
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//       .then(res => {
//         if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//         return res.json();
//       })
//       .then(data => {
//         console.log(data);
//         console.log(`You are in ${data.city}, ${data.country}`);
  
//         return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//       })
//       .then(res => {
//         if (!res.ok) throw new Error(`Country not found (${res.status})`);
  
//         return res.json();
//       })
//       .then(data => renderCountry(data[0]))
//       .catch(err => console.error(`${err.message} 💥`));
//   };
  whereAmI(52.508, 13.381);
  whereAmI(19.037, 72.873);
  whereAmI(-33.933, 18.474);
  

