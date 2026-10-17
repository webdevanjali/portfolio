$(document).ready(function () {

    // 3D Slider and Bootstrap Tab Handler
    $("#css3dimagePager .nav-link").click(function (e) {

        // Get the clicked link and its parent <li>
        var $link = $(this);
        var $li = $link.closest("li");

        // Calculate the rotation angle
        var rotateY = $li.index() * -90;

        // Rotate the 3D box
        $("#css3dimageslider ul").css({
            "-webkit-transform": "rotateY(" + rotateY + "deg)",
            "-moz-transform": "rotateY(" + rotateY + "deg)",
            "-ms-transform": "rotateY(" + rotateY + "deg)",
            "transform": "rotateY(" + rotateY + "deg)"
        });

        // Update the navigation's active state
        $("#css3dimagePager .nav-link").removeClass("active");
        $("#css3dimagePager li").removeClass("active");

        $link.addClass("active");
        $li.addClass("active");

        // Activate the corresponding Bootstrap tab
        e.preventDefault();

        var target = $link.attr("href");

        if (target && target.startsWith("#")) {
            var $targetTab = $(target);

            if ($targetTab.length) {
                $(".tab-content > .tab-pane").removeClass("active show");
                $targetTab.addClass("active show");
            }
        }
    });

    // Toggle transparency independently
    $("#css3dtransparency").click(function () {
        $("#css3dimageslider").toggleClass("transparency");
        $(this).toggleClass("active");
    });

});