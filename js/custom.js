$(document).ready(function(){
  $('.toggle').click(function(){
    $('.toggle').toggleClass('active')
  })

  $('.toggle').click(function(){
    $('.box').toggleClass('active')
  })

})

$('.move').backgroundMove({
  movementStrength:'50'
});
