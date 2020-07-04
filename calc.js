
class Calc {
    static submitDisplay(display){
        let splitDis =  display.split(" ")
        let op = splitDis[1]
        let nums = [parseFloat(splitDis[0]), parseFloat(splitDis[2])]
        switch(op){
            case '+':
                return Calc.add(...nums)
            case '-':
                return Calc.subtract(...nums)
            case '*':
                return Calc.multiply(...nums)
            case '/':
                return Calc.divide(...nums)
        }
        
    }
    static add(num1, num2){
        return num1 + num2
    }
    static subtract(num1, num2){
        let difference = num1 - num2
        return difference
    }
    static multiply(num1, num2){
        let product = num1 * num2
        return product
    }
    static divide(num1, num2){
        if (num2 === 0){
            return "You cannot divide by Zero!"
        }   
        else{
            return num1 / num2
        }
    }
}
