// 引入redux的createStore来进行store的创造
import { createStore } from "redux";
// 引入自己生成的reducer文件
import countReducer from './count_reducer';

// 将自己创造的reducer文件带入createStore,并生成该组件专用的store
export default createStore(countReducer);
