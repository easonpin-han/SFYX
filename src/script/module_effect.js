import { $, ajax, cookietool, bufferMove, yzm, hasClass, addClass, removeClass, siblingsOf } from './module_tool.js';
import { } from './module_index_render.js';
class Lunbo {
    constructor(options) { //配置参数
        // this.settings={ //默认参数
        //     selector: '', //选择器
        //     etype: 'onmouseover', //事件类型
        //     autoplay: true, //自动切换
        //     invoke: 1 //一开始默认第几项为激活状态
        // }
        // this.options=options;

        this.slide = $('#slide_show');
        this.bannerol = $('#index_slide ol');
        this.lunbonumli = $('#lunboNum li', 'all');//小圆点
        this.imgli = $('.slide_wrap ol li', 'all');//图片

        // Object.assign(this.settings, this.options); //配置取代默认参数

        this.timer = null;
        this.num=0;
    }
    init() {
        this.numliLunbo();
        this.autoLunbo();
    };
    // 小圆点轮播
    numliLunbo() {
        let _this = this;
        // console.log(this.imgli[0]);
        for (let i = 0; i < this.lunbonumli.length; i++) {
            this.lunbonumli[i].onmouseover = function () {//此处不可以改成箭头函数，this指向
                // 小圆点增删类名
                let sibnumli = siblingsOf(this);
                for (let j = 0; j < sibnumli.length; j++) {
                    removeClass(sibnumli[j], 'cur');
                }
                addClass(this, 'cur');
                bufferMove(_this.bannerol, { left: -1000 * i });
                _this.num=i;
            };

            // 鼠标移入取消自动轮播
            this.slide.onmouseover = function () {
                console.log(1);
                clearInterval(_this.timer);
            };

            // 鼠标移出开始自动轮播
            this.slide.onmouseout = function () {
                console.log(0);
                _this.autoLunbo();
            };
        };
    };
    // 自动轮播
    autoLunbo() {
        let _this = this;
        this.bannerol.appendChild(this.imgli[0].cloneNode(true));//在最后复制第一张图
        clearInterval(this.timer);
        this.timer = setInterval(function () {
            _this.num++;
            if (_this.num <= 8) {
                if (_this.num === 8) {
                    _this.num = 0;
                    let sibnumli = siblingsOf(_this.lunbonumli[0]);
                    for (let j = 0; j < sibnumli.length; j++) {
                        removeClass(sibnumli[j], 'cur');
                    }
                    addClass(_this.lunbonumli[0], 'cur');
                }
                let sibnumli = siblingsOf(_this.lunbonumli[_this.num]);
                for (let j = 0; j < sibnumli.length; j++) {
                    removeClass(sibnumli[j], 'cur');
                }
                addClass(_this.lunbonumli[_this.num], 'cur');
                bufferMove(_this.bannerol, { left: -1000 * _this.num });
            } else {
                _this.num = 0;
                _this.bannerol.style.cssText = 'left:0';
            }
        }, 2000);
    };
};

// class Tab


//初始化
// Tab.prototype.init = function () {
//     let _this = this;
//     Object.assign(this.settings, this.options); //配置取代默认参数

//     this.tab = $(this.settings.selector); //获取tab元素
//     this.tab_title = this.tab.querySelector('.tab_title'); //切换按钮的父框
//     this.tab_content = this.tab.querySelector('.tab_content'); //切换内容的父框

//     if (this.tab_title.children.length > 1) {
//         this.tab_btns = this.tab_title.children;
//     } else if (this.tab_title.children.length === 1) {
//         this.tab_btns = this.tab_title.children[0].children;
//     }

//     this.tab_items = this.tab_content.querySelectorAll('.item'); //切换内容
//     this.timer = null;
//     this.num = 0;

//     //添加事件
//     for (let i = 0; i < this.tab_btns.length; i++) {
//         if (this.settings.etype === 'onclick' || this.settings.etype !== 'onmouseover') {
//             this.tab_btns[i]['onclick'] = function () {
//                 _this.num = i;
//                 _this.tabswitch(i)
//             }
//         } else {
//             this.tab_btns[i][this.settings.etype] = function () {
//                 _this.timer = setTimeout(function () {
//                     _this.num = i;
//                     _this.tabswitch(i)
//                 }, 300);
//             }
//             this.tab_btns[i]['onmouseout'] = function () {
//                 clearTimeout(_this.timer);
//             }
//         }

//     }

//     //自动切换
//     if (this.settings.autoplay) {
//         let t = null;
//         t = setInterval(function () {
//             _this.autopaly();
//         }, 2000);
//         this.tab.onmouseover = function () {
//             clearInterval(t);
//         };
//         this.tab.onmouseout = function () {
//             t = setInterval(function () {
//                 _this.autopaly();
//             }, 2000);
//         }
//     }

//     //默认的激活状态
//     if (typeof this.settings.invoke === 'number' && this.settings.invoke <= this.tab_btns.length && this.settings.invoke >= 1) {
//         this.activeinvoke();
//     }

// };
//切换过程
// Tab.prototype.tabswitch = function (i) {
//     for (let j = 0; j < this.tab_btns.length; j++) {
//         this.removeclass(this.tab_btns[j], 'active');
//         this.removeclass(this.tab_items[j], 'show');
//     }
//     this.addclass(this.tab_btns[i], 'active');
//     this.addclass(this.tab_items[i], 'show');
// };


export { Lunbo };