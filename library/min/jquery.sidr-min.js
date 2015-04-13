!function($){var e=!1,t=!1,n={isUrl:function(e){var t=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return t.test(e)?!0:!1},loadContent:function(e,t){e.html(t)},addPrefix:function(e){var t=e.attr("id"),n=e.attr("class");"string"==typeof t&&""!==t&&e.attr("id",t.replace(/([A-Za-z0-9_.\-]+)/g,"sidr-id-$1")),"string"==typeof n&&""!==n&&"sidr-inner"!==n&&e.attr("class",n.replace(/([A-Za-z0-9_.\-]+)/g,"sidr-class-$1")),e.removeAttr("style")},execute:function(n,o,s){"function"==typeof o?(s=o,o="sidr"):o||(o="sidr");var r=$("#"+o),a=$(r.data("body")),d=$("html"),l=r.outerWidth(!0),c=r.data("speed"),u=r.data("side"),f=r.data("displace"),p=r.data("onOpen"),m=r.data("onClose"),h,g,v,y="sidr"===o?"sidr-open":"sidr-open "+o+"-open";if("open"===n||"toggle"===n&&!r.is(":visible")){if(r.is(":visible")||e)return;if(t!==!1)return void i.close(t,function(){i.open(o)});e=!0,"left"===u?(h={left:l+"px"},g={left:"0px"}):(h={right:l+"px"},g={right:"0px"}),a.is("body")&&(v=d.scrollTop(),d.css("overflow-x","hidden").scrollTop(v)),f?a.addClass("sidr-animating").css({width:a.width(),position:"absolute"}).animate(h,c,function(){$(this).addClass(y)}):setTimeout(function(){$(this).addClass(y)},c),r.css("display","block").animate(g,c,function(){e=!1,t=o,"function"==typeof s&&s(o),a.removeClass("sidr-animating")}),p()}else{if(!r.is(":visible")||e)return;e=!0,"left"===u?(h={left:0},g={left:"-"+l+"px"}):(h={right:0},g={right:"-"+l+"px"}),a.is("body")&&(v=d.scrollTop(),d.removeAttr("style").scrollTop(v)),a.addClass("sidr-animating").animate(h,c).removeClass(y),r.animate(g,c,function(){r.removeAttr("style").hide(),a.removeAttr("style"),$("html").removeAttr("style"),e=!1,t=!1,"function"==typeof s&&s(o),a.removeClass("sidr-animating")}),m()}}},i={open:function(e,t){n.execute("open",e,t)},close:function(e,t){n.execute("close",e,t)},toggle:function(e,t){n.execute("toggle",e,t)},toogle:function(e,t){n.execute("toggle",e,t)}};$.sidr=function(e){return i[e]?i[e].apply(this,Array.prototype.slice.call(arguments,1)):"function"!=typeof e&&"string"!=typeof e&&e?void $.error("Method "+e+" does not exist on jQuery.sidr"):i.toggle.apply(this,arguments)},$.fn.sidr=function(e){var t=$.extend({name:"sidr",speed:200,side:"left",source:null,renaming:!0,body:"body",displace:!0,onOpen:function(){},onClose:function(){}},e),o=t.name,s=$("#"+o);if(0===s.length&&(s=$("<div />").attr("id",o).appendTo($("body"))),s.addClass("sidr").addClass(t.side).data({speed:t.speed,side:t.side,body:t.body,displace:t.displace,onOpen:t.onOpen,onClose:t.onClose}),"function"==typeof t.source){var r=t.source(o);n.loadContent(s,r)}else if("string"==typeof t.source&&n.isUrl(t.source))$.get(t.source,function(e){n.loadContent(s,e)});else if("string"==typeof t.source){var a="",d=t.source.split(",");if($.each(d,function(e,t){a+='<div class="sidr-inner">'+$(t).html()+"</div>"}),t.renaming){var l=$("<div />").html(a);l.find("*").each(function(e,t){var i=$(t);n.addPrefix(i)}),a=l.html()}n.loadContent(s,a)}else null!==t.source&&$.error("Invalid Sidr Source");return this.each(function(){var e=$(this),t=e.data("sidr");t||(e.data("sidr",o),"ontouchstart"in document.documentElement?(e.bind("touchstart",function(e){var t=e.originalEvent.touches[0];this.touched=e.timeStamp}),e.bind("touchend",function(e){var t=Math.abs(e.timeStamp-this.touched);200>t&&(e.preventDefault(),i.toggle(o))})):e.click(function(e){e.preventDefault(),i.toggle(o)}))})}}(jQuery),jQuery(function($){$(document).ready(function(){$("#simple-menu").sidr({onOpen:function(){$("#sidr ul .menu-item-has-children").removeClass("menu-item-has-children dropdown open")}})})});