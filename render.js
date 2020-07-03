
let render = () => {
    let op = ''
    let display = ""
    let calcTop = document.createElement('div')
    let renderCalc = () => {
        let parent = document.getElementById('main')
        calcTop.classList.add('top')
        calcTop.innerText = display
        parent.appendChild(calcTop)
        renderOps(parent)
        renderNums(parent)
        let eq =  document.createElement('button')
        let rest =  document.createElement('button')
        eq.innerText = '='
        rest.innerText = 'CE'
        eq.addEventListener('click', (e) => {
            Calc.submitDisplay(display)
            calcTop.innerText = ''
            display = ''
        })
        rest.addEventListener('click', e => { 
            display=''
            calcTop.innerText = ''
        })
        parent.appendChild(eq)
        parent.appendChild(rest)
    }
    
    let renderOps = (parent) => {
        let calcMul = document.createElement('button')
        let calcDivide = document.createElement('button')
        let calcAdd = document.createElement('button')
        let calcSub = document.createElement('button')
        calcMul.classList.add('ops')
        calcMul.innerText = '*'
        calcMul.addEventListener('click', e => {
            op = e.target.innerText
            display = display + ` ${op} `
            calcTop.innerText = display
        })
        calcDivide.classList.add('ops')
        calcDivide.innerText = '/'
        calcDivide.addEventListener('click', e => {
            op = e.target.innerText
            display = display + ` ${op} `
            calcTop.innerText = display
        })
        calcAdd.classList.add('ops')
        calcAdd.innerText = '+'
        calcAdd.addEventListener('click', e => {
            op = e.target.innerText
            display = display + ` ${op} `
            calcTop.innerText = display
        })
        calcSub.classList.add('ops')
        calcSub.innerText = '-'
        calcSub.addEventListener('click', e => {
            op = e.target.innerText
            display = display + ` ${op} `
            calcTop.innerText = display
        })
        opArr = [calcMul, calcDivide, calcAdd, calcSub]
        opArr.map((oper) => {
            parent.appendChild(oper)
        })
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
        calcDot.addEventListener('click', (event) => {
            display = display + `${event.target.innerText}`
            calcTop.innerText = display
        })
        calcOne.classList.add('num')
        calcOne.innerText = 1
        calcOne.addEventListener('click', (event) => {
            display = display + `${event.target.innerText}`
            calcTop.innerText = display
        })
        calcTwo.classList.add('num')
        calcTwo.innerText = 2
        calcTwo.addEventListener('click', (event) => {
            display = display + `${event.target.innerText}`
            calcTop.innerText = display
        })
        calcThree.classList.add('num')
        calcThree.innerText = 3
        calcThree.addEventListener('click', (event) => {
            display = display + `${event.target.innerText}`
            calcTop.innerText = display
        })
        calcFour.classList.add('num')
        calcFour.innerText = 4
        calcFour.addEventListener('click', (event) => {
            display = display + `${event.target.innerText}`
            calcTop.innerText = display
        })
        calcFive.classList.add('num')
        calcFive.innerText = 5
        calcFive.addEventListener('click', (event) => {
            display = display + `${event.target.innerText}`
            calcTop.innerText = display
        })
        calcSix.classList.add('num')
        calcSix.innerText = 6
        calcSix.addEventListener('click', (event) => {
            display = display + `${event.target.innerText}`
            calcTop.innerText = display
        })
        calcSeven.classList.add('num')
        calcSeven.innerText = 7
        calcSeven.addEventListener('click', (event) => {
            display = display + `${event.target.innerText}`
            calcTop.innerText = display
        })
        calcEight.classList.add('num')
        calcEight.innerText = 8
        calcEight.addEventListener('click', (event) => {
            display = display + `${event.target.innerText}`
            calcTop.innerText = display
        })
        calcNine.classList.add('num')
        calcNine.innerText = 9
        calcNine.addEventListener('click', (event) => {
            display = display + `${event.target.innerText}`
            calcTop.innerText = display
        })
        calcZero.classList.add('num')
        calcZero.innerText = 0
        calcZero.addEventListener('click', (event) => {
            display = display + `${event.target.innerText}`
            calcTop.innerText = display
        })
        numArr = [calcDot, calcOne, calcTwo, calcThree, calcFour, calcFive, calcSix, calcSeven, calcEight, calcNine, calcZero]
        numArr.map((num) => parent.appendChild(num) )
    }
    return renderCalc
}