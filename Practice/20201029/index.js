$('#clear').on('click', function () {
    $('.msg_err_list').empty();
    $('.msg_err_list').append('<ul><li>err_message</li></ul>');
});

$('#add').on('click', function () {
    $('ul').append('<li>err_message</li>');
});