//工资发放策略 
var strategies = {
    A: 20,
    B: 18,
    C: 16,
    D: 12,
    S: 100,
    calculataBonus: function(salary, level = 'C') {
        return salary * strategies[level];
    }
};
console.log(strategies.calculataBonus(20000, 'S'));