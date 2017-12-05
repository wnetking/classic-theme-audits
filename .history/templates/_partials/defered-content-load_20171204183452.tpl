{if isset($smarty.request.modulename) && isset($smarty.request.custom_ajax_call)}
    {widget name={$smarty.request.modulename}}
    {return}
{/if}

{if isset($smarty.request.custom_ajax_call)}
  {return}
{/if}