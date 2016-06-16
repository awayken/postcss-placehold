'use strict';

var postcss = require('postcss');

var getPlaceholdURL = function( width, height, service ) {
    if ( service === 'placekitten' ) {
        return 'https://placekitten.com/' + width + '/' + height;
    } else if ( service === 'placekittengray' ) {
        return 'https://placekitten.com/g/' + width + '/' + height;
    } else if ( service === 'dummyimage' ) {
        return 'https://dummyimage.com/' + width + 'x' + height;
    } else if ( service === 'placeholdit' ) {
        return 'https://placehold.it/' + width + 'x' + height;
    } else {
        return service + width + 'x' + height;
    }
};

module.exports = postcss.plugin('postcss-placehold', function (opts) {
    opts = opts || {
        service: 'placeholdit'
    };

    return function (css) {
        css.walkDecls(function ( decl ) {
            var REplaceholder = /placehold\((.+),(.+)\)/;
            var valueMatch = decl.value.match( REplaceholder );

            if ( valueMatch ) {
                var width = valueMatch[1].replace(/ +/g, '');
                var height = valueMatch[2].replace(/ +/g, '');

                var imageURL = getPlaceholdURL( width, height, opts.service );
                decl.value = decl.value.replace( valueMatch[0], 'url("' + imageURL + '")' );
            }
        });
    };
});
