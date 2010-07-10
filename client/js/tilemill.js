var TileMill = {
  editor: {},
  utilities: {},
  settings: {
    server: 'python',
    rasterizer: 'tilelive',
    runtime: 'html',
    pythonServer: 'http://localhost:8889/',
    tileliveServer: 'http://localhost:8888/',
  }
};

$.fn.reverse = [].reverse;

// Controller.

TileMill.controller = { arguments: {} };

TileMill.controller.route = function() {
  var url = $.bbq.getState("action");
  switch (url) {
    case undefined:
    case 'list':
      fn = 'list';
      break;
    case 'project':
      fn = 'project';
      break;
    case 'visualization':
      fn = 'visualization';
      break;
  }
  $('body').attr('id', fn).empty().append('<div class="loading"></div>');
  TileMill.controller[fn]();
};

TileMill.show = function(data) {
  $('body').empty().append(data);
}

$(function() {
  // Just show a quick swirly while everything is loading.
  $(window).bind('resize', function() {
    if ($('.loading').size()) {
      $('.loading').css('margin-top', (window.innerHeight - 32)/2);
    }
  }).trigger('resize');


  $(window).bind("hashchange", function() {
    TileMill.controller.route();
  }).trigger('hashchange');
});
