System.register(["angular2/core","./contacts/contact-list.component","./about/about.component","./contacts/newcontact.component","angular2/router","./http-test.component"],function(t){var e,n,o,c,a,p,r,i=this&&this.__decorate||function(t,e,n,o){var c,a=arguments.length,p=3>a?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(c=t[r])&&(p=(3>a?c(p):a>3?c(e,n,p):c(e,n))||p);return a>3&&p&&Object.defineProperty(e,n,p),p},u=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0};return{setters:[function(t){e=t},function(t){n=t},function(t){o=t},function(t){c=t},function(t){a=t},function(t){p=t}],execute:function(){r=function(){function t(){}return t=i([e.Component({selector:"app"}),e.View({templateUrl:"../dev/app.component.html",directives:[a.ROUTER_DIRECTIVES,p.HTTPTestComponent]}),a.RouteConfig([{path:"/",component:n.ContactListComponent,name:"Contacts",useAsDefault:!0},{path:"/new",component:c.NewContactComponent,name:"Newcontact"},{path:"/about/:contactid",component:o.AboutComponent,name:"About"}]),u("design:paramtypes",[])],t)}(),t("AppComponent",r)}}});