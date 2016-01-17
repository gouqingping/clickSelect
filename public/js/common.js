/* www.solosm.com/js */
$(function(){
   $("#clickSelect").on('click', function(){
       var s = $("#isSelect").attr('size')==1?5:1
       $("#isSelect").attr('size', s);
   });
   $("#isSelect option").on({
       click: function() {
           $("#isSelect").attr('size', 1);
       },
       mouseenter: function() {
           $(this).css({background: '#498BFC', color: '#fff'});
       },
       mouseleave: function() {
           $(this).css({background: '#f9f9f9', color: '#000'});
       }
   });
});