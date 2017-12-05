export default class {
  isElementInView (element, fullyInView) {
    var pageTop = $(window).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var elementTop = $(element).offset().top
    var elementBottom = elementTop + $(element).height()

    if (fullyInView === true) {
      return ((pageTop < elementTop) && (pageBottom > elementBottom))
    } else {
      return ((elementTop <= pageBottom) && (elementBottom >= pageTop))
    }
  }

  getNamespace (selector) {
    return $(selector).data('modulename')
  }

  checkUrl (url) {
    return url.indexOf('?') === -1 ? true : false
  }

  getElementId (selector) {
    return $(selector).attr('id')
  }
}
