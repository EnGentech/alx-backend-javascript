let array = ['banana', 'orange', 'pineaple', 'cucumber']
/*
for (let [index, value] of array.entries()){
    console.log(index, value)
}


let response = array.reduce((acc, val) => {
    if (val.length > 1){
        return acc + ' ' + val
    }
})
console.log(typeof(response))
*/

let newMap = new Map('name', 'Gentle')
newMap.set('name', 'Chime')
console.log(newMap.get('name'))