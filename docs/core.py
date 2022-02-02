import webbrowser as wb
chromePath = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s'
wb.get(chromePath)
def inquiry(inp):
    return (f"https://www.google.com/search?q={inp}+endangered+animals&rlz=1C1CHBF_enCA970CA970&oq=canada+endangered+animals&aqs=chrome..69i57j0i390.3725j0j7&sourceid=chrome&ie=UTF-8")

print(inquiry("canada"))