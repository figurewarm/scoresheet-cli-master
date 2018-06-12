module.exports = () => {
    var student = [];
    var readlineSync = require('readline-sync');
    do {
        var choose = chooseMenu();
        var judge1 = false;
        var judge2 = true;
        if (choose == '1') {
            do {
                console.log('请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...）:\n')
                var name = readlineSync.question('input your name:');
                var id = readlineSync.question('input your id:');
                var mathGrade = readlineSync.question('input your mathGrade:');
                var chineseGrade = readlineSync.question('input your chineseGrade:');
                var englishGrade = readlineSync.question('input your englishGrade:');
                var javaGrade = readlineSync.question('input your javaGrade:');
                if (mathGrade < 0 || mathGrade > 100 || chineseGrade < 0 || chineseGrade > 100 || englishGrade < 0 || englishGrade > 100 || javaGrade < 0 || javaGrade > 100) {
                    console.log('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：');
                    judge1 = true
                }
                if (judge1 == false)
                    console.log('学生' + name + '的成绩被添加')
            } while (judge1)
            student.push({
                name: name,
                id: id,
                math: Number(mathGrade),
                chinese: Number(chineseGrade),
                english: Number(englishGrade),
                java: Number(javaGrade)
            })
        }
        if (choose == '2') {
            var grade = '成绩单\n姓名|数学|语文|英语|编程|平均分|总分\n========================\n';
            do {
                var idNumbers = readlineSync.question('请输入要打印的学生的学号（格式： 学号, 学号,...）:\n');
                var idNumber = idNumbers.split(',');
                var total = 0;
                for (let i = 0; i < student.length; i++) {
                    for (let j = 0; j < idNumber.length; j++)
                        if (idNumber[j] == student[i].id) {
                            var sum = (student[i].math + student[i].chinese + student[i].english + student[i].java);
                            grade += student[i].name + '|' + student[i].math + '|' + student[i].chinese + '|' + student[i].english +
                                '|' + student[i].java + '|' + sum / 4 + '|' + sum + '\n';
                            judge2 = false;
                            total += sum;
                        }
                }
                grade += '========================\n' + '全班总分平均数：' + total / (idNumber.length + 1)
                console.log(grade)
            }
            while (judge2)
        }
    } while (choose != 3)
}

function chooseMenu() {
    console.log('1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：');
    var readlineSync = require('readline-sync');
    var choose = readlineSync.question();
    return choose;
}