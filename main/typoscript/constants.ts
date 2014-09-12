###
  # Constants for scheffe
  # 
  # Author: Daniel Gorges
  # © 2014 b:dreizehn GmbH, Stuttgart
  #
  # --------------------------------------------------------------------
  #
  # 
  # 
  #
###


scheffe {
	pages {
		footer = 104
		meta = 103
		startpage = 1
	}
	uid {
		newsletter = 300
	}
	newsletteraddresses = 109

	cal {
		pid = 105
	}

	news {
		pid = 18
		detailPid = 106
	}
}

plugin.tx_news {
	rss.channel {
		title = Ton & Technik Scheffe
		description =
		link = http://tontechnik-scheffe.de
		language = de_DE
		copyright = Ton & Technik Scheffe
		category =
		generator = TYPO3 EXT:news
	}
	opengraph {
		site_name =
	}
	view {
		# cat=plugin.tx_news/file; type=string; label=Path to template root (FE)
		templateRootPath = typo3conf/templates/main/plugins/news/Templates/
		# cat=plugin.tx_news/file; type=string; label=Path to template partials (FE)
		partialRootPath = typo3conf/templates/main/plugins/news/Partials/
		# cat=plugin.tx_news/file; type=string; label=Path to template layouts (FE)
		layoutRootPath = typo3conf/templates/main/plugins/news/Layouts/
	}

	settings {
		# cat=plugin.tx_news/file; type=string; label=Path to CSS file
		cssFile >
	}
}