import{a as t,b as e,d as i,e as d,f as s}from"./chunk-96426fcb.js";t([e("uc-plp-list")],function(t,e){return{F:class extends e{constructor(){super(),t(this),this.typed="list",window.addEventListener("plpChangeType",this.handleChangeTypeList)}},d:[{kind:"get",static:!0,key:"properties",value:function(){return{typed:{type:String,reflect:!0}}}},{kind:"field",static:!0,key:"styles",value:()=>i`
        :host {
            display: -ms-grid;
            display: grid;
            width: 100%; }
        @media (max-width: 767px) {
        :host {
                grid-row-gap: 0.71429em;
                -ms-grid-columns: 1fr;
                grid-template-columns: 1fr; } }
        
        @media (min-width: 768px) {
        :host([typed='list']),
        :host(:not([typed='card'])) {
                grid-row-gap: 10px;
                -ms-grid-columns: 1fr;
                grid-template-columns: 1fr; } }
        
        @media (min-width: 768px) {
        :host([typed='card']) {
                -ms-grid-columns: (1fr)[3];
                grid-template-columns: repeat(3, 1fr);
                grid-row-gap: 20px;
                grid-column-gap: 20px; } }
    `},{kind:"method",key:"handleChangeTypeList",value:function(t){this.typed=t.detail}},{kind:"method",key:"render",value:function(){return d`
            <slot></slot>
        `}}]}},s);
//# sourceMappingURL=chunk-200d1866.js.map
