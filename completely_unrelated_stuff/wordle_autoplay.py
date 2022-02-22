#automatically just keeps playing wordle
flw=[]
import os
os.chdir("C:/Users/Kevin/Desktop/git/glowing-pancake/completely_unrelated_stuff")
with open('wordle_words.txt','r') as file:
    for word in file.readlines():
        flw.append(word.removesuffix("\n"))


input("ready")
import pyautogui as pag
import time, random
time.sleep(5)
pp=0
while True:
    pp+=1
    print(pp)
    random.shuffle(flw)
    pos=pag.position()
    if pos[0]>=100: pass
    pag.write(str(flw[0]), interval=0.01)
    pag.press('enter')
    #failsafe (will try different word every so often)
    if pp%25==0:
        for i in range(5): pag.press('backspace')