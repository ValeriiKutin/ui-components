<?php

namespace Vendor\Module\ViewModel;

class Custom implements \Magento\Framework\View\Element\Block\ArgumentInterface
{
    public function customMethod():string
    {
        return 'Test customMethod 2';
    }
}
?>
