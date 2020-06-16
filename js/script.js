jQuery(document).ready(function(){
     
    
    $(window).scroll(function(){
       var top = $(window).scrollTop();
        if(top>=100){
          $("nav").addClass('secondary'); 
        }
        else 
            if($("nav").hasClass('secondary')){
                $("nav").removeClass('secondary');  
            }
    }); 

});

    $(function () {
        $('.percent').percentageLoader({
          valElement: 'p',
          strokeWidth: 4,
          bgColor: '#c1c1c1',
          ringColor: '#ff5722',
          textColor: '#ffffff',
          fontSize: '30px',
          fontWeight: 'bold',
        });
  $('.grid').isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
    // use outer width of grid-sizer for columnWidth
          columnWidth: '.grid-sizer'
  }
});

});
          




