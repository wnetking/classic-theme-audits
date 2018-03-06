{**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}
{assign var="image_placeholder" value='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='}

<a class="banner" href="{$banner_link}" title="{if $banner_desc != ''}{$banner_desc}{else}Banner{/if}">
  {if isset($banner_img)}
    <img
      src="{$image_placeholder}"
      data-normal="{$banner_img}"
      width="100%"
      height="100%"
      alt="{if $banner_desc != ''}{$banner_desc}{else}Banner{/if}" title="{if $banner_desc != ''}{$banner_desc}{else}Banner{/if}" class="img-fluid">
  {else}
    <span>{$banner_desc}</span>
  {/if}
</a>
