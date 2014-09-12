  ##
  # Gridelementsetup
  #
  # Author: Daniel Gorges
  #
  ##


tt_content.gridelements_pi1.20.10.setup {

	# Two Columns - big/small
	# |         10       | |    20    |
	2 < lib.gridelements.defaultGridSetup
	2 {

		stdWrap.innerWrap.cObject =< lib.stdheader
		stdWrap.innerWrap.cObject.stdWrap.wrap = <div class="col-xs-12"> | </div>
		stdWrap.innerWrap.cObject.stdWrap.required = 1

		stdWrap.wrap = <section><div class="row"> | </div></section>

		# to override or set new settings for a column use this syntax
		columns {
			10 < .default
			10.renderObj.20.image.20.1.params = class="b_image"
			10.renderObj.20.image.20.maxW = 780
			10.renderObj.wrap (
				<div class="b_main col-sm-8 col-xs-12">
						|
				</div>
			)

			20.renderObj.stdWrap.wrap (
				<div class="b_marginal col-sm-4 col-xs-12">
						|
				</div>
			)

		}

	}

	# Two Columns - small/big
    # |    10    | |        20          |
    3 < lib.gridelements.defaultGridSetup
    3 {
            # output
        cObject = COA
        cObject {

            10 = TEXT
            10.field = tx_gridelements_view_column_10
            10.wrap (
				<div class="tt_marginal col-sm-4 col-xs-12">
						|
				</div>
            )

            20 = TEXT
            20.field = tx_gridelements_view_column_20
            20.wrap (
				<div class="tt_main col-sm-8 col-xs-12">
						|
				</div>
            )

            wrap = <section><div class="row"> | </div></section>
        }
    }

    # Single Column
    # the actual desired output is this:
    # |    10    |
    1 < lib.gridelements.defaultGridSetup
    1 {
            # output
        cObject = COA
        cObject {

            10 = TEXT
            10.field = tx_gridelements_view_column_1
            10.wrap (
				<section class="contentsection" id="js_c{field:uid}">
						|
				</setion>
            )
            10.insertData = 1
        }
    }
}