################################################################################
# Common Module Settings (Language, Columns in Classic Page Module)
################################################################################

# Set the value for the default language
# mod.SHARED.defaultLanguageLabel = English
# define the sprite icon name, e.g. "gb" or "de"
mod.SHARED.defaultLanguageFlag = de

# define the columns in the page module
# 1=Left, 0=Normal, 2=Right, 3=Border
# mod.SHARED.colPos_list = 1,0

# helpful but should be set via usertsconfig.ts
# mod.web_list.enableDisplayBigControlPanel = activated
# mod.web_list.enableClipBoard = activated
# mod.web_list.enableLocalizationView = activated


################################################################################
# Rich Text Editor Configuration
################################################################################

<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/templates/main/typoscript/pagetsconfig-rte.ts">



################################################################################
# Permissions for the page tree
################################################################################

TCEMAIN.permissions {
	# The page owner can do anything (default)
	user = show,edit,delete,new,editcontent
	# Group can do anything
	# (normally "delete" is disabled)
	group = show,edit,delete,new,editcontent
	# Everybody can at least see the page
	# (normally everybody can do nothing)
	everybody = show,edit,new,editcontent

	# BE Users Owner (uid) for new pages
	userid = 1

	# BE Group Owner (uid) for new pages
	groupid = 2
}

################################################################################
# TCEFORM pages (Backend Forms Configuration)
################################################################################

TCEFORM.pages {

	# --- Tab: General ---
	# doktype.disabled = 1
	# doktype.removeItems = 6,7,255
	# 1=Standard, 6=BE-Userbereich, 4=Verweis, 7=Einstiegspunkt,
	# 3=ext.Link, 254=SysOrdner, 255=Papierkorb, 199=Trennzeichen
	doktype.removeItems = 255
	# nav_title.disabled = 1
	# tx_realurl_pathsegment.disabled = 1
	# tx_realurl_pathoverride.disabled = 1
	# tx_realurl_exclude.disabled = 1

	# --- Tab: Access ---
	#hidden.disabled = 1
	#nav_hide.disabled = 1
	starttime.disabled = 1
	endtime.disabled = 1
	extendToSubpages.disabled = 1
	#fe_group.disabled = 1
	#fe_login_mode.disabled = 1


	# --- Tab: Metadata ---
	author.disabled = 1
	author_email.disabled = 1
	lastUpdated.disabled = 1
	abstract.disabled = 1
	#tx_seo_canonicaltag.disabled = 1
	#keywords.disabled = 1
	#description.disabled = 1
	#tx_seo_titletag.disabled = 1

	# --- Tab: Appearance ---
	layout.disabled = 1
	newUntil.disabled = 1
	module.disabled = 1
	content_from_pid.disabled = 1

	# --- Tab: Behaviour ---
	alias.disabled = 1
	target.disabled = 1
	url_scheme.disabled = 1
	cache_timeout.disabled = 1
	cache_tags.disabled = 1
	no_cache.disabled = 1
	is_siteroot.disabled = 1
	no_search.disabled = 1
	php_tree_stop.disabled = 1

	l18n_cfg.disabled = 1
	editlock.disabled = 1

	# --- Tab: Resources ---
	media.disabled = 1
	storage_pid.disabled = 1
	TSconfig.disabled = 1

	# --- Tab: Sharing ---
	tx_sharingbasics_media.disabled = 1
	tx_sharingbasics_description.disabled = 1
	tx_sharingbasics_title.disabled = 1


}


# If you have made any changes to the TCEFORM.pages above, and you
# have a multilingual site, make sure to modify the changes here accordingly
TCEFORM.pages_language_overlay {
}



################################################################################
# TCEMAIN tt_content (Creating / Saving DB records)
################################################################################

TCEMAIN.table.tt_content {
	disablePrependAtCopy = 1
	disableHideAtCopy = 0
}

TCAdefaults.tt_content.header_layout = 2


################################################################################
# TCEFORM tt_content (Backend Forms Configuration)
################################################################################

TCEFORM.tt_content {

	# --- Content Type: Text (CType=text) ---
	# Possible values: header, text, textpic, image, bullets, table, uploads,
	#      mailform, search, login, media, multimedia, splash, menu, shortcut,
	#      list, script, div, html,
	# "list" = Plugins
	#
	#CType.disabled = 1
	CType.removeItems = partnerlinks, person,bullets, search, script, multimedia, table, script, media, bullets, table, uploads, mailform, search, login, media, multimedia, splash, menu, shortcut, script, html

	#Remove Language Field
	sys_language_uid.disabled = 1

	#hidden.disabled = 1
	header_position.disabled = 1
	header_layout.removeItems = 0
	header_layout.altLabels.1 = H1
 	header_layout.altLabels.2 = H2
 	header_layout.altLabels.3 = H3
 	header_layout.altLabels.4 = H4
 	header_layout.removeItems = 5
 	#header_layout.addItems.10 = H2 - with special classes (thankyoupage application)
 	# header_layout.altLabels.100 = versteckt
	date.disabled = 1
	linkToTop.disabled = 1
	rte_enabled.disabled = 1

	# --- Content Type: Sitemap ---
	menu_type.addItems.10 = Spaltenlinks

	# --- Content Type: Überschrift (CType=header) ---


	# --- Content Type: Text mit Bild (CType=textpic) ---
	imageborder.disabled = 1
	layout.addItems.11 = Keyvisual Image
	removeItems = 1,2,3,4,5,6,7,8,9,10
	#imagecaption.disabled = 1

	imagecaption_position.disabled = 1
	#altText.disabled = 1
	#titleText.disabled = 1
	longdescURL.disabled = 1
	image_compression.disabled = 1
	image_effects.disabled = 1
	imageorient.removeItems = 25,26
	# --- Tab: Appearance ---
	#colPos.disabled = 1
	spaceBefore.disabled = 1
	spaceAfter.disabled = 1
	section_frame.disabled = 1

	# --- Tab: Extend ---
	tx_sidebarsub.label = Subline
}

################################################################################
# tt_address
################################################################################
TCEFORM.tt_address {

}


################################################################################
# News
################################################################################
tx_news.templateLayouts {
	start = Startseite
}
