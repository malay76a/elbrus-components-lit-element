System.register(["./chunk-65e75638.js","./chunk-d72fc7c5.js"],function(n,e){"use strict";var t,r,o,i,c,d,u,a,l,s,p,f;return{setters:[function(n){t=n.k,r=n.e,o=n.c,i=n.f,c=n.g,d=n.l,u=n.m},function(n){a=n.a,l=n.b,s=n.c,p=n.d,f=n.e}],execute:function(){function n(){var e=u(["<uc-compare-panel></uc-compare-panel>"]);return n=function(){return e},e}function e(){var n=u(["\n            <slot></slot>\n            ","\n        "]);return e=function(){return n},n}function m(){var n=u(["\n        :host {\n            display: flex;\n            flex-direction: column;\n            position: relative;\n        }\n        \n        ::slotted(uc-nckd) {\n            order: -4;\n        }\n        \n        ::slotted(uc-header-panel) {\n            order: -3;\n        }\n        \n        ::slotted(uc-header) {\n            order: -2;\n            position: sticky;\n            top: 0;\n            z-index: 10;\n        }\n        \n        ::slotted(main) {\n            order: -1;\n        }\n        \n        ::slotted(footer) {\n            order: 1;\n        }\n        \n        @media (max-width: 991px) {\n            ::slotted(uc-header-panel) {\n                display: none;\n            }\n            ::slotted(uc-nckd) {\n                display: none;\n            }\n        }\n        \n        @media (min-width: 768px) {\n            ::slotted(footer) {\n                border-top: 5px solid #66c05d;\n                margin-top: 40px;\n            }\n        }\n        \n        @media (max-width: 767px) {\n            ::slotted(footer) {\n                border-top: calc((5px/14) * 1em) solid #66c05d;\n                margin-top: 20px;\n            }\n        }\n    "]);return m=function(){return n},n}t([a("uc-app")],function(t,u){return{F:function(n){function e(){var n,r;o(this,e);for(var u=arguments.length,a=new Array(u),l=0;l<u;l++)a[l]=arguments[l];return r=i(this,(n=c(e)).call.apply(n,[this].concat(a))),t(d(d(r))),r}return r(e,u),e}(),d:[{kind:"field",decorators:[l({type:Boolean})],key:"comparePanel",value:function(){return!1}},{kind:"field",static:!0,key:"styles",value:function(){return s(m())}},{kind:"method",key:"render",value:function(){return p(e(),this.comparePanel?p(n()):"")}}]}},f)}}});
//# sourceMappingURL=chunk-ad97807e.js.map
