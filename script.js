$(document).ready(() => {
    console.log('jQuery is ready to go!');
});

const $container = $('<div>');

const $title = $('<h1>', {
    text: 'Mad Libs'
});

$container.append($title);
$(document.body).append($container);
$title.css('color', 'blue');

let $libBtn = $('<button></button>', {
    text: "Create Story"
})
$libBtn.appendTo($container);
$libBtn.on('click', event => {

});


