<?php
/*
 * Smarty plugin
 * -------------------------------------------------------------
 * File:     function.testTest.php
 * Type:     function
 * Name:     testTest
 * Purpose:  outputs a random magic answer
 * -------------------------------------------------------------
 */
function smarty_function_testTest($params, $smarty)
{
  if ((bool)Tools::getValue('ajax_custom')){
    return true;
  }else{
    return false;
  }
}
?>