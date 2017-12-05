import prestashop from 'prestashop'
import HelperUtils from '../utils'
let Utils = new HelperUtils()

export default {
  detectSelector: '.defered-load',
  insertLoadContent(selector, data) {
    $(`#${Utils.getElementId(selector)}`).html(data)
  },
  ajax(selector) {
    let separator = Utils.checkUrl(prestashop.urls.current_url) ? '?' : '&'
    $.post(`${prestashop.urls.current_url}${separator}${Utils.getNamespace(selector)}=true`, (d) => {
      this.insertLoadContent(selector, d)
    })
  },
  scrollEventInnit(selector) {
    $(window).on(`scroll.${Utils.getNamespace(selector)}`, () => {
      if (Utils.isElementInView($(selector))) {
        console.log('ajax begin')
        this.ajax(selector)
        $(window).off(`scroll.${Utils.getNamespace(selector)}`)
      }
    })
    $(window).trigger(`scroll.${Utils.getNamespace(selector)}`)
  },

  init() {
    let self = this
    $(this.detectSelector).each(function () {
      self.scrollEventInnit(this)
    })
  }
}
