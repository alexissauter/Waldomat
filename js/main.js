
function toggle(button1) {
   var x = $('#myDIV1');
   $(button1).find('i').remove();
   if ($(button1).text().trim() == 'Impressum') {
     $(button1).html($('<i/>',{class:'fa fa-eye-slash'})).append('<h2>&nbsp;einklappen</h2>');
     x.fadeIn();
    }
    else {
      $(button1).html($('<i/>',{class:'fa fa-eye'})).append('<h2>&nbsp;Impressum</h2>');
      x.fadeOut();
    }
}
