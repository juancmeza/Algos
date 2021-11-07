'use strict';

function counter() {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    document.getElementById('app').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
  }, 1000);
}

counter();

// ------------ Binary Search --------------

let search = function(nums, target) {

    let biSearch = (nums, target, low, high) => {

        let mid = Math.floor((low + high)/2)

        if (nums[mid] === target) {
            return nums.indexOf(nums[mid])
        }

        if (nums[mid] > target) {
            return biSearch(nums, target, nums[0], nums[mid - 1])
        } else {
            return biSearch(nums, target, nums[mid + 1], nums[nums.length - 1])
        }


    }

    if (nums.length === 0) {
        return -1
    }

    return biSearch(nums, target, nums[0], nums[nums.length - 1])

};

// ------------- TwoSum ---------------

let twoSum = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (nums.includes(target - diff) ){
          if (nums[i] === diff) {
            return [nums.indexOf(nums[i]), nums.splice(nums.indexOf(nums[i] - 1), 1, 'a').indexOf(diff)]
          }
            return [nums.indexOf(nums[i]), nums.indexOf(diff)]
        }
    }

};

let nums = [2,7,11,15]
let target = 9


const twoSum2 = function(nums, target) {

    if (nums.length === 2) {
        return [0, 1]
    }

    let hash = {}

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (hash[diff] || hash[diff] === 0) {
            return [hash[diff], i]
        }
        hash[nums[i]] = i
    }

};

var isValid = function(s) {

    //group characters by type as they appear
    //check if opening bracket has matching closing bracket

    let open = []
    let openSample = ['[', '(', '{']
    let pairs = ['[]', '()', '{}']

    for (let i = 0; i < s.length; i++) {
        if (openSample.includes(s[i])) {
            open.unshift(s[i])
        } else if (!pairs.includes(open[0] + s[i])) {
            return false
        }
    }

    return open.length > 0 ? false : true
};

console.log(twoSum2(nums, target))
