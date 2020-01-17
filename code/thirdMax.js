/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let arr = [... new Set(nums)].sort((a,b)=>{
        return b - a
    })
    console.log(arr)
    if(arr.length >=3){
        return arr[2]
    }else{
        return arr[0]
    }
};


thirdMax([3,2,1])