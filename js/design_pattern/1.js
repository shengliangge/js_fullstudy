/**
 * 功能：计算年收益
 * @author ysh
 * @date 2020-7-16
 * @param {*工资 number} salary 
 * @param {*等级 String} grade 
 * @return 总收益 number
 */
// function calculateBonus(salary, grade) {
//     var month;
//     if (grade === 'A') {
//         month = 20;
//     } else if (grade === 'B') {
//         month = 18;
//     } else if (grade === 'C') {
//         month = 16;
//     }
//     return salary * month;

// }
function calculateBonus(salary, level = 'C') {
    console.log(arguments);
    if (typeof + salary != 'number' || salary < 0) {
        throw new TypeError('工资必须是正整数');
    }

    if (['A', 'B', 'C', 'D', 'S'].indexOf(level) == -1) {
        throw new Error('错误的等级');
    }
    salary = parseInt(salary); //第一种
    if (level == 'A') {
        return salary * 20;
    } else if (level == 'B') {
        return salary * 18;
    } else if (level == 'D') {
        return salary * 12;
    } else if (level == 'S') {
        return salary * 100;
    }
    return salary * 16;
}
console.log(calculateBonus(20000));