less:
	~/node_modules/less/bin/lessc htdocs/css/screen.less > htdocs/css/screen.css


local: less
	rsync -aP --delete htdocs/ /Applications/MAMP/htdocs/2012

install: less
	rsync -aP --delete htdocs/ marcoliverteschke.de@marcoliverteschke.de:htdocs