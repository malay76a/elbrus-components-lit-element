import{a as e,b as t,c as i,d as s,f as a,e as d}from"./chunk-96426fcb.js";e([t("uc-header-list-popup")],function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({type:String})],key:"dataType",value:()=>""},{kind:"field",decorators:[i({type:Array})],key:"dataList",value:()=>[]},{kind:"field",static:!0,key:"styles",value:()=>s`
        :host {
            display: flex;
            flex-direction: column;
            padding: 10px 20px;
            border: 1px solid #eee;
            background-color: #fff;
            width: 400px;
        }
        
        .header {
            font-weight: 700;
            font-size: 18px;
            text-align: center;
        }
        
        .text {
            margin-top: 12px;
            font-size: 14px;
            text-align: left;
            font-style: italic;
        }
    `},{kind:"method",key:"render",value:function(){let e;if(this.dataList.length<1)switch(this.dataType){case"shop-list":e=d`
                        <div class="header">Список покупок пуст</div>
                        <div class="text">Просто добавьте сюда товары, распечатайте список и пользуйтесь им в магазине.</div>
                        <div class="text">Список покупок не является резервом заказа в Магазине!</div>
                    `;break;case"buy-list":e=d`
                        <div class="header">Корзина пуста</div>
                        <div class="text">Просто добавьте сюда товары</div>
                    `}return e}}]}},a);
//# sourceMappingURL=chunk-e5954f7a.js.map
