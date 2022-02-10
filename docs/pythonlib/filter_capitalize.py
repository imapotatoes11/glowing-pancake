filterwords=[]
with open('C:/Users/Kevin/Desktop/git/glowing-pancake/docs/pythonlib/filter_words.txt','r') as file:
    for i in file.readlines():
        filterwords.append(i)
for i,j in enumerate(filterwords): filterwords[i]=j.removesuffix('\n')
print(filterwords)

_in=[]
with open('C:/Users/Kevin/Desktop/git/glowing-pancake/docs/pythonlib/input.txt','r') as file:
    for i in file.readlines():
        _in.append(i)
for i,j in enumerate(_in): _in[i]=j.removesuffix('\n')
print(_in)

out=[]
'''for filterword in filterwords:
    for windex,word in enumerate(_in):
        try: word=word.split(' ')
        except: word=[word]
        for subword in word:
            if subword.lower()==filterword.lower():
                print(f'FOUND {_in[windex]}, CAPITALIZING TO {filterword}')
                _in[windex]=filterword'''
#\->i dont know what i was doing
for index,j in enumerate(_in):
    try: j.split(' ')
    except: j=[j]
    try:
        for ind,i in j:
            if i in filterwords:
                j[ind]=j[ind].capitalize()
    except:
        pass

out=_in
print('\n\n\n')
print(out)