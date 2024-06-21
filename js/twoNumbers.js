//Сумма чисел должна отдавать 10

const arr = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

const twoNumbers = (arr, targetSum) => {
    const nums = {};

    for (const currentNumber of arr) {
        const match = targetSum - currentNumber;

        if (match in nums) {
            return [currentNumber, match]
        } else {
            nums[currentNumber] = true
        }
    }
    return [];
}

console.log(twoNumbers(arr, targetSum))
