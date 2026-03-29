function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

module.exports={ // it is call by value, cannot call by lib1.lib2.sub because it is shallow copy 
    add,
    sub
}// it is a short hand notation of returning key value pair jaha add mein add function sub key mein sub function ajayega