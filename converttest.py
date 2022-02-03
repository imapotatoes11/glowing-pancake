Bobs=[]
with open('converttest.txt','r') as file:
    for i in file.readlines():
        Bobs.append((i.removesuffix('\n')).removesuffix('Â\xa0Â\xa0'))


print(Bobs)


def changecase(x):
    try: return x.lower()
    except: pass

def convert(x):
    tmp=[]
    if ' ' in x: tmp=x.split(' ')
    else: tmp=[x]

    try: tmp[1]=changecase(tmp[1])
    except: pass
    try: tmp[2]=changecase(tmp[2])
    except:pass
    try: tmp[3]=changecase(tmp[3])
    except: pass
    #for i in tmp:
    with open('convertoutput.txt','a') as file:
        #file.write(f'\nhttps://www.wikipedia.com/wiki/{str('_'.join(i))}')
        file.write('\nhttps://www.wikipedia.com/wiki/'+'_'.join(tmp))
        print('\nhttps://www.wikipedia.com/wiki/'+'_'.join(tmp))


open('convertoutput.txt','w').write('')
for j in Bobs:
    convert(j)