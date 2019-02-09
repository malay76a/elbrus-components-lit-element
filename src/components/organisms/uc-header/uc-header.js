import {LitElement, html, css, customElement} from 'lit-element';
import '../uc-container/uc-container';
import '../../molecules/uc-header-logo/uc-header-logo';

@customElement('uc-header')
class UcHeader extends LitElement {
    static styles = css`
        :host {
            background-color: #ffffff; 
        }
        
        .header-wrapper {
            display: flex;
            height: 100%;
            width: 100%;
            align-items: center;
            justify-content: space-between; 
        }
        
        uc-container {
            height: 100%; 
        }
        
        @media (max-width: 991px) and (min-width: 768px) {
            :host {
                height: 57px;
                box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
            }
            
            ::slotted(uc-header-logo) {
                width: 58px;
                height: 36px; 
            } 
        }
        
        @media (max-width: 767px) {
            :host {
                height: 3.5em;
                box-shadow: 0 0.14286em 0.42857em 0 rgba(0, 0, 0, 0.1);
                display: flex;
                flex-direction: row;
            }
        
            ::slotted(uc-header-logo) {
                width: 3.5em;
                height: 2.14286em; 
            } 
        }
        
        @media (min-width: 1200px) {
            ::slotted(uc-header-search) {
                width: 580px;
                height: 40px; 
            }
        
            ::slotted(uc-header-logo) {
                width: 80px;
                height: 49px;
            }
        }
        
        @media (max-width: 1199px) and (min-width: 992px) {
            ::slotted(uc-header-search) {
                width: 420px;
                height: 40px; 
            }
        
            ::slotted(uc-header-logo) {
                width: 60px;
                height: 37px;
            }
        }
                
        @media (min-width: 992px) {
            :host {
                height: 80px;
            }
            ::slotted(uc-header-login) {
                display: none; 
            }
            ::slotted(uc-header-shop-map) {
                display: none;
            }
        }
        
        @media (max-width: 991px) {
            ::slotted(uc-header-shop-map) {
                order: 3;
            }
            
            ::slotted(uc-header-login) {
                order: 7; 
            }
        
            ::slotted(uc-header-basket) {
                order: 6;
            }
        
            ::slotted(uc-header-shop-list) {
                order: 5;
            }
        
            ::slotted(uc-header-search) {
                order: 2;
            }
        
            ::slotted(uc-header-catalog) {
                order: 1;
            }
        
            ::slotted(uc-header-logo) {
                order: 4;
            }
        }
    `;

    render() {
        return html`
            <uc-container>
                <div class="header-wrapper">
                    <slot />
                </div>
            </uc-container>
        `;
    }
}



