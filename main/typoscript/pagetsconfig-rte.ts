## 10.2013 - Daniel Gorges :: b:dreizehn GmbH :: Stuttgart

############### all Buttons ###############
# about, acronym, bgcolor, bidioverride, big, blockquote, blockstyle, bold, celldelete, cellinsertafter, cellinsertbefore, cellmerge, cellproperties, cellsplit, center,
# chMode, citation, code, columndelete, columninsertafter, columninsertbefore, columnproperties, columnsplit, copy, cut, definition, definitionitem, definitionlist,
# deletedtext, emoticon, emphasis, findreplace, fontsize, fontstyle, formatblock, formattext, image, indent, insertcharacter, insertedtext, insertparagraphafter,
# insertparagraphbefore, inserttag, italic, justifyfull, keyboard, language, left, lefttoright, line, link, monospaced, orderedlist, outdent, paste, quotation, redo,
# removeformat, right, righttoleft, rowdelete, rowinsertabove, rowinsertunder, rowproperties, rowsplit, sample, showhelp, showlanguagemarks, small, span, spellcheck,
# strikethrough, strong, subscript, superscript, table, tableproperties, tablerestyle, textcolor, textindicator, textstyle, textstylelabel, toggleborders, underline,
# undo, unlink, unorderedlist, user, variable,blockstylelabel

########## Settings ##########

RTE.default{
	# clean p and span style attribute
    enableWordClean.HTMLparser.tags.span.fixAttrib.style.unset = 1
    enableWordClean.HTMLparser.tags.p.fixAttrib.style.unset = 1

	# removes the following tags and attributes
	removeTags = center, div, font, span
    removeTagsAndContents = style, script, sdfield, font

	# ownly show the following buttons
	showButtons = formatblock, insertcharacter, link, unlink, chMode, copy, cut, paste, undo, redo, superscript, deletedtext, bold, italic, subscript, superscript, code

	# order of items in dropdown
    buttons.formatblock.orderItems = h1, h2, h3, p,

    # Path to rte.css
    contentCSS = typo3conf/templates/main/css/rte.css
}
RTE.classes {

	bJS_ajaxpopup.name = Popup
}

########### Definition der Link-Klassen, die im DropDown des Link-Popups erscheinen sollen ##############

RTE.default.classesAnchor = bJS_ajaxpopup

########### Definition der Link-Klassen ##############

RTE.default.FE.classesAnchor := addToList(bJS_ajaxpopup)

RTE.default.proc.allowedClasses := addToList(bJS_ajaxpopup)
RTE.default.buttons {
	link.properties.class.allowedClasses := addToList(bJS_ajaxpopup)
}

RTE.classesAnchor {
	bJS_ajaxpopup {
		class = bJS_ajaxpopup
		type = page
		titleText = Popup
	}
	internalLink {
		class = button,bJS_ajaxpopup
		type = page
	}
}