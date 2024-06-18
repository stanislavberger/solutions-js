//Binary search
// There are 3 directions: left, right, center
//left = 0, right

let arr = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let search = function (nums, target) {
    let leftNumber = 0;
    let rightNumber = nums.length-1;
    let midd;

    while (leftNumber <= rightNumber) {
        midd = Math.round((rightNumber-leftNumber)/2) + leftNumber;

        if (target === nums[midd]) {
            return midd;

        } else if(target < nums[midd]) {
            rightNumber = midd - 1;

        } else {
            left = midd - 1;
        }
    }

    return -1;

}

console.log(search(arr, 6))
