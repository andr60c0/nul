let sporgsmal = document.querySelector("#question").value;
let knap = document.querySelector("#button");
let deltagelse = document.querySelector("#deltagelse");

button.addEventListener("click", knapKlik);

function knapKlik() {
    //            sporgsmal.textContent = "Er du en idiot?";
    console.log("knapKlik")
    knap.removeEventListener("click", knapKlik);

    let svar = document.querySelector("#answer").value;
    let email = document.querySelector("#email").value;


    if (svar == "25" || svar == "25 sekunder" || svar == "25 sek") {
        console.log("Ja, det er rigtigt");
        deltagelse.textContent = "Det er rigtigt! Tak for din deltagelse! Vi annoncerer vinderen den 25.maj";


    } else {
        console.log("Prøv igen :S ");
        deltagelse.textContent = "Det er forkert! Prøv lige igen!";

        knap.addEventListener("click", knapKlik);


    }




}
