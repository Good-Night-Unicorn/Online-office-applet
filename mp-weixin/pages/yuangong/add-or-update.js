(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yuangong/add-or-update"],{2499:function(e,n,r){"use strict";var t;r.d(n,"b",(function(){return i})),r.d(n,"c",(function(){return a})),r.d(n,"a",(function(){return t}));var i=function(){var e=this,n=e.$createElement;e._self._c},a=[]},"4e98":function(e,n,r){"use strict";(function(e){r("fe64");t(r("66fd"));var n=t(r("904c"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])},"5f95":function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=i(r("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,n,r,t,i,a,u){try{var o=e[a](u),s=o.value}catch(c){return void r(c)}o.done?n(s):Promise.resolve(s).then(t,i)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var u=e.apply(n,r);function o(e){a(u,t,i,o,s,"next",e)}function s(e){a(u,t,i,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("80da"))}.bind(null,r)).catch(r.oe)},s={data:function(){return{cross:"",ruleForm:{zhanghao:"",mima:"",xingming:"",nianling:"",xingbie:"",shouji:"",bumen:"",zhiwei:"",ruzhiriqi:"",zhaopian:""},xingbieOptions:[],xingbieIndex:0,bumenOptions:[],bumenIndex:0,zhiweiOptions:[],zhiweiIndex:0,user:{},ro:{zhanghao:!1,mima:!1,xingming:!1,nianling:!1,xingbie:!1,shouji:!1,bumen:!1,zhiwei:!1,ruzhiriqi:!1,zhaopian:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var r=this;return u(t.default.mark((function i(){var a,u,o,s;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return r.ruleForm.ruzhiriqi=r.$utils.getCurDate(),a=e.getStorageSync("nowTable"),i.next=4,r.$api.session(a);case 4:return u=i.sent,r.user=u.data,r.ruleForm.zhanghao=r.user.zhanghao,r.ro.zhanghao=!0,r.ruleForm.mima=r.user.mima,r.ro.mima=!0,r.ruleForm.xingming=r.user.xingming,r.ro.xingming=!0,r.ruleForm.nianling=r.user.nianling,r.ro.nianling=!0,r.ruleForm.xingbie=r.user.xingbie,r.ro.xingbie=!0,r.ruleForm.shouji=r.user.shouji,r.ro.shouji=!0,r.ruleForm.bumen=r.user.bumen,r.ro.bumen=!0,r.ruleForm.zhiwei=r.user.zhiwei,r.ro.zhiwei=!0,r.xingbieOptions="男,女".split(","),i.next=25,r.$api.option("bumenxinxi","bumenmingcheng",{});case 25:return u=i.sent,r.bumenOptions=u.data,i.next=29,r.$api.option("zhiweixinxi","zhiwei",{});case 29:if(u=i.sent,r.zhiweiOptions=u.data,r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=39;break}return r.ruleForm.id=n.id,i.next=37,r.$api.info("yuangong",r.ruleForm.id);case 37:u=i.sent,r.ruleForm=u.data;case 39:if(r.cross=n.cross,!n.cross){i.next=87;break}o=e.getStorageSync("crossObj"),i.t0=t.default.keys(o);case 43:if((i.t1=i.t0()).done){i.next=87;break}if(s=i.t1.value,"zhanghao"!=s){i.next=49;break}return r.ruleForm.zhanghao=o[s],r.ro.zhanghao=!0,i.abrupt("continue",43);case 49:if("mima"!=s){i.next=53;break}return r.ruleForm.mima=o[s],r.ro.mima=!0,i.abrupt("continue",43);case 53:if("xingming"!=s){i.next=57;break}return r.ruleForm.xingming=o[s],r.ro.xingming=!0,i.abrupt("continue",43);case 57:if("nianling"!=s){i.next=61;break}return r.ruleForm.nianling=o[s],r.ro.nianling=!0,i.abrupt("continue",43);case 61:if("xingbie"!=s){i.next=65;break}return r.ruleForm.xingbie=o[s],r.ro.xingbie=!0,i.abrupt("continue",43);case 65:if("shouji"!=s){i.next=69;break}return r.ruleForm.shouji=o[s],r.ro.shouji=!0,i.abrupt("continue",43);case 69:if("bumen"!=s){i.next=73;break}return r.ruleForm.bumen=o[s],r.ro.bumen=!0,i.abrupt("continue",43);case 73:if("zhiwei"!=s){i.next=77;break}return r.ruleForm.zhiwei=o[s],r.ro.zhiwei=!0,i.abrupt("continue",43);case 77:if("ruzhiriqi"!=s){i.next=81;break}return r.ruleForm.ruzhiriqi=o[s],r.ro.ruzhiriqi=!0,i.abrupt("continue",43);case 81:if("zhaopian"!=s){i.next=85;break}return r.ruleForm.zhaopian=o[s],r.ro.zhaopian=!0,i.abrupt("continue",43);case 85:i.next=43;break;case 87:r.styleChange();case 88:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},ruzhiriqiChange:function(e){this.ruleForm.ruzhiriqi=e.target.value,this.$forceUpdate()},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},bumenChange:function(e){this.bumenIndex=e.target.value,this.ruleForm.bumen=this.bumenOptions[this.bumenIndex]},zhiweiChange:function(e){this.zhiweiIndex=e.target.value,this.ruleForm.zhiwei=this.zhiweiOptions[this.zhiweiIndex]},zhaopianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.zhaopian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(t.default.mark((function r(){var i,a,u,o,s,c,l,g,m,h;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n.ruleForm.zhanghao){r.next=3;break}return n.$utils.msg("账号不能为空"),r.abrupt("return");case 3:if(n.ruleForm.mima){r.next=6;break}return n.$utils.msg("密码不能为空"),r.abrupt("return");case 6:if(n.ruleForm.xingming){r.next=9;break}return n.$utils.msg("姓名不能为空"),r.abrupt("return");case 9:if(!n.ruleForm.shouji||n.$validate.isMobile(n.ruleForm.shouji)){r.next=12;break}return n.$utils.msg("手机应输入手机格式"),r.abrupt("return");case 12:if(!n.cross){r.next=28;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){r.next=28;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){r.next=24;break}for(l in c)l==o&&(c[l]=s);return g=e.getStorageSync("crossTable"),r.next=22,n.$api.update("".concat(g),c);case 22:r.next=28;break;case 24:i=Number(e.getStorageSync("userid")),a=c["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 28:if(!a||!i){r.next=50;break}return n.ruleForm.crossuserid=i,n.ruleForm.crossrefid=a,m={page:1,limit:10,crossuserid:i,crossrefid:a},r.next=34,n.$api.list("yuangong",m);case 34:if(h=r.sent,!(h.data.total>=u)){r.next=40;break}return n.$utils.msg(e.getStorageSync("tips")),r.abrupt("return",!1);case 40:if(!n.ruleForm.id){r.next=45;break}return r.next=43,n.$api.update("yuangong",n.ruleForm);case 43:r.next=47;break;case 45:return r.next=47,n.$api.add("yuangong",n.ruleForm);case 47:n.$utils.msgBack("提交成功");case 48:r.next=58;break;case 50:if(!n.ruleForm.id){r.next=55;break}return r.next=53,n.$api.update("yuangong",n.ruleForm);case 53:r.next=57;break;case 55:return r.next=57,n.$api.add("yuangong",n.ruleForm);case 57:n.$utils.msgBack("提交成功");case 58:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),t=n.getMonth()+1,i=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),t=t>9?t:"0"+t,i=i>9?i:"0"+i,"".concat(r,"-").concat(t,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,r("543d")["default"])},"904c":function(e,n,r){"use strict";r.r(n);var t=r("2499"),i=r("dd20");for(var a in i)"default"!==a&&function(e){r.d(n,e,(function(){return i[e]}))}(a);r("fbb1");var u,o=r("f0c5"),s=Object(o["a"])(i["default"],t["b"],t["c"],!1,null,"0c906308",null,!1,t["a"],u);n["default"]=s.exports},bd34:function(e,n,r){},dd20:function(e,n,r){"use strict";r.r(n);var t=r("5f95"),i=r.n(t);for(var a in t)"default"!==a&&function(e){r.d(n,e,(function(){return t[e]}))}(a);n["default"]=i.a},fbb1:function(e,n,r){"use strict";var t=r("bd34"),i=r.n(t);i.a}},[["4e98","common/runtime","common/vendor"]]]);