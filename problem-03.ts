



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

const numbers=calculateWeeklyTotal([200, 450, 100]);
console.log(numbers)
