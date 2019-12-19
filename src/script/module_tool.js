// 封装工具

// 1.取元素
function $(selector,all){
    if(all){
        return document.querySelectorAll(selector);
    }else{
        return document.querySelector(selector);
    }
}

// 2.Ajax
function ajax(obj) {
    function objToString(obj) {
        if (Object.prototype.toString.call(obj).slice(8, -1) === 'Object') {
            let objarr = [];
            for (let i in obj) {
                objarr.push(i + '=' + obj[i]);
            }
            return objarr.join('&')
        }
    }
    let promise = new Promise((resolve, reject) => {
        let ajax = new XMLHttpRequest();
        obj.type = obj.type || 'get';
        if (!obj.url) {
            throw new Error('接口地址不能为空');
        }
        if (obj.data) {
            if (Object.prototype.toString.call(obj.data).slice(8, -1) === 'Object') {
                obj.data = objToString(obj.data);
            } else {
                obj.data = obj.data;
            }
        }
        if (obj.data && obj.type === 'get') {
            obj.url += '?' + obj.data;
        }
        if (obj.async === 'false' || obj.async === false) {
            obj.async = false;
        } else {
            obj.async = true;
        }
        ajax.open(obj.type, obj.url, obj.async);
        if (obj.data && obj.type === 'post') {
            ajax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            ajax.send(obj.data);
        } else {
            ajax.send();
        }
        if (obj.async) {
            ajax.onreadystatechange = function () {
                if (ajax.readyState === 4) {
                    if (ajax.status === 200) {
                        let objdata = null;
                        if (obj.dataType === 'json') {
                            objdata = JSON.parse(ajax.responseText);
                        } else {
                            objdata = ajax.responseText;
                        }
                        resolve(objdata);

                    } else {
                        reject('接口地址有误');
                    }
                }
            }
        } else {
            if (ajax.status === 200) {
                let objdata = null;
                if (obj.dataType === 'json') {
                    objdata = JSON.parse(ajax.responseText);
                } else {
                    objdata = ajax.responseText;
                }
                resolve(objdata);
            } else {
                reject('接口地址有误');
            }
        }

    });
    return promise;
}

// 3.cookie
let cookietool = {
    addcookie: function (key, value, days) {
        let d = new Date();
        d.setDate(d.getDate() + days);
        document.cookie = `${key}=${encodeURIComponent(value)};expires=${d}`;
    },
    getcookie: function (key) {
        let arr = decodeURIComponent(document.cookie).split('; ');
        for (let value of arr) {
            let newarr = value.split('=');
            if (key === newarr[0]) {
                return newarr[1];
            }
        }
    },
    delcookie: function (key) {
        this.addcookie(key, '', -1);
    }
}

// 4.完美运动
function bufferMove(obj,json,fn){
    var speed=0;
    function getStyle(obj,attr){
        if(window.getComputedStyle){
            return window.getComputedStyle(obj)[attr];
        }else{
            return obj.currentStyle(attr);
        }
    }
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var flag=true;
        for(var attr in json){
            var currentValue;
            if(attr==='opacity'){
                currentValue=getStyle(obj,'opacity')*100;
            }else{
                currentValue=parseInt(getStyle(obj,attr));
            }
            speed=(json[attr]-currentValue)/10;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            if(currentValue!==json[attr]){
                if(attr==='opacity'){
                    obj.style.opacity=(currentValue+speed)/100;
                    obj.style.filter='alpha(opacity='+(currentValue+speed)+')';
                }
                obj.style[attr]=(currentValue+speed)+'px';
                flag=false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            fn&&typeof fn==='function'&&fn();
        }
    },1000/60);
}

// 5.随机数
function rannum(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

// 6.数字字母混合验证码(数字+大写字母+小写字母)
function yzm(){
    var newarr=[];
    for(var i=1;i<=6;i++){
        var ranNum=rannum(0,9);
        var ranUpper=String.fromCharCode(rannum(65,90));
        var ranLower=String.fromCharCode(rannum(97,122));
        var arr=[ranNum,ranUpper,ranLower];
        var index=parseInt(Math.random()*arr.length);
        newarr.push(arr[index]);
    }
    return newarr.join('');
}

// 7.hasClass
function hasClass(elem, cls){
    cls = cls || '';
    if(cls.replace(/\s/g, '').length == 0) return false;
    return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
}

// 8.增加class
function addClass(elem, cls){
    if(!hasClass(elem, cls)){
        elem.className += ' ' + cls;
    }
}

// 9.移除class
function removeClass(elem, cls){
    if(hasClass(elem, cls)){
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
        while(newClass.indexOf(' ' + cls + ' ') >= 0){
            newClass = newClass.replace(' ' + cls + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}

// 10.兄弟元素siblings
function siblingsOf(elem){
    var len = 0;
    var children = elem.parentNode.childNodes;//获取目标元素的所有兄弟元素和它自身
    var siblings = new Array();
    for (var i = 0 , len = children.length; i < len; i++) {
        //判断此元素是一个元素节点而且不是调用元素的本身
        //若为真放进数组里面
        if (children[i].nodeType == 1 && children[i] != elem) {
            siblings.push(children[i]);
        }
    }
    //返回最后得出的结果数组
    return siblings;
}

export { $, ajax, cookietool, bufferMove, yzm, hasClass, addClass, removeClass, siblingsOf};