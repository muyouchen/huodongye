/*****************************************************
 * placeholder support IE8 and lower
 * author: www.yinmu.me
 * date: 2015-09-15
 * version: 1.0
******************************************************/
;(function(window,document) {
    var is = $("input"),ts = $("textarea");
    is.each(function () {
        if($(this).attr("placeholder")){
            var range = $(this).get(0).createTextRange();
            $(this).val($(this).attr("placeholder")).css("color","#a9a9a9");
            $(this).keydown(function () {
                if($(this).val() == $(this).attr("placeholder")){
                    $(this).val("").css("color","#000");
                }
            });
            $(this).keyup(function () {
                if($(this).val() == ""){
                    $(this).val($(this).attr("placeholder")).css("color","#a9a9a9");
                    range.move("sentence",0);
                    range.select();
                }
            });
            $(this).focus(function () {
                if($(this).val() == $(this).attr("placeholder")){
                    range.move("sentence",0);
                    range.select();
                }
            });
            $(this).click(function () {
                if($(this).val() == $(this).attr("placeholder")){
                    range.move("sentence",0);
                    range.select();
                }
            });
        }
    });
    ts.each(function () {
        if($(this).attr("placeholder")){
            var range = $(this).get(0).createTextRange();
            $(this).text($(this).attr("placeholder")).css("color","#a9a9a9");
            $(this).keydown(function () {
                if($(this).text() == $(this).attr("placeholder")){
                    $(this).text("").css("color","#000");
                }
            });
            $(this).keyup(function () {
                if($(this).text() == ""){
                    $(this).text($(this).attr("placeholder")).css("color","#a9a9a9");
                    range.move("sentence",0);
                    range.select();
                }
            });
            $(this).focus(function () {
                if($(this).text() == $(this).attr("placeholder")){
                    range.move("sentence",0);
                    range.select();
                }
            });
            $(this).click(function () {
                if($(this).text() == $(this).attr("placeholder")){
                    range.move("sentence",0);
                    range.select();
                }
            });
        }
    });
}(typeof window !== "undefined" ? window : this, document));