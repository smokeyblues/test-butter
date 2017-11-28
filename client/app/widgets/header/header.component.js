const header = {
    bindings: {
        headerImage: '<'
    },
    controller: function () {
        let ctrl = this;

        ctrl.tester = function () {
            console.log("the test button was pushed");

            console.log("going to the articles now.")
        };


        ctrl.$onInit = function () {
            // console.log("Header component loaded");
        }
    },
    template: `
    <div class="header-container">
        <div class="flex-container">
            <button class="click" ui-sref="app.articles" ng-click="$ctrl.tester();" type="button">Test Button</button>
        </div>
    </div>
    `
};

angular
    .module('RowdyMermaid-site.widgets')
    .component('header', header);