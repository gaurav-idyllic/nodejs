$(function(){
  $('.action_button').click(function(){
    var param1 = $('.input1').val();
    var param2 = $('.input2').val();
    var action = $(this).data('action');
    $.ajax({
      type: 'GET',
      data: {
        param1: param1,
        param2: param2,
        action: action
      },
      url: '/calc/perform_operation',
      success: function(data){
        $('.result_label').text(data.output);
      },
      fail: function(data){
        alert('failed operation');
      }
    });
  });
});
