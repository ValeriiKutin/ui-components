define(['uiComponent', 'ko'], (uiComponent, ko) => {
    'use strict';

    return uiComponent.extend({
        defaults:{
            isActive: ko.observable(false),
        },

        initialize: function () {
            this._super();
        },

        toggleState() {
            this.isActive(!this.isActive());
        }
    })
})
