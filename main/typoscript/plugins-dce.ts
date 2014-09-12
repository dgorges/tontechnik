  ##
  # Extents dce
  #
  # Author: Daniel Gorges
  # © 2013 b:dreizehn GmbH, Stuttgart
  #
  # --------------------------------------------------------------------
  #
  #

  # creates a menu to hide or display content
lib.dce.sectionIndex = CONTENT
lib.dce.sectionIndex {
	table = tt_content
	select {
		pidInList.data = TSFE:id
		where = CType="gridelements_pi1"
		andWhere = tx_gridelements_backend_layout="1" AND sectionIndex="1"
	}
	renderObj = TEXT
	renderObj {
		field = header
		dataWrap = <li><a href="#" class="js_slideToContent" data-targetce="ce{field:uid}"> | </a></li>
	}
	wrap = <ul> | </ul>
}