"use strict";(self.webpackChunke_learning=self.webpackChunke_learning||[]).push([[468],{4468:(O,c,n)=>{n.r(c),n.d(c,{CategoriesModule:()=>g});var r=n(6895),C=n(4539),p=n(7946),u=n(7579),d=n(2722),e=n(8256),m=n(501),h=n(8417),f=n(8257),v=n(1997);function x(o,t){1&o&&e._UZ(0,"app-loading")}function y(o,t){1&o&&e._UZ(0,"app-category",7),2&o&&e.Q6J("category",t.$implicit)}function b(o,t){if(1&o&&(e.TgZ(0,"div",5),e.YNc(1,y,1,1,"app-category",6),e.qZA()),2&o){const a=e.oxw();e.xp6(1),e.Q6J("ngForOf",a.categories)}}class s{constructor(t){this.categoriesService=t,this.isLoading=!1,this.categories=[],this.countSub$=new u.x,this.categoriesSub$=new u.x}ngOnInit(){this._getCategoriesCount(),this._getCategories(0,8)}pageChanged(t){this._getCategories(t.page,t.rows)}_getCategoriesCount(){this.categoriesService.getCategoriesCount().pipe((0,d.R)(this.countSub$)).subscribe(t=>{this.count=t.categoriesCount})}_getCategories(t,a){this.isLoading=!0,this.categoriesService.getCategories(t,a).pipe((0,d.R)(this.categoriesSub$)).subscribe(l=>{this.categories=l.categories,this.isLoading=!1})}ngOnDestroy(){this.categoriesSub$.next(),this.countSub$.next(),this.countSub$.unsubscribe(),this.categoriesSub$.unsubscribe()}}s.\u0275fac=function(t){return new(t||s)(e.Y36(m.G))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-categories"]],decls:5,vars:4,consts:[[1,"categories-page"],[4,"ngIf"],[1,"container"],["class","categories",4,"ngIf"],[3,"rows","totalRecords","onPageChange"],[1,"categories"],[3,"category",4,"ngFor","ngForOf"],[3,"category"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.YNc(1,x,1,0,"app-loading",1),e.TgZ(2,"div",2),e.YNc(3,b,2,1,"div",3),e.TgZ(4,"p-paginator",4),e.NdJ("onPageChange",function(M){return a.pageChanged(M)}),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("ngIf",a.isLoading),e.xp6(2),e.Q6J("ngIf",!a.isLoading),e.xp6(1),e.Q6J("rows",8)("totalRecords",a.count))},dependencies:[r.sg,r.O5,h.N,f.m,v.D],styles:[".categories-page[_ngcontent-%COMP%]{min-height:115vh;background-image:url(assets/categories-background.svg);background-repeat:no-repeat;background-position:center;background-size:cover}.categories-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding:180px 20px 150px;display:flex;flex-direction:column;gap:50px}.categories-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:30px}  p-paginator .p-paginator{background-color:#000}  p-paginator .p-paginator .p-link:focus{box-shadow:0 0 0 .2rem #5009d4}"]});const S=[{path:"",component:s}];class i{}i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.Bz.forChild(S),p.Bz]});class g{}g.\u0275fac=function(t){return new(t||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[r.ez,C.p,i]})}}]);