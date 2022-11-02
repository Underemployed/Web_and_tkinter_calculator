from tkinter import *
import random
from click import command 

root = Tk()

e=Entry(root,width=50)
e.pack()

def randomcolorgenerator():
    a=['red','green','blue','yellow','black','white','orange','pink']
    b=random.randint(0,7)
    return a[b]

def myClick():
    
    myLabel=Label(root, text="Click me again!",fg=randomcolorgenerator())
    myLabel.pack()
    

myButton =Button(root,text="Click Me!",padx =10,pady=3,command=myClick,fg="white",bg="blue")
myButton.pack()


root.mainloop()