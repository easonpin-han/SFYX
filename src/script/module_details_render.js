import { $, ajax, cookietool, bufferMove, yzm } from './module_tool.js';
// 详情页渲染
ajax({
    type:'get',
    url:'http://10.31.161.207/SFYX/php/details_render.php',
    data:{picsid:this.sid},
    dataType:'json'
}).then(function(data){
    // 数据
    console.log(data.urls);


});