/* 
1.该组件啥用于创建一个为Count组件服务的reducer 
2.该函数能够从action里接到两个参数: 加工之前的状态, 和动作对象 (preValue, actionName)
3.
*/
// 组件状态的初始化
const initState = 0;

export default function countReducer(preState=initState, action) {
    // 将preState进行初始化(初始的State为undefined)
    if(preState === undefined) preState = 0;
    // 从action对象中获取：type, data
    const {type, data} = action;
    // 根据type决定如何加工数据 
    switch (type) {
        case 'INCREMENT':
            return preState + data
        case 'DECREMENT':
            return preState - data
        // reducer是一个纯函数,所以不在里面进行奇数偶数等的逻辑判断
        default: 
            return initState
    }
}
