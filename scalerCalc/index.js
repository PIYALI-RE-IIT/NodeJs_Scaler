function sub(a,b){

    console.log(a-b);
}

function mul(a,b){

    console.log(a*b);
}

function div(a,b){

    console.log(a/b);
}

function sqr(a){

    console.log(Math.sqrt(a));
}

module.exports={
    addition:add,
    substraction:sub,
    multiplication:mul,
    division:div,
    sqrt:sqr
}