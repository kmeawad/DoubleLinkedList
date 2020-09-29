
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
            for(let o =0; o<=displacement;o++) offset += " ";

            line+=offset;

            //Add stars 
            for(let w=0;w<width;w++)
                line += "*";
            
            //Add each line to rectangle
            rectangle +=line;
        }
        console.log(rectangle);
}



shape(rectangle, 5, 5, 10);
//shape(6, 6, 1, 1, 10);
//shape(2, 2, 1, 1, 20);
//shape(3, 3, 1, 1, 20);
