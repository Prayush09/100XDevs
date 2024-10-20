function searchBackend(){
    console.log("Backend called");
    //fetch();
}

let currentClock;

function debounceBackend(){
    clearTimeout(currentClock);
    console.log("Debounced")
    currentClock = setTimeout(searchBackend, 30);//start a clock
}
debounceBackend();
debounceBackend();
debounceBackend();
debounceBackend();
debounceBackend();