
const add = (a, b,callback) =>{
    setTimeout(()=>{
        sum = a + b
        callback(sum)
    },2000)
    
}

add(9, 2, (sum)=>{
    console.log(sum)
})