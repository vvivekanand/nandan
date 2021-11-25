//IIFE
const empID=(function(){
    let count=0;
    return function(){
        count++;
        return 'emp'+count;

    }

})();

//call IIFEs

console.log("new employee IDs");
console.log("vivek"+empID());
console.log("abc"+empID());

//CALLBACK
function fullname(firstname,lastname,callback){
    console.log("my name is"+firstname+" "+lastname);
    callback(firstname);
    
}
function welcome(name){
    console.log("welcome"+name);

}
fullname("vivek","viv",welcome);
