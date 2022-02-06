def animalfact(name):
    if " " in name: name=name.split(" ")
    else: name=[name]
    return "https://www.google.com/search?q="+'+'.join(name)+"+facts"

if __name__=="__main__": 
    while True: print(animalfact(input("animal facts: ")))