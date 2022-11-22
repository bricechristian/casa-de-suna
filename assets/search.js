$(document).ready(function() {
    $('.js-open-type-dropdown').on('click', function() {
        $(this).closest('.type-of-search').toggleClass('open');
        $('.type-of-search__dropdown').focus();
    });

    $('.js-select-search-type').on('click', function() {
        var typeOfSearch = $(this).attr('data-type');
        $(this).closest('.search-form').find('.js-open-type-dropdown span').text(typeOfSearch);
        $(this).closest('form').attr('data-selected-type', typeOfSearch);

        $('.js-select-search-type').removeClass('selected');
        $(this).addClass('selected');
        $('.type-of-search').removeClass('open');
    });


    $('.js-search-form').on('submit', function(e) {
        if ($(this).attr('data-selected-type') == 'Articles') {
            e.preventDefault();
            var searchQuery = $(this).find('input[type="search"]').val();
            window.location.href = "https://dev.casadesuna.com/?s=" + searchQuery;
        } else if ($(this).attr('data-selected-type') == 'Recipes') {
            e.preventDefault();
            var searchQuery = $(this).find('input[type="search"]').val();
            window.location.href = "https://dev.casadesuna.com/category/recipes/?s=" + searchQuery;
        } else {
            e.preventDefault();
            var searchQuery = $(this).find('input[type="search"]').val();
            window.location.href = "/search/?q=" + searchQuery;
        }
    });

});