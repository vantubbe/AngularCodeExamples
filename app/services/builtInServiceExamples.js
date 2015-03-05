angular.module('myApp')

    .factory('builtInServiceExamples'), function ($compile, $parse, $filter) {
    return {
        //you can compile markup (with angular in it) on the fly, create buttons, text, whatever, and then add it into the page
        compileStuff: function(markup,scope){
            $compile(markup)(scope).appendTo(angular.element("#someElementID"));
        },

        //this will return a function which can be executed
        parseStuff: function() {
            return $parse('1 + 2');
        }


    }
};
