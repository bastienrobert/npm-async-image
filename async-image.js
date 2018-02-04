class AsyncImage {
  constructor () {
    this.els = document.querySelectorAll("[data-compress]")
    this.engine()
  }
  engine () {
  	for (var i = 0; i < this.els.length; i++) {
      var el = this.els[i]
      var d = el.src
      this.small(el)
      this.load(el, d)
    }
  }
  load (el, d) {
    var img = new Image()
    img.src = d
    img.onload = function () {
      el.src = img.src
      el.classList.add('async-large-loaded')
      el.classList.remove('async-small-loaded')
    }
  }
  small (el) {
    el.src = el.dataset.compress
    el.classList.add('async-small-loaded')
    delete el.dataset.compress
  }
}

export default new AsyncImage
