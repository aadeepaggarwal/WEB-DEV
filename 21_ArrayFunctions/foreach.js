let arr = [11, 12, 13, 14, 15];

arr.forEach((data, index, a) => {
    console.log(data, index, a)
})
/*
Output: 
11 0 [ 11, 12, 13, 14, 15 ]
12 1 [ 11, 12, 13, 14, 15 ]
13 2 [ 11, 12, 13, 14, 15 ]
14 3 [ 11, 12, 13, 14, 15 ]
15 4 [ 11, 12, 13, 14, 15 ]
*/
arr.forEach((data) => {
    console.log(data)
})
/*
11
12
13
14
15
*/