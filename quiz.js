class Quiz {

    constructor() {
    
    //input box
    this.input1 = createInput("");
    this.input1.position(width/2 - 250, height/2 - 50);
    this.input1.style('background', 'white');  

    this.button1 = createButton("Submit");
    this.button1.position (width/2 - 250, height/2 + 50);
    this.button1.style('background', 'lightgrey');    

    }
}