var serach = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am").toLowerCase();
var array = ["cake", "apple pie", "cookie", "chips", "patties"];
var checks = false;
for(var i=0 ; i < array.length ; i++){
    if(array[i] === serach){
        console.log(array[i]+ ': Is Available At Inedx ' +[i]+ ' At Bakery ')
        checks = true;
    
    }
    }
    if(! checks){
        console.log(serach+ ':  Sorry We Are Not Avaliable At Bakery ')
}
