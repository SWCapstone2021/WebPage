(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{473:function(e,t,n){"use strict";n.r(t);var r={name:"Redirect",layout:"SampleLayout",mounted:function(){var e=this;if(this.$store.state.user&&this.$router.push("/"),this.$fire.auth.isSignInWithEmailLink(window.location.href)){var t=window.localStorage.getItem("emailForSignIn");t||(t=window.prompt("Please provide your email for confirmation")),this.$fire.auth.signInWithEmailLink(t,window.location.href).then((function(t){window.localStorage.removeItem("emailForSignIn"),null===t.user.displayName?e.$router.push("/auth/newuser"):e.$router.push("/")})).catch((function(e){console.log(e.code,e.message)}))}}},o=n(58),l=n(77),c=n.n(l),d=n(101),h=n(52),m=n(152),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{elevation:"0"}},[n("v-card-title",[e._v(" Checking Authentication Information... ")]),e._v(" "),n("v-card-text",[n("v-progress-linear",{attrs:{indeterminate:"",color:"primary darken-2"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCard:d.a,VCardText:h.c,VCardTitle:h.d,VProgressLinear:m.a})}}]);