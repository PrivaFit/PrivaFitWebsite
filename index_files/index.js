'use strict';
(function() {
    var windowHeight = $(window).height();
    var offsetHeight = 150;
    var bodyHeight = $("body").height();

    if(bodyHeight + offsetHeight < windowHeight) {
        $("body").height(windowHeight);
    }

    $(".ios-download-bg").on("mouseenter", function() {
        $(this).attr("src", "/script/dest/image/pc/ios_download_active.png");
    });

    $(".ios-download-bg").on("mouseleave", function() {
        $(this).attr("src", "/script/dest/image/pc/ios_download_normal.png");
    });

    $(".android-download-bg").on("mouseenter", function() {
        $(this).attr("src", "/script/dest/image/pc/android_download_active.png");
    });

    $(".android-download-bg").on("mouseleave", function() {
        $(this).attr("src", "/script/dest/image/pc/android_download_normal.png");
    });

})();
