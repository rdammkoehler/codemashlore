$(function() {
  ($('.up-vote')).click(function() {
    var id;
    id = ($(this)).data('id');
    $.ajax({
      url: "lores/" + id,
      dataType: "json",
      type: "POST",
      processData: false,
      contentType: "application/json",
      data: "{\"operation\":\"up\"}",
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Http-Method-Override", "PUT");
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert(textStatus);
      },
      success: function(data, textStatus, jqXHR) {
        ($("#ranking-" + id)).html(data['ranking']);
      }
    });
  });
  ($('.down-vote')).click(function() {
    var id;
    id = ($(this)).data('id');
    return $.ajax({
      url: "lores/" + id,
      dataType: "json",
      type: "POST",
      processData: false,
      contentType: "application/json",
      data: "{\"operation\":\"down\"}",
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Http-Method-Override", "PUT");
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert(textStatus);
      },
      success: function(data, textStatus, jqXHR) {
        ($("#ranking-" + id)).html(data['ranking']);
      }
    });
  });
});
