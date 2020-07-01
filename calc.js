class Calc {
    static add(nums){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return nums.reduce(reducer, 0)
    }
    static subtract(nums){
        let difference = nums[0]
        for(let i = 1; i < nums.length; i++){
            difference -= nums[i]
        }
        return difference
    }
    static multiply(nums){
        let product = nums[0]
        for(let i = 1; i < nums.length; i++){
            product *= nums[i]
        }
        return product
    }
    static divide(num1, num2){
        if (num2 === 0)
            alert("You cannot divide by Zero!")
        else
            return num1 / num2
    }
}


let renderCalc = () => {
    let parent = document.getElementById('main')
    let calcTop = document.createElement('div')
    calcTop.classList.add('top')
    parent.appendChild(calcTop)
    renderOps(parent)
    renderNums(parent)
}

let renderOps = (parent) => {
    let calcMul = document.createElement('button')
    let calcDivide = document.createElement('button')
    let calcAdd = document.createElement('button')
    let calcSub = document.createElement('button')
    calcMul.classList.add('ops')
    calcMul.innerText = '*'
    calcDivide.classList.add('ops')
    calcDivide.innerText = '/'
    calcAdd.classList.add('ops')
    calcAdd.innerText = '+'
    calcSub.classList.add('ops')
    calcSub.innerText = '-'
    opArr = [calcMul, calcDivide, calcAdd, calcSub]
    opArr.map((oper) => parent.appendChild(oper))
}

let renderNums = (parent) => {
    let calcDot = document.createElement('button')
    let calcOne = document.createElement('button')
    let calcTwo = document.createElement('button')
    let calcThree = document.createElement('button')
    let calcFour = document.createElement('button')
    let calcFive = document.createElement('button')
    let calcSix = document.createElement('button')
    let calcSeven = document.createElement('button')
    let calcEight = document.createElement('button')
    let calcNine = document.createElement('button')
    let calcZero = document.createElement('button')

    calcDot.classList.add('num')
    calcDot.innerText = '.'
    calcOne.classList.add('num')
    calcOne.innerText = 1
    calcTwo.classList.add('num')
    calcTwo.innerText = 2
    calcThree.classList.add('num')
    calcThree.innerText = 3
    calcFour.classList.add('num')
    calcFour.innerText = 4
    calcFive.classList.add('num')
    calcFive.innerText = 5
    calcSix.classList.add('num')
    calcSix.innerText = 6
    calcSeven.classList.add('num')
    calcSeven.innerText = 7
    calcEight.classList.add('num')
    calcEight.innerText = 8
    calcNine.classList.add('num')
    calcNine.innerText = 9
    calcZero.classList.add('num')
    calcZero.innerText = 0
    numArr = [calcDot, calcOne, calcTwo, calcThree, calcFour, calcFive, calcSix, calcSeven, calcEight, calcNine, calcZero]
    numArr.map((num) => parent.appendChild(num) )
}


document.addEventListener('DOMContentLoaded', (event) => {
    renderCalc()
})
