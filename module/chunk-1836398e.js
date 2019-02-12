import{a as e,b as o,c as t,d,e as a,f as r}from"./chunk-96426fcb.js";e([o("uc-app")],function(e,o){return{F:class extends o{constructor(...o){super(...o),e(this)}},d:[{kind:"field",decorators:[t({type:Boolean})],key:"comparePanel",value:()=>!1},{kind:"field",static:!0,key:"styles",value:()=>d`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }
        
        ::slotted(uc-nckd) {
            order: -4;
        }
        
        ::slotted(uc-header-panel) {
            order: -3;
        }
        
        ::slotted(uc-header) {
            order: -2;
            position: sticky;
            top: 0;
            z-index: 10;
        }
        
        ::slotted(main) {
            order: -1;
        }
        
        ::slotted(footer) {
            order: 1;
        }
        
        @media (max-width: 991px) {
            ::slotted(uc-header-panel) {
                display: none;
            }
            ::slotted(uc-nckd) {
                display: none;
            }
        }
        
        @media (min-width: 768px) {
            ::slotted(footer) {
                border-top: 5px solid #66c05d;
                margin-top: 40px;
            }
        }
        
        @media (max-width: 767px) {
            ::slotted(footer) {
                border-top: calc((5px/14) * 1em) solid #66c05d;
                margin-top: 20px;
            }
        }
    `},{kind:"method",key:"render",value:function(){return a`
            <slot></slot>
            ${this.comparePanel?a`<uc-compare-panel></uc-compare-panel>`:""}
        `}}]}},r);
//# sourceMappingURL=chunk-1836398e.js.map
