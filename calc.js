
class Calc {
    static submitDisplay(display){
        let splitDis =  display.split(" ")
        let op = splitDis[1]
        let nums = [splitDis[0], splitDis[2]]
        switch(op){
            case '+':
                return Calc.add(nums)
            case '-':
                return Calc.subtract(nums)
            case '*':
                return Calc.multiply(nums)
            case '/':
                return Calc.divide(...nums)
        }
        
    }
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
