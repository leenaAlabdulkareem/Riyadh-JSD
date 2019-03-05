var arr = ["leena","lama","esra","sara"]
var arr2 =[93,4,2,6,7,1,35,53]

console.log(arr.sort())
console.log(arr2.sort(function(a, b){
return a-b

}));

arr2.forEach(function(el){
    console.log(el)
});
let newAr = arr2.map(function(el){
    return el + 1
})
console.log(newAr)

let filter = arr2.filter(function(el){
    return el <50 
});
console.log(filter)
for(let x =0; x< arr2.length ; x++)
{
    console.log(arr2[x])

}

let num =5
for(let x =0; x< num ; x++){
    let res = ""
    for(let y =0; y < x ; y++){
    //console.log("x")
    //res += "*"
    res += y + " " 
    }
    console.log(res)
}

let arr5 = [3,1,7,2,9,10]
arr5.forEach(function(el){
sum += el
return sum
})
console.log(sum)