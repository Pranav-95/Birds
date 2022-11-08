function Birds(arr) {
    

    let newArr = {}
    const uniqueVal = [... new Set(arr)]
    uniqueVal.forEach(elem => {
        const filterVal = arr.filter(val => val == elem)       
        const totalVal = filterVal.length
        newArr[elem] = totalVal
    })

    let result = Object.entries(newArr).sort(([,a], [,b]) => b-a)
    let final = result[0][0]
    console.log(final)
}
arr = [1,6,3,4,4,4,4,3,2,3]
migratoryBirds(arr)
