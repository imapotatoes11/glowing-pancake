flw=[]
import os
os.chdir("C:/Users/Kevin/Desktop/git/glowing-pancake/completely_unrelated_stuff")
with open('all_english_words.txt','r') as file:
    for word in file.readlines():
        if len(word)==6:
            flw.append(word.removesuffix("\n"))

filter, filterpos=[], []

'''
while True:
    t=input("Letter filter (ex to continue): ")
    if t=="ex":
        break
    filter.append(t)

print(filterpos)
possiblewords=[]
for index,i in enumerate(flw):
    #go through each word
    for inde,j in enumerate(i):
        if j in filter:
            print(f'match {j} in word: {i}')
            possiblewords.append(i)'''

#match=lambda a,b: [i for i, j in zip(a, b) if i == j]
match=lambda a,b: list(set(a) & set(b))
lettersP=[]
for ii in range(1):
    i=input("Positive uncertain matches (ex to exit): ")
    if i=="ex": break
    x=[lettersP.append(j) for j in i]
    print(lettersP)

lettersN=[]
for ii in range(1):
    i=input("Negative matches (ex to exit): ")
    if i=="ex": break
    x=[lettersN.append(j) for j in i]
    print(lettersN)


#if eval("i[0]=='h' and i[1]=='i'")
additionalCon, cnt="", 0
while True:
    i=input("additional constraints index(ex to exit): ")
    if i=="ex": break
    try:i=int(i)
    except: raise Exception("NO NO NO NO YOU NEED TO PUT NUMBER AS INDEX (base 0)")
    l=input("additional constraints letter: ")
    if cnt>=1:
        additionalCon=additionalCon+f' and i[{i}]=="{l}"'
    else: additionalCon=additionalCon+f'i[{i}]=="{l}"'
    cnt+=1

#https://www.wordleunlimited.com/
possiblewords=[]
ishpossiblewords=[]
for index,i in enumerate(flw):
    #modify the if statement to match wordle thing
    #print(f'trying to match {i} with letters {lettersP} without letters {lettersN} and constraints {additionalCon}')
    #print(match(lettersP,i))
    #print()
    if len(match(lettersP,i))>=len(lettersP) and len(match(lettersN,i))==0:
        if additionalCon!="":
            if eval(additionalCon):
                print(f'Found match {i} with letters {lettersP} without letters {lettersN} and constraints {additionalCon}')
                ishpossiblewords.append(i)
        else:
            #print(f"MATCH {i}")
            print(f'Found match {i} with letters {lettersP} without letters {lettersN} with no constraints')
            ishpossiblewords.append(i)


#check if word is real cuz word dataset (all_english_words.txt) isn't accurate
print('\n\nverifying words.. ')
from nltk.corpus import words
v=0
for ind,i in enumerate(ishpossiblewords):
    if i in words.words():
        pass
    else:
        ishpossiblewords.pop(ind)
    v+=1
    if v%100==0: print("verifying words... (this may take a while)")


print()
print(ishpossiblewords)
print(', '.join(ishpossiblewords))

#print('\n\n\n')
#print(possiblewords)