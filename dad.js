const btnEl=document.getElementById("btn");
const jokeEl=document.getElementById("joke");

const apiKey="tlpL0Hmminikour9+oD5Bg==17AKce7JTmASSJwJ"

const options={
    method: "GET",
    headers:{
        "X-Api-Key":apiKey,
    },
};

const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){

    try {
        
    jokeEl.innerText= "Updating........";

    btnEl.disabled= true;
    btnEl.innerText="Loading.......";

  const reponse=await fetch(apiURL, options);
  const data=await reponse.json();

  btnEl.disabled= false;
  btnEl.innerText="Tell me a joke"

  jokeEl.innerText =data[0].joke
        
    } catch (error) {

        jokeEl.innerText ="An error happend, try again later";
        btnEl.disabled= false;
        btnEl.innerText="Tell me a joke"
        console.log(error);
        
    }



  
  //console.log(data[0].joke);
}

btnEl.addEventListener("click",getJoke)