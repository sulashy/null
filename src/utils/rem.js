const rem = () => {
  fnResize()
  window.onresize = function () {
    fnResize()
  }

  function fnResize () {
    // deviceWidth = 屏幕宽度/设计图宽度
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth
    if (deviceWidth >= 1500) {
      deviceWidth = 1500
    }
    if (deviceWidth <= 320) {
      deviceWidth = 320
    }
    // fontsize = deviceWidth / 100  1rem=100px
    document.documentElement.style.fontSize = (deviceWidth / 15) + 'px'
  }
}
export default {
  rem
}
