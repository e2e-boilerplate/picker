(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"73Ib":function(t,e,c){"use strict";c.d(e,"a",(function(){return o}));var n=c("Qtik"),i=c("EM62"),a=c("A7yd"),b=c("2kYt");function s(t,e){if(1&t&&(i.Nb(0,"span",3),i.kc(1),i.Yb(2,"async"),i.Mb()),2&t){const t=i.Xb();i.Ab(1),i.lc(i.Zb(2,1,t.header$))}}let o=(()=>{class t{constructor(t){this.boilerFacade=t}ngOnInit(){this.boilerFacade.buildHeader(),this.header$=this.boilerFacade.header$}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(n.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["picker-toolbar"]],inputs:{title:"title"},decls:8,vars:2,consts:[["id","title"],[1,"spacer"],["id","picks",4,"ngIf"],["id","picks"]],template:function(t,e){1&t&&(i.Nb(0,"mat-toolbar"),i.Nb(1,"mat-toolbar-row"),i.Nb(2,"span",0),i.kc(3),i.Mb(),i.Lb(4,"span",1),i.Mb(),i.Nb(5,"mat-toolbar-row"),i.jc(6,s,3,3,"span",2),i.Lb(7,"span",1),i.Mb(),i.Mb()),2&t&&(i.Ab(3),i.mc("Choose your ",e.title,""),i.Ab(3),i.cc("ngIf",e.header$))},directives:[a.a,a.c,b.k],pipes:[b.b],styles:[".mat-toolbar[_ngcontent-%COMP%]{background-color:transparent}#picks[_ngcontent-%COMP%], #title[_ngcontent-%COMP%]{margin:0 auto}"]}),t})()},Fe25:function(t,e,c){"use strict";c.d(e,"a",(function(){return p}));var n=c("EM62"),i=c("Qtik"),a=c("Meci"),b=c("2kYt"),s=c("PBFl");function o(t,e){if(1&t&&(n.Nb(0,"mat-card-title"),n.kc(1),n.Yb(2,"async"),n.Mb()),2&t){const t=n.Xb();n.Ab(1),n.nc("",t.item.title," ",n.Zb(2,2,t.version$),"")}}function r(t,e){if(1&t&&(n.Nb(0,"mat-card-subtitle"),n.kc(1),n.Mb()),2&t){const t=n.Xb();n.Ab(1),n.lc(t.item.subtitle)}}function d(t,e){if(1&t&&(n.Nb(0,"p"),n.kc(1),n.Mb()),2&t){const t=n.Xb();n.Ab(1),n.lc(t.item.summary)}}function l(t,e){if(1&t&&(n.Nb(0,"p"),n.kc(1),n.Mb()),2&t){const t=n.Xb();n.Ab(1),n.lc(t.item.description)}}function m(t,e){if(1&t&&(n.Nb(0,"p"),n.Nb(1,"a",3),n.kc(2),n.Mb(),n.kc(3),n.Mb()),2&t){const t=n.Xb();n.Ab(1),n.dc("href",t.item.link,n.hc),n.Ab(1),n.lc(t.item.domain),n.Ab(1),n.mc(" | ",t.item.maintained," ")}}const u=function(t){return{disabled:t}};let p=(()=>{class t{constructor(t){this.boilerFacade=t,this.selected=new n.n}ngOnInit(){this.version$=this.boilerFacade.getModuleVersion(this.item.id)}selectedItem(t){this.selected.emit(t)}}return t.\u0275fac=function(e){return new(e||t)(n.Kb(i.a))},t.\u0275cmp=n.Eb({type:t,selectors:[["picker-card"]],inputs:{item:"item"},outputs:{selected:"selected"},decls:11,vars:9,consts:[[3,"ngClass"],[4,"ngIf"],["mat-button","",3,"disabled","click"],["target","_blank",3,"href"]],template:function(t,e){1&t&&(n.Nb(0,"mat-card",0),n.Nb(1,"mat-card-header"),n.jc(2,o,3,4,"mat-card-title",1),n.jc(3,r,2,1,"mat-card-subtitle",1),n.Mb(),n.Nb(4,"mat-card-content"),n.jc(5,d,2,1,"p",1),n.jc(6,l,2,1,"p",1),n.jc(7,m,4,3,"p",1),n.Mb(),n.Nb(8,"mat-card-actions"),n.Nb(9,"button",2),n.Vb("click",(function(){return e.selectedItem(e.item.id)})),n.kc(10,"SELECT"),n.Mb(),n.Mb(),n.Mb()),2&t&&(n.cc("ngClass",n.ec(7,u,e.item.disable)),n.Ab(2),n.cc("ngIf",e.item.title),n.Ab(1),n.cc("ngIf",e.item.subtitle),n.Ab(2),n.cc("ngIf",e.item.summary),n.Ab(1),n.cc("ngIf",e.item.description),n.Ab(1),n.cc("ngIf",e.item.link&&e.item.domain&&e.item.maintained),n.Ab(2),n.cc("disabled",e.item.disable))},directives:[a.a,b.i,a.d,b.k,a.c,a.b,s.a,a.g,a.f],pipes:[b.b],styles:[".mat-card[_ngcontent-%COMP%]{max-width:400px;padding:16px;margin:10px}.mat-button[_ngcontent-%COMP%]:hover{color:#dc143c}.mat-card-subtitle[_ngcontent-%COMP%], .mat-card-title[_ngcontent-%COMP%]{margin-left:-17px}.disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}"]}),t})()}}]);