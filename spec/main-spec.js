let sinon = require("sinon");
let main = require("../lib/main");

describe('main()', () => {

    it('should display main menu once started', () => {
        sinon.spy(console, 'log');
        main();
        expect(console.log.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    });
    // it('when your choose is 1', () => {
    //     main()
    //     expect(main()).toBe('请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...）:');
    // })
});