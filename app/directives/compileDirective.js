angular.module('myApp')
    .directive('repeatX', function () {
        return {
            //most of the time you should not need to use compile
            //compile is used to directly manipulate the DOM, as shown below
            //here we are copying an element repeatX times
            compile: function(element, attributes) {
                for(var i = 0; i < Number(attributes.repeatX)-1; i++) {
                    element.after(element.clone().attr('repeat-x',0));
                }
                //returning this function will fire it off after the compilation.  Causing the observe.
                return function(scope, element, attrs, controller){
                    attributes.$observe('text',function(newValue){
                        if(newValue === 'Hello'){
                            element.css('color','red');
                        }
                    });
                }
            }
        };
    });
