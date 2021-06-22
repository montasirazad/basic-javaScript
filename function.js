// kg to gram 
 const kgToGram =(kg)=> {
     let gram = kg * 1000;
     console.log(gram,"gram");
 }

 kgToGram(5);

// ............  Kilo-meter TO Meter CALCULATION ................... ..

function kmToM (km) {
    if (km >= 1) {
        var meter = km * 1000;
        console.log(meter,"meter");
    
       }
       else{
        console.log("Negative value is not acceptable");
    }

}
kmToM(30);