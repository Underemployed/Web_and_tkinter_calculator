from tkinter import *
import random

root=Tk()

e= Entry(root, width=30)
e.pack()


def onClick():
    a=e.get()
    e.delete(0,END)
    e.insert(0,"Hello "+a)

myButton=Button(root, text="Enter Your Name:", command=onClick)

myButton.pack()






root.mainloop()