(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{veZf:function(e,t,r){"use strict";r.r(t),r.d(t,"FrameworkModule",(function(){return w}));var i=r("2kYt"),n=r("sEIs"),o=r("cTHi"),c=r("Qtik"),a=r("EM62"),s=r("73Ib"),b=r("Fe25");function l(e,t){if(1&e){const e=a.Ob();a.Nb(0,"div"),a.Nb(1,"picker-card",3),a.Vb("selected",(function(t){return a.gc(e),a.Xb().goto(t)})),a.Mb(),a.Mb()}if(2&e){const e=t.$implicit;a.Ab(1),a.cc("item",e)}}const d=[{path:"",component:(()=>{class e{constructor(e,t,r){this.landService=e,this.router=t,this.boilerFacade=r,this.title="Framework"}ngOnInit(){this.boilerFacade.updateBoiler({framework:null}),this.boilerFacade.buildPath(),this.framework$=this.landService.getLand()}goto(e){this.boilerFacade.updateBoiler({framework:e}),this.boilerFacade.buildPath()}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(o.b),a.Kb(n.a),a.Kb(c.a))},e.\u0275cmp=a.Eb({type:e,selectors:[["picker-framework"]],decls:4,vars:4,consts:[[3,"title"],[1,"framework"],[4,"ngFor","ngForOf"],[3,"item","selected"]],template:function(e,t){1&e&&(a.Lb(0,"picker-toolbar",0),a.Nb(1,"div",1),a.jc(2,l,2,1,"div",2),a.Yb(3,"async"),a.Mb()),2&e&&(a.cc("title",t.title),a.Ab(2),a.cc("ngForOf",a.Zb(3,2,t.framework$)))},directives:[s.a,i.j,b.a],pipes:[i.b],styles:[".framework[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:center;padding:0 15px;margin-top:50px}"]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(t){return new(t||e)},imports:[[n.b.forChild(d)],n.b]}),e})();var f=r("9w1C"),u=r("PCNd");let w=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(t){return new(t||e)},imports:[[i.c,p,f.a,u.a]]}),e})()}}]);