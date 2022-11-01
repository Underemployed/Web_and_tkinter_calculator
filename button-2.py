from tkinter import *
from random import *
from click import command 

root = Tk()

def myClick():
    
    myLabel=Label(root, text="Click me again!",fg="red")
    myLabel.pack()
myButton =Button(root,text="Click Me!",padx =10,pady=3,command=myClick,fg="white",bg="blue")
myButton.pack()

root.mainloop()