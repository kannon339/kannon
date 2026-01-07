// ヘッダーの背景色切り替え
$(window).on("load scroll", function(){
    let keyH = $(".change-point").innerHeight();
    let ws = $(this).scrollTop();
    
    if(ws > keyH){
        $(".header").addClass("app");
    }else{
        $(".header").removeClass("app");
    }
});

// ハンバーガーメニューの開閉
$(".trigger").on("click", function(){
    $(".header,.trigger").toggleClass("active");
});

// メニューリンククリックでメニューを閉じる
$(".gnav a").on("click", function(){
    $(".header,.trigger").removeClass("active");
});

// Slickスライダーの初期化
$(".slick01").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    fade: true,
    speed: 1500,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                autoplay: false,
                fade: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

// AOSアニメーションの初期化
AOS.init({
    once: false,
    duration: 1000
});

// スムーススクロール
$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    
    if (target.length) {
        const headerHeight = 80;
        const targetPosition = target.offset().top - headerHeight;
        
        $('html, body').animate({
            scrollTop: targetPosition
        }, 600);
    }
});

// ==================== カーソルエフェクト（足跡のみ） ====================
let pawTimeout;
$(document).on('mousemove', function(e) {
    // PC表示の時のみ
    if ($(window).width() > 768) {
        clearTimeout(pawTimeout);
        
        // 10%の確率で足跡を表示
        if (Math.random() < 0.1) {
            const paw = $('<div class="cursor-paw">🐾</div>');
            paw.css({
                left: e.pageX + 'px',
                top: e.pageY + 'px',
                opacity: 1
            });
            
            $('body').append(paw);
            
            paw.css('animation', 'pawFade 1.5s ease-out forwards');
            
            setTimeout(function() {
                paw.remove();
            }, 1500);
        }
    }
});


// script.jsに追記（既存のスムーススクロールの後に追加）

// ネーム刺繍案内ボタンのスムーススクロール
$('.name-service-btn').on('click', function(e) {
    e.preventDefault();
    const target = $(this.attr('href'));
    
    if (target.length) {
        const headerHeight = 80;
        const targetPosition = target.offset().top - headerHeight;
        
        $('html, body').animate({
            scrollTop: targetPosition
        }, 800, 'swing');
    }
});

const videos = document.querySelectorAll('.lazy-video');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const video = entry.target;
      video.src = video.dataset.src;
      video.play();
      observer.unobserve(video);
    }
  });
});

videos.forEach(video => observer.observe(video));
