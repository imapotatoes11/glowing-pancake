open('convertoutput.txt','w').write('')

Bobs=[]
with open('converttest.txt','r') as file:
    for i in file.readlines():
        Bobs.append((i.removesuffix('\n')).removesuffix('Â\xa0Â\xa0'))
        print('doing '+(i.removesuffix('\n')).removesuffix('Â\xa0Â\xa0'))

for i in range(len(Bobs)):
    Bobs[i]='\''+Bobs[i]
    Bobs[i]=Bobs[i]+'\', '
    print('converting '+Bobs[i]+'... ')

for j in Bobs:
    with open('convertoutput.txt','a') as file:
        file.write(j)
        print('writing '+j+'.....')