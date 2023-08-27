$(function(){
    $('.works_list').mouseenter(function(){
        $('.works_list').removeClass('active');
        $(this).addClass('active');
    });
    $('.works_list').mouseleave(function(){
        $('.works_list').removeClass('active');
    });

    $('.tab_list').click(function(){
        $('.tab_list').removeClass('active');
        $(this).addClass('active');
        // $(this).parents('.tab_wrap').siblings('.works_wrap').removeClass('active');
    });
    
    $('.tab_list').click(function(){
        var tabId = $(this).attr('data-tab');
        $('.tab_list').removeClass('active');
        $('.works_wrap').removeClass('active');
        $(this).addClass('active');
        $("#" + tabId).addClass('active');
    });
});

// function activeBtn(){
//     $('#category_web').parents('.tab_wrap').siblings('.work_wrap').removeClass('active');
//     $('#category_web').parents('.tab_wrap').siblings('.web').addClass('active');
// };

// function activeBtn2(){
//     $('#category_full').parents('.tab_wrap').siblings('.full').addClass('active');
// };