/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","hammerjs","promise","ojs/ojjquery-hammer","ojs/ojcomponentcore"],function(a,g,b){(function(){a.Ra("oj.ojIndexer",g.oj.baseComponent,{defaultElement:"\x3cul\x3e",version:"1.2",widgetEventPrefix:"oj",options:{data:null},_ComponentCreate:function(){this._super();this.ab()},Nh:function(){var a;this._super();this.O5();this.Hz();this.$ra();a=this.Js()[0];this.xn(a);this.fCa(a)},_destroy:function(){var b,d;this._super();this.Uz();this.element.removeClass("oj-component-initnode");
b=this.Js()[0];this.hp(b);this.uFa(b);d=this.CJ();null!=d&&this.VZ&&d.off(a.Ag.O.CHANGE,this.VZ);a.D.unwrap(this.element,g(b))},_setOption:function(a,b){this._superApply(arguments);"data"==a&&this.refresh()},widget:function(){return this.Js()},refresh:function(){this._super();this.element.empty();this.O5();this.Hz();this.Mt=null},getNodeBySubId:function(a){var b,e,f,h,k;if(null==a)return this.element?this.element[0]:null;if("oj-indexer-prefix"===a.subId)for(a=a.prefix,b=this.element.children("li"),
e=0;e<b.length;e++){h=b.get(e);if(g(h).attr("data-range")==a)return h;k=g(h).attr("data-includes");if(null!=k)for(k=k.split("|"),f=0;f<k.length;f++)if(k[f]==a)return h}return null},getSubIdByNode:function(a){return null!=a&&(a=g(a).attr("data-range"),null!=a)?{subId:"oj-indexer-prefix",prefix:a}:null},Hz:function(){this.element.attr("role","slider").attr("aria-orientation","vertical").attr("aria-describedby",this.element.prop("id")+":desc").attr("aria-valuemin",0).attr("aria-valuemax",Math.max(0,
this.element.children().length-1))},Uz:function(){this.element.removeAttr("role").removeAttr("aria-orientation").removeAttr("aria-describedby").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuetext")},$ra:function(){var b,d;b=a.D.jf()?"ariaTouchInstructionText":"ariaKeyboardInstructionText";d=g(document.createElement("div"));d.prop("id",this.element.prop("id")+":desc");d.addClass("oj-helper-hidden-accessible").text(this.F(b));this.Js().append(d)},Js:function(){null==this.PF&&
(this.PF=this.Xra());return this.PF},Xra:function(){var a;this.oe?a=g(this.oe):(a=g(document.createElement("div")),this.element.parent()[0].replaceChild(a[0],this.element[0]));a.addClass("oj-indexer oj-component");a.prepend(this.element);return a},O5:function(){var a,b,e,f,g,k,l;a=this.CJ();if(null!=a){b=this.element;e=a.getIndexablePrefixes();f=a.getPrefixes();a=this.F("indexerOthers");g=this.widget().outerHeight();k=this.EI(e[0],f);b.append(k);k=k.outerHeight();g=Math.floor(g/k);this.Js().removeClass("oj-indexer-abbr");
g=Math.floor((e.length+1)/g)+1;1<g&&this.Js().addClass("oj-indexer-abbr");for(k=1+g;k<e.length;k=k+g+1)1<g?(l=this.usa(e,k-g,k-1),b.append(l)):k--,l=e[k],l=this.EI(l,f),b.append(l);e=this.EI(e[e.length-1],f);b.append(e);e=this.EI(a);e.attr("data-others","true");b.append(e)}},EI:function(a,b){var e=g(document.createElement("li"));e.attr("data-range",a).text(a);null!=b&&-1==b.indexOf(a)&&e.addClass("oj-disabled");return e},usa:function(a,b,e){var f,h="";f=g(document.createElement("li"));for(f.addClass("oj-indexer-ellipsis").attr("data-range",
a[b+Math.round((e-b)/2)]);b<e;b++)h=h+a[b]+"|";h+=a[e];f.attr("data-includes",h);return f},ab:function(){var b=this,d;this.element.uniqueId().addClass("oj-component-initnode").attr("tabIndex",0);this._on(this.element,{click:function(a){b.twa(a)},keydown:function(a){b.Ev(a)},focus:function(a){b.Wwa(a)},blur:function(a){b.lwa(a)}});d=this.CJ();null!=d&&(this.VZ=function(){b.refresh()},d.on(a.Ag.O.CHANGE,this.VZ));this._focusable({applyHighlight:!0,setupHandlers:function(a,d){b.Oy=a;b.qv=d}})},twa:function(a){0===
a.button&&(a=g(a.target),this.BW(a))},Wwa:function(){this.Js().addClass("oj-focus-ancestor");null==this.Mt?this.Zj(this.element.children("li").first()):this.Zj(this.Mt)},lwa:function(){this.Js().removeClass("oj-focus-ancestor")},Ev:function(a){var b,e=!1;switch(a.keyCode){case 38:b=this.Mt.prev();break;case 40:b=this.Mt.next();break;case 13:this.BW(this.Mt),e=!0}null!=b&&0<b.length&&(e=!0,this.Zj(b));e&&a.preventDefault()},Zj:function(a){null!=this.Mt&&this.qv(this.Mt);this.Oy(a);this.zFa(a);this.Mt=
a},CJ:function(){var a=this.option("data");if(null!=a&&(void 0==a.setPrefix||void 0==a.getIndexablePrefixes||void 0==a.getPrefixes))throw"Invalid IndexerModel";return a},BW:function(b){var d=b.attr("data-range");b.attr("data-others")&&(d=a.Ag.PREFIX_OTHERS);this.EW(d)},EW:function(a){var b=this,e;this.CJ().setPrefix(a).then(function(a){null!=a&&(e=b.Hg(a),null!=e&&b.Zj(e))})},zFa:function(b){var d,e="";d=b.attr("data-includes");null!=d?(d=d.split("|"),0<d.length&&(e=this.F("ariaInBetweenText",{first:d[0],
second:d[d.length-1]}))):(d=b.attr("data-range"),e=d===a.Ag.PREFIX_OTHERS?this.F("ariaOthersLabel"):d);b.hasClass("oj-disabled")&&(e=e+". "+this.F("ariaDisabledLabel"));this.element.attr("aria-valuetext",e);this.element.attr("aria-valuenow",b.index())},Hg:function(a){var b,e,f,h,k;b=this.element.children();for(e=0;e<b.length;e++)if(f=b.get(e),h=g(f).attr("data-range"),k=g(f).attr("data-includes"),null!=h&&h==a||null!=k&&-1<k.indexOf(a))return g(f);return null},hp:function(b){b&&this.Og&&a.D.xm(b,
this.Og)},xn:function(b){b&&(null==this.Og&&(this.Og=this.Lg.bind(this)),a.D.$k(b,this.Og))},uFa:function(a){g(a).off("panstart panmove panend")},fCa:function(a){var d=this,e,f,h,k,l,m,r,t,s,q,p,n;e={recognizers:[[b.Pan,{direction:b.DIRECTION_VERTICAL}]]};g(a).rj(e).on("panstart",function(a){f=a.gesture.target;h=d.element[0].getBoundingClientRect().left+5;k=f.getBoundingClientRect().top;d.BW(g(f));l=f;m=f.getAttribute("data-range");r=k}).on("panmove",function(a){t=r;r=k+a.gesture.deltaY;f=document.elementFromPoint(h,
r);null!=f&&(s=r-t,l==f?(q=f.getAttribute("data-includes"),null!=q&&(q=q.split("|"),p=q.indexOf(m),n=null,0<s&&p<q.length-1?n=q[p+1]:0>s&&0<p&&(n=q[p-1]),null!=n&&(m=n,d.EW(n)))):f.hasAttribute("data-range")&&(q=f.getAttribute("data-includes"),n=null,null!=q&&(0<s&&f==l.nextElementSibling?n=q[0]:0>s&&f==l.previousElementSibling&&(n=q[q.length-1])),null==n&&(n=f.getAttribute("data-range")),l=f,m=n,d.EW(m)))}).on("panend",function(){n=r=m=l=null})},Lg:function(a,b){0<a&&0<b&&this.refresh()}})})();a.Oi=
function(a){this.Da=a;this.Init()};o_("ListViewIndexerModel",a.Oi,a);a.b.sa(a.Oi,a.yj,"oj.ListViewIndexerModel");a.Oi.prototype.getIndexablePrefixes=function(){return this.Da.V.F("indexerCharacters").split("|")};a.b.g("ListViewIndexerModel.prototype.getIndexablePrefixes",{getIndexablePrefixes:a.Oi.prototype.getIndexablePrefixes});a.Oi.prototype.getPrefixes=function(){null==this.ZX&&(this.ZX=this.oua());return this.ZX};a.b.g("ListViewIndexerModel.prototype.getPrefixes",{getPrefixes:a.Oi.prototype.getPrefixes});
a.Oi.prototype.oua=function(){var a=[],b=this.Da.nD();if(null!=b)for(var e=this.getIndexablePrefixes(),f=0;f<e.length;f++){var h=e[f];b.each(function(){if(0==g(this).text().indexOf(h))return a.push(h),!1})}return a};a.Oi.prototype.setPrefix=function(b){return b==a.Ag.PREFIX_OTHERS?this.aEa():this.cEa(b)};a.b.g("ListViewIndexerModel.prototype.setPrefix",{setPrefix:a.Oi.prototype.setPrefix});a.Oi.prototype.aEa=function(){var b,d=this,e,f,h,k,l;b=this.getIndexablePrefixes();return new Promise(function(m){e=
null;f=d.Da.nD();null!=f&&f.each(function(){h=g(this).text();for(k=0;k<b.length;k++)if(l=b[k],0==h.indexOf(l))return!0;e=this;return!1});e?(d.Da.Lca(e),m(a.Ag.PREFIX_OTHERS)):m(null)})};a.Oi.prototype.cEa=function(a){var b,e,f=this,g=null,k;b=this.getIndexablePrefixes();e=b.indexOf(a);return new Promise(function(l){if(-1==e)l(null);else{for(;e<b.length;){a=b[e];k=f.Xta(a);if(null!=k){f.Da.Lca(k);g=a;break}e++}l(g)}})};a.Oi.prototype.Xta=function(a){var b,e,f;e=this.Da.nD();null!=e&&e.each(function(){f=
g(this).text();if(0==f.indexOf(a))return b=this,!1});return b};a.Oi.prototype.Tfa=function(){this.ZX=null;this.handleEvent(a.Ag.O.CHANGE,{})};a.Ag=function(){};o_("IndexerModel",a.Ag,a);a.Ag.PREFIX_OTHERS="__others__";o_("IndexerModel.PREFIX_OTHERS",a.Ag.PREFIX_OTHERS,a);a.Ag.O={CHANGE:"change"};o_("IndexerModel.EventType",a.Ag.O,a);a.Ag.prototype.setPrefix=function(){};a.b.g("IndexerModel.prototype.setPrefix",{setPrefix:a.Ag.prototype.setPrefix});a.Ag.prototype.getIndexablePrefixes=function(){};
a.b.g("IndexerModel.prototype.getIndexablePrefixes",{getIndexablePrefixes:a.Ag.prototype.getIndexablePrefixes});a.Ag.prototype.getPrefixes=function(){};a.b.g("IndexerModel.prototype.getPrefixes",{getPrefixes:a.Ag.prototype.getPrefixes});a.Components.Xa("ojIndexer","baseComponent",{properties:{data:{}},methods:{getNodeBySubId:{},getSubIdByNode:{},refresh:{},widget:{}},extension:{_hasWrapper:!0,_innerElement:"ul",_widgetName:"ojIndexer"}});a.Components.register("oj-indexer",a.Components.getMetadata("ojIndexer"))});