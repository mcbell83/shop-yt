$(function(){
    $('a#filter-button').click(function() {
       const form = $('form.sidebar-filter').serialize();
        console.log(decodeURI(form));
    });
});
