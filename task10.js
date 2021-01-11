var array = [20,53,78,4,91,12];
var smallest = array[0];
for(var i=0 ; i < array.length ; i++){
    if(array[i] < smallest){
        var smallest = array[i]
    }
}
document.write("Array Items : "+array+"<br/>");
document.write("The Smallest Number Is :: "+smallest);