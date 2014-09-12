###
	# Main TS-Setup File for tontechnik scheffe
	#
	# Author: Daniel Gorges
	#
	# --------------------------------------------------------------------
	#
	# lib.header
	# lib.keyvisual
	# lib.content
	# lib.footer
	#
###

#################################
# lib.header                    #
#################################

lib.header = COA
lib.header {
	50 = COA
	50 {
		70 = HMENU
    	70 {
    	    1 = TMENU
    	    1 {
    	        noBlur = 1
    	        expAll = 1
    	        NO.wrapItemAndSub = <li> | </li>
    	        ACT < .NO
    	        ACT = 1
    	        ACT.wrapItemAndSub = <li class="active"> | </li>
    	    }
    		2 = TMENU
    		2 {
    			noBlur = 1
    			expAll = 1
    			NO.wrapItemAndSub = <li> | </li>
    			ACT < .NO
    			ACT = 1
    			ACT.wrapItemAndSub = <li class="active"> | </li>
    			wrap = <ul class="subnav"> | </ul>
    		}
    	    wrap = <div class="navWrapper"><nav class="nav nav"><div class="container"><div id="navigationShow"><a id="responsive-menu-button" href="#dgJS_offCanvas">Menu</a></div><div class="navWrapper dgJS_nav"><ul class="mainnav"> | </ul></div></div></nav></div>
    	}
	}

	80 = COA
	80 {
		10 = TEXT
		10.value (
			<svg version="1.1" class="logo" id="Logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 384 40" enable-background="new 0 0 384 40" xml:space="preserve">
            <g>
            	<path fill="#272E68" d="M0,1.8h30.2v4.5H17.6V39h-5V6.2H0V1.8z"/>
            	<path fill="#272E68" d="M67.2,20.4c0,1.3-0.1,2.8-0.4,4.3c-0.3,1.5-0.7,3-1.2,4.4c-0.6,1.5-1.3,2.8-2.2,4.1c-0.9,1.3-2,2.5-3.4,3.5
            		c-1.3,1-2.9,1.8-4.7,2.4c-1.8,0.6-3.9,0.9-6.2,0.9c-2.3,0-4.4-0.3-6.2-0.9c-1.8-0.6-3.4-1.4-4.7-2.4c-1.3-1-2.5-2.2-3.4-3.5
            		c-0.9-1.3-1.7-2.7-2.2-4.1c-0.6-1.5-1-2.9-1.2-4.4c-0.3-1.5-0.4-2.9-0.4-4.3c0-1.3,0.1-2.8,0.4-4.3c0.3-1.5,0.7-3,1.2-4.4
            		c0.6-1.5,1.3-2.8,2.2-4.1c0.9-1.3,2-2.5,3.4-3.5c1.3-1,2.9-1.8,4.7-2.4c1.8-0.6,3.9-0.9,6.2-0.9c2.3,0,4.4,0.3,6.2,0.9
            		C57,2.3,58.6,3.1,60,4.1c1.3,1,2.5,2.2,3.4,3.5c0.9,1.3,1.7,2.7,2.2,4.1s1,2.9,1.2,4.4C67.1,17.6,67.2,19,67.2,20.4z M62,20.4
            		c0-2.2-0.3-4.2-0.9-6c-0.6-1.8-1.4-3.4-2.6-4.8c-1.1-1.3-2.5-2.4-4.1-3.2c-1.6-0.8-3.4-1.1-5.4-1.1c-2,0-3.9,0.4-5.4,1.1
            		c-1.6,0.8-2.9,1.8-4.1,3.2c-1.1,1.3-2,2.9-2.6,4.8c-0.6,1.9-0.9,3.9-0.9,6c0,2.2,0.3,4.2,0.9,6c0.6,1.9,1.4,3.4,2.6,4.8
            		c1.1,1.3,2.5,2.4,4.1,3.2c1.6,0.8,3.4,1.1,5.4,1.1c2,0,3.8-0.4,5.4-1.1c1.6-0.8,3-1.8,4.1-3.2c1.1-1.3,2-2.9,2.6-4.8
            		C61.7,24.6,62,22.6,62,20.4z"/>
            	<path fill="#272E68" d="M97.9,1.8h4.9V39h-5.7L78.2,8.9h-0.1V39h-4.9V1.8h6l18.6,30.1h0.1V1.8z"/>
            	<path fill="#9C9B9B" d="M137.6,34.9c-1.4,1.7-2.9,2.9-4.6,3.7c-1.7,0.8-3.6,1.2-5.8,1.2c-1.7,0-3.3-0.3-4.7-0.8
            		c-1.4-0.5-2.7-1.2-3.7-2.2c-1-0.9-1.8-2.1-2.4-3.4c-0.6-1.4-0.9-2.9-0.9-4.6c0-1.3,0.2-2.5,0.7-3.6c0.5-1.1,1.1-2,1.9-2.9
            		c0.8-0.9,1.7-1.7,2.7-2.4c1-0.7,2.1-1.3,3.1-1.9c-0.5-0.6-1-1.2-1.4-1.8c-0.4-0.6-0.8-1.2-1.2-1.9c-0.3-0.7-0.6-1.3-0.8-2.1
            		c-0.2-0.7-0.3-1.5-0.3-2.3c0-1.3,0.2-2.6,0.7-3.6c0.5-1.1,1.1-2,1.9-2.8c0.8-0.8,1.8-1.4,2.9-1.8c1.1-0.4,2.3-0.6,3.5-0.6
            		c1.2,0,2.3,0.2,3.4,0.5c1.1,0.4,2.1,0.9,3,1.7c0.8,0.7,1.5,1.7,2,2.8c0.5,1.1,0.8,2.4,0.8,3.9c0,1.1-0.2,2.1-0.5,3.1
            		c-0.4,0.9-0.8,1.8-1.5,2.6c-0.6,0.8-1.3,1.5-2.1,2.1c-0.8,0.6-1.7,1.2-2.6,1.7l5.8,7c0.2-0.6,0.4-1.3,0.6-2c0.2-0.8,0.4-1.7,0.5-3
            		h5.2c-0.2,1.6-0.5,3.2-1,4.8c-0.5,1.6-1.1,3-1.9,4.3l7.1,8.6H141L137.6,34.9z M127.2,21.9c-0.6,0.3-1.2,0.7-1.8,1
            		c-0.7,0.3-1.3,0.8-1.8,1.3c-0.6,0.5-1.1,1.1-1.5,1.9c-0.4,0.7-0.6,1.6-0.6,2.7c0,2,0.6,3.5,1.7,4.6c1.1,1.1,2.5,1.6,4.3,1.6
            		c1.1,0,2-0.1,2.7-0.4c0.8-0.3,1.4-0.6,1.9-1.1c0.5-0.4,1-0.9,1.3-1.3c0.4-0.5,0.7-0.9,1-1.3L127.2,21.9z M129.6,5.5
            		c-1.1,0-2,0.4-2.8,1.1c-0.8,0.7-1.1,1.7-1.1,3c0,0.6,0.1,1.2,0.3,1.7c0.2,0.5,0.5,1.1,0.8,1.6c0.3,0.5,0.7,1,1.1,1.5
            		c0.4,0.5,0.8,1,1.1,1.4c0.6-0.4,1.1-0.8,1.6-1.2c0.5-0.4,1-0.8,1.4-1.3c0.4-0.5,0.7-1,1-1.6c0.2-0.6,0.4-1.2,0.4-2
            		c0-1.2-0.3-2.2-1-3C131.6,5.9,130.7,5.5,129.6,5.5z"/>
            	<path fill="#272E68" d="M155.2,2h30v5.6h-11.8V39h-6.5V7.6h-11.7V2z"/>
            	<path fill="#272E68" d="M189.4,2h26.7v5.6h-20.2v9.7h18.7v5.3h-18.7v10.8h20.5V39h-27V2z"/>
            	<path fill="#272E68" d="M247.1,13.8c-0.3-1.1-0.7-2.1-1.1-3c-0.5-0.9-1.1-1.7-1.9-2.3c-0.8-0.7-1.7-1.2-2.7-1.5
            		c-1-0.4-2.2-0.5-3.6-0.5c-2,0-3.7,0.4-5.1,1.2c-1.4,0.8-2.6,1.9-3.5,3.2c-0.9,1.3-1.6,2.8-2,4.5c-0.4,1.7-0.6,3.4-0.6,5.2
            		c0,1.8,0.2,3.5,0.6,5.2c0.4,1.7,1.1,3.2,2,4.5c0.9,1.3,2.1,2.4,3.5,3.2c1.4,0.8,3.1,1.2,5.1,1.2c1.5,0,2.7-0.3,3.8-0.8
            		c1.1-0.5,2.1-1.2,2.9-2.1c0.8-0.9,1.4-1.9,1.9-3.1c0.4-1.2,0.7-2.4,0.9-3.8h6.3c-0.1,2.2-0.6,4.2-1.4,6.1c-0.8,1.8-1.9,3.4-3.3,4.7
            		c-1.4,1.3-3,2.4-4.9,3.1c-1.9,0.7-3.9,1.1-6.2,1.1c-2.8,0-5.2-0.5-7.4-1.5c-2.2-1-4.1-2.4-5.6-4.2c-1.5-1.8-2.7-3.8-3.5-6.2
            		c-0.8-2.4-1.2-4.9-1.2-7.5c0-2.6,0.4-5.1,1.2-7.5c0.8-2.4,2-4.4,3.5-6.2s3.4-3.2,5.6-4.2s4.7-1.6,7.4-1.6c2.1,0,4,0.3,5.9,0.9
            		c1.8,0.6,3.5,1.4,4.9,2.5c1.4,1.1,2.5,2.4,3.4,4c0.9,1.6,1.4,3.3,1.6,5.3H247.1z"/>
            	<path fill="#272E68" d="M259.4,2h6.5v14.7h16.9V2h6.5v37h-6.5V22.3h-16.9V39h-6.5V2z"/>
            	<path fill="#272E68" d="M296.8,2h6.8l16.9,27.3h0.1V2h6.2v37h-6.8l-16.9-27.2h-0.2V39h-6.2V2z"/>
            	<path fill="#272E68" d="M334.5,2h6.5v37h-6.5V2z"/>
            	<path fill="#272E68" d="M348.9,2h6.5v16.9L371.9,2h8l-14.8,14.8L380.9,39h-8.1l-12.1-17.7l-5.3,5.2V39h-6.5V2z"/>
            </g>
            </svg>
		)
		10.wrap = | <img src="typo3conf/templates/main/css/img/swoosh.png" title="Ton & Technik Scheffe" alt="Swoosh" class="swoosh" />
		10.typolink.parameter = 1
	}
	80.wrap = <div class="cloudy"> | </div>

	wrap (
        <header id="header">
    |
        </header>
    )
}
[globalVar = GP:newsletterSubmitSuccess = 1]
	lib.header.wrap (
		<header id="header">
		<div class="alert bJS_alert alert-success fade in alert-dismissable">
			<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
			<h2>Vielen Dank für die Registrierung zu unserem Newsletter.</h2>
			<p>Sie werden umgehend eine E-Mail erhalten mit einem Bestätigungslink.
		</div>

						|
		</header>
	)
[global]
[globalVar = GP:contactSubmitSuccess = 1]
	lib.header.wrap (
		<header id="header">
		<div class="alert bJS_alert alert-success fade in alert-dismissable">
			<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
			<h2>Vielen Dank für Ihre Nachricht.</h2>
			<p>Wir werden uns umgehend mit Ihnen in Verbindung setzen.</p>
		</div>

						|
		</header>
	)
[global]

[globalVar = GP:hover == 1]
lib.header.70.1.wrap = <ul class="mainnav"> | </ul>
lib.header.70.2.wrap = <div class="subnav"><ul> | </ul></div>
lib.header.70.wrap = <nav class="nav nav"><div class="container"> | </div></nav>
[end]

#################################
# lib.keyvisual                 #
#################################
lib.keyvisual = COA
lib.keyvisual {
	30 < styles.content.get
    30.select.where = colPos = 0
	stdWrap.wrap = <section class="keyvisual"> | </section>
	stdWrap.required = 1
}

#################################
# lib.content                   #
#################################

lib.content = COA
lib.content {


	10 < .lib.keyvisual

	50 < styles.content.get
    50.select.where = colPos = 1
	50.wrap = <div class="contentBody"> | </div>

	wrap (
		<main id="mainContent" role="main">
			<div class="container">
		|
			</div>
			<div class="push"></div>
		</main>
	)
}
#################################
# lib.footer                    #
#################################
lib.footer = COA
lib.footer {
	#10 = COA
	#10 {
	#	10 = RECORDS
	#	10 {
	#		tables = tt_content
	#		source = {$scheffe.uid.newsletter}
	#		source.insertData = 1
	#		dontCheckPid = 1
	#	}
	#	10.wrap = <div class="col-xs-12 col-md-4"> | </div>
	#}

	10 = COA
	10 {
        20 = CONTENT
		20 {
			table = tt_content
			select {
				pidInList = {$scheffe.pages.footer}
				orderBy = sorting
				where = colPos= 0
			}
		}
		wrap = <div class="col-xs-12 col-md-4 leftColumn"> | </div>
	}

	20 = COA
	20 {
		20 = CONTENT
		20 {
			table = tt_content
			select {
				pidInList = {$scheffe.pages.footer}
				orderBy = sorting
				where = colPos= 1
			}
		}
		wrap = <div class="col-xs-12 col-md-4 centerColumn"> | </div>
	}

	30 = COA
	30 {
		10 = TEXT
		10.value = Netzwerke
		10.wrap = <h4> | </h4>
		20 = COA
		20 {


			20 = TEXT
			20.value = <i class="functional-icon-xing"></i>
			20.typolink.parameter = https://www.xing.com/companies/ton%252526technikscheffegmbh?keyword=ton%20%26%20technik%20scheffe%20gmbh
			20.typolink.extTarget = _blank
			20.typolink.ATagParams = target="_blank" class="xing"

			30 = TEXT
			30.value = <span class="logo-bunnett"></span>
			30.typolink.parameter = http://www.bunnet.de/unternehmen/profil/ton-technik-scheffe.html
			30.typolink.extTarget = _blank
			30.typolink.ATagParams = target="_blank" class="bunnet"

			wrap = <div class="social"> | </div>
		}

		50 = TEXT
		50.value = <hr />

		60 = CONTENT
		60 {
			table = tt_content
			select {
				pidInList = {$scheffe.pages.footer}
				orderBy = sorting
				where = colPos= 2
			}
		}


		100 = TEXT
		100.data = date : U
		100.strftime = %Y
		100.noTrimWrap = |© | Ton & Technik Scheffe|
		100.outerWrap = <p><small> | </small></p>


		wrap = <div class="col-xs-12 col-md-4 rightColumn"> | </div>
	}
	wrap (
		<footer id="footer">
			<div class="container">
				<div class="mainCol col-xs-12">
					<div class="row">
		|
					</div>
				</div>
			</div>
		</footer>
	)
}