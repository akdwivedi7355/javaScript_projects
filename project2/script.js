const form = document.querySelector("form")

form.addEventListener("submit",function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector("#height").value);
    const weight=parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results")

    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML=`<p>please enter valid height</p>`
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML=`<p>please enter valid weight</p>`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi<18.6){
            results.innerHTML=`<p>your bmi is ${bmi} <br> you'r Under Weight</p>`
        }
        else if(bmi>18.6 && bmi< 24.9){
            results.innerHTML=`<p>your bmi is ${bmi} <br> you'r Normal Range</p>`
        }
        else {
            results.innerHTML=`<p>your bmi is ${bmi} <br> you'r Over Weight</p>`
        }

    }


})