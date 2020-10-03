function shape(type, height, width){
    type(height, width);
}

let displacementA = 10;
let displacementB = 20;

function rectangleA(height , width){
    let rectangleA = "";
    for(let i = 0; i < height; i++){

        //Add line
        line ="\n";

        //Create an offset
        let offset = "";
        for(let d =0; d<displacementA;d++) offset += " ";

        line+=offset;

        //Add stars
        for(let w=0;w<width;w++)
            line += "*";

        //Add each line to rectangle
        rectangleA +=line;
    }
    console.log(rectangleA);
}

function rectangleB(height , width){
    let rectangleB = "";
    for(let i = 0; i < height; i++){

        //Add line
        line ="\n";

        //Create an offset
        let offset = "";
        for(let d =0; d<displacementB;d++) offset += " ";

        line+=offset;

        //Add stars
        for(let w=0;w<width;w++)
            line += "*";

        //Add each line to rectangle
        rectangleB +=line;
    }
    console.log(rectangleB);
}

function triangleA (height){
    let triangleA = "";
    for (let h=0;h<height;h++){
        let line = "\n";

        let offset="";
        for(let d=0;d<displacementA;d++)
            offset += " ";
        line +=offset;

        for (let s=0;s<h+1;s++)
            line += "*";

        triangleA +=line;
    }
    console.log(triangleA);
}

function triangleB (height){
    let triangleB = "";
    for (let h=0;h<height;h++){
        let line = "\n";

        let offset="";
        for(let d=0;d<displacementB;d++)
            offset += " ";
        line +=offset;

        for (let s=0;s<h+1;s++)
            line += "*";

        triangleB +=line;
    }
    console.log(triangleB);
}

shape(rectangleA(5, 5)); //error
//rectangleB( 10,10);
//triangleA(10);
//triangleB(20);
