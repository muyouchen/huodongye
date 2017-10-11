/**
 * 尾投奖励弹窗逻辑
 * 弹窗类：投资结果：inv-reso 投资结果：inv-reso-last  尾投奖励弹窗：wt-pop  尾投奖励提示弹窗：wt-lost-pop
 */

$(function(){
    // 是否抽过奖了
    var isPlay = false;

    // 点击领取尾投奖励
    $('.inv-wt-btn').click(function(e){
        e.preventDefault();
        popup.wt();
    });

    // 尾投奖励弹窗关闭
    $('.wt-close').click(function(e){
        wtCloseCheck()
    });

    // 跳转链接点击事件，弹窗检查后仍然跳转
    $('.wt-url').click(function(e){
        e.preventDefault();
        var url = $(this).attr('href');
        wtCloseCheck(url);
    })

    // 关闭弹窗检查
    var wtCloseCheck = function(url) {
        if(bRotate)return;
        if(isPlay) {
            popup.hide();
        } else {
            if(url) {
                $('.wt-lost-no').attr('href',url);
            }
            popup.tips();
        }
    }

    //尾投奖励提示窗- 不要奖励
    $('.wt-lost-no').click(function(e){
        e.preventDefault();
        popup.hide();

        var url = $(this).attr('href');
        if(url) {
            window.location.href = url
        }
    });
    //尾投奖励提示窗- 领取奖励
    $('.wt-lost-need').click(function(e){
        e.preventDefault();
        popup.wt();
    });

    //弹窗控制
    var popup = {
        //投资结果弹窗
        inv: function(){
            this.hide();
            $('.box').addClass('inv-reso-last');
        },
        //尾投奖励弹窗
        wt: function(){
            this.hide();
            $('.box').addClass('wt-pop');
        },
        //尾投奖励提示弹窗
        tips: function(){
            this.hide();
            $('.box').addClass('wt-lost-pop');
        },
        //关闭弹窗
        hide: function(){
            $('.box').removeClass('inv-reso wt-pop wt-lost-pop inv-reso-last');
        }
    }

    // 如果没有领取奖励 禁止刷新
    // window.onbeforeunload  = function(){
    //     if(!isPlay){
    //         return '离开此页面将失去此次尾投奖励机会,确定要离开吗?'; 
    //     }
    // }

    var rotateTimeOut = function (){
        $('#rotate').rotate({
            angle:0,
            animateTo:2160,
            duration:8000,
            callback:function (){
                alert('网络超时，请检查您的网络设置！');
            }
        });
    };
    var bRotate = false;

    var rotateFn = function (awards, angles, txt){
        bRotate = !bRotate;
        $('#rotate').stopRotate();
        $('#rotate').rotate({
            angle:0,
            animateTo:angles+1800,
            duration:8000,
            callback:function (){
                $(".wt-info3").hide();
                $(".wt-result").show();
                $(".wt-money").html(txt);
                bRotate = !bRotate;
                isPlay = true;
            }
        })
    };
    // 点击开始
    $('.pointer').click(function (){
        if(bRotate)return;
        
        if (isPlay) {
            return false;
        }
        var item = rnd(0,7);
        
        switch (item) {
            case 0:
                //var angle = [26, 88, 137, 185, 235, 287, 337];
                rotateFn(0, 337, '10');
                break;
            case 1:
                //var angle = [88, 137, 185, 235, 287];
                rotateFn(1, -68, '200');
                break;
            case 2:
                //var angle = [137, 185, 235, 287];
                rotateFn(2, -115, '20');
                break;
            case 3:
                //var angle = [137, 185, 235, 287];
                rotateFn(3, -158, '50');
                break;
            case 4:
                //var angle = [185, 235, 287];
                rotateFn(4, -203, '30');
                break;
            case 5:
                //var angle = [185, 235, 287];
                rotateFn(5, -248, '100');
                break;
            case 6:
                //var angle = [235, 287];
                rotateFn(6, -293, '5');
                break;
            case 7:
                //var angle = [287];
                rotateFn(7, -338, '500');
                break;
        }
    });

    function rnd(n, m){
        return Math.floor(Math.random()*(m-n+1)+n)
    }
});