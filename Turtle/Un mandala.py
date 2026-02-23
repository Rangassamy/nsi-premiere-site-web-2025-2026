from turtle import *

speed(0)
bgcolor('black')
colors=['#ff00ff','#ff69b4','#ff1493','#c71585']
for i in range(36):
    color(colors[i%4])
    begin_fill()
    circle(250,60)
    left(120)
    circle(250,60)
    left(120)
    end_fill()
    left(10)

color('gold')
for i in range(1):
    penup()
    goto(-370,250)
    pendown()
    write('Un Mandala',align="left", font=('Arial',30))
done()