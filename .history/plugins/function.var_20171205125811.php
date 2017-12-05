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
class smartyPluginSingleton
{
   function getInstance ($class)
   // implements the 'singleton' design pattern.
   {
      static $instances = array();  // array of instance names

      if (!array_key_exists($class, $instances)) {
         // instance does not exist, so create it
         $instances[$class] =& new $class;
      } // if

      $instance =& $instances[$class];

      return $instance;

   } // getInstance

}

class smartyGlobals {
   private static $vars = array();
   private static  $rand = 0;

   public function __set($setting,$value)
   {
      if(!self::$rand) {
         self::$rand = rand(100,1000).':salt';
         self::$rand = md5(self::$rand).'more salt: tasty';
         self::$rand = md5(self::$rand);
      }
      if($setting) {
         self::$vars[self::varName($setting)] = $value;
      }
   }

   public function __get($setting)
   {
      if(!isset(self::$vars[self::varName($setting)])) {
         //die('var not found!'.' '.self::varName($setting));
      }
      return self::$vars[$this->varName($setting)];
   }

   private function varName($var)
   {
      return trim('smarty_variable_'.$var.'_'.self::$rand);
   }
}

function smarty_function_var($params, &$smarty)
{
   $obj = smartyPluginSingleton::getInstance("smartyGlobals");
   if(count(array_keys($params))==2 && isset($params['value'])) {
      if(!isset($params['name'])) {
         return;
      }
      $obj->{$params['name']} = $params['value'];
      return;
   } elseif (count(array_keys($params))==2 && isset($params['assign'])) {
      $smarty->_tpl_vars[$params['assign']] = $obj->{$params['name']};
      return;
   } else {
      return $obj->{$params['name']};
   }
}
?>