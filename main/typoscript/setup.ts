###
	# Main TS-Setup File for tontechnik scheffe
	#
	# Author: Daniel Gorges
	#
	# --------------------------------------------------------------------
	# Included TS-Files
	# General Site Configuration
	# Main Page Object (includes the Backend-Layout-Switch-Case)
	#
###

#################################
# Included TS-Files             #
#################################
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/templates/main/typoscript/content.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/templates/main/typoscript/plugins-csc.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/templates/main/typoscript/plugins-dce.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/templates/main/typoscript/plugins-gridelements.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/templates/main/typoscript/plugins-cal.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/templates/main/typoscript/plugins-formhandler.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/templates/main/typoscript/plugins-news.ts">

#################################
# General Site Configuration    #
#################################
###	HTML5
config.doctype = html5
config.disableImgBorderAttr = 1

### Output
config.renderCharset = utf-8
config.metaCharset = utf-8
config.disablePrefixComment = 1
config.sendCacheHeaders = 1
config.sendCacheHeaders_onlyWhenLoginDeniedInBranch = 1

### default language = Deutsch
config.language = de
config.locale_all = de_DE.UTF-8
config.sys_language_uid = 0
config.htmlTag_langKey = de


### RealURL
config.tx_realurl_enable = 0
config.absRefPrefix = /typo3/


#################################
# Main Page Object
#################################
page = PAGE
page {

	# include favicon
	shortcutIcon = typo3conf/templates/main/css/img/favicon.ico

	includeCSS.main = typo3conf/templates/main/css/main.css
	includeCSS.main.external = 1

	headerData {

		10 = TEXT
		10.value (
		 	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
			<link rel="apple-touch-icon-precomposed" sizes="57x57" href="typo3conf/templates/main/css/img/apple-touch-icon-57x57.png" />
			<link rel="apple-touch-icon-precomposed" sizes="114x114" href="typo3conf/templates/main/css/img/apple-touch-icon-114x114.png" />
			<link rel="apple-touch-icon-precomposed" sizes="72x72" href="typo3conf/templates/main/css/img/apple-touch-icon-72x72.png" />
			<link rel="apple-touch-icon-precomposed" sizes="144x144" href="typo3conf/templates/main/css/img/apple-touch-icon-144x144.png" />
			<link rel="apple-touch-icon-precomposed" sizes="60x60" href="typo3conf/templates/main/css/img/apple-touch-icon-60x60.png" />
			<link rel="apple-touch-icon-precomposed" sizes="120x120" href="typo3conf/templates/main/css/img/apple-touch-icon-120x120.png" />
			<link rel="apple-touch-icon-precomposed" sizes="76x76" href="typo3conf/templates/main/css/img/apple-touch-icon-76x76.png" />
			<link rel="apple-touch-icon-precomposed" sizes="152x152" href="typo3conf/templates/main/css/img/apple-touch-icon-152x152.png" />
			<link rel="icon" type="image/png" href="typo3conf/templates/main/css/img/favicon-196x196.png" sizes="196x196" />
			<link rel="icon" type="image/png" href="typo3conf/templates/main/css/img/favicon-96x96.png" sizes="96x96" />
			<link rel="icon" type="image/png" href="typo3conf/templates/main/css/img/favicon-32x32.png" sizes="32x32" />
			<link rel="icon" type="image/png" href="typo3conf/templates/main/css/img/favicon-16x16.png" sizes="16x16" />
			<link rel="icon" type="image/png" href="typo3conf/templates/main/css/img/favicon-128.png" sizes="128x128" />
			<meta name="application-name" content="Ton & Technik Scheffe"/>
			<meta name="msapplication-TileColor" content="#FFFFFF" />
			<meta name="msapplication-TileImage" content="typo3conf/templates/main/css/img/mstile-144x144.png" />
			<meta name="msapplication-square70x70logo" content="typo3conf/templates/main/css/img/mstile-70x70.png" />
			<meta name="msapplication-square150x150logo" content="typo3conf/templates/main/css/img/mstile-150x150.png" />
			<meta name="msapplication-wide310x150logo" content="typo3conf/templates/main/css/img/mstile-310x150.png" />
			<meta name="msapplication-square310x310logo" content="typo3conf/templates/main/css/img/mstile-310x310.png" />

		
		)
			# enable html5 in ie 7 & 8 & media queries
		20 = TEXT
		20.value (
			<!--[if lt IE 9]>
				<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
				<script src="typo3conf/templates/main/js/libs/respond.js"></script>
	        <![endif]-->
        )

        30 = TEXT
		30.value (
			<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
			<script data-main="typo3conf/templates/main/js/main.js" src="typo3conf/templates/main/js/libs/require-jquery.js"></script>
		)
	}


	10 = CASE
	10 {
		key.data = levelfield:-1, backend_layout, slide
		key.override.data = levelfield:-1, backend_layout_next_level, slide
		key.override.override.field = backend_layout

		default = COA
		default {
            10 < lib.header
            20 < lib.keyvisual
			30 < lib.content
			40 < lib.footer
    	}
    	1 < .default
    	1 {
    	    20 >
    	}
    }
    bodyTag >
    bodyTagCObject = TEXT
    bodyTagCObject.field = uid
    bodyTagCObject.wrap = <body class="p_uid|">

}
[globalVar = GP:hover == 1]
page.includeCSS.main = typo3conf/templates/main/css/main.big.hover.min.css
[end]

plugin.tx_news.settings.enablePreviewOfHiddenRecords =1



# include meta:og for facebook on news page - is only visible when params are given
page.headerData.1377 = COA
page.headerData.1377 {
	20 = RECORDS
	20 {
		if.isTrue.data = GP:tx_news_pi1|news
		dontCheckPid = 1
		tables = tx_news_domain_model_news
		source.data = GP:tx_news_pi1|news
		source.intval = 1
		conf.tx_news_domain_model_news = TEXT
		conf.tx_news_domain_model_news {
			field = title
			htmlSpecialChars = 1
		}
		stdWrap.wrap = <meta property="og:title" content="|" />
		stdWrap.if.isTrue.data = GP:tx_news_pi1|news
	}
	40 = RECORDS
	40 {
		if.isTrue.data = GP:tx_news_pi1|news
		dontCheckPid = 1
		tables = tx_news_domain_model_media
		select {
			where = parent="
		}
		source.data = GP:tx_news_pi1|news
		source.intval = 1
		conf.tx_news_domain_model_media = TEXT
		conf.tx_news_domain_model_media {
			field = image
			htmlSpecialChars = 1
		}
		stdWrap.wrap = <meta property="og:image" content="/uploads/tx_news/|" />
		stdWrap.wrap.insertData = 1
		stdWrap.if.isTrue.data = GP:tx_news_pi1|news
	}


}
page.headerData.1 >
page.headerData.1 = COA
page.headerData.1 {
	20 = RECORDS
	20 {
		if.isTrue.data = GP:tx_news_pi1|news
		dontCheckPid = 1
		tables = tx_news_domain_model_news
		source.data = GP:tx_news_pi1|news
		source.intval = 1
		conf.tx_news_domain_model_news = TEXT
		conf.tx_news_domain_model_news {
			field = title
			htmlSpecialChars = 1
		}
		stdWrap.wrap = <title>|&#10;- Oceanfox</title>
		stdWrap.if.isTrue.data = GP:tx_news_pi1|news
	}
}

