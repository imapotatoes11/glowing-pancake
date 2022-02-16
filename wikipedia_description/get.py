'''import wikipedia

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
        file.write(f'\n{i}')'''
import requests
from bs4 import BeautifulSoup
import random

def scrapeWikiArticle(url):
	response = requests.get(
		url=url,
	)
	
	soup = BeautifulSoup(response.content, 'html.parser')

	title = soup.find(id="firstHeading")
	print(title.text)

	allLinks = soup.find(id="bodyContent").find_all("a")
	random.shuffle(allLinks)
	linkToScrape = 0

	for link in allLinks:
		# We are only interested in other wiki articles
		if link['href'].find("/wiki/") == -1: 
			continue

		# Use this link to scrape
		linkToScrape = link
		break

	scrapeWikiArticle("https://en.wikipedia.org" + linkToScrape['href'])

scrapeWikiArticle("https://en.wikipedia.org/wiki/Web_scraping")