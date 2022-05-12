window.onload = function () {
    var slideshow = document.getElementById("slideshow-img"),
        slideshowImg = document.getElementById("slideshowImg"),
        slideshowBackground = document.getElementById("slideshow"),
        imgNext = document.querySelector('.slideshowImgNext'),
        imgLast = document.querySelector('.slideshowImgLast'),
        img = ["./css/img/001.jpg",
            "./css/img/002.jpg",
            "./css/img/003.jpg",
            "./css/img/004.jpg",
            "./css/img/005.jpg"
        ],
        imgBack = ["linear-gradient(355deg, #353d44, #6e474b, #a34f52, #da5259)",
            "linear-gradient(58deg, #5a6165, #878e92, #b7bec3, #eaf1f5)",
            "linear-gradient(321deg, #03698a, #218680, #22a473, #04c364)",
            "linear-gradient(132deg, #fe0038, #fe5065, #f97793, #ed97c3)",
            "linear-gradient(58deg, #5a6165, #878e92, #b7bec3, #eaf1f5)"
        ],
        index = 0,
        timer = null;
    slideshowImg.src = img[index];
    slideshowBackground.style.backgroundImage = imgBack[index];
    //自动生成dot数量
    var imgList = document.querySelector('.imgList');
    var dot = document.getElementsByClassName('dot');
    for (let i = 0; i < img.length; i++) {
        let aObj = document.createElement('a');
        aObj.classList.add('dot');
        imgList.appendChild(aObj);
        /* 添加自定义属性index，对应每张图片的下标 */
        aObj.number = i;
    }
    //定义dot选中函数
    function dotChoose() {
        for (let i = 0; i < dot.length; i++) {
            dot[i].classList.remove('choose');
        }
    }

    dot[0].classList.add('choose');

    //定时器
    slideshowImg.classList.add('dongHua');
    timer = setInterval(autoPlay, 4000);

    //切换下一张图片
    function autoPlay() {
        index += 1;
        if (index == img.length) {
            index = 0;
        }
        //图片更改
        slideshowImg.src = img[index];
        //背景修改
        slideshowBackground.style.background = imgBack[index];
        //小圆点选中
        dotChoose();
        dot[index].classList.add('choose');
        //循环
        if (index == img.length - 1) {
            index = -1;
        }


    }
    //鼠标悬停图片
    slideshowImg.onmouseenter = function () {
        clearInterval(timer);
        slideshowImg.classList.remove('dongHua');
    }
    slideshowImg.onmouseout = function () {

        timer = setInterval(autoPlay, 4000);
        slideshowImg.classList.add('dongHua');
    }
    //点击小圆点
    for (let i = 0; i < img.length; i++) {
        dot[i].onmouseover = function () {
            dotChoose();
            this.classList.add('choose');
            index = i;
            //图片更改
            slideshowImg.src = img[index];
            //背景修改
            slideshowBackground.style.background = imgBack[index];
        }

    }

    //下一张图片
    imgNext.addEventListener('click', function () {
        autoPlay();

    })
    //上一张图片
    imgLast.addEventListener('click', function () {
        index = index - 1;
        if (index == -1) {
            index = img.length - 1;
        }
        //图片更改
        slideshowImg.src = img[index];
        //背景修改
        slideshowBackground.style.background = imgBack[index];
        dotChoose();
        dot[index].classList.add('choose');
    })

}