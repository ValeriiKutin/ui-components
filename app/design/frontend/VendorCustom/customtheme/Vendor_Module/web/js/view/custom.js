define(['uiCollection', 'uiLayout'], (uiCollection, uiLayout) => {
    'use strict';


    return uiCollection.extend({
        defaults: {
            template: 'Vendor_Module/custom',
            var1: 'var1',
            var2: '${ $.var1}'
        },

        initialize() {
            this._super();

            const $ = this;



            console.log(`${$.var1}`);
            console.log($.var2);
        }
    });
});
