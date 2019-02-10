import {LitElement, html, css, customElement} from 'lit-element';

@customElement('uc-header-login')
class UcHeaderLogin extends LitElement {
    static styles = css`
        :host {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNSIgdmlld0JveD0iMCAwIDI0IDI1Ij4gICAgPHBhdGggZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiMyQTJBMkEiIHN0cm9rZS13aWR0aD0iMi41IiBkPSJNMjEuNzgyIDIwLjMwMmwtNS4yMDctMi43NS0uMjQtLjc1MWMtLjA3Mi0uMjUxLS4xODYtLjUwMy0uNDItLjU2OS0uMDc1LS4wMi0uMTctLjE1Ny0uMTgxLS4yNTFsLS4xNC0xLjQ2YS40NTQuNDU0IDAgMCAxIC4xMS0uMzE2Yy4zOTgtLjQ3Ny42MTYtMS4wMy43MDgtMS42NjMuMDQ2LS4zMTguMjExLS42MS4yOTctLjkyNGwuMzMzLTEuNzQ1Yy4wMzUtLjIzLjAyOC0uNDA2LS4yMjgtLjQ5NS0uMDctLjAyNC0uMTMyLS4xNDEtLjEzMi0uMzE3bC4wMDMtMy4yOTNjLS4wNTQtLjc5Ny0uNDc3LTEuNDEzLTEuMDc2LTEuODQyLTEuMTQ0LS44Mi0zLjE5NC0uNDQtMi41MjUtMS43NzYuMDQtLjA3OS4wMjctLjIxNS0uMjQ4LS4xMTQtMS4wMjYuMzc3LTMuNzU4IDEuMzczLTQuNDQ1IDEuODktLjYxNC40NjMtMS4wMjEgMS4wNDUtMS4wNzYgMS44NDJsLjAwNCAzLjI5M2MwIC4xNDUtLjA2Mi4yOTMtLjEzMy4zMTctLjI1Ni4wOS0uMjYzLjI2Ni0uMjI4LjQ5NWwuMzM0IDEuNzQ1Yy4wODUuMzEzLjI1LjYwNy4yOTcuOTI0LjA5Mi42MzMuMzEgMS4xODYuNzA4IDEuNjYzLjA2Ni4wNzkuMTE2LjE5MS4xMDkuMzE2bC0uMTQgMS40NmMtLjAxMi4wOTQtLjEwNi4yMy0uMTguMjUxLS4yMzUuMDY2LS4zNDkuMzE4LS40Mi41NjlsLS4yNDEuNzUtNS4yMDcgMi43NTFhLjQxLjQxIDAgMCAwLS4yMTguMzYydjEuOTI2YzAgLjIyNy4xODQuNDEuNDEuNDFoMTkuMThhLjQxLjQxIDAgMCAwIC40MS0uNDF2LTEuOTI2YS40MS40MSAwIDAgMC0uMjE4LS4zNjJ6Ii8+PC9zdmc+);
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat; }
        @media (max-width: 991px) and (min-width: 768px) {
        :host {
                width: 20px;
                height: 21px; } }
        @media (max-width: 767px) {
        :host {
                width: 1.42857em;
                height: 1.5em; } }
        
        ::slotted(*) {
            display: none; }
    `;

    render() {
        return html`
            <slot></slot>
        `;
    }
}