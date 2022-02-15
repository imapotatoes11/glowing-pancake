import wikipedia

out=[]
with open('C:/Users/Kevin/Desktop/git/glowing-pancake/wikipedia_description/in.txt','r') as file:
    for i in file.readlines():
        wiki = wikipedia.page(i)
        text = (wiki.content).split("\n")
        print(i)
        print('\n\n\n')
        print(text[0])
        out.append(text[0])

with open('C:/Users/Kevin/Desktop/git/glowing-pancake/wikipedia_description/out.txt','w') as file:
    for i in out:
        file.write(f'\n{i}')