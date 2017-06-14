// 根据屏幕尺寸设置rem
+function ($) {
    'use strict';

    var Set_html_rem = function (element, options) {
        this.$element = element,
            this.defaults = {},
            this.opts = $.extend({}, this.defaults, options);

    };


    // 初始化
    Set_html_rem.prototype.init = function () {
        // 客户端与根字体比例
        var proportion = 20;
        // 客户端可视区宽度
        var clientW;
        // 根元素字体大小
        var html_rem;
        // max width
        var max_width = 640;
        var min_width = 320;


        set_rem();

        $(window).on('resize', set_rem);

        function set_rem() {
            clientW = $(window).width();

            // 大于480,则依然使用480
            if (clientW > max_width) {
                clientW = max_width;
            }
            ;
            // 小于320 ,使用320px
            if (clientW < min_width) {
                clientW = min_width;
            }
            ;

            // 获取该尺寸的字体大小并设置
            html_rem = clientW / 640 * proportion;
            $('html').css('font-size', html_rem);
        }

    };


    (function (options) {
        var obj = new Set_html_rem(this, options);
        return obj.init();
    })();

}(Zepto);






















