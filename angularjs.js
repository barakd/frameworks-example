angular
    .module('myApp')
    .component('inputButton', {
        bindings: {
            value: '<',
            buttonText: '@',
            buttonAction: '&',
        },
        template: `<input type="text" ng-model="$ctrl.innerValue" />
        <button ng-click="$ctrl.buttonAction({ value: $ctrl.innerValue })">{{::$ctrl.buttonText}}</button>`,
        controller: InputButtonComponent,
    });

class InputButtonComponent{

    $onChanges(changes) {
        if (changes.value) {
            this.value = changes.value.currentValue;
        }
    }
}

/* Usage:
<input-button
 value="'my value'"
 button-text="send"
 button-action="$ctrl.alert(value)">
 </input-button>
 */