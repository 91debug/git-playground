const compose = (...functions) => x => functions.reduceRight((y, f) => f(y), x);

const f = x => x * 2;
const g = x => x + 2;

const h = compose(f, g);

const ret: number = h(2);

console.log(ret);