var inputs = process.argv.slice(2);
var result = inputs.map( parola => parola[0] )
                   .reduce( (prec, corr) => prec + corr );

console.log(`[${inputs}] becomes "${result}"`);
