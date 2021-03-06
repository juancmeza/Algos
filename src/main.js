'use strict';

function counter() {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    document.getElementById('app').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
  }, 1000);
}

counter();

// ------------ Binary Search - Recursive -----------------

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

// ----------------- TwoSum -------------------

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

let numsTwoSum = [2,7,11,15]
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

//-------------- isValid Brackets ---------------------
var isValid = function(s) {

    //group characters by type as they appear
    //check if opening bracket has matching closing bracket

    let open = []
    let openSample = ['[', '(', '{']
    let pairs = ['[]', '()', '{}']

    for (let i = 0; i < s.length; i++) {
        if (openSample.includes(s[i])) {
            open.unshift(s[i])
            // console.log(open)
            // console.log(open[0] + s[i])
        } else {
            if (!pairs.includes(open[0] + s[i])) {
              // console.log(open[0] + s[i])
              return false
          } else {
            open.shift()
          }
        }
    }

     return open.length > 0 ? false : true

};
// --------------- isBadVersion -------------------
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    const firstBad = (n, low) => {

        let mid = low + Math.floor((n - low)/2)

        if (isBadVersion(mid)) {
            if (!isBadVersion((n/2) + 1)) {
                return mid
            }
            return firstBad(n, mid + 1)
        }

        if (isBadVersion(mid - 1)) {
            return mid - 1
        }

        return firstBad(mid - 1, low)

    };

    return firstBad(n, 0)

};

//--------------- Rotate Array k Steps ------------------
let nums = [1,2,3,4,5,6,7]
let k = 3
var rotate = function(nums, k) {

  // slice last k numbers
  // push numbers sliced in front of new numbs

  let newNums = []
  let numsRotated = nums.slice(nums.length - k, nums.length)

  newNums.push(numsRotated)
  newNums.push(nums.slice(0, nums.length - k))

  return newNums.flat()

  // return nums.slice(nums.length - k, nums.length).unshift(nums)

};


// ----------------- Flatten list ------------------

let notFlatList = [1, 2, [3, 4], 5, [6, [7]]]

const flatten2 = (arr) => {

  let newArr = []

  const isNumber = (element) => {
    if (typeof(element) === 'number') {
      newArr.push(element)
      return 'done'
    } else {
        if (element.length === 1) {
          return isNumber(element[0])
        }
        element.forEach(el => {
          isNumber(el)
        })
    }
  }

  arr.forEach(element => {
    isNumber(element)
  });


  return newArr
}


var shortestDistance = function(wordsDict, word1, word2) {

    let minDist = Infinity
    let indexLastWord
    let lastWord

    //if word1 or word2 - get differece between indexes, compare to minDist and           update if less than minDist

    //Update indexLastWord

    //check that lastWord is not the same before checking distance
    //if word is same, still update indexLastWord but don't check distance

    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1 || wordsDict[i] === word2) {
            if (wordsDict[i] === lastWord)
            lastWord = wordsDict[i]
            if (indexLastWord === undefined) {
                indexLastWord = i
            } else {
                if ((i - indexLastWord) < minDist) {
                    minDist = i - indexLastWord
                }
                indexLastWord = i
            }
        }
    }

    return minDist

};


console.log(flatten2(notFlatList))

// ----------------- Depth First Search Graph ------------------

const graph = {
    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}

const depthFirstPrint = (graph, source) => {

    const stack = [source];
    
    while (stack.length > 0) {
        const current = stack.pop()
        console.log(current)

        for (let neighbor of graph[current]){
            stack.push(neighbor)
        }
    }
}

// ----------------- Depth First Search Graph Recursive ------------------

const depthFirstPrintRecursive = (graph, source) => {

    console.log(source)
    for (let neighbor of graph[source]) {
        depthFirstPrintRecursive(graph, neighbor)
    }

}

// ----------------- Breadth First Search Graph ------------------

const breadthFirstPrint = (graph, source) => {

    const queue = [source];
    while (queue.length > 0 ) {
        const current = queue.shift()
        console.log(current)
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }

}

// ----------------- Depth First Graph Find if there is a path ------------------

const hasPath2 = (graph, src, dst) => {

    if (src == dst) return true

    for (let neighbor of graph[src]) {
        if (hasPath2(graph, neighbor, dst) === true) {
            return true
        }
    }

    return false
}

// ----------------- Breadth First Graph Find if there is a path ------------------

const hasPath3 = (graph, src, dst) => {

    const queue = [src]

    while (queue.legth > 0) {
        const current = queue.shift()
        if (current === dst) {
            return true
        }

        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }

    return false

}

// ----------------- Depth First Graph Find if there is a path ------------------

const hasPath = (graph, src, dst) => {

    const stack = [src]

    while (stack.length > 0) {
        const current = stack.pop()
        if (current === dst) return true

        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }

    return false

}

// ----------------- Depth First Graph Find if there is a path Recursive ------------------


const hasPathRecursive = (graph, src, dst) => {

    if (src === dst) return true

    for (let neighbor of graph[src]) {
        if (hasPathRecursive(graph, neighbor, dst) === true) return true
    }

    return false

}


