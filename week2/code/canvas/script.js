// Canvas API Cheatsheet:
// http://www.nihilogic.dk/labs/canvas_sheet/HTML5_Canvas_Cheat_Sheet.pdf

var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d')

// red square
ctx.fillStyle = 'rgb(255, 60, 60)' // you can use any valid CSS color here
ctx.fillRect(30, 30, 300, 300)

// white lines
ctx.beginPath()
ctx.lineWidth = 60
ctx.moveTo(180, 60)
ctx.lineTo(180, 300)
ctx.moveTo(60, 180)
ctx.lineTo(300, 180)
ctx.strokeStyle = '#ffffff'
ctx.stroke()

// Linear Gradient

// Arguments: x0, y0, x1, y1
// The linear gradient will paint along a line from point(x0, y0) to point(x1, y1)
// NOTE these points are relative to the entire canvas!

// suppose we want to draw a 300x300 circle with this gradient, top left at point(360, 30)

var gradient = ctx.createLinearGradient(360, 30, 360 + 300, 30 + 300)
gradient.addColorStop(0, "#ff3333") // starting color
gradient.addColorStop(1, "#ffffff") // ending color

// draw a circle and fill with the gradient
var radius = 150
ctx.beginPath()

// Arguments: x, y, radius，starting angle, ending angle (angles are in radiant: 2*Pi = 360 degrees)
ctx.arc(360 + radius, 30 + radius, radius, 0, Math.PI * 2)
ctx.closePath()
ctx.fillStyle = gradient // This is how you use a gradient as a fill
ctx.fill()

// text
ctx.font = "bold 36px Helvetica, Arial" // any valid CSS font property
ctx.fillStyle = "#ffffff"
ctx.textAlign = 'center'
ctx.textBaseline = 'middle'
ctx.fillText('Helvetica', 360 + radius, 30 + radius)

// image
var max = new Image()
max.src = 'max.jpg'
max.onload = function () {
      ctx.drawImage(max, 690, 30)
}