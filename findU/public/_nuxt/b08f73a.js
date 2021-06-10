(window.webpackJsonp=window.webpackJsonp||[]).push([[20,4,5,6,8,9,10,13,14,15,16,17],{448:function(t,e,n){"use strict";n.r(e);n(18);var r={name:"BaseSection",props:{space:{type:[Number,String],default:96}},computed:{style:function(){var t=this.$vuetify.breakpoint.mdAndUp?this.space:this.space/2;return{padding:"".concat(t,"px 0")}}}},l=n(43),o=n(50),c=n.n(o),d=n(39),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-sheet",t._g(t._b({style:t.style,attrs:{tile:""}},"v-sheet",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VSheet:d.a})},449:function(t,e,n){"use strict";n.r(e);n(18);var r={name:"BaseHeading",inject:{theme:{default:function(){return{isDark:!1}}},heading:{default:function(){return{align:"left"}}}},provide:function(){return{heading:{align:this.align}}},props:{align:{type:String,default:function(){return this.heading.align}},dense:{type:Boolean,default:function(){return this.isDense}},size:{type:String,default:"text-h3"},space:{type:[Number,String],default:4},mobileSize:{type:String,default:"text-h4"},mobileBreakpoint:{type:[Number,String],default:768},tag:{type:String,default:"h1"},title:String,weight:{type:String,default:"black"}},computed:{classes:function(){var t=[this.fontSize,"font-weight-".concat(this.weight),"mb-".concat(this.space),"text-".concat(this.align),this.theme.isDark&&"white--text"];return t},fontSize:function(){return this.$vuetify.breakpoint.width>=this.mobileBreakpoint?this.size:this.mobileSize}}},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,t._g(t._b({tag:"component",class:t.classes},"component",t.$attrs,!1),t.$listeners),[t.title?[t._v("\n    "+t._s(t.title)+"\n  ")]:t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},451:function(t,e,n){var content=n(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("95e5f834",content,!0,{sourceMap:!1})},452:function(t,e,n){var content=n(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("3f1f9bde",content,!0,{sourceMap:!1})},453:function(t,e,n){"use strict";n.r(e);n(18);var r={name:"BaseIcon",props:{size:{type:[Number,String],default:56}}},l=n(43),o=n(50),c=n.n(o),d=n(127),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-icon",t._g(t._b({attrs:{size:t.size}},"v-icon",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:d.a})},454:function(t,e,n){"use strict";n.r(e);n(18);var r={name:"BaseBody",props:{html:String,maxWidth:{type:[Number,String],default:void 0},space:{type:[Number,String],default:10},tag:{type:String,default:"p"},text:String},computed:{classes:function(){return["grey--text","text--center","mb-".concat(this.space)]},styles:function(){return{maxWidth:"".concat(this.maxWidth,"px")}}}},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",staticClass:"base-body text-body-1",class:t.classes,style:t.styles},[t.text?n("div",{domProps:{textContent:t._s(t.text)}}):t.html?n("div",{domProps:{innerHTML:t._s(t.html)}}):t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},455:function(t,e,n){"use strict";n.r(e);n(18),n(28);var r={name:"BaseAvatar",props:{color:String,dark:Boolean,icon:String,outlined:Boolean,size:{type:[Number,String],default:56}},data:function(){return{multiply:6}},computed:{classes:function(){return[this.outlined&&"base-avatar--outlined"]},isDark:function(){return this.theme.isDark||this.dark},outlineSize:function(){return Number(this.size)+this.size/this.multiply},styles:function(){var t=this.size/(2*this.multiply);return{margin:"-".concat(t,"px 0 0 -").concat(t,"px")}}}},l=(n(456),n(43)),o=n(50),c=n.n(o),d=n(194),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"base-avatar d-inline-flex",class:t.classes},[t.outlined?n("v-avatar",{staticClass:"base-avatar__outline",staticStyle:{opacity:"0.4"},style:t.styles,attrs:{color:t.color||(t.$vuetify.theme.isDark?"grey darken-3":"grey lighten-4"),size:t.outlineSize}}):t._e(),t._v(" "),n("v-avatar",{staticClass:"base-avatar__avatar",attrs:{color:t.color||(t.$vuetify.theme.isDark?"grey darken-4":"white"),size:t.size}},[t.icon?n("base-icon",{attrs:{dark:t.dark,size:t.size/2}},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{BaseIcon:n(453).default}),c()(component,{VAvatar:d.a})},456:function(t,e,n){"use strict";n(451)},457:function(t,e,n){var r=n(15)(!1);r.push([t.i,".base-avatar{border-radius:50%;position:relative;overflow:visible}.base-avatar__outline{position:absolute!important;left:0;top:0}.base-avatar.base-avatar--outlined .base-avatar__avatar{border-width:thin;border-style:solid}.theme--light .base-avatar--outlined .base-avatar__avatar{border-color:rgba(0,0,0,.12)!important}.theme--dark .base-avatar--outlined .base-avatar__avatar{border-color:hsla(0,0%,100%,.12)!important}",""]),t.exports=r},458:function(t,e,n){"use strict";n(452)},459:function(t,e,n){var r=n(15)(!1);r.push([t.i,".base-divider .v-divider{border-width:3px 0 0!important}.base-divider.base-divider--dense .v-divider{border-width:2px 0 0!important}",""]),t.exports=r},460:function(t,e,n){"use strict";n.r(e);n(18);var r={name:"BaseDivider",props:{color:String,dense:Boolean,space:{type:[Number,String],default:6}},computed:{classes:function(){return[this.color,this.margin,"mb-".concat(this.space),this.dense&&"base-divider--dense"]},margin:function(){switch(this.align){case"left":return"mr-auto";case"right":return"ml-auto";default:return"mx-auto"}}}},l=(n(458),n(43)),o=n(50),c=n.n(o),d=n(436),f=n(193),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-responsive",{staticClass:"base-divider",class:t.classes,attrs:{"max-width":"28"}},[n("v-divider")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VDivider:d.a,VResponsive:f.a})},461:function(t,e,n){"use strict";n.r(e);n(18);var r={name:"BaseSubtitle",extends:n(449).default,props:{size:{type:String,default:"text-body-2"},mobileSize:{type:String,default:"text-body-1"},space:{type:[String,Number],default:0},tag:{type:String,default:"div"},weight:{type:[Number,String],default:"regular"}},computed:{classes:function(){return["grey--text text--lighten-2"]}}},l=n(43),component=Object(l.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports},462:function(t,e,n){"use strict";n.r(e);n(18);var r={name:"SectionHeading",components:{BaseSubheading:n(463).default},props:{align:{type:String,default:"center"},color:{type:String,default:"primary"},icon:String,outlined:Boolean,space:{type:[Number,String],default:12},subtitle:String,text:String,title:String},computed:{classes:function(){return["text-".concat(this.align),"mb-".concat(this.space)]}}},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classes},[t.icon?n("base-avatar",{staticClass:"mb-4",attrs:{icon:t.icon,outlined:t.outlined,color:"primary",dark:""}}):t._e(),t._v(" "),t.subtitle?n("base-subtitle",{attrs:{title:t.subtitle,space:"1",tag:"h2"}}):t._e(),t._v(" "),t.title?n("base-subheading",{staticClass:"text-uppercase",attrs:{align:t.align,title:t.title,space:"2"}}):t._e(),t._v(" "),n("base-divider",{attrs:{color:t.color}}),t._v(" "),t.$slots.default||t.text?n("base-body",{staticClass:"mx-auto",attrs:{"max-width":"700"}},[t.$slots.default?t._t("default"):[t._v("\n      "+t._s(t.text)+"\n    ")]],2):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseAvatar:n(455).default,BaseSubtitle:n(461).default,BaseDivider:n(460).default,BaseBody:n(454).default})},463:function(t,e,n){"use strict";n.r(e);var r={name:"BaseSubheading",extends:n(449).default,props:{size:{type:String,default:"text-h5"},sizeMobile:{type:String,default:"text-h6"},weight:{type:String,default:"bold"}}},l=n(43),component=Object(l.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports},464:function(t,e,n){"use strict";n.r(e);var r={name:"BaseTitle",extends:n(449).default,props:{size:{type:String,default:"text-h6"},mobileSize:{type:String,default:"text-subtitle-1"},tag:{type:String,default:"h3"},weight:{type:String,default:"bold"}}},l=n(43),component=Object(l.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports},488:function(t,e,n){"use strict";n.r(e);n(18);var r={name:"BaseAvatarCard",props:{align:{type:String,default:"left"},color:String,dark:Boolean,horizontal:Boolean,icon:String,outlined:{type:Boolean,default:!0},space:{type:[Number,String],default:8},size:{type:[Number,String],default:72},text:String,title:String},computed:{classes:function(){var t=["mb-".concat(this.space)];return this.horizontal&&(t.push("d-flex"),this.$slots.default||this.text||t.push("align-center")),t}}},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-2",class:t.classes},[t.icon?n("base-avatar",{staticClass:"mb-3 align-self-start",attrs:{color:t.color,dark:t.dark,icon:t.icon,outlined:t.outlined,size:t.size}}):t._e(),t._v(" "),n("div",{class:t.horizontal&&t.title&&"ml-6"},[n("base-title",{staticClass:"text-uppercase",attrs:{title:t.title,space:"3"}}),t._v(" "),t.text||t.$slots.default?n("base-body",{staticClass:"mx-auto",attrs:{space:t.horizontal?0:void 0,text:t.text,"max-width":"700"}},[t._t("default")],2):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseAvatar:n(455).default,BaseTitle:n(464).default,BaseBody:n(454).default})},521:function(t,e,n){"use strict";n.r(e);var r={name:"SectionThemeFeatures",data:function(){return{features:[{title:"Generate Accurate SubText",icon:"mdi-fountain-pen-tip",text:"Our STT model' is trained on AI HUB Data. This model can make so high quality subtext that user can have good experience."},{title:"Calculate Keyword Based Reliability",icon:"mdi-calculator-variant-outline",text:"To give reliability per video during searching youtube, we calculate how many keywords are appear on subtext"},{color:"secondary",dark:!0,title:"Summarize Video",icon:"mdi-lightbulb-on-outline",text:"You don't need to watch too long video all day, just read the core concept of video made by our summarization model"},{title:"Search Video Like Reading Text",icon:"mdi-clipboard-text-search-outline",text:"There are many occurrence where you only interested in specific information of video. In this case, you can search video like you do in text document"},{title:"Personalize Feature",icon:"mdi-account",text:"Plenty of Features are ready to use. Just pick your favorite options"},{title:"Visualize Result",icon:"mdi-play-box-outline",text:"Isn't it too difficult to get used to new tool? Our tools give straightforward Searching Result and is designed with easy-to-use UI"}]}}},l=n(43),o=n(50),c=n.n(o),d=n(570),f=n(447),h=n(571),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-section",{attrs:{id:"theme-features"}},[n("base-section-heading",{attrs:{title:"FindU Features"}},[t._v("\n    FindU give user a powerful functionalities saving users time and giving\n    valuable informations. These below features show key features of our\n    product.\n  ")]),t._v(" "),n("v-container",[n("v-row",t._l(t.features,(function(e,i){return n("v-col",{key:i,attrs:{cols:"12",md:"6"}},[n("base-avatar-card",t._b({attrs:{align:"left",horizontal:""}},"base-avatar-card",e,!1),[t._v("\n          "+t._s(e.text)+"\n        ")])],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{BaseSectionHeading:n(462).default,BaseAvatarCard:n(488).default,BaseSection:n(448).default}),c()(component,{VCol:d.a,VContainer:f.a,VRow:h.a})}}]);