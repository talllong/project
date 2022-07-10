$(document).ready(function(){
    $('.carousel_inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="src/icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="src/icons/right.png"></button>',
        responsive: [
        {
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        }
        ]
    });

    $('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
        $(this)
        .addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
        .closest('div.container').find('div.catalog_contents').removeClass('catalog_contents_active').eq($(this).index()).addClass('catalog_contents_active');
    });

    $('.catalog_link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog_contents').eq(i).removeClass('catalog_contents_active');
            $('.catalog_list').eq(i).addClass('catalog_list_active');
        })
    })

    $('.catalog_back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog_contents').eq(i).addClass('catalog_contents_active');
            $('.catalog_list').eq(i).removeClass('catalog_list_active');
        })
    })
});