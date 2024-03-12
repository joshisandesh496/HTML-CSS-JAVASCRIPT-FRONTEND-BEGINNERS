

//get all the inputs & store in variables
let dateEL=document.querySelector("#date");
let monthEL=document.querySelector("#month");
let yearEL=document.querySelector("#year");
let btnEL=document.querySelector(".age-btn");
let txtEL=document.querySelector(".age-text");

const getAge=()=>{
    const dateOB = new Date();
    let date = dateOB.getDate();
    let month = dateOB.getMonth();
    let year = dateOB.getFullYear();
    const monthDays=[31,28,30,31,30,31,31,30,31,30,31];
    
    if(dateEL.value > date ){
        date = date + monthDays[ month-1];
        month = month - 1;
    };
    
    if(monthEL.value > month){
        month = month + 12;
        year = year + 1;
    };

    const dt = date - dateEL.value;
    const mnth = month - monthEL.value-6;
    const yr = year - yearEL.value - 1;

    alert( "You are "+yr+" Years "+mnth+" Months " +dt+" Days Old.")
};

btnEL.addEventListener("click", () =>{
    getAge();
})