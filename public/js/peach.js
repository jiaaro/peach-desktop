// Electron shell
var shell = require('electron').shell;

// Open links in external browser
$(document).on('click', 'a[href^="http"]', function(event) {
    event.preventDefault();
    shell.openExternal(this.href);
  });

// Configure Nunjucks
var env = nunjucks.configure('views', { autoescape: true });

// Add moment.js filter to Nunjucks
env.addFilter('fromNow', function(dts) {
      if (!dts) {
        return 'a while ago';
      }
      var s = moment.unix(dts).fromNow();
      return s;
    });

// Authorization function
function login(email, password) {
  $.ajax({
    type: 'POST',
    url: 'http://localhost:1134/api/login',
    data: JSON.stringify({email: email, password: password}),
    contentType: 'application/json',
    success: function(data){
      if (data.data.streams) {
         localStorage.id = data.data.streams[0].id;
         localStorage.token = data.data.streams[0].token;
         $.ajaxSettings.headers =  { Authorization: 'Bearer ' + localStorage.token };
         loadView('connections', '/connections');
      }
      else {
        popAlert("Couldn't connect to Peach. Try again later.", "bg-red", "white");
      }
    },
    error: function(xhr, type) {
      popAlert("Couldn't connect to Peach. Try again later.", "bg-red", "white");
    },
    beforeSend: function(){
      $('body').addClass('modal-open');
      $('#loader').velocity('fadeIn', {duration: 100});
    },
    complete: function(){
      $('#loader').velocity('fadeOut', {duration: 50});
      $('body').removeClass('modal-open');
    }
  });
}

// Load view function
function loadView(view, endpoint) {

  $.ajax({
  type: 'GET',
  url: 'http://localhost:1134/api' + endpoint,
  headers: { Authorization: 'Bearer ' + localStorage.token },
  success: function(data){
    console.log(data);
    $('#content').html(nunjucks.render(view + '.html', { [view]: data }));
    if (!($('body').attr('id') == 'connections' && view == 'connections')) {
      window.scrollTo(0,0);
    }
    $('body').attr('id', view);
  },
  error: function(xhr, type){
    popAlert("Couldn't connect to Peach. Try again later.", "bg-red", "white");
  },
  beforeSend: function(){
    $('body').addClass('modal-open');
    $('#loader').velocity('fadeIn', {duration: 100});
  },
  complete: function(){
    $('#loader').velocity('fadeOut', {duration: 50});
    $('body').removeClass('modal-open');
  }
  });

}

// Pop notification
function popAlert(message, background, foreground) {
  $('#alert').removeClass().text(message).addClass(background + ' ' + foreground).velocity('slideDown').velocity("slideUp", { delay: 1500 });
}

// Link @ mentions to stream
function linkMentions(selector) {
  $(selector).each(function(index,item){
    $(this).html($(this).html().replace(/@([a-z\d_]+)/ig, '<a onClick="loadView(\'stream\',\'/stream/id/$1\')">@$1</a>'));
  });
}


// Start app
Zepto(function($){

  // If authorization token exists, default to connections view
  if (localStorage.token && localStorage.id) {
   $.ajaxSettings.headers =  { Authorization: 'Bearer ' + localStorage.token };
   loadView('connections','/connections');
  }

  // If the token doesn't exist, render the login page
  else {
    $('#content').html(nunjucks.render('login.html'));
  }

  // Bind login form submission
  $('#login').on('submit', function(e) {
      e.preventDefault(); e.stopPropagation();
      login($('#email').val(), $('#password').val());
  });

  // Refresh connections every 30 seconds
  setInterval(function(){
    if ($('body').attr('id') == 'connections') {
      loadView('connections', '/connections');
    }
  }, 60000);

});
