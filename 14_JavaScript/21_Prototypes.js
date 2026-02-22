function person(){
    console.log("I am a person")
}

function humam(){
    console.log("I am a Human")
}

person.prototype=Object.create(humam.prototype); // make human parent of person

// returns true if we run person.prototype==human.protoype