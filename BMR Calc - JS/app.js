document.getElementById('UI-form').addEventListener('submit', function (e) {
    //Hide results 
    document.getElementById('results').style.display = 'none';
    //Show loader
    document.getElementById('loading').style.display = 'block';
    //Time out
    setTimeout(result, 1500);


    e.preventDefault();
});


function result(){ 
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const gender = document.getElementById('gender').value;
    const activity = document.getElementById('activity').value;
    const outputBMR = document.getElementById('BMR');
    

    //hide loader
    document.getElementById('loading').style.display = 'none';

    //Show results 
    document.getElementById('results').style.display = 'block';
    //Calculate BMR
    
    if (gender === 'male') {
        let BMR = 66 + (6.24 * weight) + (12.7 * height) - (6.755 * age)
        outputBMR.value = BMR.toFixed(2);;
        calculateTDEE(activity, BMR)

    } else if (gender === 'female') {
        let BMR = 655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age)
        outputBMR.value = BMR.toFixed(2);;
        calculateTDEE(activity, BMR)
    }
    
}

function calculateTDEE(activity, BMR){
    const outputTDEE = document.getElementById('TDEE');

    if(activity == 'Sedentary'){
        let TDEE = BMR * 1.2
        outputTDEE.value = TDEE.toFixed(2);
        }
    else if (activity == 'Lightly Active') {
        let TDEE = BMR * 1.375
        outputTDEE.value = TDEE.toFixed(2);
        }
    else if (activity == 'Moderately Active'){
        let TDEE = BMR * 1.55
        outputTDEE.value = TDEE.toFixed(2);            
        }
    else if (activity == 'Very Active') {
        let TDEE = BMR * 1.725
        outputTDEE.value = TDEE.toFixed(2);
    }
    else{
        let TDEE = BMR * 1.9
        outputTDEE.value = TDEE.toFixed(2);
    }

}
