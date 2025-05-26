<?php

namespace Vendor\Module\Block;

use Magento\Framework\View\Element\Template;

class TemplateOrder extends Template
{
    protected $_template = 'Vendor_Module::custom.phtml';

    public function customMethod():string
    {
        return 'Test customMethod';
    }
}
