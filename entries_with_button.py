from tkinter import *
import random

root=Tk()

e= Entry(root, width=30)
e.pack()

def randomColor():
    list="grey","orange","white", "black", "red", "green", "blue", "cyan", "yellow",  "magenta","indigo","voilet"
    b=random.randint(0,len(list)-1)
    d=list[b],list[b-1],list[b-2]
    return d[random.randint(0,2)]
    

def onClick():
    b=randomColor()
    c=randomColor()
    a="Hello "+str(e.get())
    e.delete(0,END)
    myLabel=Label(root, text=a, fg=str(b), bg=str(c))
    myLabel.pack()

myButton=Button(root, text="Enter Your Name:", command=onClick)

myButton.pack()






root.mainloop()