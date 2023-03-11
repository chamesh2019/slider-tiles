const left = document.getElementById("left");

const onMove = e => {
  const x = e.clientX;
  const p = 100 * (x / document.body.clientWidth)
  left.style.width = `${p}%`
}

window.onmousemove = e => onMove(e)
window.ontouchmove = e => onMove(e.touches[0])
