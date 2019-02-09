import {LitElement, html, css, customElement} from 'lit-element';

@customElement('uc-header-panel-user-profile')
class UcHeaderPanelUserProfile extends LitElement {
    static styles = css`
        :host {
            padding-left: 16px;
            padding-right: 16px;
            background-color: #66c05d;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
        
        .login,
        .registration {
            font-size: 10px;
            font-weight: bold;
            text-transform: uppercase;
            color: #ffffff;
            text-decoration: none;
            cursor: pointer;
        }
        
        .login + .registration::before {
            content: '';
            height: 100%;
            width: 0;
            border-left: 1px dashed #ffffff;
            margin-left: 5px;
            margin-right: 5px;
        }
        .registration:hover {
            text-decoration: underline;
        }
    `;

    render() {
        return html`
            <div class="login">вход</div>
            <a href="/lk/register/" class="registration">регистрация</a>
        `;
    }
}