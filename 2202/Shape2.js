function shape(type, height, width, displacement ){
     function type(height, width, displacement){}
}

let displacementA = 10;
let displacementB = 20;

function rectangle(height , width, displacement){
    let rectangle = "";
    for(let i = 0; i < height; i++){

        //Add line
        line ="\n";

        //Create an offset
        let offset = "";
        for(let d =0; d<displacement;d++) offset += " ";

        line+=offset;

        //Add stars
        for(let w=0;w<width;w++)
            line += "*";

        //Add each line to rectangle
        rectangle +=line;
    }
    console.log(rectangle);
}



function triangle (height, displacement){
    let triangle = "";
    for (let h=0;h<height;h++){
        let line = "\n";

        let offset="";
        for(let d=0;d<displacement;d++)
            offset += " ";
        line +=offset;

        for (let s=0;s<h+1;s++)
            line += "*";

        triangle +=line;
    }
    console.log(triangle);
}


shape(rectangle(2,2,displacementA))
shape(rectangle(3,3,displacementA))

shape(rectangle(2,2,displacementB))
shape(rectangle(3,3,displacementB))

shape(triangle(2, displacementA))
shape(triangle(3, displacementA))

shape(triangle(2 , displacementB))
shape(triangle(3 , displacementB))
