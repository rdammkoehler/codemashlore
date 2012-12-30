# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

$ ->
  ($ 'tr').popover
    trigger: 'hover'
    placement: 'bottom'

  ($ '.up-vote').click ->
    id = ($ @).data('id')

    $.ajax
      url: "lores/#{id}",
      dataType: "json",
      type: "POST",
      processData: false,
      contentType: "application/json",
      data: "{\"operation\":\"up\"}",
      beforeSend: (xhr) -> xhr.setRequestHeader("X-Http-Method-Override", "PUT")
      error: (jqXHR, textStatus, errorThrown) -> alert textStatus
      success: (data, textStatus, jqXHR) ->
        ($ "#ranking-#{id}").html(data['ranking'])

  ($ '.down-vote').click ->
    id = ($ @).data('id')

    $.ajax
      url: "lores/#{id}",
      dataType: "json",
      type: "POST",
      processData: false,
      contentType: "application/json",
      data: "{\"operation\":\"down\"}",
      beforeSend: (xhr) -> xhr.setRequestHeader("X-Http-Method-Override", "PUT")
      error: (jqXHR, textStatus, errorThrown) -> alert textStatus
      success: (data, textStatus, jqXHR) ->
        ($ "#ranking-#{id}").html(data['ranking'])

