
//Problem-01: Battery Level Status
function getBatteryStatus(percentage:number): string {

    if(percentage>=0 && percentage<=20){
        return "Low"

    }else if(percentage>=21 && percentage<=50){
        return "Medium"
    }else if(percentage>=51 && percentage<=90){
        return "High"
    }else if(percentage >=91 && percentage <=100){
        return "Full"
    }
    else{
        return "Invalid"
    }
}



//Problem-02: Table Booking Confirmation

interface Booking{
    name:string;
    guests:number;
    time:string ;
}


function formatBookingConfirmation(booking: Booking):string {
    const {name,guests,time}=booking;

    return `${name}'s table for ${guests} guests is confirmed at ${time}.`

    
}



//Problem-03: Weekly Expense Tracker




function calculateWeeklyTotal(expenses:number[]):number {

    // console.log(expenses)
    if(expenses.length===0){
        return 0;
    }

    let  total=0;


    for(let expense of expenses){
         total= total+expense;

    }
    return  total;


    
}



//Problem-04: Traffic Light Action


type  Light="red" | "yellow" | "green";



function getTrafficAction(light:Light):string {
    if(light==="red"){
        return "Stop"
    }else if(light === "yellow"){
        return "Slow Down"
    }else{
        return "Go"
    }
    
}


//Problem-05: Quiz Score Summary

interface QuizSummary {
    total: number;
    average: number;
}

function getQuizSummary(scores: number[]): QuizSummary {


    let total = 0;
    let average = 0;
    if (scores.length === 0) {
        return {
            total: 0,
            average: 0
        };

    }

    for (let scors of scores) {
        total = total + scors;

    }
    average = total / scores.length;

    return {
        total: total,
        average: average,
    }


}


