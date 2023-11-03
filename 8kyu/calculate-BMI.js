// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//My Solution//

function bmi(weight, height) {
  let bmiResult = weight / Math.pow(height, 2)
  if(bmiResult <= 18.5){
    return 'Underweight';
  }else if(bmiResult <= 25.0 && bmiResult > 18.5){
    return "Normal";
  }else if (bmiResult <= 30.0 && bmiResult > 25){
    return "Overweight";
  }else{
    return "Obese";
  }
  
}

//Other Solutions//

const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";