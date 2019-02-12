System.register(['./chunk-65e75638.js', './chunk-d72fc7c5.js', './chunk-4836153e.js'], function (exports, module) {
    'use strict';
    var _decorate, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _assertThisInitialized, _taggedTemplateLiteral, customElement, css, unsafeCSS, html, LitElement, property, isXs;
    return {
        setters: [function (module) {
            _decorate = module.k;
            _inherits = module.e;
            _classCallCheck = module.c;
            _possibleConstructorReturn = module.f;
            _getPrototypeOf = module.g;
            _assertThisInitialized = module.l;
            _taggedTemplateLiteral = module.m;
        }, function (module) {
            customElement = module.a;
            css = module.c;
            unsafeCSS = module.f;
            html = module.d;
            LitElement = module.e;
            property = module.b;
        }, function (module) {
            isXs = module.b;
        }],
        execute: function () {

            var css$1 = ":host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n@media (min-width: 1200px) {\n    :host {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n        flex-direction: column; } }\n@media (max-width: 1199px) and (min-width: 992px) {\n    :host {\n        height: 102px;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-flow: column wrap;\n        flex-flow: column wrap;\n        position: relative; } }\n@media (max-width: 991px) and (min-width: 768px) {\n    :host {\n        height: 102px;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-flow: column wrap;\n        flex-flow: column wrap;\n        position: relative; } }\n@media (max-width: 767px) {\n    :host {\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n        flex-flow: row wrap;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center; } }\n\n@media (min-width: 1200px) {\n    ::slotted(uc-footer-social-links) {\n        margin-bottom: 15px; } }\n\n@media (max-width: 1199px) and (min-width: 992px) {\n    ::slotted(uc-footer-social-links) {\n        margin-right: 40px;\n        margin-bottom: 15px;\n        width: 390px; } }\n\n@media (max-width: 991px) and (min-width: 768px) {\n    ::slotted(uc-footer-social-links) {\n        margin-right: 10px;\n        margin-bottom: 15px;\n        width: 300px; } }\n\n@media (max-width: 767px) {\n    ::slotted(uc-footer-social-links) {\n        -webkit-box-flex: 1;\n        -ms-flex: 1 1 55%;\n        flex: 1 1 55%;\n        margin-right: 0.71429em; } }\n\n@media (min-width: 1200px) {\n    ::slotted(uc-footer-subscribe) {\n        margin-bottom: 10px; } }\n\n@media (max-width: 1199px) and (min-width: 992px) {\n    ::slotted(uc-footer-subscribe) {\n        margin-right: 40px;\n        width: 390px; } }\n\n@media (max-width: 991px) and (min-width: 768px) {\n    ::slotted(uc-footer-subscribe) {\n        margin-right: 10px;\n        width: 300px; } }\n\n@media (max-width: 767px) {\n    ::slotted(uc-footer-subscribe) {\n        -webkit-box-flex: 1;\n        -ms-flex: 1 1 30%;\n        flex: 1 1 30%; } }\n\n@media (min-width: 1200px) {\n    ::slotted(uc-footer-apps) {\n        margin-bottom: 15px; } }\n\n@media (max-width: 1199px) and (min-width: 992px) {\n    ::slotted(uc-footer-apps) {\n        margin-right: 40px;\n        height: 100%;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        width: 182px;\n        -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n        justify-content: space-between; } }\n\n@media (max-width: 991px) and (min-width: 768px) {\n    ::slotted(uc-footer-apps) {\n        margin-right: 10px;\n        height: 100%;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        width: 182px;\n        -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n        justify-content: space-between; } }\n\n@media (max-width: 767px) {\n    ::slotted(uc-footer-apps) {\n        margin-top: 10px;\n        -webkit-box-flex: 1;\n        -ms-flex: 1 1 100%;\n        flex: 1 1 100%; } }\n\n@media (min-width: 1200px) {\n    ::slotted(uc-payment-systems) {\n        margin-bottom: 10px; } }\n\n@media (max-width: 1199px) and (min-width: 992px) {\n    ::slotted(uc-payment-systems) {\n        -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n        order: 3; } }\n\n@media (max-width: 991px) and (min-width: 768px) {\n    ::slotted(uc-payment-systems) {\n        -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n        order: 3; } }\n\n@media (max-width: 767px) {\n    ::slotted(uc-payment-systems) {\n        -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n        order: 3;\n        margin-top: 10px;\n        -webkit-box-flex: 1;\n        -ms-flex: 1 1 100%;\n        flex: 1 1 100%; } }\n\n@media (min-width: 1200px) {\n    ::slotted(uc-adeo-link) {\n        margin-bottom: 10px; } }\n\n@media (max-width: 1199px) and (min-width: 992px) {\n    ::slotted(uc-adeo-link) {\n        -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n        order: 2;\n        margin-bottom: 10px; } }\n\n@media (max-width: 991px) and (min-width: 768px) {\n    ::slotted(uc-adeo-link) {\n        -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n        order: 2;\n        margin-bottom: 10px; } }\n\n@media (max-width: 767px) {\n    ::slotted(uc-adeo-link) {\n        -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n        order: 2;\n        margin-top: 10px;\n        -webkit-box-flex: 1;\n        -ms-flex: 1 1 100%;\n        flex: 1 1 100%; } }\n\n@media (max-width: 1199px) and (min-width: 992px) {\n    ::slotted(uc-parent-link) {\n        position: absolute;\n        bottom: -10px;\n        right: 0;\n        width: 345px; } }\n\n@media (max-width: 991px) and (min-width: 768px) {\n    ::slotted(uc-parent-link) {\n        position: absolute;\n        bottom: -10px;\n        right: 0;\n        width: 455px; } }\n\n@media (max-width: 767px) {\n    ::slotted(uc-parent-link) {\n        -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n        order: 4;\n        margin-top: 10px;\n        -webkit-box-flex: 1;\n        -ms-flex: 1 1 100%;\n        flex: 1 1 100%; } }\n";

            var css$2 = ":host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n\n::slotted(a) {\n    display: block;\n    border-radius: 3px;\n    position: relative;\n    overflow: hidden;\n    color: transparent;\n    background-position: center;\n    background-repeat: no-repeat;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n@media (min-width: 768px) {\n    ::slotted(a) {\n        width: 36px;\n        height: 36px; } }\n@media (max-width: 767px) {\n    ::slotted(a) {\n        width: 1.85714em;\n        height: 1.85714em; } }\n\n::slotted([title=\"Facebook\"]) {\n    background-color: #415b96;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDExIDIwIj4gICAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuNDg5Ljk5MXYyLjk0Nkg4LjczN2MtLjY0IDAtMS4wNzIuMTM0LTEuMjk1LjQwMi0uMjIzLjI2OC0uMzM1LjY3LS4zMzUgMS4yMDZ2Mi4xMDloMy4yN2wtLjQzNSAzLjMwNEg3LjEwN3Y4LjQ3SDMuNjkydi04LjQ3SC44NDZWNy42NTRoMi44NDZWNS4yMjFjMC0xLjM4NC4zODctMi40NTcgMS4xNi0zLjIyQzUuNjI3IDEuMjM4IDYuNjU4Ljg1NyA3Ljk0NS44NTdjMS4wOTQgMCAxLjk0Mi4wNDUgMi41NDUuMTM0eiIvPjwvc3ZnPg==); }\n@media (min-width: 768px) {\n    ::slotted([title=\"Facebook\"]) {\n        background-size: 10px 20px; } }\n@media (max-width: 767px) {\n    ::slotted([title=\"Facebook\"]) {\n        background-size: 0.57143em 1em; } }\n\n::slotted([title=\"Vkontakte\"]) {\n    background-color: #5577a0;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDIxIDExIj4gICAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjAuMTEzLjc5NWMuMTU0LjQyOC0uMzQ4IDEuNDEzLTEuNTA3IDIuOTUzLS4xNi4yMTQtLjM3OC40OTktLjY1My44NTRhMjMuNzUgMjMuNzUgMCAwIDAtLjU1Mi43MjNjLS4xLjE0LS4yMDMuMzA2LS4zMDcuNDk3LS4xMDMuMTktLjE0NC4zMzEtLjEyLjQyMi4wMjMuMDkuMDY3LjIwNi4xMy4zNDYuMDY0LjE0MS4xNzMuMjg1LjMyNy40MzIuMTU0LjE0OC4zNDUuMzI1LjU3Mi41MzMuMDI3LjAxMy4wNDQuMDI2LjA1LjA0Ljk0NS44NzcgMS41ODQgMS42MTcgMS45MiAyLjIyLjAyLjAzMy4wNDEuMDc1LjA2NC4xMjUuMDI0LjA1LjA0Ny4xNC4wNy4yNjZhLjc3NS43NzUgMCAwIDEtLjAwNC4zNDJjLS4wMjcuMS0uMTEuMTkzLS4yNTEuMjc2LS4xNDEuMDg0LS4zMzkuMTI2LS41OTMuMTI2bC0yLjU3Mi4wNGMtLjE2LjAzMy0uMzQ4LjAxNy0uNTYyLS4wNWEyLjQ0NSAyLjQ0NSAwIDAgMS0uNTIyLS4yMjFsLS4yMDEtLjEyYy0uMjAxLS4xNDEtLjQzNS0uMzU2LS43MDMtLjY0NGExNy45MDcgMTcuOTA3IDAgMCAxLS42ODgtLjc3OCAzLjMyOCAzLjMyOCAwIDAgMC0uNjEzLS41ODNjLS4yMTgtLjE1Ny0uNDA3LS4yMDktLjU2OC0uMTU1YS42NTcuNjU3IDAgMCAwLS4wOC4wMzUgMS4yNzcgMS4yNzcgMCAwIDAtLjM4Ny40NDIgMi4wNiAyLjA2IDAgMCAwLS4xNy41MjJjLS4wNS4yMzEtLjA3Mi40OS0uMDY2Ljc3OSAwIC4xLS4wMTEuMTkyLS4wMzUuMjc2YS42NzguNjc4IDAgMCAxLS4wNzUuMTg2bC0uMDQuMDVjLS4xMjEuMTI3LS4yOTguMi0uNTMzLjIySDEwLjI5YTQuNTY1IDQuNTY1IDAgMCAxLTEuNDY2LS4xNjUgNS42MDYgNS42MDYgMCAwIDEtMS4zMjEtLjUzMiAxMi4wNDYgMTIuMDQ2IDAgMCAxLTEuMDM1LS42NjMgNS45NjkgNS45NjkgMCAwIDEtLjcwOC0uNTc4bC0uMjUxLS4yNGE2LjYxNCA2LjYxNCAwIDAgMS0uMjc2LS4zMDIgMjIuMjAxIDIyLjIwMSAwIDAgMS0uNzE5LS45MTRBMjUuMTExIDI1LjExMSAwIDAgMSAzLjQ1IDYuMDM4YTMwLjc1OCAzMC43NTggMCAwIDEtMS4yMy0yLjEyQTMzLjE1NyAzMy4xNTcgMCAwIDEgLjkwNiAxLjE4N2EuODAxLjgwMSAwIDAgMS0uMDYtLjI3YzAtLjA3NC4wMS0uMTI4LjAzLS4xNjJsLjA0LS4wNmMuMS0uMTI3LjI5Mi0uMTkuNTczLS4xOWwyLjc1Mi0uMDJjLjA4LjAxMy4xNTguMDM0LjIzMS4wNjUuMDc0LjAzLjEyNy4wNTguMTYuMDg1bC4wNTEuMDNjLjEwNy4wNzQuMTg4LjE4LjI0MS4zMjEuMTM0LjMzNS4yODguNjgyLjQ2MiAxLjA0LjE3NC4zNTguMzEyLjYzMS40MTIuODE5bC4xNi4yOTFjLjE5NS40MDIuMzgzLjc1LjU2MyAxLjA0NS4xODEuMjk0LjM0NC41MjQuNDg3LjY4OC4xNDQuMTY0LjI4My4yOTMuNDE3LjM4Ni4xMzQuMDk0LjI0OC4xNDEuMzQyLjE0MWEuNzUuNzUgMCAwIDAgLjI3MS0uMDUuMTcyLjE3MiAwIDAgMCAuMDUtLjA1Yy4wMi0uMDI3LjA2LS4xLjEyLS4yMjEuMDYxLS4xMi4xMDYtLjI3OC4xMzYtLjQ3Mi4wMy0uMTk1LjA2Mi0uNDY2LjA5Ni0uODE0YTcuODA1IDcuODA1IDAgMCAwIDAtMS4yNTYgNC42NjggNC42NjggMCAwIDAtLjA5LS43MzMgMS45MjMgMS45MjMgMCAwIDAtLjE0MS0uNDYybC0uMDYtLjEyQzcuOTgyLjk4OSA3LjY5OC44NDUgNy4yOTYuNzg1Yy0uMDg3LS4wMTQtLjA3LS4wOTQuMDUtLjI0MWExLjE5IDEuMTkgMCAwIDEgLjM4Mi0uMzAyYy4zNTUtLjE3NCAxLjE1NS0uMjU0IDIuNC0uMjQuNTUuMDA2IDEuMDAxLjA1IDEuMzU2LjEzLjEzNC4wMzMuMjQ2LjA3OC4zMzcuMTM1YS41NC41NCAwIDAgMSAuMjA2LjI0MWMuMDQ3LjEwNC4wODIuMjExLjEwNS4zMjIuMDI0LjExLjAzNS4yNjMuMDM1LjQ1N3MtLjAwMy4zNzgtLjAxLjU1MmwtLjAyNS43MDhjLS4wMS4yOTgtLjAxNS41NzUtLjAxNS44MyAwIC4wNzMtLjAwMy4yMTMtLjAxLjQyMWE4LjM2NiA4LjM2NiAwIDAgMC0uMDA1LjQ4MmMuMDAzLjExNC4wMTUuMjUuMDM1LjQwNy4wMi4xNTcuMDU5LjI4OC4xMTYuMzkyYS42NjguNjY4IDAgMCAwIC4yMjYuMjQ2Yy4wNTMuMDEzLjExLjAyNy4xNy4wNC4wNi4wMTMuMTQ4LS4wMjMuMjYyLS4xMS4xMTQtLjA4OC4yNC0uMjAzLjM4MS0uMzQ3LjE0MS0uMTQ0LjMxNS0uMzY4LjUyMy0uNjczLjIwNy0uMzA1LjQzNS0uNjY1LjY4My0xLjA4LjQwMi0uNjk2Ljc2LTEuNDUgMS4wNzUtMi4yNmEuNjg5LjY4OSAwIDAgMSAuMS0uMTc2LjQ0OS40NDkgMCAwIDEgLjExLS4xMDVsLjA0LS4wMy4wNS0uMDI1YS44MDcuODA3IDAgMCAxIC4zMzEtLjAzNUwxOS4xLjUwM2MuMjYxLS4wMzQuNDc2LS4wMjYuNjQzLjAyNC4xNjcuMDUuMjcxLjEwNi4zMTEuMTY2bC4wNi4xeiIvPjwvc3ZnPg==); }\n@media (min-width: 768px) {\n    ::slotted([title=\"Vkontakte\"]) {\n        background-size: 20px 12px; } }\n@media (max-width: 767px) {\n    ::slotted([title=\"Vkontakte\"]) {\n        background-size: 1.14286em 0.71429em; } }\n\n::slotted([title=\"Odnoklassniki\"]) {\n    background-color: #eb913f;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDExIDE5Ij4gICAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS41IDkuNjgyYy0xLjI1OSAwLTIuMzM0LS40NDUtMy4yMjQtMS4zMzZDMS4zODUgNy40NTYuOTQgNi4zODQuOTQgNS4xMzJjMC0xLjI2LjQ0NS0yLjMzNCAxLjMzNi0zLjIyNUMzLjE2NiAxLjAxNyA0LjI0LjU3MSA1LjUuNTcxYzEuMjU5IDAgMi4zMzQuNDQ2IDMuMjI0IDEuMzM2Ljg5MS44OTEgMS4zMzYgMS45NjYgMS4zMzYgMy4yMjUgMCAxLjI1Mi0uNDQ1IDIuMzIzLTEuMzM2IDMuMjE0LS44OS44OS0xLjk2NSAxLjMzNi0zLjIyNCAxLjMzNnptMC02LjhjLS42MTYgMC0xLjE0My4yMTktMS41ODIuNjU4LS40MzkuNDM4LS42NTguOTY5LS42NTggMS41OTIgMCAuNjE2LjIyIDEuMTQzLjY1OCAxLjU4Mi40MzkuNDM4Ljk2Ni42NTggMS41ODIuNjU4LjYxNiAwIDEuMTQzLS4yMiAxLjU4Mi0uNjU4LjQzOS0uNDM5LjY1OC0uOTY2LjY1OC0xLjU4MiAwLS42MjMtLjIyLTEuMTU0LS42NTgtMS41OTJBMi4xNTcgMi4xNTcgMCAwIDAgNS41IDIuODgyem01LjI1MyA3LjM1MmMuMDg3LjE4MS4xMzguMzQ3LjE1MS40OThhLjk0Mi45NDIgMCAwIDEtLjA0NS40MDZjLS4wNDQuMTItLjEzMi4yNS0uMjY2LjM4N2EzLjQyOSAzLjQyOSAwIDAgMS0uNDI3LjM3MmMtLjE1LjExLS4zNTcuMjUtLjYxOC40MTctLjc3LjQ4OC0xLjgyNS44MDMtMy4xNjQuOTQ0bC43MzMuNzIzTDkuOCAxNi42NjNjLjIwMS4yMDguMzAxLjQ1NS4zMDEuNzQzcy0uMS41MzMtLjMuNzM0bC0uMTIxLjEzYy0uMjA4LjIwMS0uNDU2LjMwMS0uNzQ0LjMwMXMtLjUzNS0uMS0uNzQzLS4zYTYzOC4wNzQgNjM4LjA3NCAwIDAgMC0yLjY4Mi0yLjY5M0wyLjgyOCAxOC4yN2MtLjIwNy4yMDEtLjQ1NS4zMDEtLjc0My4zMDFhLjk5OC45OTggMCAwIDEtLjczMy0uM2wtLjEyMS0uMTMxYS45ODIuOTgyIDAgMCAxLS4zMTEtLjczNGMwLS4yODguMTAzLS41MzUuMzExLS43NDNsMy40MDUtMy40MDVjLTEuMzYtLjE0LTIuNDItLjQ1Ni0zLjE4NC0uOTQ0YTEyLjQ2OCAxMi40NjggMCAwIDEtLjYxOC0uNDE3IDMuNDI5IDMuNDI5IDAgMCAxLS40MjctLjM3MiAxLjEzMSAxLjEzMSAwIDAgMS0uMjY2LS4zODcuOTQyLjk0MiAwIDAgMS0uMDQ1LS40MDZjLjAxMy0uMTUxLjA2NC0uMzE3LjE1LS40OTguMDY4LS4xMzQuMTYxLS4yNS4yODItLjM1MS4xMi0uMS4yNjEtLjE3NC40MjItLjIyMS4xNi0uMDQ3LjM0OC0uMDQuNTYyLjAyYTEuOSAxLjkgMCAwIDEgLjY1My4zNTFjLjAzNC4wMjcuMDg0LjA2NC4xNS4xMTEuMDY4LjA0Ny4yMTIuMTI5LjQzMy4yNDYuMjIuMTE3LjQ1Mi4yMi42OTMuMzA2LjI0LjA4Ny41NDkuMTY4LjkyNC4yNDIuMzc1LjA3My43NTMuMTEgMS4xMzUuMTEuNjEgMCAxLjE5Mi0uMDg1IDEuNzQ4LS4yNTYuNTU2LS4xNy45NTctLjM0IDEuMjA1LS41MDdsLjM4Mi0uMjUyYTEuOSAxLjkgMCAwIDEgLjY1My0uMzUxYy4yMTQtLjA2LjQwMi0uMDY3LjU2Mi0uMDIuMTYuMDQ3LjMwMi4xMi40MjIuMjIuMTIuMTAxLjIxNC4yMTguMjgxLjM1MnoiLz48L3N2Zz4=); }\n@media (min-width: 768px) {\n    ::slotted([title=\"Odnoklassniki\"]) {\n        background-size: 12px 18px; } }\n@media (max-width: 767px) {\n    ::slotted([title=\"Odnoklassniki\"]) {\n        background-size: 0.57143em 1em; } }\n\n::slotted([title=\"YouTube\"]) {\n    background-color: #9e312c;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE5IDE0Ij4gICAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy41MzkgOS42NzRsNS4xMzEtMi42NUw3LjU0IDQuMzR2NS4zMzN6TTkuNS41MzRjMS4xODggMCAyLjMzNC4wMTcgMy40NC4wNDggMS4xMDcuMDMyIDEuOTE4LjA2NiAyLjQzNC4xMDFsLjc3NC4wNDIuMTguMDE2Yy4xMTMuMDExLjE5NS4wMjIuMjQ0LjAzMi4wNS4wMS4xMzMuMDI3LjI1LjA0OC4xMTYuMDIxLjIxNy4wNS4zMDEuMDg1LjA4NS4wMzUuMTg0LjA4MS4yOTcuMTM4LjExMy4wNTYuMjIzLjEyNS4zMjkuMjA2YTIuNTE0IDIuNTE0IDAgMCAxIC40NzIuNDc3Yy4wNjcuMDg5LjE3LjI5Ni4zMDcuNjIuMTM4LjMyNi4yMzIuNjgzLjI4MSAxLjA3Mi4wNTcuNDUyLjEuOTM0LjEzMyAxLjQ0Ny4wMzEuNTEyLjA1LjkxMy4wNTggMS4yMDN2MS44NjZhMjIuNDQ3IDIyLjQ0NyAwIDAgMS0uMTkgMy4wNzUgNC4yMyA0LjIzIDAgMCAxLS4yNjYgMS4wNTVjLS4xMjcuMzE1LS4yNC41MzItLjM0LjY1MmwtLjE0OC4xOGMtLjA5OS4xMDYtLjIwMS4yLS4zMDcuMjgxYTEuNzg3IDEuNzg3IDAgMCAxLS4zMjkuMjAyIDcuNTk5IDcuNTk5IDAgMCAxLS4yOTcuMTMyIDEuNDc3IDEuNDc3IDAgMCAxLS4zMDIuMDg1bC0uMjU0LjA0OGE2LjQ4MiA2LjQ4MiAwIDAgMS0uNDE5LjA0OGMtMS43NzQuMTM0LTMuOTkuMjAxLTYuNjQ4LjIwMWExOTUuNTUgMTk1LjU1IDAgMCAxLTMuODEyLS4wNjkgODIuNjQ2IDgyLjY0NiAwIDAgMS0yLjEyNS0uMDhsLS41Mi0uMDQyLS4zODItLjA0MmE1LjAzNCA1LjAzNCAwIDAgMS0uNTc4LS4xMDYgMy4yNTggMy4yNTggMCAwIDEtLjU0LS4yMjMgMi4wMjYgMi4wMjYgMCAwIDEtLjc2My0uNjNjLS4wNjgtLjA5LS4xNy0uMjk2LS4zMDgtLjYyMUE0LjAzNyA0LjAzNyAwIDAgMSAuMTkgMTEuMDFjLS4wNTctLjQ1Mi0uMS0uOTM1LS4xMzMtMS40NDdBMzQuMDU2IDM0LjA1NiAwIDAgMSAwIDguMzU5VjYuNDkzYy0uMDA3LTEuMDI1LjA1Ny0yLjA1LjE5LTMuMDc0LjA1LS4zOS4xMzktLjc0LjI2Ni0xLjA1NS4xMjctLjMxNS4yNC0uNTMyLjM0LS42NTNsLjE0OC0uMThjLjA5OS0uMTA2LjIwMS0uMi4zMDctLjI4LjEwNi0uMDgyLjIxNi0uMTUuMzI5LS4yMDcuMTEzLS4wNTcuMjEyLS4xMDMuMjk3LS4xMzguMDg0LS4wMzYuMTg1LS4wNjQuMzAyLS4wODUuMTE2LS4wMjEuMi0uMDM3LjI0OS0uMDQ4LjA1LS4wMS4xMy0uMDIxLjI0NC0uMDMyYTcuMDcgNy4wNyAwIDAgMSAuMTgtLjAxNkM0LjYyNi41OTggNi44NDIuNTM1IDkuNS41MzV6Ii8+PC9zdmc+); }\n@media (min-width: 768px) {\n    ::slotted([title=\"YouTube\"]) {\n        background-size: 20px 14px; } }\n@media (max-width: 767px) {\n    ::slotted([title=\"YouTube\"]) {\n        background-size: 1em 0.71429em; } }\n\n::slotted([title=\"Instagram\"]) {\n    background-color: #2e5583;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4gICAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuOTI5IDEwLjQyOWMwLS45NDctLjMzNS0xLjc1NS0xLjAwNS0yLjQyNUEzLjMwMyAzLjMwMyAwIDAgMCAxMC41IDdjLS45NDYgMC0xLjc1NC4zMzUtMi40MjQgMS4wMDRBMy4zMDMgMy4zMDMgMCAwIDAgNy4wNyAxMC40M2MwIC45NDYuMzM1IDEuNzU0IDEuMDA1IDIuNDI0YTMuMzAzIDMuMzAzIDAgMCAwIDIuNDI0IDEuMDA0Yy45NDYgMCAxLjc1NC0uMzM1IDIuNDI0LTEuMDA0YTMuMzAzIDMuMzAzIDAgMCAwIDEuMDA1LTIuNDI0em0xLjg0OCAwYzAgMS40NjQtLjUxNCAyLjcxLTEuNTQgMy43MzYtMS4wMjcgMS4wMjctMi4yNzMgMS41NC0zLjczNyAxLjU0cy0yLjcxLS41MTMtMy43MzctMS41NGMtMS4wMjYtMS4wMjctMS41NC0yLjI3Mi0xLjU0LTMuNzM2IDAtMS40NjUuNTE0LTIuNzEgMS41NC0zLjczNyAxLjAyNy0xLjAyNyAyLjI3My0xLjU0IDMuNzM3LTEuNTRzMi43MS41MTMgMy43MzcgMS41NGMxLjAyNiAxLjAyNyAxLjU0IDIuMjcyIDEuNTQgMy43Mzd6bTEuNDQ2LTUuNDkyYzAgLjM0LS4xMi42My0uMzYxLjg3MWExLjE4NyAxLjE4NyAwIDAgMS0uODcuMzYyYy0uMzQgMC0uNjMtLjEyLS44NzEtLjM2MmExLjE4NyAxLjE4NyAwIDAgMS0uMzYyLS44N2MwLS4zNC4xMi0uNjMuMzYyLS44NzEuMjQtLjI0MS41My0uMzYyLjg3LS4zNjIuMzQgMCAuNjMuMTIuODcuMzYyLjI0Mi4yNDEuMzYyLjUzMS4zNjIuODd6TTEwLjUgMS45OTFsLTEuMDI1LS4wMDdhNzIuNjU2IDcyLjY1NiAwIDAgMC0xLjQxMiAwYy0uMzIyLjAwNS0uNzUzLjAxOC0xLjI5My4wNC0uNTQuMDIzLTEgLjA2OC0xLjM4LjEzNGE1LjM3IDUuMzcgMCAwIDAtLjk1Ny4yNDhjLS40NDYuMTc5LS44NC40MzgtMS4xNzkuNzc3LS4zMzkuMzQtLjU5OC43MzItLjc3NiAxLjE3OWE1LjM3IDUuMzcgMCAwIDAtLjI0OC45NTdjLS4wNjcuMzgtLjExMi44NC0uMTM0IDEuMzgtLjAyMi41NC0uMDM2Ljk3LS4wNCAxLjI5Mi0uMDA1LjMyMi0uMDA1Ljc5MiAwIDEuNDEzbC4wMDYgMS4wMjUtLjAwNiAxLjAyNGMtLjAwNS42Mi0uMDA1IDEuMDkyIDAgMS40MTMuMDA0LjMyMi4wMTguNzUyLjA0IDEuMjkyLjAyMi41NC4wNjcgMSAuMTM0IDEuMzguMDY3LjM4LjE1LjY5OS4yNDguOTU4LjE3OC40NDYuNDM3LjgzOS43NzYgMS4xNzguMzQuMzQuNzMzLjU5OCAxLjE3OS43NzcuMjU5LjA5OC41NzguMTguOTU4LjI0OC4zOC4wNjcuODM5LjExMSAxLjM4LjEzNC41NC4wMjIuOTcuMDM1IDEuMjkyLjA0LjMyLjAwNC43OTIuMDA0IDEuNDEyIDBsMS4wMjUtLjAwNyAxLjAyNS4wMDdjLjYyLjAwNCAxLjA5MS4wMDQgMS40MTIgMCAuMzIyLS4wMDUuNzUzLS4wMTggMS4yOTMtLjA0LjU0LS4wMjMgMS0uMDY3IDEuMzgtLjEzNC4zNzktLjA2Ny42OTgtLjE1Ljk1Ny0uMjQ4LjQ0Ni0uMTc5Ljg0LS40MzggMS4xNzktLjc3Ny4zMzktLjM0LjU5OC0uNzMyLjc3Ni0xLjE3OGE1LjM3IDUuMzcgMCAwIDAgLjI0OC0uOTU4Yy4wNjctLjM4LjExMi0uODQuMTM0LTEuMzguMDIyLS41NC4wMzYtLjk3LjA0LTEuMjkyLjAwNS0uMzIxLjAwNS0uNzkyIDAtMS40MTNsLS4wMDYtMS4wMjQuMDA2LTEuMDI1Yy4wMDUtLjYyLjAwNS0xLjA5MSAwLTEuNDEzYTQ5LjYxNyA0OS42MTcgMCAwIDAtLjA0LTEuMjkyYy0uMDIyLS41NC0uMDY3LTEtLjEzNC0xLjM4YTUuMzcgNS4zNyAwIDAgMC0uMjQ4LS45NTcgMy40NzUgMy40NzUgMCAwIDAtLjc3Ni0xLjE3OSAzLjQ3NSAzLjQ3NSAwIDAgMC0xLjE3OS0uNzc3IDUuMzcgNS4zNyAwIDAgMC0uOTU4LS4yNDhjLS4zOC0uMDY2LS44MzktLjExMS0xLjM4LS4xMzMtLjU0LS4wMjMtLjk3LS4wMzYtMS4yOTEtLjA0YTcyLjY1NiA3Mi42NTYgMCAwIDAtMS40MTMgMEwxMC41IDEuOTl6bTEwLjI4NiA4LjQzOGMwIDIuMDQ0LS4wMjMgMy40Ni0uMDY3IDQuMjQ1LS4wOSAxLjg1Ny0uNjQzIDMuMjk1LTEuNjYxIDQuMzEzLTEuMDE4IDEuMDE3LTIuNDU1IDEuNTcxLTQuMzEyIDEuNjYtLjc4Ni4wNDUtMi4yMDEuMDY3LTQuMjQ2LjA2Ny0yLjA0NSAwLTMuNDYtLjAyMi00LjI0Ni0uMDY3LTEuODU3LS4wODktMy4yOTQtLjY0My00LjMxMi0xLjY2Qy45MjQgMTcuOTY5LjM3MSAxNi41My4yODIgMTQuNjc0Yy0uMDQ1LS43ODYtLjA2OC0yLjItLjA2OC00LjI0NXMuMDIzLTMuNDYuMDY3LTQuMjQ2Yy4wOS0xLjg1Ny42NDMtMy4yOTUgMS42NjEtNC4zMTJDMi45Ni44NTMgNC4zOTcuMjk5IDYuMjU0LjIxIDcuMDQuMTY1IDguNDU1LjE0MyAxMC41LjE0M2MyLjA0NSAwIDMuNDYuMDIyIDQuMjQ2LjA2NyAxLjg1Ny4wOSAzLjI5NC42NDMgNC4zMTIgMS42NiAxLjAxOCAxLjAxOCAxLjU3MSAyLjQ1NiAxLjY2IDQuMzEzLjA0NS43ODYuMDY4IDIuMi4wNjggNC4yNDZ6Ii8+PC9zdmc+); }\n@media (min-width: 768px) {\n    ::slotted([title=\"Instagram\"]) {\n        background-size: 20px 20px; } }\n@media (max-width: 767px) {\n    ::slotted([title=\"Instagram\"]) {\n        background-size: 1.14286em 1.14286em; } }\n";

            function _templateObject2() {
              var data = _taggedTemplateLiteral(["<slot></slot>"]);

              _templateObject2 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject() {
              var data = _taggedTemplateLiteral(["", ""]);

              _templateObject = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcFooterSocialLinks = _decorate([customElement('uc-footer-social-links')], function (_initialize, _LitElement) {
              var UcFooterSocialLinks =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcFooterSocialLinks, _LitElement2);

                function UcFooterSocialLinks() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcFooterSocialLinks);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcFooterSocialLinks)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcFooterSocialLinks;
              }(_LitElement);

              return {
                F: UcFooterSocialLinks,
                d: [{
                  kind: "field",
                  static: true,
                  key: "styles",
                  value: function value() {
                    return css(_templateObject(), unsafeCSS(css$2));
                  }
                }, {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return html(_templateObject2());
                  }
                }]
              };
            }, LitElement);

            var css$3 = "form {\n    width: 100%;\n    position: relative;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n@media (min-width: 768px) {\n    form {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        height: 50px;\n        border: 3px solid #66c05d; } }\n@media (max-width: 767px) {\n    form {\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n        height: 3.57143em; } }\n\ninput {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    border: none;\n    padding: 10px 20px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n\ninput:valid + label,\ninput:focus + label {\n    display: none; }\n\nlabel {\n    position: absolute;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDE2IDEyIj4gICAgPHBhdGggZmlsbD0iI0IyQjJCMiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS4xODIgMGw2LjYwNiA2LjZMMTQuMzg5IDBIMS4xODJ6TTguNzMgNy41NWwtLjk0My45NDItLjk0MS0uOTQyTDAgLjcwNXYxMC41MTNsNC42OTMtNC42OTIuOTQyLjk0Mi00LjQ1OCA0LjQ1OGgxMy4yMjFMOS45NCA3LjQ2OGwuOTQyLS45NDIgNC42OTIgNC42OTZWLjcwNUw4LjczIDcuNTV6Ii8+PC9zdmc+);\n    width: 16px;\n    height: 12px;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    top: 50%;\n    left: 15px;\n    -webkit-transform: translate(0, -50%);\n    -ms-transform: translate(0, -50%);\n    transform: translate(0, -50%); }\n\nbutton {\n    background-color: #66c05d;\n    line-height: 1.18;\n    color: #ffffff;\n    text-transform: uppercase;\n    border: none;\n    cursor: pointer; }\n@media (min-width: 768px) {\n    button {\n        font-size: 11px;\n        width: 140px; } }\n@media (max-width: 767px) {\n    button {\n        font-size: 0.78571em; } }\n";

            function _templateObject4() {
              var data = _taggedTemplateLiteral(["\n                    <input id=\"footer-subscrube-input\" type=\"text\" required placeholder=\"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 e-mail\"/>\n                    <label for=\"footer-subscrube-input\"></label>\n                "]);

              _templateObject4 = function _templateObject4() {
                return data;
              };

              return data;
            }

            function _templateObject3() {
              var data = _taggedTemplateLiteral([""]);

              _templateObject3 = function _templateObject3() {
                return data;
              };

              return data;
            }

            function _templateObject2$1() {
              var data = _taggedTemplateLiteral(["\n            <form method=\"", "\" action=\"", "\">\n                ", "\n                <button type=\"submit\">\u041F\u041E\u0414\u041F\u0418\u0421\u0410\u0422\u042C\u0421\u042F \u041D\u0410&nbsp;\u0420\u0410\u0421\u0421\u042B\u041B\u041A\u0423</button>\n            </form>\n        "]);

              _templateObject2$1 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject$1() {
              var data = _taggedTemplateLiteral(["", ""]);

              _templateObject$1 = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcFooterSubscribe = _decorate([customElement('uc-footer-subscribe')], function (_initialize, _LitElement) {
              var UcFooterSubscribe =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcFooterSubscribe, _LitElement2);

                function UcFooterSubscribe() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcFooterSubscribe);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcFooterSubscribe)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcFooterSubscribe;
              }(_LitElement);

              return {
                F: UcFooterSubscribe,
                d: [{
                  kind: "field",
                  decorators: [property({
                    type: String
                  })],
                  key: "method",
                  value: function value() {
                    return 'POST';
                  }
                }, {
                  kind: "field",
                  decorators: [property({
                    type: String
                  })],
                  key: "action",
                  value: void 0
                }, {
                  kind: "field",
                  static: true,
                  key: "styles",
                  value: function value() {
                    return css(_templateObject$1(), unsafeCSS(css$3));
                  }
                }, {
                  kind: "method",
                  key: "render",
                  value: //GET
                  function render() {
                    return html(_templateObject2$1(), this.method, this.action, isXs() ? html(_templateObject3()) : html(_templateObject4()));
                  }
                }]
              };
            }, LitElement);

            function _templateObject2$2() {
              var data = _taggedTemplateLiteral(["<slot></slot>"]);

              _templateObject2$2 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject$2() {
              var data = _taggedTemplateLiteral(["", ""]);

              _templateObject$2 = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcFooterLinkBlock = _decorate([customElement('uc-footer-link-block')], function (_initialize, _LitElement) {
              var UcFooterLinkBlock =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcFooterLinkBlock, _LitElement2);

                function UcFooterLinkBlock() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcFooterLinkBlock);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcFooterLinkBlock)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcFooterLinkBlock;
              }(_LitElement);

              return {
                F: UcFooterLinkBlock,
                d: [{
                  kind: "field",
                  static: true,
                  key: "styles",
                  value: function value() {
                    return css(_templateObject$2(), unsafeCSS(css$1));
                  }
                }, {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return html(_templateObject2$2());
                  }
                }]
              };
            }, LitElement);

        }
    };
});
//# sourceMappingURL=chunk-8d54af1a.js.map
