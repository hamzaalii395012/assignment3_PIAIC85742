var array = [24,53,78,91,12];
var largest = array.length;
for(var i=0 ; i < largest ; i++){
    if(array[i] > largest){
        var largest = array[i]
    }
}
document.write("Array Items : "+array+"<br/>");
document.write("The Largest Number Is :: "+largest)