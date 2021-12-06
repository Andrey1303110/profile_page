$(document).ready(function () {
    $(document).on("click", ".drop_zone .button.upload", function (e) {
        e.preventDefault();
        $(this).prev().trigger("click");
    });

    var $uploadCrop;

    function readFile(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $(".upload-demo").addClass("ready");
                $uploadCrop.croppie("bind", {
                    url: e.target.result,
                })
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    let crop_pic = $(".crop_pic");
    if (crop_pic.length > 0) {
        $uploadCrop = crop_pic.croppie({
            url: "img/icons/profile_avatar.png",
            enableExif: true,
            viewport: {
                type: "circle",
            },
        });
    }

    $(document).on("change", "#upload", function () {
        readFile(this);
    });

    $(document).on("update.croppie", ".crop_pic", function (ev, cropData) {
        $uploadCrop.croppie("result", {
            type: "canvas",
            size: "viewport",
        }).then(function (resp) {
            $(".crop_pic_result img").attr("src", resp);
            if (window.innerWidth <= 425) {
                $('.cr-slider').attr({ 'min': .5, 'max': .8 });
            }
            else {
                $('.cr-slider').attr({ 'min': .85, 'max': 1.5 });
            }
        });
    });

    $(document).on("click", "input.button.blk.delete", function () {
        $uploadCrop.croppie("bind", {
            url: "img/icons/profile_avatar.png",
        });
        $("input#upload").val("");
    });

    $(document).on("click", ".edit_profile .profile_photo", function () {
        $(".crop_pic").croppie("bind");
    });
})
