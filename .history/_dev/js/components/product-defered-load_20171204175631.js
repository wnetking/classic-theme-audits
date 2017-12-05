import prestashop from 'prestashop'
import HelperUtils from '../utils'
let Utils = new HelperUtils()

export default {
  detectSelector: '.defered-load',
  insertLoadContent(selector, data) {
    console.log($(`#${Utils.getElementId(selector)}`, data))
    console.log(data)

    $(`#${Utils.getElementId(selector)}`).html($(`#${Utils.getElementId(selector)}`, data).html())
  },
  ajax(selector) {
    let separator = Utils.checkUrl(prestashop.urls.current_url) ? '?' : '&'
    $.post(`${prestashop.urls.current_url}${separator}${Utils.getNamespace(selector)}=true`, (d) => {
      let data = $(d)
      this.insertLoadContent(selector, data)
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
