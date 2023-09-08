$(function(){
    $('.tab_list').click(function(){
        $('.tab_list').removeClass('active');
        $(this).addClass('active');
    });
    
    $('.tab_list').click(function(){
        var tabId = $(this).attr('data-tab');
        $('.tab_list').removeClass('active');
        $('.works_wrap').removeClass('active');
        $(this).addClass('active');
        $("#" + tabId).addClass('active');
        AOS.refresh();
    });
});