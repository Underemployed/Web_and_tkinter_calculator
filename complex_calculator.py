from tkinter import *

root =Tk()
root.title("Simple Calulator")  

e= Entry(root,width=35,borderwidth=5)
e.grid(row=0,column=0,columnspan=3,padx=10,pady=10)

#functions

def calculate(s):
    def update(op, v):
        if op == "+": stack.append(v)
        if op == "-": stack.append(-v)
        if op == "*": stack.append(stack.pop() * v)          
        if op == "/": stack.append(int(stack.pop() / v))  
        
    
    it, num, stack, sign = 0, 0, [], "+"
        
    while it < len(s):
        if s[it].isdigit():
            num = num * 10 + int(s[it])
        elif s[it] in "+-*/":
            update(sign, num)
            num, sign = 0, s[it]
        elif s[it] == "(":                                      
            num, j = calculate(s[it + 1:])
            it = it + j
        elif s[it] == ")":                                        
            update(sign, num)
            return sum(stack), it + 1
        it += 1
    update(sign, num)
    return str(sum(stack))# i used to do leetcode javascript my main was python so got frustrated and did this in pyton

def button_click(a):
    
    current=e.get()
    if a=="=":
        c=e.get()
        c=c.replace("x",'*')
        a=calculate(c)
        e.delete(0,END)
        
        e.insert(0,a)
        return
    if a=="clear":
        e.delete(0,END)
        current=""
    if a=="del":
        current=current[:len(current)-1]
    if str(a) in "1234567890+-x*()/":
        current=e.get()+str(a)
    e.delete(0,END)
    e.insert(0,str(current))

#button defining

button_1=Button(root,text="1",padx=40,pady=20,command=lambda:button_click(1))
button_2=Button(root,text="2",padx=40,pady=20,command=lambda:button_click(2))
button_3=Button(root,text="3",padx=40,pady=20,command=lambda:button_click(3))
button_4=Button(root,text="4",padx=40,pady=20,command=lambda:button_click(4))
button_5=Button(root,text="5",padx=40,pady=20,command=lambda:button_click(5))
button_6=Button(root,text="6",padx=40,pady=20,command=lambda:button_click(6))
button_7= Button(root,text="7",padx=40,pady=20,command=lambda:button_click(7))
button_8=Button(root,text="8",padx=40,pady=20,command=lambda:button_click(8))
button_9=Button(root,text="9",padx=40,pady=20,command=lambda:button_click(9))
button_0=Button(root,text="0",padx=40,pady=20,command=lambda:button_click(0))
button_add=Button(root,text="+",padx=40,pady=20,command=lambda:button_click('+'))
button_equal=Button(root,text="=",padx=120,pady=20,command=lambda:button_click('='))
button_clear=Button(root,text="AC",padx=35,pady=20,command=lambda:button_click("clear"))
button_del=Button(root,text="del",padx=32,pady=20,command=lambda:button_click("del"))
button_minus=Button(root,text="-",padx=40,pady=20,command=lambda:button_click("-"))
button_x=Button(root,text="x",padx=40,pady=20,command=lambda:button_click("x"))
button_div=Button(root,text="/",padx=40,pady=20,command=lambda:button_click("/"))
button_brc1=Button(root,text="(",padx=40,pady=20,command=lambda:button_click("("))
button_brc2=Button(root,text=")",padx=40,pady=20,command=lambda:button_click(")"))


# put button on the screen

button_1.grid(row=1,column=0)
button_2.grid(row=1,column=1)
button_3.grid(row=1,column=2)

button_4.grid(row=2,column=0)
button_5.grid(row=2,column=1)
button_6.grid(row=2,column=2)

button_7.grid(row=3,column=0)
button_8.grid(row=3,column=1)
button_9.grid(row=3,column=2)

button_0.grid(row=4,column=0)
button_clear.grid(row=4,column=1)
button_del.grid(row=4,column=2)

button_add.grid(row=6,column=0)
button_brc2.grid(row=6,column=2)
button_minus.grid(row=6,column=1)

button_div.grid(row=5,column=0)
button_x.grid(row=5,column=1)
button_brc1.grid(row=5,column=2)


button_equal.grid(row=7,column=0,columnspan=3)

root.mainloop()
