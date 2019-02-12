import { a as _decorate, b as customElement, c as property, d as css, e as html, f as LitElement } from './chunk-96426fcb.js';
import './chunk-9e5cb087.js';

let UcHeaderPanelLocation = _decorate([customElement('uc-header-panel-location')], function (_initialize, _LitElement) {
  class UcHeaderPanelLocation extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: UcHeaderPanelLocation,
    d: [{
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "region",
      value: void 0
    }, {
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return css`
        :host {
            display: flex;
            align-items: center;
        }
        
        .region-label {
            font-size: 11px;
            color: #666666;
            margin-right: 8px;
        }
        .region-name {
            cursor: pointer;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
            text-decoration: underline;
            color: #66c05d;
        }
    `;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html`
            <div class="region-label">Регион:</div>
            <div class="region-name">${this.region}</div>
        `;
      }
    }]
  };
}, LitElement);

let UcHeaderPanelNav = _decorate([customElement('uc-header-panel-nav')], function (_initialize, _LitElement) {
  class UcHeaderPanelNav extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: UcHeaderPanelNav,
    d: [{
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return css`
        :host {
            display: flex;
            align-items: center;
            margin-left: auto; 
        }
        
        ::slotted(a) {
            font-size: 10px;
            text-transform: uppercase;
            color: #333333;
            text-decoration: none;
            display: flex;
            align-items: center;
            margin-left: 10px;
            margin-right: 10px; 
        }
        
        ::slotted(a)::before {
            display: inline-block;
            content: '';
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            margin-right: 6px; 
        }
        
        ::slotted([data-icon="advice"])::before {
            width: 16px;
            height: 16px;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4gICAgPHBhdGggZmlsbD0iIzQ0NCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS41MDkgMEwuMDAzIDEuNTA2VjQuMTFIMHY3LjdoLjAwM3YyLjE1NmwxLjUwNiAxLjUwNWgzLjMxMnYuMDAxaDkuMTQ0bDEuNTA1LTEuNTA2VjExLjgxaC4wMDN2LTcuN2gtLjAwM1YxLjUwNkwxMy45NjUgMEgxLjUwOXptMS4zMjcgOC40NjFWNS4wMjNsMS4zLTEuM2gxLjg0MVYzLjcySDkuNDF2LjAwMWgxLjg0MWwxLjMgMS4zMDF2My40MzhsLTEuMyAxLjMwMWgtMS4wNDhsLjI4MiAyLjktMi43NzQtMi44OThINS45Nzd2LS4wMDJINC4xMzZsLTEuMy0xLjN6Ii8+PC9zdmc+); 
        }
        
        ::slotted([data-icon="services"])::before {
            width: 17px;
            height: 16px;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTciIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNyAxNiI+ICAgIDxkZWZzPiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMTYuMDgydjE1Ljk5NkgweiIvPiAgICA8L2RlZnM+ICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPiAgICAgICAgPC9tYXNrPiAgICAgICAgPHBhdGggZmlsbD0iIzQ0NCIgZD0iTTExLjE5NCA5LjY2NmMtLjE5LjMzMy0uMzU1LjYxMi0uMzY2LjYxNi0uMDEuMDA3LS4xNTUuMTQ4LS4zMDQuMjk3LS4xNDguMTQ4LS41NDQuNDIxLS44OC42MDYgMCAwLS43NTIuNDE0LTEuNTc2LjQxNGEzLjU4OCAzLjU4OCAwIDAgMS0zLjU4NC0zLjU5IDMuNTg5IDMuNTg5IDAgMCAxIDMuNTg0LTMuNTkyQTMuNTg4IDMuNTg4IDAgMCAxIDExLjY1IDguMDFjMCAuODU4LS40NTcgMS42NTctLjQ1NyAxLjY1N200LjE5MS0yLjg0N2gtLjAzYy0uMzgzIDAtLjc4NC0uMzAyLS44OTEtLjY3MmwtLjQ5Ni0xLjI0Yy0uMTgtLjM0LS4xMDQtLjg0LjE2Ni0xLjExNGwuMTI0LS4xMjJhLjcwMi43MDIgMCAwIDAgMC0uOTg4bC0uNzk4LS44YS43LjcgMCAwIDAtLjk4NiAwbC0uMTEuMTFjLS4yNzEuMjcxLS43NjguMzQxLTEuMTA0LjE1NWwtMS4yNjMtLjUyNkM5LjYzIDEuNTEgOS4zMyAxLjEwMyA5LjMzLjcyVi43QS43LjcgMCAwIDAgOC42MzMgMEg3LjUwNGEuNy43IDAgMCAwLS42OTguN3YuMDJjMCAuMzgzLS4zLjc4OC0uNjY4LjlsLTEuMTg5LjQ4NGMtLjMzNy4xODItLjgzNy4xMDgtMS4xMDctLjE2NGwtLjA1OC0uMDU4YS43LjcgMCAwIDAtLjk4NiAwTDIgMi42ODNhLjcwMi43MDIgMCAwIDAgMCAuOTg4bC4wNS4wNTFjLjI3Mi4yNzIuMzQuNzcuMTU1IDEuMTA1bC0uNDkgMS4xNTVjLS4xMTUuMzY2LS41MjQuNjY3LS45MDguNjY3aC0uMTFBLjcuNyAwIDAgMCAwIDcuMzQ3VjguNDhhLjcuNyAwIDAgMCAuNjk4LjY5OGguMDc5Yy4zODQgMCAuNzgzLjMwMy44OS42NzNsLjQ1MyAxLjE3MWMuMTc3LjM0Mi4xLjg0NS0uMTczIDEuMTE2bC0uMDY4LjA2OGEuNzAxLjcwMSAwIDAgMCAwIC45OWwuNzk3LjhhLjcuNyAwIDAgMCAuOTg3IDBsLjAzLS4wMjljLjI3LS4yNzIuNzY0LS4zMzcgMS4wOTctLjE0NWwxLjE4My41MjNjLjM2NS4xMjEuNjYyLjUzNS42NjIuOTJ2LjAzM2MwIC4zODUuMzE0LjcuNjk5LjdIOC40NmEuNjk0LjY5NCAwIDAgMCAuNjk4LS42ODZjMC0uMzc3LjMwMy0uNzY5LjY3My0uODdsMS4yNTMtLjQ4M2MuMzQyLS4xNzYuODQtLjEwMiAxLjEwNS4xNjVhLjY5Mi42OTIgMCAwIDAgLjk3OC0uMDFsLjc5OC0uNzk5Yy4yNy0uMjcyLjI4NC0uNzA0LjAyNy0uOTYtLjI1NS0uMjU3LS4zMS0uNzQtLjExOS0xLjA3NGwuNTQ2LTEuMjY3Yy4xMTctLjM2Ni41MjctLjY2NS45MS0uNjY1aC4wNTRhLjcwMS43MDEgMCAwIDAgLjY5OC0uN1Y3LjUyYS43LjcgMCAwIDAtLjY5OC0uNyIgbWFzaz0idXJsKCNiKSIvPiAgICA8L2c+PC9zdmc+); 
        }
        
        ::slotted([data-icon="shops"])::before {
            width: 11px;
            height: 15px;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTEiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxMSAxNSI+ICAgIDxkZWZzPiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik01LjQ4MiAwSDB2MTQuMzg4aDEwLjk2NFYweiIvPiAgICA8L2RlZnM+ICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPiAgICAgICAgPC9tYXNrPiAgICAgICAgPHBhdGggZmlsbD0iIzQ0NCIgZD0iTTUuNDgyIDcuNzE2YTIuMjM1IDIuMjM1IDAgMSAxIDAtNC40NjkgMi4yMzUgMi4yMzUgMCAwIDEgMCA0LjQ3bTUuNDgyLTIuMjM1QTUuNDgyIDUuNDgyIDAgMSAwIC42MjMgOC4wMTNILjZsLjA1OC4wNzZjLjI3Mi41MDEuNjIyLjk1MyAxLjAzIDEuMzQ1bDMuNzk1IDQuOTU0TDkuMjkgOS40MmMuMzk0LS4zODIuNzMzLS44MTkuOTk5LTEuMzA0bC4wNzgtLjEwMmgtLjAyN2E1LjQ0NCA1LjQ0NCAwIDAgMCAuNjIzLTIuNTMiIG1hc2s9InVybCgjYikiLz4gICAgPC9nPjwvc3ZnPg==); 
        }
        
        ::slotted([data-icon="lifebuoy"])::before {
            width: 25px;
            height: 15px;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDI1IDE1Ij4gICAgPGcgZmlsbD0iIzQ0NCIgZmlsbC1ydWxlPSJub256ZXJvIj4gICAgICAgIDxwYXRoIGQ9Ik0yMC45OTQuMDg3bC0yLjM4NiAxLjU1NyAzLjc3OCA2LjA4NyAyLjM4Ny0xLjU1OHpNOC42MzYgMTEuMDc3bC4yMjgtLjM0NmMuMTEzLS4xNDQuMTQyLS4zNDYuMTEzLS41MmEuNjUzLjY1MyAwIDAgMC0uMjg0LS40MzIuNTY1LjU2NSAwIDAgMC0uMzctLjExNi43MzguNzM4IDAgMCAwLS41NjcuMjg5bC0uNjU0IDEuMDFzMCAuMDI4LS4wMjguMDI4Yy0uMjU2LjM3NS0uNTQuODA4LS43OTYgMS4xODMgMCAuMDI5LS4wMjguMDI5LS4wMjguMDU4bC0uMTcuMjZhLjY5OC42OTggMCAwIDAgLjE3Ljk1MWMuMTQyLjExNi4zNC4xNDUuNTExLjExNmEuNjQzLjY0MyAwIDAgMCAuNDI2LS4yODlsLjExNC0uMTczYy4wMjktLjAyOS4wMjktLjA4Ni4wNTctLjExNWwxLjI3OC0xLjkwNHpNMTcuNzg0IDMuMDg3YTEuMDY0IDEuMDY0IDAgMCAxLS41OTYuMDU3TDE1LjM0IDIuNzRjLS45NjYtLjIwMi0xLjkzMi0uMjMtMi44OTgtLjAyOGwtMS43MzMuMzE3YTEuODM4IDEuODM4IDAgMCAwLTEuMTA4LjY5Mkw4LjEyNSA1LjY1NEEuMzgzLjM4MyAwIDAgMCA4LjA0IDZhLjY5LjY5IDAgMCAwIC4xNy4zMTdjLjE0Mi4xMTYuMzQxLjExNi40ODMuMDNsMy4xMjUtMS42NDVjLjMxMy0uMTczLjcxLS4xNDQgMS4wMjMuMDU4bDYuNzA0IDQuNDEzYy4wODYuMDU4LjE0Mi4xMTUuMi4xNzNsMS44NDYtMS43Ni0yLjk4My00Ljg0Ni0uODI0LjM0N3pNMTEuMDUxIDEzLjAxYS41NC41NCAwIDAgMC0uMzQtLjExNmgtLjA4NmEuNTI1LjUyNSAwIDAgMC0uMzQuMjAybC0uNzExIDEuMDM5YS41Ny41NyAwIDAgMC0uMDI5LjM3NWMuMDU3LjE3My4xNy4yODguMzEzLjM0Ni4yMjcuMDg2LjUxMS4wMjkuNjUzLS4yMDJsLjYyNS0uOTIzYy4yLS4yMDIuMTQyLS41NDgtLjA4NS0uNzIxek05LjgzIDEyLjc1bC4zOTctLjU3N2EuNjkuNjkgMCAwIDAtLjE0Mi0uOTIzLjY5MS42OTEgMCAwIDAtLjQyNi0uMTQ0aC0uMDg1YS43MzUuNzM1IDAgMCAwLS40NTUuMjZsLTEuMzYzIDIuMDE5Yy0uMDU3LjE0NC0uMDg2LjI4OC0uMDI5LjQzMmEuNjYuNjYgMCAwIDAgLjM0MS40MzMuNjYyLjY2MiAwIDAgMCAuODgtLjIwMmwuMi0uMjg4Yy4wMjgtLjAzLjAyOC0uMDU4LjA1Ny0uMDg3bC42MjUtLjkyM2MtLjAyOS4wMjktLjAyOS4wMjkgMCAweiIvPiAgICAgICAgPHBhdGggZD0iTTE5LjI2MSA5LjYzNUwxMi41NTcgNS4yMmEuNTA3LjUwNyAwIDAgMC0uNDU1LS4wMjlMOC45NzcgNi44MzdjLS4zNC4xNzMtLjc2Ny4xNDQtMS4wOC0uMDg3YS45NjcuOTY3IDAgMCAxLS4zOTctLjY5MiAxLjA4IDEuMDggMCAwIDEgLjE5OS0uNzhsMS4yNS0xLjY3Mi0xLjMzNS0uMjAyYTEuMzcxIDEuMzcxIDAgMCAxLS4zMTMtLjExNmwtLjkwOS0uNDktMi44NyA0LjYxNUw1LjA1OCA5LjQ5Yy4zNy0uNDkgMS4wOC0uNjM0IDEuNTktLjI4OC4yMjguMTQ0LjM5OC4zNDYuNDg0LjU3N2wuMTEzLS4xNzNBMS4yNDUgMS4yNDUgMCAwIDEgOC45NSA5LjI2Yy4yODQuMTczLjQ4My40NjEuNTQuODA3YTEuMjYgMS4yNiAwIDAgMSAwIC40NjJjLjMxMi0uMDI5LjY1My4wNTguODguMjYuNDI2LjM3NC41NjkuOTguMzQxIDEuNS4yMjcuMDI4LjQ1NS4xMTUuNjI1LjI2LjQ1NS4zNzQuNTQgMS4wMzguMiAxLjUyOGwtLjI1Ny4zNzUgMS44NzUuMjg4YTIuMDExIDIuMDExIDAgMCAwIDEuNTYzLS40MzJsLTEuOTMyLTEuMDM5Yy0uMTQyLS4wNTctLjE5OS0uMjYtLjExNC0uMzc1LjA4Ni0uMTQ0LjI1Ni0uMjAyLjM3LS4xMTVsMi4xODcgMS4xMjVhLjgzMy44MzMgMCAwIDAgMS4wOC0uMjg5Yy4xMTMtLjE0NC4xNDItLjI4OC4xMTMtLjQzMi0uMDI4LS4xNDUtLjExMy0uMjg5LS4yNTUtLjM0NmwtLjUxMi0uMzE4LTIuMDE3LTEuMTgyYy0uMTQyLS4wODctLjE5OC0uMjYtLjExMy0uNDA0LjA4NS0uMTQ1LjI1NS0uMjAyLjM5Ny0uMTE2bDIuODQxIDEuNTU4YS44OTYuODk2IDAgMCAwIDEuMTk0LS4zMTcuNjAyLjYwMiAwIDAgMCAuMDg1LS40MzMuNTY3LjU2NyAwIDAgMC0uMjU2LS4zNzVsLS4xOTktLjExNS0zLjA0LTEuODQ3Yy0uMTQyLS4wODYtLjE3LS4yNi0uMDg1LS40MDMuMDg1LS4xNDUuMjU2LS4xNzMuMzk4LS4wODdsMi44OTggMS43Ni4xNDIuMDg2LjU2OC4zNDZjLjM3LjIzMS44NTIuMTE2IDEuMDgtLjI2YS43NjUuNzY1IDAgMCAwIC4xMTMtLjYwNWMtLjA4NS0uMTczLS4xOTktLjM3NS0uMzk4LS40OXoiLz4gICAgICAgIDxwYXRoIGQ9Ik02LjcwNSAxMC4xNTRhLjYwNC42MDQgMCAwIDAtLjMxMy0uNDMzYy0uMTE0LS4wNTgtLjIyNy0uMTE1LS4zNy0uMTE1YS42NDYuNjQ2IDAgMCAwLS41MzkuMjg4bC0uODI0IDEuMTgzYy0uMTk5LjI4OC0uMTQyLjcyMS4xNy45MjNsLjAyOS4wMjlhLjU4Ny41ODcgMCAwIDAgLjQ4My4xMTUuODA3LjgwNyAwIDAgMCAuMzk4LS4yM2wuODUyLTEuMjdjLjExNC0uMTQ0LjE0Mi0uMzE3LjExNC0uNDl6TS4xOTIgNi4zNTNMMy45NjguMzdsMi4zOSAxLjUwOS0zLjc3NSA1Ljk4MnoiLz4gICAgPC9nPjwvc3ZnPg==); 
        }
        
        ::slotted([data-icon="faq"])::before {
            width: 16px;
            height: 16px;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4gICAgPHBhdGggZmlsbD0iIzQ0NCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOCAwYzQuNDU3IDAgOCAzLjU0MyA4IDhzLTMuNTQzIDgtOCA4YTcuOTUgNy45NSAwIDAgMS04LThjMC00LjQ1NyAzLjU0My04IDgtOHptLjU3MSA4LjkxNGMuMjI5LS4yMjguNDU4LS41NzEuNjg2LS42ODUuNTcyLS40NTggMS4wMjktLjkxNSAxLjM3Mi0xLjM3MmExLjkzIDEuOTMgMCAwIDAgLjM0Mi0xLjE0M2MwLS42ODUtLjM0Mi0xLjM3MS0uOTE0LTEuODI4LS41NzEtLjQ1Ny0xLjQ4Ni0uOC0yLjI4Ni0uNjg2LS44IDAtMS42LjIyOS0yLjI4NS44LS41NzIuMzQzLS45MTUgMS4wMjktLjkxNSAxLjgyOWwxLjYuMjI4Yy4xMTUtLjQ1Ny4yMjktLjguNTcyLTEuMTQzYTEuOTMgMS45MyAwIDAgMSAxLjE0My0uMzQzYy4zNDMgMCAuOC4xMTUgMS4wMjguMzQzLjIyOS4xMTUuNDU3LjQ1Ny40NTcuOCAwIC4yMjktLjExNC40NTctLjIyOC42ODYtLjM0My4yMjktLjY4Ni40NTctLjkxNC44LS40NTguMzQzLS44LjY4Ni0xLjAyOSAxLjE0My0uMjI5LjM0My0uMzQzLjY4Ni0uMjI5IDEuMTQzdi40NTdoMS42YTEuNTg2IDEuNTg2IDAgMCAxIDAtMS4wMjl6bS4xMTUgMy4zMTV2LTEuNzE1SDYuOTd2MS43MTVoMS43MTV6Ii8+PC9zdmc+); 
        }
    `;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html`
            <slot></slot>
        `;
      }
    }]
  };
}, LitElement);

let UcHeaderPanelUserProfile = _decorate([customElement('uc-header-panel-user-profile')], function (_initialize, _LitElement) {
  class UcHeaderPanelUserProfile extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: UcHeaderPanelUserProfile,
    d: [{
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return css`
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
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html`
            <div class="login">вход</div>
            <a href="/lk/register/" class="registration">регистрация</a>
        `;
      }
    }]
  };
}, LitElement);

let UcHeaderPanel = _decorate([customElement('uc-header-panel')], function (_initialize, _LitElement) {
  class UcHeaderPanel extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: UcHeaderPanel,
    d: [{
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return css`
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
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html`
            <uc-container>
                <div class="header-panel-wrapper">
                    <slot />
                </div>
            </uc-container>
        `;
      }
    }]
  };
}, LitElement);
//# sourceMappingURL=chunk-33bc0b15.js.map
