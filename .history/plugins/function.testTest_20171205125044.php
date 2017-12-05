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
function smarty_function_var($params, &$smarty) {
  static $vars = array();
  if(!isset($params['name'])) {
     return;
  }
  if(isset($params['value'])) {
     $vars[$params['name']] = $params['value'];
  }
  else {
     return $vars[$params['name']];
  }
}
?>