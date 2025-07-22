function runTime() {
    // date constructor
    let theTime = new Date();
    // go to the form filed
    let watch = document.forme.clock;
    // crate the clock parts
    let hr = theTime.getHours();
    let mn = theTime.getMinutes();
    let sc = theTime.getSeconds();
    // display the clock
    watch.value = hr + ';' + mn + ';' + sc;
    setTimeout(runTime, 1000)
}
runTime();