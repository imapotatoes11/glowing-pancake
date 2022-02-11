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
names = filterwords

for i in _in:
    test_str = i
    output_str = ' '.join([word.capitalize() if word in names else word for word in test_str.split()])
    print(output_str)
    out.append(output_str)

with open('C:/Users/Kevin/Desktop/git/glowing-pancake/docs/pythonlib/out.txt','w') as file:
    file.write('\n'.join(out))