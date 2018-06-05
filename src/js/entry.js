/**
 * Created by 赵慧云 on 2018/6/4.
 */
import {foo,bar} from"./math";
import data from"../data/test.json";
//样式不需要定义变量
import  "../css/test.css"
document.write(" entry.js is working!!" + "<br/>");
document.write(foo(3)+ "<br/>");
document.write(bar(3)+ "<br/>");
document.write(JSON.stringify(data) + "<br/>");
