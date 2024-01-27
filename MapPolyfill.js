Array.prototype.myMap = function(cb){
    let arr = []
    for(let i =0; i<this.length;i++){
        arr.push(cb(this[i], i, arr))
    }
    return arr
}


Array.prototype.myFilter = function(cb){
    let arr = []
    for(let i =0; i<this.length;i++){
        if(cb(this[i], i, this)){
            arr.push(this[i])
        }
    }
    return arr
}



Array.prototype.myReduce = function(cb, initialValue){
  let acc = initialValue
  for(let i=0; i< this.length; i++){
    acc = acc ? cb(acc, this[i], i, this) : this[i]
  }
  return acc
}


const a = [1,2,3,4]
const a1 =a.myMap((e)=> {return e*2});
console.log(a1,'maop!')
const a2 = a.myFilter((e)=>{ return e<3 })
console.log(a2,'myFilter!')
const a3 = a.myReduce((acc, curr)=>{ return acc + curr }, 0)
console.log(a3,'myReduce!')