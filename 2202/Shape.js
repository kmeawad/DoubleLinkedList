function shape(type, height, width, displacement){
    type(height, width, displacement);
}

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

function triangle (height,displacement){
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

rectangle(5, 5, 10); // or shape(rectangle, 5,5,10);
rectangle( 2,2, 5);
shape(triangle, 5, 10);
triangle(5, 10);
