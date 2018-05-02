/* CUSTOM CODE */
vwo_$(function() {
  vwo_$(document).ready(function () {
  
  if(vwo_$('.sale-banner').length === 0){
    vwo_$("header div.top").before("<div class=\"container sale-banner\"><div class=\"clear\"></div></div>");
  }
  
  if(window.location.pathname == "/" | window.location.pathname == "/#"){
    vwo_$('body > main > div.fluid_container').replaceWith('<div class="spring-sale"></div>');
    vwo_$('body > main > div.presentation').html('');
  }
  });
});
