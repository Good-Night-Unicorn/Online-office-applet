(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/gongzixinxi/add-or-update"],{"4f50":function(e,n,r){"use strict";(function(e){r("fe64");a(r("66fd"));var n=a(r("96d8"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])},"52cc":function(e,n,r){},"5a96":function(e,n,r){"use strict";var a=r("52cc"),t=r.n(a);t.a},"96d8":function(e,n,r){"use strict";r.r(n);var a=r("ac7c"),t=r("d066");for(var i in t)"default"!==i&&function(e){r.d(n,e,(function(){return t[e]}))}(i);r("5a96");var u,o=r("f0c5"),s=Object(o["a"])(t["default"],a["b"],a["c"],!1,null,"6eafd853",null,!1,a["a"],u);n["default"]=s.exports},"9b7e":function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(r("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function i(e,n,r,a,t,i,u){try{var o=e[i](u),s=o.value}catch(c){return void r(c)}o.done?n(s):Promise.resolve(s).then(a,t)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(a,t){var u=e.apply(n,r);function o(e){i(u,a,t,o,s,"next",e)}function s(e){i(u,a,t,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("80da"))}.bind(null,r)).catch(r.oe)},s={data:function(){return{cross:"",ruleForm:{yuefen:"",fengmian:"",zhanghao:"",xingming:"",bumen:"",jibengongzi:"",jiabangongzi:"",jixiaojiangjin:"",qitabuzhu:"",koukuanjine:"",shifagongzi:"",koukuanyuanyin:"",dengjiriqi:"",userid:""},zhanghaoOptions:[],zhanghaoIndex:0,user:{},ro:{yuefen:!1,fengmian:!1,zhanghao:!1,xingming:!1,bumen:!1,jibengongzi:!1,jiabangongzi:!1,jixiaojiangjin:!1,qitabuzhu:!1,koukuanjine:!1,shifagongzi:!1,koukuanyuanyin:!1,dengjiriqi:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url},shifagongzi:{get:function(){return 0+parseFloat(this.ruleForm.jibengongzi)+parseFloat(this.ruleForm.jiabangongzi)+parseFloat(this.ruleForm.jixiaojiangjin)+parseFloat(this.ruleForm.qitabuzhu)-this.ruleForm.koukuanjine||""}}},onLoad:function(n){var r=this;return u(a.default.mark((function t(){var i,u,o,s;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r.ruleForm.dengjiriqi=r.$utils.getCurDate(),i=e.getStorageSync("nowTable"),t.next=4,r.$api.session(i);case 4:return u=t.sent,r.user=u.data,t.next=8,r.$api.option("yuangong","zhanghao",{});case 8:if(u=t.sent,r.zhanghaoOptions=u.data,r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=18;break}return r.ruleForm.id=n.id,t.next=16,r.$api.info("gongzixinxi",r.ruleForm.id);case 16:u=t.sent,r.ruleForm=u.data;case 18:if(r.cross=n.cross,!n.cross){t.next=82;break}o=e.getStorageSync("crossObj"),t.t0=a.default.keys(o);case 22:if((t.t1=t.t0()).done){t.next=82;break}if(s=t.t1.value,"yuefen"!=s){t.next=28;break}return r.ruleForm.yuefen=o[s],r.ro.yuefen=!0,t.abrupt("continue",22);case 28:if("fengmian"!=s){t.next=32;break}return r.ruleForm.fengmian=o[s],r.ro.fengmian=!0,t.abrupt("continue",22);case 32:if("zhanghao"!=s){t.next=36;break}return r.ruleForm.zhanghao=o[s],r.ro.zhanghao=!0,t.abrupt("continue",22);case 36:if("xingming"!=s){t.next=40;break}return r.ruleForm.xingming=o[s],r.ro.xingming=!0,t.abrupt("continue",22);case 40:if("bumen"!=s){t.next=44;break}return r.ruleForm.bumen=o[s],r.ro.bumen=!0,t.abrupt("continue",22);case 44:if("jibengongzi"!=s){t.next=48;break}return r.ruleForm.jibengongzi=o[s],r.ro.jibengongzi=!0,t.abrupt("continue",22);case 48:if("jiabangongzi"!=s){t.next=52;break}return r.ruleForm.jiabangongzi=o[s],r.ro.jiabangongzi=!0,t.abrupt("continue",22);case 52:if("jixiaojiangjin"!=s){t.next=56;break}return r.ruleForm.jixiaojiangjin=o[s],r.ro.jixiaojiangjin=!0,t.abrupt("continue",22);case 56:if("qitabuzhu"!=s){t.next=60;break}return r.ruleForm.qitabuzhu=o[s],r.ro.qitabuzhu=!0,t.abrupt("continue",22);case 60:if("koukuanjine"!=s){t.next=64;break}return r.ruleForm.koukuanjine=o[s],r.ro.koukuanjine=!0,t.abrupt("continue",22);case 64:if("shifagongzi"!=s){t.next=68;break}return r.ruleForm.shifagongzi=o[s],r.ro.shifagongzi=!0,t.abrupt("continue",22);case 68:if("koukuanyuanyin"!=s){t.next=72;break}return r.ruleForm.koukuanyuanyin=o[s],r.ro.koukuanyuanyin=!0,t.abrupt("continue",22);case 72:if("dengjiriqi"!=s){t.next=76;break}return r.ruleForm.dengjiriqi=o[s],r.ro.dengjiriqi=!0,t.abrupt("continue",22);case 76:if("userid"!=s){t.next=80;break}return r.ruleForm.userid=o[s],r.ro.userid=!0,t.abrupt("continue",22);case 80:t.next=22;break;case 82:r.styleChange();case 83:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},zhanghaoChange:function(e){var n=this;return u(a.default.mark((function r(){var t;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.zhanghaoIndex=e.target.value,n.ruleForm.zhanghao=n.zhanghaoOptions[n.zhanghaoIndex],r.next=4,n.$api.follow("yuangong","zhanghao",{columnValue:n.ruleForm.zhanghao});case 4:t=r.sent,t.data.xingming&&(n.ruleForm.xingming=t.data.xingming),t.data.bumen&&(n.ruleForm.bumen=t.data.bumen);case 7:case"end":return r.stop()}}),r)})))()},dengjiriqiChange:function(e){this.ruleForm.dengjiriqi=e.target.value,this.$forceUpdate()},fengmianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.fengmian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(a.default.mark((function r(){var t,i,u,o,s,c,g,l,f,m;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n.ruleForm.shifagongzi=n.shifagongzi,n.ruleForm.yuefen){r.next=4;break}return n.$utils.msg("月份不能为空"),r.abrupt("return");case 4:if(!n.ruleForm.jibengongzi||n.$validate.isIntNumer(n.ruleForm.jibengongzi)){r.next=7;break}return n.$utils.msg("基本工资应输入整数"),r.abrupt("return");case 7:if(!n.ruleForm.jiabangongzi||n.$validate.isIntNumer(n.ruleForm.jiabangongzi)){r.next=10;break}return n.$utils.msg("加班工资应输入整数"),r.abrupt("return");case 10:if(!n.ruleForm.jixiaojiangjin||n.$validate.isIntNumer(n.ruleForm.jixiaojiangjin)){r.next=13;break}return n.$utils.msg("绩效奖金应输入整数"),r.abrupt("return");case 13:if(!n.ruleForm.qitabuzhu||n.$validate.isIntNumer(n.ruleForm.qitabuzhu)){r.next=16;break}return n.$utils.msg("其他补助应输入整数"),r.abrupt("return");case 16:if(!n.ruleForm.koukuanjine||n.$validate.isIntNumer(n.ruleForm.koukuanjine)){r.next=19;break}return n.$utils.msg("扣款金额应输入整数"),r.abrupt("return");case 19:if(!n.ruleForm.shifagongzi||n.$validate.isIntNumer(n.ruleForm.shifagongzi)){r.next=22;break}return n.$utils.msg("实发工资应输入整数"),r.abrupt("return");case 22:if(!n.cross){r.next=38;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){r.next=38;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){r.next=34;break}for(g in c)g==o&&(c[g]=s);return l=e.getStorageSync("crossTable"),r.next=32,n.$api.update("".concat(l),c);case 32:r.next=38;break;case 34:t=Number(e.getStorageSync("userid")),i=c["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 38:if(!i||!t){r.next=60;break}return n.ruleForm.crossuserid=t,n.ruleForm.crossrefid=i,f={page:1,limit:10,crossuserid:t,crossrefid:i},r.next=44,n.$api.list("gongzixinxi",f);case 44:if(m=r.sent,!(m.data.total>=u)){r.next=50;break}return n.$utils.msg(e.getStorageSync("tips")),r.abrupt("return",!1);case 50:if(!n.ruleForm.id){r.next=55;break}return r.next=53,n.$api.update("gongzixinxi",n.ruleForm);case 53:r.next=57;break;case 55:return r.next=57,n.$api.add("gongzixinxi",n.ruleForm);case 57:n.$utils.msgBack("提交成功");case 58:r.next=68;break;case 60:if(!n.ruleForm.id){r.next=65;break}return r.next=63,n.$api.update("gongzixinxi",n.ruleForm);case 63:r.next=67;break;case 65:return r.next=67,n.$api.add("gongzixinxi",n.ruleForm);case 67:n.$utils.msgBack("提交成功");case 68:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),a=n.getMonth()+1,t=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),a=a>9?a:"0"+a,t=t>9?t:"0"+t,"".concat(r,"-").concat(a,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,r("543d")["default"])},ac7c:function(e,n,r){"use strict";var a;r.d(n,"b",(function(){return t})),r.d(n,"c",(function(){return i})),r.d(n,"a",(function(){return a}));var t=function(){var e=this,n=e.$createElement;e._self._c},i=[]},d066:function(e,n,r){"use strict";r.r(n);var a=r("9b7e"),t=r.n(a);for(var i in a)"default"!==i&&function(e){r.d(n,e,(function(){return a[e]}))}(i);n["default"]=t.a}},[["4f50","common/runtime","common/vendor"]]]);