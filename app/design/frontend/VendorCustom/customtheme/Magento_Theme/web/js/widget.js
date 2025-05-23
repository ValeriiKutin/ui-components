/*
define('jquery', 'jquery-ui-modules/widget')






*/





































/*
define(['jquery', 'mage/cookies' ,'jquery-ui-modules/widget'], ($) => {
    'use strict';

    $.widget('vendor.customWidget', {
        _init(){
            console.log(`form key: %c${$.mage.cookies.get('form_key')}`, 'color: red');

            $.mage.cookies.set('custom_key', 'custom_value')

            console.log(`custom key: %c${$.mage.cookies.get('custom_key')}`, 'color: purple');
        }
    });



    return $.vendor.customWidget;
})


*/









































/*
define(['jquery', 'Magento_Customer/js/customer-data', 'mage/translate', 'jquery-ui-modules/widget'], function ($, customerData, $t) {
    'use strict';

    $.widget('vendor.customWidget2', {
        _init() {
            this._on(this.element, {
                click: this.showMessage.bind(this)
            });
        },
        showMessage(){
            const section = customerData.get('messages')();
            const messages = section.messages ?? [];

            customerData.set('messages', {
                messages: [
                    ...messages,
                    {
                        type: 'success',
                        text: $t('Custom success message')
                    },
                    {
                        type: 'error',
                        text: $t('Custom success message')
                    },
                    {
                        type: 'warning',
                        text: $t('Custom success message')
                    },
                    {
                        type: 'notice',
                        text: $t('Custom success message')
                    },
                ]
            })
        }
    });

    return $.vendor.customWidget2;
});
*/





















/*define(['jquery', 'Magento_Customer/js/customer-data', 'jquery-ui-modules/widget'], function ($, customerData) {
    'use strict';

    $.widget('vendor.customWidget2', {
        _init() {
            const cart = customerData.get('cart')();
            this.onCartUpdate(cart);
            customerData.get('cart').subscribe(this.onCartUpdate.bind(this));
        },
        onCartUpdate(cart){
            console.log(cart);
        }
    });

    return $.vendor.customWidget2;
});*/

/*
define(['jquery', 'Magento_Customer/js/customer-data', 'jquery-ui-modules/widget'], function ($, customerData) {
    'use strict';

    $.widget('vendor.customWidget2', {
        _init() {
            // const customer = customerData.get('customer')();
            // const cart = customerData.get('cart')();
            // const wishlist = customerData.get('wishlist')();
            //
            // console.log(customer);
            // console.log(cart);
            // console.log(wishlist);

            customerData.get('cart').subscribe((cart) => {
                console.log(cart)
            });
            setTimeout(() => {
                customerData.reload(['cart'], true);
            }, 2000)
        }
    });

    return $.vendor.customWidget2;
});
*/
