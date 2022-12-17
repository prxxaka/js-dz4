var tags = ['li', 'span', 'div', 'span', 'h3', 'a','li', 'div', 'div', 'a', 'p']
var arr = {}
for (var i = 0; i < tags.length; i++){
    var a = tags[i];
    if (arr[a]) arr[a] +=1
    else arr[a] = 1
}
console.log(arr)
let arrval = Object.values(arr)
arrval.sort((a, b)=> b -a)
let arrkeys = []
for (var key in arr){
    arrkeys.push(key)
}
arrkeys.sort((a, b) => arr[b] - arr[a])
for (let i = 0; i < arrval.length; i++){
    arrkeys[i] = arrkeys[i]+": "+ arrval[i]
}
let newarr = { ...arrkeys}
console.log(newarr)