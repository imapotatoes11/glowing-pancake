class function:
    def __init__(self):
        import math
    def sqrt(self,x):
        return self.math.sqrt(x)
    def power(self,x,exponent):
        return x**exponent
    def f(self,x):
        return 1*(x**2) + 2*x + 5
    def fR(self,_range):
        out=[]
        for i in range(_range):
            out.append(self.f(i))
        return out
'''
if __name__=="__main__":
    import os
    os.system('cls')
    function=function()
    d=[int(i) for i in function.fR(50)]
    for i in d:
        print("*"*(round(i/50)))'''

def main(inp):
    import os
    os.system('cls')
    d=[int(i) for i in function.fR(50)]
    out=[]
    for i in d:
        out.append("*"*(round(i/50)))
    return out

if __name__=="__main__":
    print(main("frrrresrdf"))
    main("ef")