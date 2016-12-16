function ssValidate(frm) {
  $('#errorMSG').hide();
  $(frm + ' *').removeClass('ss-error');
  //required fields
  $(frm + ' [ssValidate~="required"').each(function (i) {
    if ($(this).val() === "") {
      $(this).addClass("ss-error");
      //this caters for select2
      if ($(this).is("select")) {
        $(this).next().find("*").addClass("ss-error");
      }
    }
  });
  //determine if we return true/false
  if ($(frm + ' .ss-error').length === 0) { return true; }
  else { $('#errorMSG').show(); return false; }
}