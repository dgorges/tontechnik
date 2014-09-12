###
  # additional typoscript for output for tontechnik Scheffe
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


# remove csc wrapper
tt_content.stdWrap {
	innerWrap.cObject {
		default.20.10.value = ce
	}
}

lib.stdheader.stdWrap.dataWrap >
lib.stdheader.2.headerStyle >
lib.stdheader.3.headerClass >
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class >
tt_content.stdWrap.dataWrap >
tt_content.image.20 {
	1.params = class="image"
	1.imageLinkWrap {
      JSwindow = 0
      directImageLink = 1
      linkParams.ATagParams {
        dataWrap = class = "bJS_imagepopup" rel="group{field:uid}"
      }
      maxWidth = 1280
      maxheight = 1024
    }
    imageLinkWrap.width =
	renderMethod = singleCaption
	rendering {
		singleCaption {
			imageRowStdWrap.dataWrap >
			imageLastRowStdWrap.dataWrap >
			noRowsStdWrap.wrap >
			oneImageStdWrap.dataWrap  = <figure class="image"> | </figure>
			editIconsStdWrap.wrap >
			caption.wrap = <test> | </test>
			caption.required = 1
			singleStdWrap.wrap = |
			singleStdWrap.wrap.override = <figure class="image"> | </figure>
		}
	}
}
tt_content.image.20.1.imageLinkWrap.height =
tt_content.image.20.1.imageLinkWrap.width =

tt_content.image.20.imageStdWrap.dataWrap >
tt_content.image.20.imageStdWrapNoWidth.wrap >
tt_content.image.20.imageColumnStdWrap.dataWrap >
tt_content.image.20.rendering.dl.imageRowStdWrap.dataWrap >
tt_content.image.20.rendering.dl.oneImageStdWrap.dataWrap >
tt_content.image.20.rendering.dl.imgTagStdWrap.wrap >
tt_content.image.20.rendering.dl.editIconsStdWrap.wrap >
tt_content.image.20.rendering.dl.caption.wrap >
tt_content.textpic.20.text.10.10.stdWrap.dataWrap >
tt_content.textpic.20.text.wrap >
lib.stdheader.stdWrap.dataWrap >

# headlineformatting in the dropdown headline Type
lib.stdheader = CASE
lib.stdheader {
	key.field = header_layout

	1 = TEXT
	1 {
		field = header
		wrap = <h1> | </h2>
	}

	2 = TEXT
    2 {
        field = header
        wrap = <h2> | </h2>
    }

	3 = TEXT
	3 {
		field = header
		wrap = <h3> | </h3>
	}
	4 = TEXT
	4 {
		field = header
		wrap = <h4> | </h4>
	}
}

# selected pages menue
tt_content.menu.20.10 < tt_content.menu.20.default
tt_content.menu.20.10 {
	1 {
		expAll = 1
		NO {
			wrapItemAndSub = <li> | </li>
			after {
				field = subtitle
				wrap = <p> | </p>
			}
		}
		ACT < .NO
		ACT = 1
		ACT.wrapItemAndSub = <li class="b_active"> | </li>
	}

	stdWrap.outerWrap = {field.header}<ul class="b_sideNav"> | </ul>
	stdWrap.outerWrap.insertData = 1
}

# file lists
tt_content.uploads.20.default < tt_content.uploads.20.1
tt_content.uploads.20 {
	renderObj.wrap.cObject.20.value =
}

tt_content.menu.20 {

	default.stdWrap.outerWrap = <ul class="list-unstyled">|</ul>
}

# Make uploads bootstrap compatible
tt_content.uploads {
	10 >
	20 {
		renderObj {

			10 >
			15 >
			20 >
			30 >
			40 >

			wrap.cObject {
				10 = COA
                10 {

					10 = TEXT
					10.data = file:current:extension
					10.wrap = <span class="b_courseIcon b_| "></span>

                    20 = TEXT
                    20.data = file:current:title
                    20.ifEmpty.data = file:current:name

                    30 = TEXT
                    30.data = file:current:size
                    30.wrap = <span class="b_small b_gray"> | </span>
                    30.bytes = 1
                    30.bytes.labels = " | KB| MB| GB"

                    wrap = <div class="b_docTitle"><p> | </p></div>
                }
			}

			stdWrap.typolink.parameter.data = file:current:originalUid // file:current:uid
			stdWrap.typolink.parameter.wrap = file:|
			stdWrap.typolink.ATagParams = class="b_courseElement"

		}

		stdWrap.dataWrap = <div class="b_accordionHeadline bJS_accordionHeadline"><a data-toggle="collapse" data-parent="#accordion{field:uid}" href="#{field:uid}"><h3>{field:header}<span class="b_arrowSprite"></span></h3></a></div><div id="{field:uid}" class="panel-collapse collapse">|</div>
		stdWrap.outerWrap = <div class="b_courseData"><div class="b_accordion"><div class="panel-group" id="accordion{field:uid}"> | </div></div></div>
		stdWrap.outerWrap.insertData = 1
	}

}
