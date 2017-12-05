import prestashop from 'prestashop'
import HelperUtils from '../utils'
let Utils = new HelperUtils()

export default {
  detectSelector: '.defered-load',
  insertLoadContent(selector, data) {
    $(`#${Utils.getElementId(selector)}`).replaceWith(data)
  },
  ajax(selector) {
    let separator = Utils.checkUrl(prestashop.urls.current_url) ? '?' : '&'
    $.post(`${prestashop.urls.current_url}${separator}modulename=${Utils.getNamespace(selector)}&custom_ajax_call=true`, (d) => {
      this.insertLoadContent(selector, d)
    })
  },
  scrollEventInnit(selector) {
    if (Utils.isElementInView($(selector))) {
      this.ajax(selector)
    }else {
      $(window).on(`scroll.${Utils.getNamespace(selector)}`, () => {
        if (Utils.isElementInView($(selector))) {
          console.log('ajax begin')
          this.ajax(selector)
          $(window).off(`scroll.${Utils.getNamespace(selector)}`)
        }
      })
    }
  },

  init() {
    let self = this
    $(this.detectSelector).each(function () {
      self.scrollEventInnit(this)
    })
  }
}
