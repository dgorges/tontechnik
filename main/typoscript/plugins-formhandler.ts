
plugin.Tx_Formhandler.settings.predef.newsletter {

	disableWrapInBaseClass = 1

	# Common configuration
	#debug = 1
	name = Newsletter
	addErrorAnchors = 1
	1.templateFile = TEXT
	1.templateFile.value = typo3conf/templates/main/plugins/formhandler/newsletter.form.html
	langFile.1 = typo3conf/templates/main/plugins/formhandler/locallang.xml
	formValuesPrefix = newsletter
	disableWrapInBaseClass = 1
	isErrorMarker.default = has-error
	isErrorMarker {
		global = has-error
	}
	errorListTemplate {
		totalWrap >
		singleWrap = <p> | </p>
	}
    finishers {
		1.class = Tx_Finisher_DB
		1.config {
			table = tt_address
			key = uid
			fields {
				email.mapping = email
				email.ifIsEmpty = 1
				pid.ifIsEmpty = 109
				hidden.ifIsEmpty = 1
				module_sys_dmail_html.ifIsEmpty = 1
			}
		}
		2.class = Tx_Formhandler_Finisher_Mail
		2.config {
			checkBinaryCrLf = message
			admin {
				templateFile = TEXT
				templateFile.value = typo3conf/templates/main/plugins/formhandler/newsletter.email.admin.html
				sender_email = email
				to_email = info@tontechnik-scheffe.de
				replyto_email = email
				replyto_name = email
				subject = Tontechnik-Scheffe.de - Neue Newsletterregistrierung
			}
		}
		3.class = Finisher_Redirect
		3.config {
			# redirect to the actual page
			redirectPage = TEXT
			redirectPage.value = {page:uid}
			redirectPage.inserData = 1
			additionalParams {
				newsletterSubmitSuccess = 1
			}
		}
	}
}
plugin.Tx_Formhandler.settings.predef.contact {
	debug = 1
	disableWrapInBaseClass = 1

	# Common configuration
	#debug = 1
	name = Contact
	addErrorAnchors = 1
	1.templateFile = TEXT
	1.templateFile.value = typo3conf/templates/main/plugins/formhandler/contact.form.html
	langFile.1 = typo3conf/templates/main/plugins/formhandler/locallang.xml
	formValuesPrefix = contact
	disableWrapInBaseClass = 1
	isErrorMarker.default = has-error
	isErrorMarker {
		global = has-error
	}
	errorListTemplate {
		totalWrap >
		singleWrap = <p> | </p>
	}

	validators {
		1.class = Validator_Default
		1.config.fieldConf {
			salutation {
				errorCheck {
					required = 1
				}
			}
			lastname {
				errorCheck {
					required = 1
				}
			}
			subject {
				errorCheck {
					required = 1
				}
			}
			message {
				errorCheck {
					required = 1
				}
			}
			email {
				errorCheck {
					1 = required
					2 = email
				}
			}
		}
	}
    finishers {
		1.class = Tx_Formhandler_Finisher_Mail
		1.config {
			checkBinaryCrLf = message
			admin {
				templateFile = TEXT
				templateFile.value = typo3conf/templates/main/plugins/formhandler/contact.email.admin.html
				sender_email = email
				to_email = info@tontechnik-scheffe.de
				replyto_email = email
				replyto_name = email
				subject = subject
			}
			user {
				templateFile = TEXT
				templateFile.value = typo3conf/templates/main/plugins/formhandler/contact.email.admin.html
				sender_email = info@tontechnik-scheffe.de
				to_email = email
				replyto_email = info@tontechnik-scheffe.de
				replyto_name = info@tontechnik-scheffe.de
				subject = Ihre Nachricht an: Tontechnik-Scheffe.de
			}
		}
		2.class = Finisher_Redirect
		2.config {
			redirectPage = TEXT
			redirectPage.value = {page:uid}
			redirectPage.inserData = 1
			additionalParams {
				contactSubmitSuccess = 1
			}
		}
	}
}