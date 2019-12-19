import { $, ajax, cookietool, bufferMove, yzm } from './module_tool.js';
// 首页渲染
ajax({
    type:'get',
    url:'http://10.31.161.207/SFYX/php/index_render.php',
    dataType:'json'
}).then(function(data){
    // 数据
    let lunbo=data.lunbo;//轮播图
    let indexpic=data.indexpic;//优选必买 floor1
    let tuijian=data.tuijian;//为你推荐
    let youxuan=data.youxuan;//优选味道
    let share=data.share;//热门晒单

    // 取元素
    let index_slide=$('#index_slide');//轮播图
    let bigPerfect=$('#bigPerfect');//优选必买
    let floorpic=$('.pList');
    // let floorGap=$('.pList');//floor1
    let guessYouLike=$('#guess_you_like');//为你推荐
    let weidao=$('#weidao');//优选味道
    let toplist=$('#toplist');//热门晒单

    // 渲染
    // let strlunbo='<ol>';
    // for(let value of lunbo){
    //     strlunbo+=`
    //         <li>
    //             <a class="fore_pic trackref" href="">
    //             <img id="lunbo_${value.sid}" alt="${value.title}" src="${value.url}">
    //             </a>
    //         </li>
    //     `;
    // }
    // strlunbo+='</ol>';
    // index_slide.innerHTML=strlunbo;

    let strbigPerfect='';
    for(let value of indexpic){
        strbigPerfect+=`
            <li class="price_list0">
                <a class="a_buy" href="" title="${value.title}">${value.title}</a>
                <div class="a_price">
                    <span><i>￥</i>${value.yj}</span>
                    <span><b>会员价</b><i>￥</i>${value.price}</span>
                </div>
                <a class="trackref" href="" title="${value.title}">
                    <img src="${value.url}" class="lazy" data="${value.url}" alt="${value.title}">
                </a>
                <div class="bbtn">
                    <a href="">加入购物车</a>
                </div>
            </li>
        `;
    }
    bigPerfect.innerHTML=strbigPerfect;

    let strfloorpic='';
    for(let value of indexpic){
        strfloorpic+=`
            <li class="price_list1">
                <div class="pImg pImg_vip">
                    <a href="" title="${value.title}">
                        <img class="lazy" data="${value.url}" alt="${value.title}" src="${value.url}" style="display: block;">
                    </a>
                    <div class="gBtn">
                        <a href="">加入购物车</a>
                    </div>
                </div>
                <div class="title-a">
                    <a href="" title="${value.title}">${value.title}</a>
                </div>
                <div class="a_price f_price">
                    <span><i>￥</i>${value.price}</span>
                </div>
            </li>
        `;
    }
    floorpic.innerHTML=strfloorpic;

    let strguessYouLike='';
        for(let value of tuijian){
            strguessYouLike+=`
                <li class="price_list2">
                    <div class="pImg pImg_vip">
                        <a href="" title="${value.title}">
                            <img class="lazy" data="${value.url}" src="${value.url}" style="display: block;">
                        </a>
                        <div class="p-btn">
                            <a href="">加入购物车</a>
                        </div>
                    </div>
                    <div class="title-a">
                        <a href="" title="${value.title}">${value.title}</a>
                    </div>
                    <div class="a_price f_price">
                        <span><i>￥</i>${value.price}</span>
                    </div>
                </li>
            `;
        }
    guessYouLike.innerHTML=strguessYouLike;

    let strweidao='';
    for(let value of youxuan){
        strweidao+=`
            <li>
                <a class="trackref" href="" title="${value.title}">
                    <img data="${value.url}" class="lazy" src="${value.url}" style="display: inline;">
                </a>
            </li>
        `;
    }
    weidao.innerHTML=strweidao;

    let strtoplist='';
    for(let value of share){
        strtoplist+=`
            <li>
                <div class="share_c">
                    <div class="l">
                        <a href="" title="${value.title}">
                            <img src="${value.url}" alt="${value.title}">
                        </a>
                    </div>
                    <div class="r">
                        <p><a href="" title="${value.title}">${value.title}</a></p>
                        <p class="s_title"><a class="s_content" href="">“${value.comm}”</a></p>
                    </div>
                </div>
            </li>
        `;
    }
    toplist.innerHTML=strtoplist;
})
// export{ bigPerfect, weidao, toplist};