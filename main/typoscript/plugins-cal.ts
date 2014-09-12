###
# This are the default TS-constants for cal
##
plugin.tx_cal_controller.pidList = 105
plugin.tx_cal_controller {
	# 0 = Show all # 1 = show selected # 2 = exclude selected
	categoryMode = 0
	activateFluid = 1

	view.dateFormat = %d.%m.

	# calender view startpage
	view.event {
		eventModelTemplate = typo3conf/templates/main/plugins/cal/list.html
		dateFormat = %d.%m.%y
	}

	view.list {

		enddate.dataWrap >
		endtime = +12 month
		maxEvents = 10

		enableMonthWrapper = 0
		event.dateFormat = %d.%m.

		#    event.enddate.noTrimWrap = | - ||

		listTemplateFluid = typo3conf/templates/main/plugins/cal/list.html
		listWithTeaserTemplate = typo3conf/templates/main/plugins/cal/list.html

		event {
			enddate.noTrimWrap = | <span class="dateSeparator">&ndash;</span> ||

			noEventFound = TEXT
			noEventFound.value = There are no entries currently available in the near future.

			category.dataWrap =
			category.wrap =
			title.crop = 50|..|1
			alldayTitle.crop = 50|..|1
		}

		restartAlternationAfterMonthWrapper = 1
	}
}

# Check if cal is allowed to be cached or not. If not (f.e. if we're in frontend editing mode or a search query is processed) change to a USER_INT
[userFunc = user_isCalNotAllowedToBeCached()]
	plugin.tx_cal_controller = USER_INT
	plugin.tx_cal_controller.isUserInt = 1
[global]

config.cache_clearAtMidnight = 1

plugin.tx_cal_controller {
	# 0 = Show all # 1 = show selected # 2 = exclude selected
	categoryMode = 1
	activateFluid = 1
	parseFunc < styles.content.parseFunc
	userFunc = tx_cal_controller->main

	useNewTemplatesAndRendering = 1

	# @description	List of PIDs where cal records are found.
	pidList = 105
	calendarName = Ton & Technik Scheffe
}

plugin.tx_cal_controller.lib.list < plugin.tx_cal_controller.view.list
plugin.tx_cal_controller.lib.list {
	enableMonthWrapper = 0
}
[compatVersion = 4.3]
plugin.tx_cal_controller.view.event.event.attachment.20.stdWrap.if.isTrue.field = tx_cal_media
plugin.tx_cal_controller.view.event.event.attachment.20.field = tx_cal_media
plugin.tx_cal_controller.view.event.event.attachment.20.filePath.field = nothing
[GLOBAL]
[PIDinRootline = 1]

# calender view startpage
view.event {
	eventModelTemplate = typo3conf/templates/main/plugins/cal/upcomming.html
}

view.list {
	listTemplateFluid = typo3conf/templates/main/plugins/cal/upcomming.html
	listWithTeaserTemplate = typo3conf/templates/main/plugins/cal/upcomming.html
}
[end]