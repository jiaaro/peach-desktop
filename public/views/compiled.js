(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["connections.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"box\">\n\t<div class=\"avatar\" style=\"background-image: url(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "connections")),"data")),"requesterStream")),"avatarSrc"), env.opts.autoescape);
output += ")\"></div>\n\t<div class=\"user-details\">\n\t\t<h3>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "connections")),"data")),"requesterStream")),"displayName"), env.opts.autoescape);
output += "</h3>\n\t\t<p class=\"gray\">\n\t\t\t";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "connections")),"data")),"requesterStream")),"posts");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("post", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("fromNow").call(context, runtime.memberLookup((t_4),"createdTime")), env.opts.autoescape);
output += "\n\t\t\t\t";
;
}
output += "\n\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t</p>\n\t</div>\n</div>\n\n<div class=\"bg-transparent box center no-padding\">\n<button class=\"half-button bg-dark\" onclick=\"loadView('requests','/connections')\">Requests (";
output += runtime.suppressValue(env.getFilter("length").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "connections")),"data")),"inboundFriendRequests")) + env.getFilter("length").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "connections")),"data")),"outboundFriendRequests")), env.opts.autoescape);
output += ")</button>\n<button class=\"half-button bg-green white\">Add a friend</button>\n</div>\n\n";
frame = frame.push();
var t_7 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "connections")),"data")),"connections");
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("connection", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\n<div class=\"box connection\" onclick=\"loadView('stream','/stream/id/";
output += runtime.suppressValue(runtime.memberLookup((t_8),"id"), env.opts.autoescape);
output += "')\">\n\t<div class=\"avatar\" style=\"background-image: url(";
if(runtime.memberLookup((t_8),"avatarSrc")) {
output += runtime.suppressValue(runtime.memberLookup((t_8),"avatarSrc"), env.opts.autoescape);
;
}
else {
output += "/img/default-avatar.png";
;
}
output += ")\"></div>\n\t<div class=\"user-details\">\n\t\t<h3>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"displayName"), env.opts.autoescape);
output += "</h3>\n\t\t";
if(runtime.memberLookup((t_8),"unreadPostCount") > 0) {
output += "<div class=\"indicator bg-green\"></div>";
;
}
output += "\n\t\t<p class=\"gray status\">\n\t\t\t";
frame = frame.push();
var t_11 = runtime.memberLookup((t_8),"posts");
if(t_11) {var t_10 = t_11.length;
for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("post", t_12);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("fromNow").call(context, runtime.memberLookup((t_12),"createdTime")), env.opts.autoescape);
output += "\n\t\t\t\t";
;
}
output += "\n\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t</p>\n\t</div>\n</div>\n";
;
}
}
frame = frame.pop();
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["login.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "\t<h2 class=\"view-name\">Login</h2>\n\n\t<div class=\"box\">\n\n\t\t<form id=\"login\">\n\t\t\t<input id=\"email\" type=\"email\" required=\"required\" placeholder=\"Email address\">\n\t\t\t<input id=\"password\" type=\"password\" required=\"required\" placeholder=\"Password\"> \n\t\t\t<input type=\"submit\" class=\"bg-pink white\" value=\"Sign In\">\n\t\t</form>\n\n\t</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["requests.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"stream-bar\">\n\t<div class=\"back-button fa fa-chevron-left\" onclick=\"loadView('connections','/connections')\"></div>\n\t<div class=\"user-details\">\n\t<h3>Friend requests</h3>\n\t<p class=\"gray status\">";
output += runtime.suppressValue(env.getFilter("length").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "requests")),"data")),"inboundFriendRequests")), env.opts.autoescape);
output += " incoming / ";
output += runtime.suppressValue(env.getFilter("length").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "requests")),"data")),"outboundFriendRequests")), env.opts.autoescape);
output += " outgoing</p>\n\t</div>\n\t</div>\n</div>\n\n<div class=\"requests\">\n";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "requests")),"data")),"inboundFriendRequests");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("request", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n<div class=\"box connection incoming\">\n\t<div class=\"avatar\" style=\"background-image: url(";
if(runtime.memberLookup((runtime.memberLookup((t_4),"stream")),"avatarSrc")) {
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"stream")),"avatarSrc"), env.opts.autoescape);
;
}
else {
output += "/img/default-avatar.png";
;
}
output += ")\"></div>\n\t<div class=\"user-details\">\n\t\t<h3>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"stream")),"displayName"), env.opts.autoescape);
output += "</h3>\n\t\t<p class=\"gray status\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"stream")),"name"), env.opts.autoescape);
output += " sent you a friend request</p>\n\t    <div class=\"request-actions\"><p class=\"red decline\">Decline</p> / <p class=\"green accept\">Accept</p></div>\n\t</div>\n</div>\n";
;
}
}
frame = frame.pop();
output += "\n\n";
frame = frame.push();
var t_7 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "requests")),"data")),"outboundFriendRequests");
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("request", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\n<div class=\"box connection outgoing\">\n\t<div class=\"avatar\" style=\"background-image: url(";
if(runtime.memberLookup((runtime.memberLookup((t_8),"stream")),"avatarSrc")) {
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"stream")),"avatarSrc"), env.opts.autoescape);
;
}
else {
output += "/img/default-avatar.png";
;
}
output += ")\"></div>\n\t<div class=\"user-details\">\n\t\t<h3>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"stream")),"displayName"), env.opts.autoescape);
output += "</h3>\n\t\t<p class=\"gray status\">Waiting for ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"stream")),"name"), env.opts.autoescape);
output += "...</p>\n\t</div>\n</div>\n";
;
}
}
frame = frame.pop();
output += "\n\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["stream.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "\n<div class=\"stream-bar\">\n\t<div class=\"back-button fa fa-chevron-left\" onclick=\"loadView('connections','/connections')\"></div>\n\t<div class=\"avatar\" style=\"background-image: url(";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "stream")),"data")),"avatarSrc")) {
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "stream")),"data")),"avatarSrc"), env.opts.autoescape);
;
}
else {
output += "/img/default-avatar.png";
;
}
output += ")\"></div>\n\t<div class=\"user-details\">\n\t<h3>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "stream")),"data")),"displayName"), env.opts.autoescape);
output += "</h3>\n\t<p class=\"gray status\">@";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "stream")),"data")),"name"), env.opts.autoescape);
output += "</p>\n\t</div>\n</div>\n\n<div class=\"posts\">\n\n";
frame = frame.push();
var t_3 = env.getFilter("reverse").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "stream")),"data")),"posts"));
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("post", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\n\t<div class=\"post wrap\">\n\n\t";
frame = frame.push();
var t_7 = runtime.memberLookup((t_4),"message");
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("message", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\n\n\t\t";
if(runtime.memberLookup((t_8),"type") == "text") {
output += "\n\t\t\t<div class=\"text message\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"text"), env.opts.autoescape);
output += "</div>\n\n\t    ";
;
}
else {
if(runtime.memberLookup((t_8),"type") == "link") {
output += "\n\t    \t<div class=\"link message\">\n\t    \t\t<p><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"url"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"title"), env.opts.autoescape);
output += "</a></p>\n\t    \t\t<p class=\"gray status\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"description"), env.opts.autoescape);
output += "</p>\n\t    \t</div>\n\n\t\t";
;
}
else {
if(runtime.memberLookup((t_8),"type") == "image") {
output += "\n\t\t\t<img class=\"image message\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"src"), env.opts.autoescape);
output += "\"/>\n\n\t    ";
;
}
else {
if(runtime.memberLookup((t_8),"type") == "gif") {
output += "\n\t    \t<img class=\"gif message\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"src"), env.opts.autoescape);
output += "\"/>\n\n\t    ";
;
}
else {
if(runtime.memberLookup((t_8),"type") == "video") {
output += "\n\n\t    \t";
if(runtime.memberLookup((t_8),"subtype") == "looping photo") {
output += "\n\t    \t<video class=\"looping-photo message\" poster=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"posterSrc"), env.opts.autoescape);
output += "\" autoplay muted loop>\n\t    \t\t<source src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"src"), env.opts.autoescape);
output += "\" type=\"video/mp4\">\n\t    \t</video>\t    \t\n\n\t    \t";
;
}
else {
output += "\n\t    \t<video class=\"video message\" poster=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"posterSrc"), env.opts.autoescape);
output += "\" onclick=\"this.paused?this.play():this.pause();\">\n\t    \t\t<source src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"src"), env.opts.autoescape);
output += "\" type=\"video/mp4\">\n\t    \t</video>\n\t    \t";
;
}
output += "\n\n\t\t";
;
}
;
}
;
}
;
}
;
}
output += "\n\n\t";
;
}
}
frame = frame.pop();
output += "\n\n\t\t<div class=\"gray meta\">\n\t\t\t<i class=\"like fa fa-heart-o";
if(runtime.memberLookup((t_4),"likedByMe") == true) {
output += " liked";
;
}
output += "\" data-postid=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "\">";
if(runtime.memberLookup((t_4),"likeCount") > 0) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"likeCount"), env.opts.autoescape);
;
}
output += "</i>\n\t\t\t<i class=\"comment fa fa-comment-o\">";
if(runtime.memberLookup((t_4),"commentCount")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"commentCount"), env.opts.autoescape);
;
}
output += "</i> \n\t\t\t<p> – ";
output += runtime.suppressValue(env.getFilter("fromNow").call(context, runtime.memberLookup((t_4),"createdTime")), env.opts.autoescape);
output += "</p>\n\t\t</div>\n\n\t</div>\n\n\t<hr>\n\n";
;
}
}
frame = frame.pop();
output += "\n\n</div>\n\n<script>\n\n$('.like').on('click', function(){\n\n\tif ($(this).hasClass('liked')) {\n\t\t// Unlike code\n\t}\n\n\telse {\n\t\tlikePost($(this).data('postid'));\n\t\t$(this).addClass('liked');\n\t\tcurrent = parseInt($(this).text());\n\t\tif (isNaN(current)) { current = 0; }\n\t\tupdated = current + 1;\n\t\t$(this).text(' ' + updated);\n\t}\n\n});\n\n</script>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

