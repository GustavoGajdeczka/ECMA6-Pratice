// Valores padrões dos parametros ////////////////////////////////
// valores padrões simples e intuitivos para os parametros das funções
////////////////////////////////////////////////////////////////
// ECMA6 ///////////////////////////////////////////////////////
function foo(x, y = 7, z = 42){
    return x + y + z
}
console.log(foo(1) === 50) // True

////////////////////////////////////////////////////////////////
// ECMA5 ///////////////////////////////////////////////////////
function foo(x, y, z){
    if(y === undefined){
        y = 7;
    }
    if(z === undefined){
        z = 42;
    }
    return x + y + z
}
foo(1) === 50 // True