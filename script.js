function numToConvert() {    
    const numInput = document.getElementById("num-input").value;
    
    const meterToFeet = (numInput * 3.28084).toFixed(3);
    const feetToMeter = (numInput * 0.3048).toFixed(3);
        
    const literToGallon = (numInput * 0.264172).toFixed(3);
    const gallonToLiter = (numInput * 3.78541).toFixed(3);
        
    const kiloToPound = (numInput * 2.20462).toFixed(3);
    const poundToKilo = (numInput * 0.453592).toFixed(3);
    
    document.getElementById("length-conv").textContent = numInput + " meters = " + meterToFeet + " feet | " + numInput + " feet = " + feetToMeter + " meters";
    document.getElementById("volume-conv").textContent = numInput + " liters = " + literToGallon + " gallons | " + numInput + " gallons = " + gallonToLiter + " liters";
    document.getElementById("mass-conv").textContent = numInput + " kilos = " + kiloToPound + " pounds | " + numInput + " pounds = " + poundToKilo + " kilos";
}