
# ==============================================
# FE-Plugin configuration for EXT:news
# ==============================================
plugin.tx_news {
	mvc.callDefaultActionIfActionCantBeResolved = 1

	persistence {
		classes {
			Tx_News_Domain_Model_News {
				subclasses {
					0 = Tx_News_Domain_Model_NewsDefault
					1 = Tx_News_Domain_Model_NewsExternal
					2 = Tx_News_Domain_Model_NewsInternal
				}
			}


			Tx_News_Domain_Model_NewsDefault {
				mapping {
					recordType = 0
					tableName = tx_news_domain_model_news
				}
			}
			Tx_News_Domain_Model_NewsExternal {
				mapping {
					recordType = 1
					tableName = tx_news_domain_model_news
				}
			}

			Tx_News_Domain_Model_NewsInternal {
				mapping {
					recordType = 2
					tableName = tx_news_domain_model_news
				}
			}
		}
	}
	view {
		templateRootPath = {$plugin.tx_news.view.templateRootPath}
		partialRootPath = {$plugin.tx_news.view.partialRootPath}
		layoutRootPath = {$plugin.tx_news.view.layoutRootPath}
	}
	# Modify the translation
	_LOCAL_LANG {
		default {
			# read_more = more >>
		}
	}

	# ====================================
	# Settings available inside Controller and View by accessing $this->settings or {settings.xyz}
	# ====================================
	settings {
		cssFile >

		#Displays a dummy image if the news have no media items
		displayDummyIfNoMedia = 1

		# Output format
		format = html

		# general settings
		overrideFlexformSettingsIfEmpty = cropMaxCharacters,dateField,timeRestriction,orderBy,orderDirection,backPid,listPid,startingpoint,recursive

		includeSubCategories = 0

		analytics {
			social {
				facebookLike = 1
				facebookShare = 1
				twitter = 1
			}
		}

		detailPidDetermination = flexform, categories, default

		defaultDetailPid = {$scheffe.news.detailPid}
		dateField = datetime

		link {
			typesOpeningInNewWindow = 2
			hrDate = 0
			hrDate {
				day = j
				month = n
				year = Y
			}

			skipControllerAndAction = 0
		}

		cropMaxCharacters = 150
		orderBy = datetime
		orderDirection = desc
		orderByRespectTopNews = 0
		orderByAllowed = sorting,author,uid,title,teaser,author,tstamp,crdate,datetime,categories.title

		facebookLocale = de_DE
		googlePlusLocale = de
		disqusLocale = de

		# Interface implementations
		interfaces {
			media {
				video = Tx_News_MediaRenderer_Audio_Mp3,Tx_News_MediaRenderer_Video_Quicktime,Tx_News_MediaRenderer_Video_File,Tx_News_MediaRenderer_Video_Youtube,Tx_News_MediaRenderer_Video_Videosites
			}
		}

		# --------------
		#  Search
		# --------------
		search {
			fields = teaser,title,bodytext
		}

		# --------------
		#  Detail
		# --------------
		detail {
			errorHandling = pageNotFoundHandler
			registerProperties = keywords,title
			showSocialShareButtons = 1

			# media configuration
			media {
				image {
					# choose the rel tag like gallery[fo]
					lightbox = lightbox[myImageSet]
					maxWidth = 1024
					maxHeight =
				}
			}
		}

		# --------------
		#  List
		# --------------
		list {
			# media configuration
			media {
				image {
					maxWidth = 480
					maxHeight = 480
				}
				dummyImage = typo3conf/ext/news/Resources/Public/Images/dummy-preview-image.png
			}

			# Paginate configuration.
			paginate {
				itemsPerPage = 10
				insertAbove = 1
				insertBelow = 1
				templatePath =
				prevNextHeaderTags = 1
				maximumNumberOfLinks = 3
			}

			rss {
				channel {
					title = {$plugin.tx_news.rss.channel.title}
					description = {$plugin.tx_news.rss.channel.description}
					language = {$plugin.tx_news.rss.channel.language}
					copyright = {$plugin.tx_news.rss.channel.copyright}
					generator = {$plugin.tx_news.rss.channel.generator}
					link = {$plugin.tx_news.rss.channel.link}
				}
			}
		}

		# --------------
		#  Common
		# --------------
		relatedFiles {
			fileSizeLabels =
			download {
				labelStdWrap {
					cObject = TEXT
				}
			}
		}

		# Opengraph implementation
		opengraph {
			site_name =  {$plugin.tx_news.opengraph.site_name}
			type = article
			admins =
			email =
			phone_number =
			fax_number =
			latitude =
			longitude =
			street-address =
			locality =
			region =
			postal-code =
			country-name =
		}
	}
}

# Rendering of content elements in detail view
lib.tx_news.contentElementRendering = RECORDS
lib.tx_news.contentElementRendering {
	tables = tt_content
	source.current = 1
	dontCheckPid = 1
}


# ==============================================
# BE-module configuration for EXT:news
# ==============================================
module.tx_news < plugin.tx_news

# ==============================================
# Mapping of tt_content and its properties
# ==============================================
config.tx_extbase.persistence.classes {
	Tx_News_Domain_Model_TtContent {
		mapping {
			tableName = tt_content
			columns {
				altText.mapOnProperty = altText
				titleText.mapOnProperty = titleText
				colPos.mapOnProperty = colPos
			}
		}
	}
}