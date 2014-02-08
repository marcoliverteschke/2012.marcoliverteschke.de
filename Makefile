LESSC = /usr/local/bin/lessc

less:
	$(LESSC) htdocs/css/screen.less > htdocs/css/screen.css


local: less
	rsync -aP --delete htdocs/ /Applications/MAMP/htdocs/2012

install: less
	rsync -aP --exclude=wunschzettel --delete htdocs/ marcoliverteschke.de@marcoliverteschke.de:htdocs