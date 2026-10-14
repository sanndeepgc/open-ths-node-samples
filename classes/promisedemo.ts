
const string_promise: Promise<string> = new Promise((resolve, reject) => {
    const timer1inMS = 500;
    const timer2inMS = 250;

    const timerId = setTimeout( ()=>{
        clearTimeout(errorTimerId);
        resolve(timer1inMS + " Data");
    }, timer1inMS);

    const errorTimerId = setTimeout( ()=>{
        clearTimeout(timerId);
        resolve(timer2inMS + " Data");
    }, timer2inMS);

});


async function callPromise(){
    try {
        const data  = await string_promise;
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

 callPromise().then((data: any)=>{
    if(data) {
        console.log(data);
    }
    console.log("Execution is complete!");
});
