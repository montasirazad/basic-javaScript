// kg to gram 
 const kgToGram =(kg)=> {
     let gram = kg * 1000;
     console.log(gram,"gram");
 }

 kgToGram(5);

// ............  Kilo-meter TO Meter CALCULATION ................... ..

function kmToM (km) {
    if (km >= 0) {
        var meter = km * 1000;
        console.log(meter,"meter");
    
       }
       else{
        console.log("Distance can't be negative.So negative value is not acceptable.");
    }

}
kmToM(3);

// ............  Meter TO Kilo-meter CALCULATION ................... ..

function mToKm (meters) {
    if (meters >= 0) {
        var kilometer = meters / 1000;
        console.log(kilometer,"km");
    
       }
       else{
        console.log("Distance can't be negative.So negative value is not acceptable.");
    }

}
mToKm (386000);