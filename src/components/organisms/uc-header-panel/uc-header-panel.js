import {LitElement, html, css, customElement} from 'lit-element';
import '../../molecules/uc-header-panel-location/uc-header-panel-location';
import '../../molecules/uc-header-panel-nav/uc-header-panel-nav';
import '../../molecules/uc-header-panel-user-profile/uc-header-panel-user-profile';
import '../uc-container/uc-container';

@customElement('uc-header-panel')
class UcHeaderPanel extends LitElement {
    static styles = css`
        :host {
            display: block;
            height: 30px;
            background-color: #f7f7f7;
        }
        
        .header-panel-wrapper {
            display: flex;
            height: 100%;
            width: 100%;
            align-items: center;
        }
        
        uc-container {
            height: 100%;
        }
    `;

    render() {
        return html`
            <uc-container>
                <div class="header-panel-wrapper">
                    <slot />
                </div>
            </uc-container>
        `
    }
}



