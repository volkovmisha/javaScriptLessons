function add(...args) {
   let sum = 0
   args.forEach(e => sum+= e);
   console.log(sum)
}

function sub(...args) {
    const res = args.reduce((acc, rec) => acc - rec);
    console.log(res);
}

function mult(...args) {
    const res = args.reduce((acc, rec) => acc * rec);
    console.log(res);
}

function div(...args) {
    const res = args.reduce((acc, rec) => acc / rec);
    console.log(res);
}

module.exports = {
    add,
    sub,
    mult,
    div
}