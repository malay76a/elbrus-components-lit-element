System.register(['./chunk-65e75638.js'], function (exports, module) {
  'use strict';
  var _createClass, _classCallCheck, _typeof, _toConsumableArray;
  return {
    setters: [function (module) {
      _createClass = module.b;
      _classCallCheck = module.c;
      _typeof = module.a;
      _toConsumableArray = module.d;
    }],
    execute: function () {

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      var ShadyData =
      /*#__PURE__*/
      function () {
        function ShadyData() {
          _classCallCheck(this, ShadyData);

          /** @type {ShadowRoot} */
          this.root = null;
          /** @type {ShadowRoot} */

          this.publicRoot = null;
          this.dirty = false;
          this.observer = null;
          /** @type {Array<Node>} */

          this.assignedNodes = null;
          /** @type {Element} */

          this.assignedSlot = null;
          /** @type {Array<Node>} */

          this._previouslyAssignedNodes = null;
          /** @type {Element} */

          this._prevAssignedSlot = null;
          /** @type {Array<Node>} */

          this.flattenedNodes = null;
          this.ownerShadyRoot = undefined;
          /** @type {Node|undefined} */

          this.parentNode = undefined;
          /** @type {Node|undefined} */

          this.firstChild = undefined;
          /** @type {Node|undefined} */

          this.lastChild = undefined;
          /** @type {Node|undefined} */

          this.previousSibling = undefined;
          /** @type {Node|undefined} */

          this.nextSibling = undefined;
          /** @type {Array<Node>|undefined} */

          this.childNodes = undefined;
          this.__outsideAccessors = false;
          this.__insideAccessors = false;
          this.__onCallbackListeners = {};
        }
        /** @override */


        _createClass(ShadyData, [{
          key: "toJSON",
          value: function toJSON() {
            return {};
          }
        }]);

        return ShadyData;
      }();
      function ensureShadyDataForNode(node) {
        if (!node.__shady) {
          node.__shady = new ShadyData();
        }

        return node.__shady;
      }
      function shadyDataForNode(node) {
        return node && node.__shady;
      }

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      /** @type {!Object} */

      var settings = window['ShadyDOM'] || {};
      settings.hasNativeShadowDOM = Boolean(Element.prototype.attachShadow && Node.prototype.getRootNode);
      var desc = Object.getOwnPropertyDescriptor(Node.prototype, 'firstChild');
      settings.hasDescriptors = Boolean(desc && desc.configurable && desc.get);
      settings.inUse = settings['force'] || !settings.hasNativeShadowDOM;
      settings.noPatch = settings['noPatch'] || false;
      settings.preferPerformance = settings['preferPerformance'];
      var isTrackingLogicalChildNodes = function isTrackingLogicalChildNodes(node) {
        var nodeData = shadyDataForNode(node);
        return nodeData && nodeData.firstChild !== undefined;
      };
      var isShadyRoot = function isShadyRoot(obj) {
        return Boolean(obj._localName === 'ShadyRoot');
      };
      var hasShadowRootWithSlot = function hasShadowRootWithSlot(node) {
        var nodeData = shadyDataForNode(node);
        var root = nodeData && nodeData.root;
        return root && root._hasInsertionPoint();
      };
      var p = Element.prototype;
      var matches = p.matches || p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;
      var matchesSelector = function matchesSelector(element, selector) {
        return matches.call(element, selector);
      };
      // for consistency x-platform.

      var twiddle = document.createTextNode('');
      var content = 0;
      var queue = [];
      new MutationObserver(function () {
        while (queue.length) {
          // catch errors in user code...
          try {
            queue.shift()();
          } catch (e) {
            // enqueue another record and throw
            twiddle.textContent = content++;
            throw e;
          }
        }
      }).observe(twiddle, {
        characterData: true
      }); // use MutationObserver to get microtask async timing.

      var microtask = function microtask(callback) {
        queue.push(callback);
        twiddle.textContent = content++;
      };
      var hasDocumentContains = Boolean(document.contains);
      var contains = function contains(container, node) {
        while (node) {
          if (node == container) {
            return true;
          }

          node = node[SHADY_PREFIX + 'parentNode'];
        }

        return false;
      };

      var getNodeHTMLCollectionName = function getNodeHTMLCollectionName(node) {
        return node.getAttribute('id') || node.getAttribute('name');
      };

      var isValidHTMLCollectionName = function isValidHTMLCollectionName(name) {
        return name !== 'length' && isNaN(name);
      };

      var createPolyfilledHTMLCollection = function createPolyfilledHTMLCollection(nodes) {
        // Note: loop in reverse so that the first named item matches the named property
        for (var l = nodes.length - 1; l >= 0; l--) {
          var node = nodes[l];
          var name = getNodeHTMLCollectionName(node);

          if (name && isValidHTMLCollectionName(name)) {
            nodes[name] = node;
          }
        }

        nodes.item = function (index) {
          return nodes[index];
        };

        nodes.namedItem = function (name) {
          if (isValidHTMLCollectionName(name) && nodes[name]) {
            return nodes[name];
          }

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _node = _step.value;
              var nodeName = getNodeHTMLCollectionName(_node);

              if (nodeName == name) {
                return _node;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return null;
        };

        return nodes;
      };
      var NATIVE_PREFIX = '__shady_native_';
      var SHADY_PREFIX = '__shady_';
      /**
       * Patch a group of accessors on an object only if it exists or if the `force`
       * argument is true.
       * @param {!Object} proto
       * @param {!Object} descriptors
       * @param {string=} prefix
       * @param {Array=} disallowedPatches
       */

      var patchProperties = function patchProperties(proto, descriptors) {
        var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var disallowedPatches = arguments.length > 3 ? arguments[3] : undefined;

        for (var _p in descriptors) {
          var newDescriptor = descriptors[_p];

          if (disallowedPatches && disallowedPatches.indexOf(_p) >= 0) {
            continue;
          }

          newDescriptor.configurable = true;
          var name = prefix + _p; // NOTE: we prefer writing directly because some browsers
          // have descriptors that are writable but not configurable (e.g.
          // `appendChild` on older browsers)

          if (newDescriptor.value) {
            proto[name] = newDescriptor.value;
          } else {
            // NOTE: this can throw if 'force' is used so catch the error.
            try {
              Object.defineProperty(proto, name, newDescriptor);
            } catch (e) {// this error is harmless so we just trap it.
            }
          }
        }
      };
      /** @type {!function(new:HTMLElement)} */

      var NativeHTMLElement = window['customElements'] && window['customElements']['nativeHTMLElement'] || HTMLElement; // note, this is not a perfect polyfill since it doesn't include symbols

      /** @return {!Object<!ObjectPropertyDescriptor>} */

      var getOwnPropertyDescriptors = function getOwnPropertyDescriptors(obj) {
        var descriptors = {};
        Object.getOwnPropertyNames(obj).forEach(function (name) {
          descriptors[name] = Object.getOwnPropertyDescriptor(obj, name);
        });
        return descriptors;
      };

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */

      var flushList = [];
      var scheduled;
      function enqueue(callback) {
        if (!scheduled) {
          scheduled = true;
          microtask(flush);
        }

        flushList.push(callback);
      }
      function flush() {
        scheduled = false;
        var didFlush = Boolean(flushList.length);

        while (flushList.length) {
          flushList.shift()();
        }

        return didFlush;
      }
      flush['list'] = flushList;

      var AsyncObserver =
      /*#__PURE__*/
      function () {
        function AsyncObserver() {
          _classCallCheck(this, AsyncObserver);

          this._scheduled = false;
          this.addedNodes = [];
          this.removedNodes = [];
          this.callbacks = new Set();
        }

        _createClass(AsyncObserver, [{
          key: "schedule",
          value: function schedule() {
            var _this = this;

            if (!this._scheduled) {
              this._scheduled = true;
              microtask(function () {
                _this.flush();
              });
            }
          }
        }, {
          key: "flush",
          value: function flush() {
            if (this._scheduled) {
              this._scheduled = false;
              var mutations = this.takeRecords();

              if (mutations.length) {
                this.callbacks.forEach(function (cb) {
                  cb(mutations);
                });
              }
            }
          }
        }, {
          key: "takeRecords",
          value: function takeRecords() {
            if (this.addedNodes.length || this.removedNodes.length) {
              var mutations = [{
                addedNodes: this.addedNodes,
                removedNodes: this.removedNodes
              }];
              this.addedNodes = [];
              this.removedNodes = [];
              return mutations;
            }

            return [];
          }
        }]);

        return AsyncObserver;
      }(); // TODO(sorvell): consider instead polyfilling MutationObserver
      // directly so that users do not have to fork their code.
      // Supporting the entire api may be challenging: e.g. filtering out
      // removed nodes in the wrong scope and seeing non-distributing
      // subtree child mutations.


      var observeChildren = function observeChildren(node, callback) {
        var sd = ensureShadyDataForNode(node);

        if (!sd.observer) {
          sd.observer = new AsyncObserver();
        }

        sd.observer.callbacks.add(callback);
        var observer = sd.observer;
        return {
          _callback: callback,
          _observer: observer,
          _node: node,
          takeRecords: function takeRecords() {
            return observer.takeRecords();
          }
        };
      };
      var unobserveChildren = function unobserveChildren(handle) {
        var observer = handle && handle._observer;

        if (observer) {
          observer.callbacks.delete(handle._callback);

          if (!observer.callbacks.size) {
            ensureShadyDataForNode(handle._node).observer = null;
          }
        }
      };
      function filterMutations(mutations, target) {
        /** @const {Node} */
        var targetRootNode = target.getRootNode();
        return mutations.map(function (mutation) {
          /** @const {boolean} */
          var mutationInScope = targetRootNode === mutation.target.getRootNode();

          if (mutationInScope && mutation.addedNodes) {
            var nodes = Array.from(mutation.addedNodes).filter(function (n) {
              return targetRootNode === n.getRootNode();
            });

            if (nodes.length) {
              mutation = Object.create(mutation);
              Object.defineProperty(mutation, 'addedNodes', {
                value: nodes,
                configurable: true
              });
              return mutation;
            }
          } else if (mutationInScope) {
            return mutation;
          }
        }).filter(function (m) {
          return m;
        });
      }

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      // Cribbed from ShadowDOM polyfill
      // https://github.com/webcomponents/webcomponentsjs/blob/master/src/ShadowDOM/wrappers/HTMLElement.js#L28
      /////////////////////////////////////////////////////////////////////////////
      // innerHTML and outerHTML
      // http://www.whatwg.org/specs/web-apps/current-work/multipage/the-end.html#escapingString
      var escapeAttrRegExp = /[&\u00A0"]/g;
      var escapeDataRegExp = /[&\u00A0<>]/g;

      function escapeReplace(c) {
        switch (c) {
          case '&':
            return '&amp;';

          case '<':
            return '&lt;';

          case '>':
            return '&gt;';

          case '"':
            return '&quot;';

          case "\xA0":
            return '&nbsp;';
        }
      }

      function escapeAttr(s) {
        return s.replace(escapeAttrRegExp, escapeReplace);
      }

      function escapeData(s) {
        return s.replace(escapeDataRegExp, escapeReplace);
      }

      function makeSet(arr) {
        var set = {};

        for (var i = 0; i < arr.length; i++) {
          set[arr[i]] = true;
        }

        return set;
      } // http://www.whatwg.org/specs/web-apps/current-work/#void-elements


      var voidElements = makeSet(['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
      var plaintextParents = makeSet(['style', 'script', 'xmp', 'iframe', 'noembed', 'noframes', 'plaintext', 'noscript']);
      /**
       * @param {Node} node
       * @param {Node} parentNode
       * @param {Function=} callback
       */

      function getOuterHTML(node, parentNode, callback) {
        switch (node.nodeType) {
          case Node.ELEMENT_NODE:
            {
              var tagName = node.localName;
              var s = '<' + tagName;
              var attrs = node.attributes;

              for (var i = 0, attr; attr = attrs[i]; i++) {
                s += ' ' + attr.name + '="' + escapeAttr(attr.value) + '"';
              }

              s += '>';

              if (voidElements[tagName]) {
                return s;
              }

              return s + getInnerHTML(node, callback) + '</' + tagName + '>';
            }

          case Node.TEXT_NODE:
            {
              var data =
              /** @type {Text} */
              node.data;

              if (parentNode && plaintextParents[parentNode.localName]) {
                return data;
              }

              return escapeData(data);
            }

          case Node.COMMENT_NODE:
            {
              return '<!--' +
              /** @type {Comment} */
              node.data + '-->';
            }

          default:
            {
              window.console.error(node);
              throw new Error('not implemented');
            }
        }
      }
      /**
       * @param {Node} node
       * @param {Function=} callback
       */

      function getInnerHTML(node, callback) {
        if (node.localName === 'template') {
          node =
          /** @type {HTMLTemplateElement} */
          node.content;
        }

        var s = '';
        var c$ = callback ? callback(node) : node.childNodes;

        for (var i = 0, l = c$.length, child; i < l && (child = c$[i]); i++) {
          s += getOuterHTML(child, node, callback);
        }

        return s;
      }

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      var hasDescriptors = settings.hasDescriptors;
      var NATIVE_PREFIX$1 = NATIVE_PREFIX; // Object on which raw native methods are stored.
      // e.g. `nativeMethods.querySelector.call(node, selector)`
      // same as `node.querySelector(selector)`

      var nativeMethods = {
        /** @this {Element} */
        querySelector: function querySelector(selector) {
          return this[NATIVE_PREFIX$1 + 'querySelector'](selector);
        },

        /** @this {Element} */
        querySelectorAll: function querySelectorAll(selector) {
          return this[NATIVE_PREFIX$1 + 'querySelectorAll'](selector);
        }
      }; // Object on which raw native accessors are available via `accessorName(node)`.
      // e.g. `nativeTree.firstChild(node)`
      // same as `node.firstChild`

      var nativeTree = {};

      var installNativeAccessor = function installNativeAccessor(name) {
        nativeTree[name] = function (node) {
          return node[NATIVE_PREFIX$1 + name];
        };
      };

      var installNativeMethod = function installNativeMethod(name, fn) {
        if (!nativeMethods[name]) {
          nativeMethods[name] = fn;
        }
      };

      var defineNativeAccessors = function defineNativeAccessors(proto, descriptors) {
        patchProperties(proto, descriptors, NATIVE_PREFIX$1); // make native accessors available to users

        for (var prop in descriptors) {
          installNativeAccessor(prop);
        }
      };

      var copyProperties = function copyProperties(proto) {
        var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        for (var i = 0; i < list.length; i++) {
          var name = list[i];
          var descriptor = Object.getOwnPropertyDescriptor(proto, name);

          if (descriptor) {
            Object.defineProperty(proto, NATIVE_PREFIX$1 + name, descriptor); // make native methods/accessors available to users

            if (descriptor.value) {
              installNativeMethod(name, descriptor.value);
            } else {
              installNativeAccessor(name);
            }
          }
        }
      };
      /** @type {!TreeWalker} */


      var nodeWalker = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, false);
      /** @type {!TreeWalker} */

      var elementWalker = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, false);
      /** @type {!Document} */

      var inertDoc = document.implementation.createHTMLDocument('inert');

      var clearNode = function clearNode(node) {
        var firstChild;

        while (firstChild = node[NATIVE_PREFIX$1 + 'firstChild']) {
          node[NATIVE_PREFIX$1 + 'removeChild'](firstChild);
        }
      };

      var ParentNodeAccessors = ['firstElementChild', 'lastElementChild', 'children', 'childElementCount'];
      var ParentNodeMethods = ['querySelector', 'querySelectorAll' // 'append', 'prepend'
      ];
      var addNativePrefixedProperties = function addNativePrefixedProperties() {
        // EventTarget
        var eventProps = ['dispatchEvent', 'addEventListener', 'removeEventListener'];

        if (window.EventTarget) {
          copyProperties(window.EventTarget.prototype, eventProps);
        } else {
          copyProperties(Node.prototype, eventProps);
          copyProperties(Window.prototype, eventProps);
        } // Node


        if (hasDescriptors) {
          copyProperties(Node.prototype, ['parentNode', 'firstChild', 'lastChild', 'previousSibling', 'nextSibling', 'childNodes', 'parentElement', 'textContent']);
        } else {
          defineNativeAccessors(Node.prototype, {
            parentNode: {
              /** @this {Node} */
              get: function get() {
                nodeWalker.currentNode = this;
                return nodeWalker.parentNode();
              }
            },
            firstChild: {
              /** @this {Node} */
              get: function get() {
                nodeWalker.currentNode = this;
                return nodeWalker.firstChild();
              }
            },
            lastChild: {
              /** @this {Node} */
              get: function get() {
                nodeWalker.currentNode = this;
                return nodeWalker.lastChild();
              }
            },
            previousSibling: {
              /** @this {Node} */
              get: function get() {
                nodeWalker.currentNode = this;
                return nodeWalker.previousSibling();
              }
            },
            nextSibling: {
              /** @this {Node} */
              get: function get() {
                nodeWalker.currentNode = this;
                return nodeWalker.nextSibling();
              }
            },
            // TODO(sorvell): make this a NodeList or whatever
            childNodes: {
              /** @this {Node} */
              get: function get() {
                var nodes = [];
                nodeWalker.currentNode = this;
                var n = nodeWalker.firstChild();

                while (n) {
                  nodes.push(n);
                  n = nodeWalker.nextSibling();
                }

                return nodes;
              }
            },
            parentElement: {
              /** @this {Node} */
              get: function get() {
                elementWalker.currentNode = this;
                return elementWalker.parentNode();
              }
            },
            textContent: {
              /** @this {Node} */
              get: function get() {
                /* eslint-disable no-case-declarations */
                switch (this.nodeType) {
                  case Node.ELEMENT_NODE:
                  case Node.DOCUMENT_FRAGMENT_NODE:
                    // TODO(sorvell): This cannot be a single TreeWalker that's reused
                    // at least for Safari 9, but it's unclear why.
                    var textWalker = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, false);
                    var content = '',
                        n;

                    while (n = textWalker.nextNode()) {
                      // TODO(sorvell): can't use textContent since we patch it on Node.prototype!
                      // However, should probably patch it only on element.
                      content += n.nodeValue;
                    }

                    return content;

                  default:
                    return this.nodeValue;
                }
              },
              // Needed on browsers that do not proper accessors (e.g. old versions of Chrome)

              /** @this {Node} */
              set: function set(value) {
                if (typeof value === 'undefined' || value === null) {
                  value = '';
                }

                switch (this.nodeType) {
                  case Node.ELEMENT_NODE:
                  case Node.DOCUMENT_FRAGMENT_NODE:
                    clearNode(this); // Document fragments must have no childnodes if setting a blank string

                    if (value.length > 0 || this.nodeType === Node.ELEMENT_NODE) {
                      // Note: old Chrome versions require 2nd argument here
                      this[NATIVE_PREFIX$1 + 'insertBefore'](document.createTextNode(value), undefined);
                    }

                    break;

                  default:
                    // TODO(sorvell): can't do this if patch nodeValue.
                    this.nodeValue = value;
                    break;
                }
              }
            }
          });
        }

        copyProperties(Node.prototype, ['appendChild', 'insertBefore', 'removeChild', 'replaceChild', 'cloneNode', 'contains']);
        var ParentNodeWalkerDescriptors = {
          firstElementChild: {
            /** @this {ParentNode} */
            get: function get() {
              elementWalker.currentNode = this;
              return elementWalker.firstChild();
            }
          },
          lastElementChild: {
            /** @this {ParentNode} */
            get: function get() {
              elementWalker.currentNode = this;
              return elementWalker.lastChild();
            }
          },
          children: {
            /** @this {ParentNode} */
            get: function get() {
              var nodes = [];
              elementWalker.currentNode = this;
              var n = elementWalker.firstChild();

              while (n) {
                nodes.push(n);
                n = elementWalker.nextSibling();
              }

              return createPolyfilledHTMLCollection(nodes);
            }
          },
          childElementCount: {
            /** @this {ParentNode} */
            get: function get() {
              if (this.children) {
                return this.children.length;
              }

              return 0;
            }
          }
        }; // Element

        if (hasDescriptors) {
          copyProperties(Element.prototype, ParentNodeAccessors);
          copyProperties(Element.prototype, ['previousElementSibling', 'nextElementSibling', 'innerHTML']); // NOTE, on IE 11 / Edge 15 children and/or innerHTML are on HTMLElement instead of Element

          if (Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'children')) {
            copyProperties(HTMLElement.prototype, ['children']);
          }

          if (Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'innerHTML')) {
            copyProperties(HTMLElement.prototype, ['innerHTML']);
          }
        } else {
          defineNativeAccessors(Element.prototype, ParentNodeWalkerDescriptors);
          defineNativeAccessors(Element.prototype, {
            previousElementSibling: {
              /** @this {Element} */
              get: function get() {
                elementWalker.currentNode = this;
                return elementWalker.previousSibling();
              }
            },
            nextElementSibling: {
              /** @this {Element} */
              get: function get() {
                elementWalker.currentNode = this;
                return elementWalker.nextSibling();
              }
            },
            innerHTML: {
              /** @this {Element} */
              get: function get() {
                return getInnerHTML(this, function (n) {
                  return n[NATIVE_PREFIX$1 + 'childNodes'];
                });
              },
              // Needed on browsers that do not proper accessors (e.g. old versions of Chrome)

              /** @this {Element} */
              set: function set(value) {
                var content = this.localName === 'template' ?
                /** @type {HTMLTemplateElement} */
                this.content : this;
                clearNode(content);
                var containerName = this.localName || 'div';
                var htmlContainer;

                if (!this.namespaceURI || this.namespaceURI === inertDoc.namespaceURI) {
                  htmlContainer = inertDoc.createElement(containerName);
                } else {
                  htmlContainer = inertDoc.createElementNS(this.namespaceURI, containerName);
                }

                htmlContainer.innerHTML = value;
                var newContent = this.localName === 'template' ?
                /** @type {HTMLTemplateElement} */
                htmlContainer.content : htmlContainer;
                var firstChild;

                while (firstChild = newContent[NATIVE_PREFIX$1 + 'firstChild']) {
                  // Note: old Chrome versions require 2nd argument here
                  content[NATIVE_PREFIX$1 + 'insertBefore'](firstChild, undefined);
                }
              }
            }
          });
        }

        copyProperties(Element.prototype, ['setAttribute', 'getAttribute', 'hasAttribute', 'removeAttribute', // on older Safari, these are on Element.
        'focus', 'blur']);
        copyProperties(Element.prototype, ParentNodeMethods); // HTMLElement

        copyProperties(HTMLElement.prototype, ['focus', 'blur', // On IE these are on HTMLElement
        'contains']);

        if (hasDescriptors) {
          copyProperties(HTMLElement.prototype, ['parentElement', 'children', 'innerHTML']);
        } // HTMLTemplateElement


        if (window.HTMLTemplateElement) {
          copyProperties(window.HTMLTemplateElement.prototype, ['innerHTML']);
        } // DocumentFragment


        if (hasDescriptors) {
          // NOTE, IE 11 does not have on DocumentFragment
          // firstElementChild
          // lastElementChild
          copyProperties(DocumentFragment.prototype, ParentNodeAccessors);
        } else {
          defineNativeAccessors(DocumentFragment.prototype, ParentNodeWalkerDescriptors);
        }

        copyProperties(DocumentFragment.prototype, ParentNodeMethods); // Document

        if (hasDescriptors) {
          copyProperties(Document.prototype, ParentNodeAccessors);
          copyProperties(Document.prototype, ['activeElement']);
        } else {
          defineNativeAccessors(Document.prototype, ParentNodeWalkerDescriptors);
        }

        copyProperties(Document.prototype, ['importNode', 'getElementById']);
        copyProperties(Document.prototype, ParentNodeMethods);
      };

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      var InsideDescriptors = getOwnPropertyDescriptors({
        /** @this {Node} */
        get childNodes() {
          return this[SHADY_PREFIX + 'childNodes'];
        },

        /** @this {Node} */
        get firstChild() {
          return this[SHADY_PREFIX + 'firstChild'];
        },

        /** @this {Node} */
        get lastChild() {
          return this[SHADY_PREFIX + 'lastChild'];
        },

        /** @this {Node} */
        get textContent() {
          return this[SHADY_PREFIX + 'textContent'];
        },

        /** @this {Node} */
        set textContent(value) {
          this[SHADY_PREFIX + 'textContent'] = value;
        },

        /** @this {Node} */
        get childElementCount() {
          return this[SHADY_PREFIX + 'childElementCount'];
        },

        /** @this {Node} */
        get children() {
          return this[SHADY_PREFIX + 'children'];
        },

        /** @this {Node} */
        get firstElementChild() {
          return this[SHADY_PREFIX + 'firstElementChild'];
        },

        /** @this {Node} */
        get lastElementChild() {
          return this[SHADY_PREFIX + 'lastElementChild'];
        },

        /** @this {Node} */
        get innerHTML() {
          return this[SHADY_PREFIX + 'innerHTML'];
        },

        /** @this {Node} */
        set innerHTML(value) {
          return this[SHADY_PREFIX + 'innerHTML'] = value;
        },

        /** @this {Node} */
        get shadowRoot() {
          return this[SHADY_PREFIX + 'shadowRoot'];
        }

      });
      var OutsideDescriptors = getOwnPropertyDescriptors({
        /** @this {Node} */
        get parentElement() {
          return this[SHADY_PREFIX + 'parentElement'];
        },

        /** @this {Node} */
        get parentNode() {
          return this[SHADY_PREFIX + 'parentNode'];
        },

        /** @this {Node} */
        get nextSibling() {
          return this[SHADY_PREFIX + 'nextSibling'];
        },

        /** @this {Node} */
        get previousSibling() {
          return this[SHADY_PREFIX + 'previousSibling'];
        },

        /** @this {Node} */
        get nextElementSibling() {
          return this[SHADY_PREFIX + 'nextElementSibling'];
        },

        /** @this {Node} */
        get previousElementSibling() {
          return this[SHADY_PREFIX + 'previousElementSibling'];
        },

        /** @this {Node} */
        get className() {
          return this[SHADY_PREFIX + 'className'];
        },

        /** @this {Node} */
        set className(value) {
          return this[SHADY_PREFIX + 'className'] = value;
        }

      });

      for (var prop in InsideDescriptors) {
        InsideDescriptors[prop].enumerable = false;
      }

      for (var _prop in OutsideDescriptors) {
        OutsideDescriptors[_prop].enumerable = false;
      }

      var noInstancePatching = settings.hasDescriptors || settings.noPatch; // ensure an element has patched "outside" accessors; no-op when not needed

      var patchOutsideElementAccessors = noInstancePatching ? function () {} : function (element) {
        var sd = ensureShadyDataForNode(element);

        if (!sd.__outsideAccessors) {
          sd.__outsideAccessors = true;
          patchProperties(element, OutsideDescriptors);
        }
      }; // ensure an element has patched "inside" accessors; no-op when not needed

      var patchInsideElementAccessors = noInstancePatching ? function () {} : function (element) {
        var sd = ensureShadyDataForNode(element);

        if (!sd.__insideAccessors) {
          sd.__insideAccessors = true;
          patchProperties(element, InsideDescriptors);
        }
      };

      /*
      Make this name unique so it is unlikely to conflict with properties on objects passed to `addEventListener`
      https://github.com/webcomponents/shadydom/issues/173
      */

      var
      /** string */
      eventWrappersName = "__eventWrappers".concat(Date.now());
      /** @type {?function(!Event): boolean} */

      var composedGetter = function () {
        var composedProp = Object.getOwnPropertyDescriptor(Event.prototype, 'composed');
        return composedProp ? function (ev) {
          return composedProp.get.call(ev);
        } : null;
      }(); // https://github.com/w3c/webcomponents/issues/513#issuecomment-224183937


      var alwaysComposed = {
        'blur': true,
        'focus': true,
        'focusin': true,
        'focusout': true,
        'click': true,
        'dblclick': true,
        'mousedown': true,
        'mouseenter': true,
        'mouseleave': true,
        'mousemove': true,
        'mouseout': true,
        'mouseover': true,
        'mouseup': true,
        'wheel': true,
        'beforeinput': true,
        'input': true,
        'keydown': true,
        'keyup': true,
        'compositionstart': true,
        'compositionupdate': true,
        'compositionend': true,
        'touchstart': true,
        'touchend': true,
        'touchmove': true,
        'touchcancel': true,
        'pointerover': true,
        'pointerenter': true,
        'pointerdown': true,
        'pointermove': true,
        'pointerup': true,
        'pointercancel': true,
        'pointerout': true,
        'pointerleave': true,
        'gotpointercapture': true,
        'lostpointercapture': true,
        'dragstart': true,
        'drag': true,
        'dragenter': true,
        'dragleave': true,
        'dragover': true,
        'drop': true,
        'dragend': true,
        'DOMActivate': true,
        'DOMFocusIn': true,
        'DOMFocusOut': true,
        'keypress': true
      };
      var unpatchedEvents = {
        'DOMAttrModified': true,
        'DOMAttributeNameChanged': true,
        'DOMCharacterDataModified': true,
        'DOMElementNameChanged': true,
        'DOMNodeInserted': true,
        'DOMNodeInsertedIntoDocument': true,
        'DOMNodeRemoved': true,
        'DOMNodeRemovedFromDocument': true,
        'DOMSubtreeModified': true
        /**
         * Some EventTarget subclasses are not Node subclasses, and you cannot call
         * `getRootNode()` on them.
         *
         * @param {!(Node|EventTarget)} eventTarget
         * @return {!(Node|EventTarget)}
         */

      };

      function getRootNodeWithFallback(eventTarget) {
        if (eventTarget instanceof Node) {
          return eventTarget[SHADY_PREFIX + 'getRootNode']();
        } else {
          return eventTarget;
        }
      }

      function pathComposer(startNode, composed) {
        var composedPath = [];
        var current = startNode;
        var startRoot = getRootNodeWithFallback(startNode);

        while (current) {
          composedPath.push(current);

          if (current[SHADY_PREFIX + 'assignedSlot']) {
            current = current[SHADY_PREFIX + 'assignedSlot'];
          } else if (current.nodeType === Node.DOCUMENT_FRAGMENT_NODE && current.host && (composed || current !== startRoot)) {
            current = current.host;
          } else {
            current = current[SHADY_PREFIX + 'parentNode'];
          }
        } // event composedPath includes window when startNode's ownerRoot is document


        if (composedPath[composedPath.length - 1] === document) {
          composedPath.push(window);
        }

        return composedPath;
      }

      var composedPath = function composedPath(event) {
        if (!event.__composedPath) {
          event.__composedPath = pathComposer(event.target, true);
        }

        return event.__composedPath;
      };

      function retarget(refNode, path) {
        if (!isShadyRoot) {
          return refNode;
        } // If ANCESTOR's root is not a shadow root or ANCESTOR's root is BASE's
        // shadow-including inclusive ancestor, return ANCESTOR.


        var refNodePath = pathComposer(refNode, true);
        var p$ = path;

        for (var i = 0, ancestor, lastRoot, root, rootIdx; i < p$.length; i++) {
          ancestor = p$[i];
          root = getRootNodeWithFallback(ancestor);

          if (root !== lastRoot) {
            rootIdx = refNodePath.indexOf(root);
            lastRoot = root;
          }

          if (!isShadyRoot(root) || rootIdx > -1) {
            return ancestor;
          }
        }
      }

      var EventPatches = {
        /**
         * @this {Event}
         */
        get composed() {
          if (this.__composed === undefined) {
            // if there's an original `composed` getter on the Event prototype, use that
            if (composedGetter) {
              // TODO(web-padawan): see https://github.com/webcomponents/shadydom/issues/275
              this.__composed = this.type === 'focusin' || this.type === 'focusout' || composedGetter(this); // If the event is trusted, or `isTrusted` is not supported, check the list of always composed events
            } else if (this.isTrusted !== false) {
              this.__composed = alwaysComposed[this.type];
            }
          }

          return (
            /** @type {!Event} */
            this.__composed || false
          );
        },

        /**
         * @this {Event}
         */
        composedPath: function composedPath() {
          if (!this.__composedPath) {
            this.__composedPath = pathComposer(this['__target'], this.composed);
          }

          return (
            /** @type {!Event} */
            this.__composedPath
          );
        },

        /**
         * @this {Event}
         */
        get target() {
          return retarget(this.currentTarget || this['__previousCurrentTarget'], this.composedPath());
        },

        // http://w3c.github.io/webcomponents/spec/shadow/#event-relatedtarget-retargeting

        /**
         * @this {Event}
         */
        get relatedTarget() {
          if (!this.__relatedTarget) {
            return null;
          }

          if (!this.__relatedTargetComposedPath) {
            this.__relatedTargetComposedPath = pathComposer(this.__relatedTarget, true);
          } // find the deepest node in relatedTarget composed path that is in the same root with the currentTarget


          return retarget(this.currentTarget || this['__previousCurrentTarget'],
          /** @type {!Event} */
          this.__relatedTargetComposedPath);
        },

        /**
         * @this {Event}
         */
        stopPropagation: function stopPropagation() {
          Event.prototype.stopPropagation.call(this);
          this.__propagationStopped = true;
        },

        /**
         * @this {Event}
         */
        stopImmediatePropagation: function stopImmediatePropagation() {
          Event.prototype.stopImmediatePropagation.call(this);
          this.__immediatePropagationStopped = true;
          this.__propagationStopped = true;
        }
      };

      function mixinComposedFlag(Base) {
        // NOTE: avoiding use of `class` here so that transpiled output does not
        // try to do `Base.call` with a dom construtor.
        var klazz = function klazz(type, options) {
          var event = new Base(type, options);
          event.__composed = options && Boolean(options['composed']);
          return event;
        }; // put constructor properties on subclass


        klazz.__proto__ = Base;
        klazz.prototype = Base.prototype;
        return klazz;
      }

      var nonBubblingEventsToRetarget = {
        'focus': true,
        'blur': true
      };
      /**
       * Check if the event has been retargeted by comparing original `target`, and calculated `target`
       * @param {Event} event
       * @return {boolean} True if the original target and calculated target are the same
       */

      function hasRetargeted(event) {
        return event['__target'] !== event.target || event.__relatedTarget !== event.relatedTarget;
      }
      /**
       *
       * @param {Event} event
       * @param {Node} node
       * @param {string} phase
       */


      function fireHandlers(event, node, phase) {
        var hs = node.__handlers && node.__handlers[event.type] && node.__handlers[event.type][phase];

        if (hs) {
          for (var i = 0, fn; fn = hs[i]; i++) {
            if (hasRetargeted(event) && event.target === event.relatedTarget) {
              return;
            }

            fn.call(node, event);

            if (event.__immediatePropagationStopped) {
              return;
            }
          }
        }
      }

      function retargetNonBubblingEvent(e) {
        var path = e.composedPath();
        var node; // override `currentTarget` to let patched `target` calculate correctly

        Object.defineProperty(e, 'currentTarget', {
          get: function get() {
            return node;
          },
          configurable: true
        });

        for (var i = path.length - 1; i >= 0; i--) {
          node = path[i]; // capture phase fires all capture handlers

          fireHandlers(e, node, 'capture');

          if (e.__propagationStopped) {
            return;
          }
        } // set the event phase to `AT_TARGET` as in spec


        Object.defineProperty(e, 'eventPhase', {
          get: function get() {
            return Event.AT_TARGET;
          }
        }); // the event only needs to be fired when owner roots change when iterating the event path
        // keep track of the last seen owner root

        var lastFiredRoot;

        for (var _i = 0; _i < path.length; _i++) {
          node = path[_i];
          var nodeData = shadyDataForNode(node);
          var root = nodeData && nodeData.root;

          if (_i === 0 || root && root === lastFiredRoot) {
            fireHandlers(e, node, 'bubble'); // don't bother with window, it doesn't have `getRootNode` and will be last in the path anyway

            if (node !== window) {
              lastFiredRoot = node[SHADY_PREFIX + 'getRootNode']();
            }

            if (e.__propagationStopped) {
              return;
            }
          }
        }
      }

      function listenerSettingsEqual(savedListener, node, type, capture, once, passive) {
        var savedNode = savedListener.node,
            savedType = savedListener.type,
            savedCapture = savedListener.capture,
            savedOnce = savedListener.once,
            savedPassive = savedListener.passive;
        return node === savedNode && type === savedType && capture === savedCapture && once === savedOnce && passive === savedPassive;
      }

      function findListener(wrappers, node, type, capture, once, passive) {
        for (var i = 0; i < wrappers.length; i++) {
          if (listenerSettingsEqual(wrappers[i], node, type, capture, once, passive)) {
            return i;
          }
        }

        return -1;
      }
      /**
       * Firefox can throw on accessing eventWrappers inside of `removeEventListener` during a selenium run
       * Try/Catch accessing eventWrappers to work around
       * https://bugzilla.mozilla.org/show_bug.cgi?id=1353074
       */

      function getEventWrappers(eventLike) {
        var wrappers = null;

        try {
          wrappers = eventLike[eventWrappersName];
        } catch (e) {} // eslint-disable-line no-empty


        return wrappers;
      }
      /**
       * @this {EventTarget}
       */


      function addEventListener(type, fnOrObj, optionsOrCapture) {
        if (!fnOrObj) {
          return;
        }

        var handlerType = _typeof(fnOrObj); // bail if `fnOrObj` is not a function, not an object


        if (handlerType !== 'function' && handlerType !== 'object') {
          return;
        } // bail if `fnOrObj` is an object without a `handleEvent` method


        if (handlerType === 'object' && (!fnOrObj.handleEvent || typeof fnOrObj.handleEvent !== 'function')) {
          return;
        }

        if (unpatchedEvents[type]) {
          return this[NATIVE_PREFIX + 'addEventListener'](type, fnOrObj, optionsOrCapture);
        } // The callback `fn` might be used for multiple nodes/events. Since we generate
        // a wrapper function, we need to keep track of it when we remove the listener.
        // It's more efficient to store the node/type/options information as Array in
        // `fn` itself rather than the node (we assume that the same callback is used
        // for few nodes at most, whereas a node will likely have many event listeners).
        // NOTE(valdrin) invoking external functions is costly, inline has better perf.


        var capture, once, passive;

        if (optionsOrCapture && _typeof(optionsOrCapture) === 'object') {
          capture = Boolean(optionsOrCapture.capture);
          once = Boolean(optionsOrCapture.once);
          passive = Boolean(optionsOrCapture.passive);
        } else {
          capture = Boolean(optionsOrCapture);
          once = false;
          passive = false;
        } // hack to let ShadyRoots have event listeners
        // event listener will be on host, but `currentTarget`
        // will be set to shadyroot for event listener


        var target = optionsOrCapture && optionsOrCapture.__shadyTarget || this;
        var wrappers = fnOrObj[eventWrappersName];

        if (wrappers) {
          // Stop if the wrapper function has already been created.
          if (findListener(wrappers, target, type, capture, once, passive) > -1) {
            return;
          }
        } else {
          fnOrObj[eventWrappersName] = [];
        }
        /**
         * @this {HTMLElement}
         * @param {Event} e
         */


        var wrapperFn = function wrapperFn(e) {
          // Support `once` option.
          if (once) {
            this[SHADY_PREFIX + 'removeEventListener'](type, fnOrObj, optionsOrCapture);
          }

          if (!e['__target']) {
            patchEvent(e);
          }

          var lastCurrentTargetDesc;

          if (target !== this) {
            // replace `currentTarget` to make `target` and `relatedTarget` correct for inside the shadowroot
            lastCurrentTargetDesc = Object.getOwnPropertyDescriptor(e, 'currentTarget');
            Object.defineProperty(e, 'currentTarget', {
              get: function get() {
                return target;
              },
              configurable: true
            });
          }

          e['__previousCurrentTarget'] = e['currentTarget']; // Always check if a shadowRoot is in the current event path.
          // If it is not, the event was generated on either the host of the shadowRoot
          // or a children of the host.

          if (isShadyRoot(target) && e.composedPath().indexOf(target) == -1) {
            return;
          } // There are two critera that should stop events from firing on this node
          // 1. the event is not composed and the current node is not in the same root as the target
          // 2. when bubbling, if after retargeting, relatedTarget and target point to the same node


          if (e.composed || e.composedPath().indexOf(target) > -1) {
            if (hasRetargeted(e) && e.target === e.relatedTarget) {
              if (e.eventPhase === Event.BUBBLING_PHASE) {
                e.stopImmediatePropagation();
              }

              return;
            } // prevent non-bubbling events from triggering bubbling handlers on shadowroot, but only if not in capture phase


            if (e.eventPhase !== Event.CAPTURING_PHASE && !e.bubbles && e.target !== target && !(target instanceof Window)) {
              return;
            }

            var ret = handlerType === 'function' ? fnOrObj.call(target, e) : fnOrObj.handleEvent && fnOrObj.handleEvent(e);

            if (target !== this) {
              // replace the "correct" `currentTarget`
              if (lastCurrentTargetDesc) {
                Object.defineProperty(e, 'currentTarget', lastCurrentTargetDesc);
                lastCurrentTargetDesc = null;
              } else {
                delete e['currentTarget'];
              }
            }

            return ret;
          }
        }; // Store the wrapper information.


        fnOrObj[eventWrappersName].push({
          // note: use target here which is either a shadowRoot
          // (when the host element is proxy'ing the event) or this element
          node: target,
          type: type,
          capture: capture,
          once: once,
          passive: passive,
          wrapperFn: wrapperFn
        });

        if (nonBubblingEventsToRetarget[type]) {
          this.__handlers = this.__handlers || {};
          this.__handlers[type] = this.__handlers[type] || {
            'capture': [],
            'bubble': []
          };

          this.__handlers[type][capture ? 'capture' : 'bubble'].push(wrapperFn);
        } else {
          this[NATIVE_PREFIX + 'addEventListener'](type, wrapperFn, optionsOrCapture);
        }
      }
      /**
       * @this {EventTarget}
       */

      function removeEventListener(type, fnOrObj, optionsOrCapture) {
        if (!fnOrObj) {
          return;
        }

        if (unpatchedEvents[type]) {
          return this[NATIVE_PREFIX + 'removeEventListener'](type, fnOrObj, optionsOrCapture);
        } // NOTE(valdrin) invoking external functions is costly, inline has better perf.


        var capture, once, passive;

        if (optionsOrCapture && _typeof(optionsOrCapture) === 'object') {
          capture = Boolean(optionsOrCapture.capture);
          once = Boolean(optionsOrCapture.once);
          passive = Boolean(optionsOrCapture.passive);
        } else {
          capture = Boolean(optionsOrCapture);
          once = false;
          passive = false;
        }

        var target = optionsOrCapture && optionsOrCapture.__shadyTarget || this; // Search the wrapped function.

        var wrapperFn = undefined;
        var wrappers = getEventWrappers(fnOrObj);

        if (wrappers) {
          var idx = findListener(wrappers, target, type, capture, once, passive);

          if (idx > -1) {
            wrapperFn = wrappers.splice(idx, 1)[0].wrapperFn; // Cleanup.

            if (!wrappers.length) {
              fnOrObj[eventWrappersName] = undefined;
            }
          }
        }

        this[NATIVE_PREFIX + 'removeEventListener'](type, wrapperFn || fnOrObj, optionsOrCapture);

        if (wrapperFn && nonBubblingEventsToRetarget[type] && this.__handlers && this.__handlers[type]) {
          var arr = this.__handlers[type][capture ? 'capture' : 'bubble'];

          var _idx = arr.indexOf(wrapperFn);

          if (_idx > -1) {
            arr.splice(_idx, 1);
          }
        }
      }

      function activateFocusEventOverrides() {
        for (var ev in nonBubblingEventsToRetarget) {
          window[NATIVE_PREFIX + 'addEventListener'](ev, function (e) {
            if (!e['__target']) {
              patchEvent(e);
              retargetNonBubblingEvent(e);
            }
          }, true);
        }
      }

      var EventPatchesDescriptors = getOwnPropertyDescriptors(EventPatches);
      var SHADY_PROTO = '__shady_patchedProto';
      var SHADY_SOURCE_PROTO = '__shady_sourceProto';

      function patchEvent(event) {
        event['__target'] = event.target;
        event.__relatedTarget = event.relatedTarget; // attempt to patch prototype (via cache)

        if (settings.hasDescriptors) {
          var proto = Object.getPrototypeOf(event);

          if (!Object.hasOwnProperty(proto, SHADY_PROTO)) {
            var patchedProto = Object.create(proto);
            patchedProto[SHADY_SOURCE_PROTO] = proto;
            patchProperties(patchedProto, EventPatchesDescriptors);
            proto[SHADY_PROTO] = patchedProto;
          }

          event.__proto__ = proto[SHADY_PROTO]; // and fallback to patching instance
        } else {
          patchProperties(event, EventPatchesDescriptors);
        }
      }

      var PatchedEvent = mixinComposedFlag(Event);
      var PatchedCustomEvent = mixinComposedFlag(CustomEvent);
      var PatchedMouseEvent = mixinComposedFlag(MouseEvent);
      function patchEvents() {
        activateFocusEventOverrides();
        window.Event = PatchedEvent;
        window.CustomEvent = PatchedCustomEvent;
        window.MouseEvent = PatchedMouseEvent;
      }
      function patchClick() {
        // Fix up `Element.prototype.click()` if `isTrusted` is supported, but `composed` isn't
        if (!composedGetter && Object.getOwnPropertyDescriptor(Event.prototype, 'isTrusted')) {
          /** @this {Element} */
          var composedClickFn = function composedClickFn() {
            var ev = new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
              composed: true
            });
            this[SHADY_PREFIX + 'dispatchEvent'](ev);
          };

          if (Element.prototype.click) {
            Element.prototype.click = composedClickFn;
          } else if (HTMLElement.prototype.click) {
            HTMLElement.prototype.click = composedClickFn;
          }
        }
      }
      var eventPropertyNames = Object.getOwnPropertyNames(Document.prototype).filter(function (name) {
        return name.substring(0, 2) === 'on';
      });

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      function newSplice(index, removed, addedCount) {
        return {
          index: index,
          removed: removed,
          addedCount: addedCount
        };
      }

      var EDIT_LEAVE = 0;
      var EDIT_UPDATE = 1;
      var EDIT_ADD = 2;
      var EDIT_DELETE = 3; // Note: This function is *based* on the computation of the Levenshtein
      // "edit" distance. The one change is that "updates" are treated as two
      // edits - not one. With Array splices, an update is really a delete
      // followed by an add. By retaining this, we optimize for "keeping" the
      // maximum array items in the original array. For example:
      //
      //   'xxxx123' -> '123yyyy'
      //
      // With 1-edit updates, the shortest path would be just to update all seven
      // characters. With 2-edit updates, we delete 4, leave 3, and add 4. This
      // leaves the substring '123' intact.

      function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
        // "Deletion" columns
        var rowCount = oldEnd - oldStart + 1;
        var columnCount = currentEnd - currentStart + 1;
        var distances = new Array(rowCount); // "Addition" rows. Initialize null column.

        for (var i = 0; i < rowCount; i++) {
          distances[i] = new Array(columnCount);
          distances[i][0] = i;
        } // Initialize null row


        for (var j = 0; j < columnCount; j++) {
          distances[0][j] = j;
        }

        for (var _i = 1; _i < rowCount; _i++) {
          for (var _j = 1; _j < columnCount; _j++) {
            if (equals(current[currentStart + _j - 1], old[oldStart + _i - 1])) distances[_i][_j] = distances[_i - 1][_j - 1];else {
              var north = distances[_i - 1][_j] + 1;
              var west = distances[_i][_j - 1] + 1;
              distances[_i][_j] = north < west ? north : west;
            }
          }
        }

        return distances;
      } // This starts at the final weight, and walks "backward" by finding
      // the minimum previous weight recursively until the origin of the weight
      // matrix.


      function spliceOperationsFromEditDistances(distances) {
        var i = distances.length - 1;
        var j = distances[0].length - 1;
        var current = distances[i][j];
        var edits = [];

        while (i > 0 || j > 0) {
          if (i == 0) {
            edits.push(EDIT_ADD);
            j--;
            continue;
          }

          if (j == 0) {
            edits.push(EDIT_DELETE);
            i--;
            continue;
          }

          var northWest = distances[i - 1][j - 1];
          var west = distances[i - 1][j];
          var north = distances[i][j - 1];
          var min = void 0;
          if (west < north) min = west < northWest ? west : northWest;else min = north < northWest ? north : northWest;

          if (min == northWest) {
            if (northWest == current) {
              edits.push(EDIT_LEAVE);
            } else {
              edits.push(EDIT_UPDATE);
              current = northWest;
            }

            i--;
            j--;
          } else if (min == west) {
            edits.push(EDIT_DELETE);
            i--;
            current = west;
          } else {
            edits.push(EDIT_ADD);
            j--;
            current = north;
          }
        }

        edits.reverse();
        return edits;
      }
      /**
       * Splice Projection functions:
       *
       * A splice map is a representation of how a previous array of items
       * was transformed into a new array of items. Conceptually it is a list of
       * tuples of
       *
       *   <index, removed, addedCount>
       *
       * which are kept in ascending index order of. The tuple represents that at
       * the |index|, |removed| sequence of items were removed, and counting forward
       * from |index|, |addedCount| items were added.
       */

      /**
       * Lacking individual splice mutation information, the minimal set of
       * splices can be synthesized given the previous state and final state of an
       * array. The basic approach is to calculate the edit distance matrix and
       * choose the shortest path through it.
       *
       * Complexity: O(l * p)
       *   l: The length of the current array
       *   p: The length of the old array
       */


      function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
        var prefixCount = 0;
        var suffixCount = 0;
        var splice;
        var minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
        if (currentStart == 0 && oldStart == 0) prefixCount = sharedPrefix(current, old, minLength);
        if (currentEnd == current.length && oldEnd == old.length) suffixCount = sharedSuffix(current, old, minLength - prefixCount);
        currentStart += prefixCount;
        oldStart += prefixCount;
        currentEnd -= suffixCount;
        oldEnd -= suffixCount;
        if (currentEnd - currentStart == 0 && oldEnd - oldStart == 0) return [];

        if (currentStart == currentEnd) {
          splice = newSplice(currentStart, [], 0);

          while (oldStart < oldEnd) {
            splice.removed.push(old[oldStart++]);
          }

          return [splice];
        } else if (oldStart == oldEnd) return [newSplice(currentStart, [], currentEnd - currentStart)];

        var ops = spliceOperationsFromEditDistances(calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));
        splice = undefined;
        var splices = [];
        var index = currentStart;
        var oldIndex = oldStart;

        for (var i = 0; i < ops.length; i++) {
          switch (ops[i]) {
            case EDIT_LEAVE:
              if (splice) {
                splices.push(splice);
                splice = undefined;
              }

              index++;
              oldIndex++;
              break;

            case EDIT_UPDATE:
              if (!splice) splice = newSplice(index, [], 0);
              splice.addedCount++;
              index++;
              splice.removed.push(old[oldIndex]);
              oldIndex++;
              break;

            case EDIT_ADD:
              if (!splice) splice = newSplice(index, [], 0);
              splice.addedCount++;
              index++;
              break;

            case EDIT_DELETE:
              if (!splice) splice = newSplice(index, [], 0);
              splice.removed.push(old[oldIndex]);
              oldIndex++;
              break;
          }
        }

        if (splice) {
          splices.push(splice);
        }

        return splices;
      }

      function sharedPrefix(current, old, searchLength) {
        for (var i = 0; i < searchLength; i++) {
          if (!equals(current[i], old[i])) return i;
        }

        return searchLength;
      }

      function sharedSuffix(current, old, searchLength) {
        var index1 = current.length;
        var index2 = old.length;
        var count = 0;

        while (count < searchLength && equals(current[--index1], old[--index2])) {
          count++;
        }

        return count;
      }

      function equals(currentValue, previousValue) {
        return currentValue === previousValue;
      }

      function calculateSplices(current, previous) {
        return calcSplices(current, 0, current.length, previous, 0, previous.length);
      }

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */

      function linkNode(node, container, ref_node) {
        patchOutsideElementAccessors(node);
        ref_node = ref_node || null;
        var nodeData = ensureShadyDataForNode(node);
        var containerData = ensureShadyDataForNode(container);
        var ref_nodeData = ref_node ? ensureShadyDataForNode(ref_node) : null; // update ref_node.previousSibling <-> node

        nodeData.previousSibling = ref_node ? ref_nodeData.previousSibling : container[SHADY_PREFIX + 'lastChild'];
        var psd = shadyDataForNode(nodeData.previousSibling);

        if (psd) {
          psd.nextSibling = node;
        } // update node <-> ref_node


        var nsd = shadyDataForNode(nodeData.nextSibling = ref_node);

        if (nsd) {
          nsd.previousSibling = node;
        } // update node <-> container


        nodeData.parentNode = container;

        if (ref_node) {
          if (ref_node === containerData.firstChild) {
            containerData.firstChild = node;
          }
        } else {
          containerData.lastChild = node;

          if (!containerData.firstChild) {
            containerData.firstChild = node;
          }
        } // remove caching of childNodes


        containerData.childNodes = null;
      }

      var recordInsertBefore = function recordInsertBefore(node, container, ref_node) {
        patchInsideElementAccessors(container);
        var containerData = ensureShadyDataForNode(container);

        if (containerData.firstChild !== undefined) {
          containerData.childNodes = null;
        } // handle document fragments


        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          var c$ = node[SHADY_PREFIX + 'childNodes'];

          for (var i = 0; i < c$.length; i++) {
            linkNode(c$[i], container, ref_node);
          } // cleanup logical dom in doc fragment.


          var nodeData = ensureShadyDataForNode(node);
          var resetTo = nodeData.firstChild !== undefined ? null : undefined;
          nodeData.firstChild = nodeData.lastChild = resetTo;
          nodeData.childNodes = resetTo;
        } else {
          linkNode(node, container, ref_node);
        }
      };
      var recordRemoveChild = function recordRemoveChild(node, container) {
        var nodeData = ensureShadyDataForNode(node);
        var containerData = ensureShadyDataForNode(container);

        if (node === containerData.firstChild) {
          containerData.firstChild = nodeData.nextSibling;
        }

        if (node === containerData.lastChild) {
          containerData.lastChild = nodeData.previousSibling;
        }

        var p = nodeData.previousSibling;
        var n = nodeData.nextSibling;

        if (p) {
          ensureShadyDataForNode(p).nextSibling = n;
        }

        if (n) {
          ensureShadyDataForNode(n).previousSibling = p;
        } // When an element is removed, logical data is no longer tracked.
        // Explicitly set `undefined` here to indicate this. This is disginguished
        // from `null` which is set if info is null.


        nodeData.parentNode = nodeData.previousSibling = nodeData.nextSibling = undefined;

        if (containerData.childNodes !== undefined) {
          // remove caching of childNodes
          containerData.childNodes = null;
        }
      };
      /**
       * @param  {!Node} node
       */

      var recordChildNodes = function recordChildNodes(node) {
        var nodeData = ensureShadyDataForNode(node);

        if (nodeData.firstChild === undefined) {
          // remove caching of childNodes
          nodeData.childNodes = null;
          var first = nodeData.firstChild = node[NATIVE_PREFIX + 'firstChild'] || null;
          nodeData.lastChild = node[NATIVE_PREFIX + 'lastChild'] || null;
          patchInsideElementAccessors(node);

          for (var n = first, previous; n; n = n[NATIVE_PREFIX + 'nextSibling']) {
            var sd = ensureShadyDataForNode(n);
            sd.parentNode = node;
            sd.nextSibling = n[NATIVE_PREFIX + 'nextSibling'] || null;
            sd.previousSibling = previous || null;
            previous = n;
            patchOutsideElementAccessors(n);
          }
        }
      };

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      var scopingShim = null;
      function getScopingShim() {
        if (!scopingShim) {
          scopingShim = window['ShadyCSS'] && window['ShadyCSS']['ScopingShim'];
        }

        return scopingShim || null;
      }
      /**
       * @param {!Node} node
       * @param {string} attr
       * @param {string} value
       */

      function scopeClassAttribute(node, attr, value) {
        var scopingShim = getScopingShim();

        if (scopingShim && attr === 'class') {
          scopingShim['setElementClass'](node, value);
          return true;
        }

        return false;
      }
      /**
       * @param {!Node} node
       * @param {string} newScopeName
       */

      function addShadyScoping(node, newScopeName) {
        var scopingShim = getScopingShim();

        if (!scopingShim) {
          return;
        }

        scopingShim['scopeNode'](node, newScopeName);
      }
      /**
       * @param {!Node} node
       * @param {string} currentScopeName
       */

      function removeShadyScoping(node, currentScopeName) {
        var scopingShim = getScopingShim();

        if (!scopingShim) {
          return;
        }

        scopingShim['unscopeNode'](node, currentScopeName);
      }
      /**
       * @param {!Node} node
       * @param {string} newScopeName
       * @param {string} oldScopeName
       */

      function replaceShadyScoping(node, newScopeName, oldScopeName) {
        var scopingShim = getScopingShim();

        if (!scopingShim) {
          return;
        }

        if (oldScopeName) {
          removeShadyScoping(node, oldScopeName);
        }

        addShadyScoping(node, newScopeName);
      }
      /**
       * @param {!Node} node
       * @param {string} newScopeName
       * @return {boolean}
       */

      function currentScopeIsCorrect(node, newScopeName) {
        var scopingShim = getScopingShim();

        if (!scopingShim) {
          return true;
        }

        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          // NOTE: as an optimization, only check that all the top-level children
          // have the correct scope.
          var correctScope = true;
          var childNodes = node[SHADY_PREFIX + 'childNodes'];

          for (var idx = 0; correctScope && idx < childNodes.length; idx++) {
            correctScope = correctScope && currentScopeIsCorrect(childNodes[idx], newScopeName);
          }

          return correctScope;
        }

        if (node.nodeType !== Node.ELEMENT_NODE) {
          return true;
        }

        var currentScope = scopingShim['currentScopeForNode'](node);
        return currentScope === newScopeName;
      }
      /**
       * @param {!Node} node
       * @return {string}
       */

      function currentScopeForNode(node) {
        if (node.nodeType !== Node.ELEMENT_NODE) {
          return '';
        }

        var scopingShim = getScopingShim();

        if (!scopingShim) {
          return '';
        }

        return scopingShim['currentScopeForNode'](node);
      }
      /**
       * Walk over a node's tree and apply visitorFn to each element node
       *
       * @param {Node} node
       * @param {function(!Node):void} visitorFn
       */

      function treeVisitor(node, visitorFn) {
        if (!node) {
          return;
        } // this check is necessary if `node` is a Document Fragment


        if (node.nodeType === Node.ELEMENT_NODE) {
          visitorFn(node);
        }

        var childNodes = node[SHADY_PREFIX + 'childNodes'];

        for (var idx = 0, n; idx < childNodes.length; idx++) {
          n = childNodes[idx];

          if (n.nodeType === Node.ELEMENT_NODE) {
            treeVisitor(n, visitorFn);
          }
        }
      }

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      var doc = window.document;
      var preferPerformance = settings.preferPerformance;
      var nativeIsConnectedAccessors =
      /** @type {ObjectPropertyDescriptor} */
      Object.getOwnPropertyDescriptor(Node.prototype, 'isConnected');
      var nativeIsConnected = nativeIsConnectedAccessors && nativeIsConnectedAccessors.get;
      function clearNode$1(node) {
        var firstChild;

        while (firstChild = node[SHADY_PREFIX + 'firstChild']) {
          node[SHADY_PREFIX + 'removeChild'](firstChild);
        }
      }

      function removeOwnerShadyRoot(node) {
        // optimization: only reset the tree if node is actually in a root
        if (hasCachedOwnerRoot(node)) {
          var c$ = node[SHADY_PREFIX + 'childNodes'];

          for (var i = 0, l = c$.length, n; i < l && (n = c$[i]); i++) {
            removeOwnerShadyRoot(n);
          }
        }

        var nodeData = shadyDataForNode(node);

        if (nodeData) {
          nodeData.ownerShadyRoot = undefined;
        }
      }

      function hasCachedOwnerRoot(node) {
        var nodeData = shadyDataForNode(node);
        return Boolean(nodeData && nodeData.ownerShadyRoot !== undefined);
      }
      /**
       * Finds the first flattened node that is composed in the node's parent.
       * If the given node is a slot, then the first flattened node is returned
       * if it exists, otherwise advance to the node's nextSibling.
       * @param {Node} node within which to find first composed node
       * @returns {Node} first composed node
       */


      function firstComposedNode(node) {
        var composed = node;

        if (node && node.localName === 'slot') {
          var nodeData = shadyDataForNode(node);
          var flattened = nodeData && nodeData.flattenedNodes;
          composed = flattened && flattened.length ? flattened[0] : firstComposedNode(node[SHADY_PREFIX + 'nextSibling']);
        }

        return composed;
      }
      /**
       * @param {Node} node
       * @param {Node=} addedNode
       * @param {Node=} removedNode
       */


      function scheduleObserver(node, addedNode, removedNode) {
        var nodeData = shadyDataForNode(node);
        var observer = nodeData && nodeData.observer;

        if (observer) {
          if (addedNode) {
            observer.addedNodes.push(addedNode);
          }

          if (removedNode) {
            observer.removedNodes.push(removedNode);
          }

          observer.schedule();
        }
      }

      var NodePatches = getOwnPropertyDescriptors({
        /** @this {Node} */
        get parentNode() {
          var nodeData = shadyDataForNode(this);
          var l = nodeData && nodeData.parentNode;
          return l !== undefined ? l : this[NATIVE_PREFIX + 'parentNode'];
        },

        /** @this {Node} */
        get firstChild() {
          var nodeData = shadyDataForNode(this);
          var l = nodeData && nodeData.firstChild;
          return l !== undefined ? l : this[NATIVE_PREFIX + 'firstChild'];
        },

        /** @this {Node} */
        get lastChild() {
          var nodeData = shadyDataForNode(this);
          var l = nodeData && nodeData.lastChild;
          return l !== undefined ? l : this[NATIVE_PREFIX + 'lastChild'];
        },

        /** @this {Node} */
        get nextSibling() {
          var nodeData = shadyDataForNode(this);
          var l = nodeData && nodeData.nextSibling;
          return l !== undefined ? l : this[NATIVE_PREFIX + 'nextSibling'];
        },

        /** @this {Node} */
        get previousSibling() {
          var nodeData = shadyDataForNode(this);
          var l = nodeData && nodeData.previousSibling;
          return l !== undefined ? l : this[NATIVE_PREFIX + 'previousSibling'];
        },

        /** @this {Node} */
        get childNodes() {
          var childNodes;

          if (isTrackingLogicalChildNodes(this)) {
            var nodeData = shadyDataForNode(this);

            if (!nodeData.childNodes) {
              nodeData.childNodes = [];

              for (var n = this[SHADY_PREFIX + 'firstChild']; n; n = n[SHADY_PREFIX + 'nextSibling']) {
                nodeData.childNodes.push(n);
              }
            }

            childNodes = nodeData.childNodes;
          } else {
            childNodes = this[NATIVE_PREFIX + 'childNodes'];
          }

          childNodes.item = function (index) {
            return childNodes[index];
          };

          return childNodes;
        },

        /** @this {Node} */
        get parentElement() {
          var nodeData = shadyDataForNode(this);
          var l = nodeData && nodeData.parentNode;

          if (l && l.nodeType !== Node.ELEMENT_NODE) {
            l = null;
          }

          return l !== undefined ? l : this[NATIVE_PREFIX + 'parentElement'];
        },

        /** @this {Node} */
        get isConnected() {
          if (nativeIsConnected && nativeIsConnected.call(this)) {
            return true;
          }

          if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) {
            return false;
          } // Fast path for distributed nodes.


          var ownerDocument = this.ownerDocument;

          if (hasDocumentContains) {
            if (ownerDocument[NATIVE_PREFIX + 'contains'](this)) {
              return true;
            }
          } else if (ownerDocument.documentElement && ownerDocument.documentElement[NATIVE_PREFIX + 'contains'](this)) {
            return true;
          } // Slow path for non-distributed nodes.


          var node = this;

          while (node && !(node instanceof Document)) {
            node = node[SHADY_PREFIX + 'parentNode'] || (isShadyRoot(node) ?
            /** @type {ShadowRoot} */
            node.host : undefined);
          }

          return !!(node && node instanceof Document);
        },

        /** @this {Node} */
        get textContent() {
          if (isTrackingLogicalChildNodes(this)) {
            var tc = [];

            for (var i = 0, cn = this[SHADY_PREFIX + 'childNodes'], c; c = cn[i]; i++) {
              if (c.nodeType !== Node.COMMENT_NODE) {
                tc.push(c[SHADY_PREFIX + 'textContent']);
              }
            }

            return tc.join('');
          } else {
            return this[NATIVE_PREFIX + 'textContent'];
          }
        },

        /**
         * @this {Node}
         * @param {string} value
         */
        set textContent(value) {
          if (typeof value === 'undefined' || value === null) {
            value = '';
          }

          switch (this.nodeType) {
            case Node.ELEMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
              if (!isTrackingLogicalChildNodes(this) && settings.hasDescriptors) {
                // may be removing a nested slot but fast path if we know we are not.
                var firstChild = this[SHADY_PREFIX + 'firstChild'];

                if (firstChild != this[SHADY_PREFIX + 'lastChild'] || firstChild && firstChild.nodeType != Node.TEXT_NODE) {
                  clearNode$1(this);
                }

                this[NATIVE_PREFIX + 'textContent'] = value;
              } else {
                clearNode$1(this); // Document fragments must have no childNodes if setting a blank string

                if (value.length > 0 || this.nodeType === Node.ELEMENT_NODE) {
                  this[SHADY_PREFIX + 'insertBefore'](document.createTextNode(value));
                }
              }

              break;

            default:
              // Note, be wary of patching `nodeValue`.
              this.nodeValue = value;
              break;
          }
        },

        // Patched `insertBefore`. Note that all mutations that add nodes are routed
        // here. When a <slot> is added or a node is added to a host with a shadowRoot
        // with a slot, a standard dom `insert` call is aborted and `_asyncRender`
        // is called on the relevant shadowRoot. In all other cases, a standard dom
        // `insert` can be made, but the location and ref_node may need to be changed.

        /**
         * @this {Node}
         * @param {Node} node
         * @param {Node=} ref_node
         */
        insertBefore: function insertBefore(node, ref_node) {
          // optimization: assume native insertBefore is ok if the nodes are not in the document.
          if (this.ownerDocument !== doc && node.ownerDocument !== doc) {
            this[NATIVE_PREFIX + 'insertBefore'](node, ref_node);
            return node;
          }

          if (node === this) {
            throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
          }

          if (ref_node) {
            var refData = shadyDataForNode(ref_node);
            var p = refData && refData.parentNode;

            if (p !== undefined && p !== this || p === undefined && ref_node[NATIVE_PREFIX + 'parentNode'] !== this) {
              throw Error("Failed to execute 'insertBefore' on 'Node': The node " + "before which the new node is to be inserted is not a child of this node.");
            }
          }

          if (ref_node === node) {
            return node;
          }
          /** @type {!Array<!HTMLSlotElement>} */


          var slotsAdded = [];
          var ownerRoot = ownerShadyRootForNode(this);
          /** @type {string} */

          var newScopeName = ownerRoot ? ownerRoot.host.localName : currentScopeForNode(this);
          /** @type {string} */

          var oldScopeName; // remove from existing location

          var parentNode = node[SHADY_PREFIX + 'parentNode'];

          if (parentNode) {
            oldScopeName = currentScopeForNode(node);
            parentNode[SHADY_PREFIX + 'removeChild'](node, Boolean(ownerRoot) || !ownerShadyRootForNode(node));
          } // add to new parent


          var allowNativeInsert = true;
          var needsScoping = (!preferPerformance || node['__noInsertionPoint'] === undefined) && !currentScopeIsCorrect(node, newScopeName);
          var needsSlotFinding = ownerRoot && !node['__noInsertionPoint'] && (!preferPerformance || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE);

          if (needsSlotFinding || needsScoping) {
            // NOTE: avoid node.removeChild as this *can* trigger another patched
            // method (e.g. custom elements) and we want only the shady method to run.
            // The following table describes what style scoping actions should happen as a result of this insertion.
            // document -> shadowRoot: replace
            // shadowRoot -> shadowRoot: replace
            // shadowRoot -> shadowRoot of same type: do nothing
            // shadowRoot -> document: allow unscoping
            // document -> document: do nothing
            // The "same type of shadowRoot" and "document to document cases rely on `currentScopeIsCorrect` returning true
            if (needsScoping) {
              // in a document or disconnected tree, replace scoping if necessary
              oldScopeName = oldScopeName || currentScopeForNode(node);
            }

            treeVisitor(node, function (node) {
              if (needsSlotFinding && node.localName === 'slot') {
                slotsAdded.push(
                /** @type {!HTMLSlotElement} */
                node);
              }

              if (needsScoping) {
                replaceShadyScoping(node, newScopeName, oldScopeName);
              }
            });
          } // if a slot is added, must render containing root.


          if (this.localName === 'slot' || slotsAdded.length) {
            if (slotsAdded.length) {
              ownerRoot._addSlots(slotsAdded);
            }

            if (ownerRoot) {
              ownerRoot._asyncRender();
            }
          }

          if (isTrackingLogicalChildNodes(this)) {
            recordInsertBefore(node, this, ref_node); // when inserting into a host with a shadowRoot with slot, use
            // `shadowRoot._asyncRender()` via `attach-shadow` module

            var parentData = shadyDataForNode(this);

            if (hasShadowRootWithSlot(this)) {
              parentData.root._asyncRender();

              allowNativeInsert = false; // when inserting into a host with shadowRoot with NO slot, do nothing
              // as the node should not be added to composed dome anywhere.
            } else if (parentData.root) {
              allowNativeInsert = false;
            }
          }

          if (allowNativeInsert) {
            // if adding to a shadyRoot, add to host instead
            var container = isShadyRoot(this) ?
            /** @type {ShadowRoot} */
            this.host : this; // if ref_node, get the ref_node that's actually in composed dom.

            if (ref_node) {
              ref_node = firstComposedNode(ref_node);
              container[NATIVE_PREFIX + 'insertBefore'](node, ref_node);
            } else {
              container[NATIVE_PREFIX + 'appendChild'](node);
            } // Since ownerDocument is not patched, it can be incorrect after this call
            // if the node is physically appended via distribution. This can result
            // in the custom elements polyfill not upgrading the node if it's in an inert doc.
            // We correct this by calling `adoptNode`.

          } else if (node.ownerDocument !== this.ownerDocument) {
            this.ownerDocument.adoptNode(node);
          }

          scheduleObserver(this, node);
          return node;
        },

        /**
         * @this {Node}
         * @param {Node} node
         */
        appendChild: function appendChild(node) {
          return this[SHADY_PREFIX + 'insertBefore'](node);
        },

        /**
         * Patched `removeChild`. Note that all dom "removals" are routed here.
         * Removes the given `node` from the element's `children`.
         * This method also performs dom composition.
         * @this {Node}
         * @param {Node} node
         * @param {boolean=} skipUnscoping
         */
        removeChild: function removeChild(node) {
          var skipUnscoping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (this.ownerDocument !== doc) {
            return this[NATIVE_PREFIX + 'removeChild'](node);
          }

          if (node[SHADY_PREFIX + 'parentNode'] !== this) {
            throw Error('The node to be removed is not a child of this node: ' + node);
          }

          var preventNativeRemove;
          var ownerRoot = ownerShadyRootForNode(node);

          var removingInsertionPoint = ownerRoot && ownerRoot._removeContainedSlots(node);

          var parentData = shadyDataForNode(this);

          if (isTrackingLogicalChildNodes(this)) {
            recordRemoveChild(node, this);

            if (hasShadowRootWithSlot(this)) {
              parentData.root._asyncRender();

              preventNativeRemove = true;
            }
          } // unscope a node leaving a ShadowRoot if ShadyCSS is present, and this node
          // is not going to be rescoped in `insertBefore`


          if (getScopingShim() && !skipUnscoping && ownerRoot) {
            var oldScopeName = currentScopeForNode(node);
            treeVisitor(node, function (node) {
              removeShadyScoping(node, oldScopeName);
            });
          }

          removeOwnerShadyRoot(node); // if removing slot, must render containing root

          if (ownerRoot) {
            var changeSlotContent = this && this.localName === 'slot';

            if (changeSlotContent) {
              preventNativeRemove = true;
            }

            if (removingInsertionPoint || changeSlotContent) {
              ownerRoot._asyncRender();
            }
          }

          if (!preventNativeRemove) {
            // if removing from a shadyRoot, remove from host instead
            var container = isShadyRoot(this) ?
            /** @type {ShadowRoot} */
            this.host : this; // not guaranteed to physically be in container; e.g.
            // (1) if parent has a shadyRoot, element may or may not at distributed
            // location (could be undistributed)
            // (2) if parent is a slot, element may not ben in composed dom

            if (!(parentData.root || node.localName === 'slot') || container === node[NATIVE_PREFIX + 'parentNode']) {
              container[NATIVE_PREFIX + 'removeChild'](node);
            }
          }

          scheduleObserver(this, null, node);
          return node;
        },

        /**
         * @this {Node}
         * @param {Node} node
         * @param {Node=} ref_node
         */
        replaceChild: function replaceChild(node, ref_node) {
          this[SHADY_PREFIX + 'insertBefore'](node, ref_node);
          this[SHADY_PREFIX + 'removeChild'](ref_node);
          return node;
        },

        /**
         * @this {Node}
         * @param {boolean=} deep
         */
        cloneNode: function cloneNode(deep) {
          if (this.localName == 'template') {
            return this[NATIVE_PREFIX + 'cloneNode'](deep);
          } else {
            var n = this[NATIVE_PREFIX + 'cloneNode'](false); // Attribute nodes historically had childNodes, but they have later
            // been removed from the spec.
            // Make sure we do not do a deep clone on them for old browsers (IE11)

            if (deep && n.nodeType !== Node.ATTRIBUTE_NODE) {
              var c$ = this[SHADY_PREFIX + 'childNodes'];

              for (var i = 0, nc; i < c$.length; i++) {
                nc = c$[i][SHADY_PREFIX + 'cloneNode'](true);
                n[SHADY_PREFIX + 'appendChild'](nc);
              }
            }

            return n;
          }
        },

        /**
         * @this {Node}
         * @param {Object=} options
         */
        // TODO(sorvell): implement `options` e.g. `{ composed: boolean }`
        getRootNode: function getRootNode(options) {
          // eslint-disable-line no-unused-vars
          if (!this || !this.nodeType) {
            return;
          }

          var nodeData = ensureShadyDataForNode(this);
          var root = nodeData.ownerShadyRoot;

          if (root === undefined) {
            if (isShadyRoot(this)) {
              root = this;
              nodeData.ownerShadyRoot = root;
            } else {
              var parent = this[SHADY_PREFIX + 'parentNode'];
              root = parent ? parent[SHADY_PREFIX + 'getRootNode'](options) : this; // memo-ize result for performance but only memo-ize
              // result if node is in the document. This avoids a problem where a root
              // can be cached while an element is inside a fragment.
              // If this happens and we cache the result, the value can become stale
              // because for perf we avoid processing the subtree of added fragments.

              if (document.documentElement[NATIVE_PREFIX + 'contains'](this)) {
                nodeData.ownerShadyRoot = root;
              }
            }
          }

          return root;
        },

        /** @this {Node} */
        contains: function contains$$1(node) {
          return contains(this, node);
        }
      });

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      /**
       * @param {Node} node
       * @param {Function} matcher
       * @param {Function=} halter
       */

      function query(node, matcher, halter) {
        var list = [];
        queryElements(node[SHADY_PREFIX + 'childNodes'], matcher, halter, list);
        return list;
      }

      function queryElements(elements, matcher, halter, list) {
        for (var i = 0, l = elements.length, c; i < l && (c = elements[i]); i++) {
          if (c.nodeType === Node.ELEMENT_NODE && queryElement(c, matcher, halter, list)) {
            return true;
          }
        }
      }

      function queryElement(node, matcher, halter, list) {
        var result = matcher(node);

        if (result) {
          list.push(node);
        }

        if (halter && halter(result)) {
          return result;
        }

        queryElements(node[SHADY_PREFIX + 'childNodes'], matcher, halter, list);
      } // Needed on Element, DocumentFragment, Document


      var ParentNodePatches = getOwnPropertyDescriptors({
        /** @this {Element} */
        get firstElementChild() {
          var nodeData = shadyDataForNode(this);

          if (nodeData && nodeData.firstChild !== undefined) {
            var n = this[SHADY_PREFIX + 'firstChild'];

            while (n && n.nodeType !== Node.ELEMENT_NODE) {
              n = n[SHADY_PREFIX + 'nextSibling'];
            }

            return n;
          } else {
            return this[NATIVE_PREFIX + 'firstElementChild'];
          }
        },

        /** @this {Element} */
        get lastElementChild() {
          var nodeData = shadyDataForNode(this);

          if (nodeData && nodeData.lastChild !== undefined) {
            var n = this[SHADY_PREFIX + 'lastChild'];

            while (n && n.nodeType !== Node.ELEMENT_NODE) {
              n = n[SHADY_PREFIX + 'previousSibling'];
            }

            return n;
          } else {
            return this[NATIVE_PREFIX + 'lastElementChild'];
          }
        },

        /** @this {Element} */
        get children() {
          if (!isTrackingLogicalChildNodes(this)) {
            return this[NATIVE_PREFIX + 'children'];
          }

          return createPolyfilledHTMLCollection(Array.prototype.filter.call(this[SHADY_PREFIX + 'childNodes'], function (n) {
            return n.nodeType === Node.ELEMENT_NODE;
          }));
        },

        /** @this {Element} */
        get childElementCount() {
          var children = this[SHADY_PREFIX + 'children'];

          if (children) {
            return children.length;
          }

          return 0;
        }

      });
      var QueryPatches = getOwnPropertyDescriptors({
        // TODO(sorvell): consider doing native QSA and filtering results.

        /**
         * @this {Element}
         * @param  {string} selector
         */
        querySelector: function querySelector(selector) {
          // match selector and halt on first result.
          var result = query(this, function (n) {
            return matchesSelector(n, selector);
          }, function (n) {
            return Boolean(n);
          })[0];
          return result || null;
        },

        /**
         * @this {Element}
         * @param  {string} selector
         * @param  {boolean} useNative
         */
        // TODO(sorvell): `useNative` option relies on native querySelectorAll and
        // misses distributed nodes, see
        // https://github.com/webcomponents/shadydom/pull/210#issuecomment-361435503
        querySelectorAll: function querySelectorAll(selector, useNative) {
          if (useNative) {
            var o = Array.prototype.slice.call(this[NATIVE_PREFIX + 'querySelectorAll'](selector));
            var root = this[SHADY_PREFIX + 'getRootNode']();
            return o.filter(function (e) {
              return e[SHADY_PREFIX + 'getRootNode']() == root;
            });
          }

          return query(this, function (n) {
            return matchesSelector(n, selector);
          });
        }
      }); // Create a custom `ParentNodeDocumentOrFragment` that optionally does not
      // mixin querySelector/All; this is a performance optimization.

      var ParentNodeDocumentOrFragmentPatches = settings.preferPerformance ? Object.assign({}, ParentNodePatches) : ParentNodePatches;
      Object.assign(ParentNodePatches, QueryPatches);

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      var DocumentOrFragmentPatches = getOwnPropertyDescriptors({
        /**
         * @this {Element}
         * @param {string} id
         */
        getElementById: function getElementById(id) {
          if (id === '') {
            return null;
          }

          var result = query(this, function (n) {
            return n.id == id;
          }, function (n) {
            return Boolean(n);
          })[0];
          return result || null;
        }
      });

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */

      function getDocumentActiveElement() {
        if (settings.hasDescriptors) {
          return document[NATIVE_PREFIX + 'activeElement'];
        } else {
          return document.activeElement;
        }
      }

      var DocumentOrShadowRootPatches = getOwnPropertyDescriptors({
        /** @this {Document|ShadowRoot} */
        get activeElement() {
          var active = getDocumentActiveElement(); // In IE11, activeElement might be an empty object if the document is
          // contained in an iframe.
          // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10998788/

          if (!active || !active.nodeType) {
            return null;
          }

          var isShadyRoot$$1 = !!isShadyRoot(this);

          if (this !== document) {
            // If this node isn't a document or shady root, then it doesn't have
            // an active element.
            if (!isShadyRoot$$1) {
              return null;
            } // If this shady root's host is the active element or the active
            // element is not a descendant of the host (in the composed tree),
            // then it doesn't have an active element.


            if (this.host === active || !this.host[NATIVE_PREFIX + 'contains'](active)) {
              return null;
            }
          } // This node is either the document or a shady root of which the active
          // element is a (composed) descendant of its host; iterate upwards to
          // find the active element's most shallow host within it.


          var activeRoot = ownerShadyRootForNode(active);

          while (activeRoot && activeRoot !== this) {
            active = activeRoot.host;
            activeRoot = ownerShadyRootForNode(active);
          }

          if (this === document) {
            // This node is the document, so activeRoot should be null.
            return activeRoot ? null : active;
          } else {
            // This node is a non-document shady root, and it should be
            // activeRoot.
            return activeRoot === this ? active : null;
          }
        }

      });

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      /** @type {!Document} */

      var inertDoc$1 = document.implementation.createHTMLDocument('inert');
      var ElementOrShadowRootPatches = getOwnPropertyDescriptors({
        /** @this {Element} */
        get innerHTML() {
          if (isTrackingLogicalChildNodes(this)) {
            var content = this.localName === 'template' ?
            /** @type {HTMLTemplateElement} */
            this.content : this;
            return getInnerHTML(content, function (e) {
              return e[SHADY_PREFIX + 'childNodes'];
            });
          } else {
            return this[NATIVE_PREFIX + 'innerHTML'];
          }
        },

        /**
         * @this {Element}
         * @param {string} value
         */
        set innerHTML(value) {
          if (this.localName === 'template') {
            this[NATIVE_PREFIX + 'innerHTML'] = value;
          } else {
            clearNode$1(this);
            var containerName = this.localName || 'div';
            var htmlContainer;

            if (!this.namespaceURI || this.namespaceURI === inertDoc$1.namespaceURI) {
              htmlContainer = inertDoc$1.createElement(containerName);
            } else {
              htmlContainer = inertDoc$1.createElementNS(this.namespaceURI, containerName);
            }

            if (settings.hasDescriptors) {
              htmlContainer[NATIVE_PREFIX + 'innerHTML'] = value;
            } else {
              htmlContainer.innerHTML = value;
            }

            var firstChild;

            while (firstChild = htmlContainer[SHADY_PREFIX + 'firstChild']) {
              this[SHADY_PREFIX + 'insertBefore'](firstChild);
            }
          }
        }

      });

      var ShadowRootPatches = getOwnPropertyDescriptors({
        /**
         * @this {ShadowRoot}
         * @param {string} type
         * @param {Function} fn
         * @param {Object|boolean=} optionsOrCapture
         */
        addEventListener: function addEventListener(type, fn, optionsOrCapture) {
          if (_typeof(optionsOrCapture) !== 'object') {
            optionsOrCapture = {
              capture: Boolean(optionsOrCapture)
            };
          }

          optionsOrCapture.__shadyTarget = this;
          this.host[SHADY_PREFIX + 'addEventListener'](type, fn, optionsOrCapture);
        },

        /**
         * @this {ShadowRoot}
         * @param {string} type
         * @param {Function} fn
         * @param {Object|boolean=} optionsOrCapture
         */
        removeEventListener: function removeEventListener(type, fn, optionsOrCapture) {
          if (_typeof(optionsOrCapture) !== 'object') {
            optionsOrCapture = {
              capture: Boolean(optionsOrCapture)
            };
          }

          optionsOrCapture.__shadyTarget = this;
          this.host[SHADY_PREFIX + 'removeEventListener'](type, fn, optionsOrCapture);
        }
      });

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      /**
       * @param {!Object} proto
       * @param {string=} prefix
       */

      var patchShadyAccessors = function patchShadyAccessors(proto, prefix) {
        patchProperties(proto, ShadowRootPatches, prefix);
        patchProperties(proto, DocumentOrShadowRootPatches, prefix);
        patchProperties(proto, ElementOrShadowRootPatches, prefix); // We ensure ParentNode accessors since these do not exist in Edge/IE on DocumentFragments.

        patchProperties(proto, ParentNodePatches, prefix); // Ensure `shadowRoot` has basic descriptors when we cannot rely
        // on them coming from DocumentFragment.
        //
        // Case 1, noPatching: Because we want noPatch ShadyRoots to have native property
        // names so that they do not have to be wrapped...
        // When we do *not* patch Node/DocumentFragment.prototype
        // we must manually install those properties on ShadyRoot's prototype.
        // Note, it's important to only install these in this mode so as not to stomp
        // over CustomElements polyfill's patches on Node/DocumentFragment methods.

        if (settings.noPatch && !prefix) {
          patchProperties(proto, NodePatches, prefix);
          patchProperties(proto, DocumentOrFragmentPatches, prefix); // Case 2, bad descriptors: Ensure accessors are on ShadowRoot.
          // These descriptors are normally used for instance patching but because
          // ShadyRoot can always be patched, just do it to the prototype.
        } else if (!settings.hasDescriptors) {
          patchProperties(proto, OutsideDescriptors);
          patchProperties(proto, InsideDescriptors);
        }
      };

      var patchShadyRoot = function patchShadyRoot(proto) {
        proto.__proto__ = DocumentFragment.prototype; // patch both prefixed and not, even when noPatch == true.

        patchShadyAccessors(proto, SHADY_PREFIX);
        patchShadyAccessors(proto); // Ensure native properties are all safely wrapped since ShadowRoot is not an
        // actual DocumentFragment instance.

        Object.defineProperties(proto, {
          nodeType: {
            value: Node.DOCUMENT_FRAGMENT_NODE,
            configurable: true
          },
          nodeName: {
            value: '#document-fragment',
            configurable: true
          },
          nodeValue: {
            value: null,
            configurable: true
          }
        }); // make undefined

        ['localName', 'namespaceURI', 'prefix'].forEach(function (prop) {
          Object.defineProperty(proto, prop, {
            value: undefined,
            configurable: true
          });
        }); // defer properties to host

        ['ownerDocument', 'baseURI', 'isConnected'].forEach(function (prop) {
          Object.defineProperty(proto, prop, {
            /** @this {ShadowRoot} */
            get: function get() {
              return this.host[prop];
            },
            configurable: true
          });
        });
      };

      // ShadyRoot constructor in `attachShadow` to prevent the constructor from
      // throwing. This prevents the user from being able to manually construct a
      // ShadyRoot (i.e. `new ShadowRoot()`).

      var ShadyRootConstructionToken = {};
      var CATCHALL_NAME = '__catchall';
      var SHADYROOT_NAME = 'ShadyRoot';
      var MODE_CLOSED = 'closed';
      var isRendering = settings['deferConnectionCallbacks'] && document.readyState === 'loading';
      var rootRendered;

      function ancestorList(node) {
        var ancestors = [];

        do {
          ancestors.unshift(node);
        } while (node = node[SHADY_PREFIX + 'parentNode']);

        return ancestors;
      }
      /**
       * @extends {ShadowRoot}
       */


      var ShadyRoot =
      /*#__PURE__*/
      function () {
        function ShadyRoot(token, host, options) {
          _classCallCheck(this, ShadyRoot);

          if (token !== ShadyRootConstructionToken) {
            throw new TypeError('Illegal constructor');
          } // NOTE: set a fake local name so this element can be
          // distinguished from a DocumentFragment when patching.
          // FF doesn't allow this to be `localName`


          this._localName = SHADYROOT_NAME; // root <=> host

          this.host = host;
          /** @type {!string|undefined} */

          this.mode = options && options.mode;
          recordChildNodes(host);
          var hostData = ensureShadyDataForNode(host);
          /** @type {!ShadyRoot} */

          hostData.root = this;
          hostData.publicRoot = this.mode !== MODE_CLOSED ? this : null; // setup root

          var rootData = ensureShadyDataForNode(this);
          rootData.firstChild = rootData.lastChild = rootData.parentNode = rootData.nextSibling = rootData.previousSibling = null;
          rootData.childNodes = []; // state flags

          this._renderPending = false;
          this._hasRendered = false; // marsalled lazily

          this._slotList = null;
          /** @type {Object<string, Array<HTMLSlotElement>>} */

          this._slotMap = null;
          this._pendingSlots = null; // NOTE: optimization flag, only require an asynchronous render
          // to record parsed children if flag is not set.

          if (settings['preferPerformance']) {
            var n;

            while (n = host[NATIVE_PREFIX + 'firstChild']) {
              host[NATIVE_PREFIX + 'removeChild'](n);
            }
          } else {
            this._asyncRender();
          }
        }

        _createClass(ShadyRoot, [{
          key: "_asyncRender",
          value: function _asyncRender() {
            var _this = this;

            if (!this._renderPending) {
              this._renderPending = true;
              enqueue(function () {
                return _this._render();
              });
            }
          } // returns the oldest renderPending ancestor root.

        }, {
          key: "_getPendingDistributionRoot",
          value: function _getPendingDistributionRoot() {
            var renderRoot;
            var root = this;

            while (root) {
              if (root._renderPending) {
                renderRoot = root;
              }

              root = root._getDistributionParent();
            }

            return renderRoot;
          } // Returns the shadyRoot `this.host` if `this.host`
          // has children that require distribution.

        }, {
          key: "_getDistributionParent",
          value: function _getDistributionParent() {
            var root = this.host[SHADY_PREFIX + 'getRootNode']();

            if (!isShadyRoot(root)) {
              return;
            }

            var nodeData = shadyDataForNode(this.host);

            if (nodeData && nodeData.__childSlotCount > 0) {
              return root;
            }
          } // Renders the top most render pending shadowRoot in the distribution tree.
          // This is safe because when a distribution parent renders, all children render.

        }, {
          key: "_render",
          value: function _render() {
            // If this root is not pending, it needs no rendering work. Any pending
            // parent that needs to render wll cause this root to render.
            var root = this._renderPending && this._getPendingDistributionRoot();

            if (root) {
              root._renderSelf();
            }
          }
        }, {
          key: "_flushInitial",
          value: function _flushInitial() {
            if (!this._hasRendered && this._renderPending) {
              this._render();
            }
          }
          /** @override */

        }, {
          key: "_renderSelf",
          value: function _renderSelf() {
            // track rendering state.
            var wasRendering = isRendering;
            isRendering = true;
            this._renderPending = false;

            if (this._slotList) {
              this._distribute();

              this._compose();
            } // NOTE: optimization flag, only process parsed children
            // if optimization flag is not set.
            // on initial render remove any undistributed children.


            if (!settings['preferPerformance'] && !this._hasRendered) {
              var c$ = this.host[SHADY_PREFIX + 'childNodes'];

              for (var i = 0, l = c$.length; i < l; i++) {
                var child = c$[i];
                var data = shadyDataForNode(child);

                if (child[NATIVE_PREFIX + 'parentNode'] === this.host && (child.localName === 'slot' || !data.assignedSlot)) {
                  this.host[NATIVE_PREFIX + 'removeChild'](child);
                }
              }
            }

            this._hasRendered = true;
            isRendering = wasRendering;

            if (rootRendered) {
              rootRendered();
            }
          }
        }, {
          key: "_distribute",
          value: function _distribute() {
            this._validateSlots(); // capture # of previously assigned nodes to help determine if dirty.


            for (var i = 0, slot; i < this._slotList.length; i++) {
              slot = this._slotList[i];

              this._clearSlotAssignedNodes(slot);
            } // distribute host children.


            for (var n = this.host[SHADY_PREFIX + 'firstChild']; n; n = n[SHADY_PREFIX + 'nextSibling']) {
              this._distributeNodeToSlot(n);
            } // fallback content, slotchange, and dirty roots


            for (var _i = 0; _i < this._slotList.length; _i++) {
              var _slot = this._slotList[_i];
              var slotData = shadyDataForNode(_slot); // distribute fallback content

              if (!slotData.assignedNodes.length) {
                for (var _n = _slot[SHADY_PREFIX + 'firstChild']; _n; _n = _n[SHADY_PREFIX + 'nextSibling']) {
                  this._distributeNodeToSlot(_n, _slot);
                }
              }

              var slotParentData = shadyDataForNode(_slot[SHADY_PREFIX + 'parentNode']);
              var slotParentRoot = slotParentData && slotParentData.root;

              if (slotParentRoot && (slotParentRoot._hasInsertionPoint() || slotParentRoot._renderPending)) {
                slotParentRoot._renderSelf();
              }

              this._addAssignedToFlattenedNodes(slotData.flattenedNodes, slotData.assignedNodes);

              var prevAssignedNodes = slotData._previouslyAssignedNodes;

              if (prevAssignedNodes) {
                for (var _i2 = 0; _i2 < prevAssignedNodes.length; _i2++) {
                  shadyDataForNode(prevAssignedNodes[_i2])._prevAssignedSlot = null;
                }

                slotData._previouslyAssignedNodes = null; // dirty if previously less assigned nodes than previously assigned.

                if (prevAssignedNodes.length > slotData.assignedNodes.length) {
                  slotData.dirty = true;
                }
              }
              /* Note: A slot is marked dirty whenever a node is newly assigned to it
              or a node is assigned to a different slot (done in `_distributeNodeToSlot`)
              or if the number of nodes assigned to the slot has decreased (done above);
              */


              if (slotData.dirty) {
                slotData.dirty = false;

                this._fireSlotChange(_slot);
              }
            }
          }
          /**
           * Distributes given `node` to the appropriate slot based on its `slot`
           * attribute. If `forcedSlot` is given, then the node is distributed to the
           * `forcedSlot`.
           * Note: slot to which the node is assigned will be marked dirty for firing
           * `slotchange`.
           * @param {Node} node
           * @param {Node=} forcedSlot
           *
           */

        }, {
          key: "_distributeNodeToSlot",
          value: function _distributeNodeToSlot(node, forcedSlot) {
            var nodeData = ensureShadyDataForNode(node);
            var oldSlot = nodeData._prevAssignedSlot;
            nodeData._prevAssignedSlot = null;
            var slot = forcedSlot;

            if (!slot) {
              var name = node[SHADY_PREFIX + 'slot'] || CATCHALL_NAME;
              var list = this._slotMap[name];
              slot = list && list[0];
            }

            if (slot) {
              var slotData = ensureShadyDataForNode(slot);
              slotData.assignedNodes.push(node);
              nodeData.assignedSlot = slot;
            } else {
              nodeData.assignedSlot = undefined;
            }

            if (oldSlot !== nodeData.assignedSlot) {
              if (nodeData.assignedSlot) {
                ensureShadyDataForNode(nodeData.assignedSlot).dirty = true;
              }
            }
          }
          /**
           * Clears the assignedNodes tracking data for a given `slot`. Note, the current
           * assigned node data is tracked (via _previouslyAssignedNodes and
           * _prevAssignedSlot) to see if `slotchange` should fire. This data may be out
           *  of date at this time because the assigned nodes may have already been
           * distributed to another root. This is ok since this data is only used to
           * track changes.
           * @param {HTMLSlotElement} slot
           */

        }, {
          key: "_clearSlotAssignedNodes",
          value: function _clearSlotAssignedNodes(slot) {
            var slotData = shadyDataForNode(slot);
            var n$ = slotData.assignedNodes;
            slotData.assignedNodes = [];
            slotData.flattenedNodes = [];
            slotData._previouslyAssignedNodes = n$;

            if (n$) {
              for (var i = 0; i < n$.length; i++) {
                var n = shadyDataForNode(n$[i]);
                n._prevAssignedSlot = n.assignedSlot; // only clear if it was previously set to this slot;
                // this helps ensure that if the node has otherwise been distributed
                // ignore it.

                if (n.assignedSlot === slot) {
                  n.assignedSlot = null;
                }
              }
            }
          }
        }, {
          key: "_addAssignedToFlattenedNodes",
          value: function _addAssignedToFlattenedNodes(flattened, assigned) {
            for (var i = 0, n; i < assigned.length && (n = assigned[i]); i++) {
              if (n.localName == 'slot') {
                var nestedAssigned = shadyDataForNode(n).assignedNodes;

                if (nestedAssigned && nestedAssigned.length) {
                  this._addAssignedToFlattenedNodes(flattened, nestedAssigned);
                }
              } else {
                flattened.push(assigned[i]);
              }
            }
          }
        }, {
          key: "_fireSlotChange",
          value: function _fireSlotChange(slot) {
            // NOTE: cannot bubble correctly here so not setting bubbles: true
            // Safari tech preview does not bubble but chrome does
            // Spec says it bubbles (https://dom.spec.whatwg.org/#mutation-observers)
            slot[NATIVE_PREFIX + 'dispatchEvent'](new Event('slotchange'));
            var slotData = shadyDataForNode(slot);

            if (slotData.assignedSlot) {
              this._fireSlotChange(slotData.assignedSlot);
            }
          } // Reify dom such that it is at its correct rendering position
          // based on logical distribution.
          // NOTE: here we only compose parents of <slot> elements and not the
          // shadowRoot into the host. The latter is performend via a fast path
          // in the `logical-mutation`.insertBefore.

        }, {
          key: "_compose",
          value: function _compose() {
            var slots = this._slotList;
            var composeList = [];

            for (var i = 0; i < slots.length; i++) {
              var parent = slots[i][SHADY_PREFIX + 'parentNode'];
              /* compose node only if:
                (1) parent does not have a shadowRoot since shadowRoot has already
                composed into the host
                (2) we're not already composing it
                [consider (n^2) but rare better than Set]
              */

              var parentData = shadyDataForNode(parent);

              if (!(parentData && parentData.root) && composeList.indexOf(parent) < 0) {
                composeList.push(parent);
              }
            }

            for (var _i3 = 0; _i3 < composeList.length; _i3++) {
              var node = composeList[_i3];
              var targetNode = node === this ? this.host : node;

              this._updateChildNodes(targetNode, this._composeNode(node));
            }
          } // Returns the list of nodes which should be rendered inside `node`.

        }, {
          key: "_composeNode",
          value: function _composeNode(node) {
            var children = [];
            var c$ = node[SHADY_PREFIX + 'childNodes'];

            for (var i = 0; i < c$.length; i++) {
              var child = c$[i]; // Note: if we see a slot here, the nodes are guaranteed to need to be
              // composed here. This is because if there is redistribution, it has
              // already been handled by this point.

              if (this._isInsertionPoint(child)) {
                var flattenedNodes = shadyDataForNode(child).flattenedNodes;

                for (var j = 0; j < flattenedNodes.length; j++) {
                  var distributedNode = flattenedNodes[j];
                  children.push(distributedNode);
                }
              } else {
                children.push(child);
              }
            }

            return children;
          }
        }, {
          key: "_isInsertionPoint",
          value: function _isInsertionPoint(node) {
            return node.localName == 'slot';
          } // Ensures that the rendered node list inside `container` is `children`.

        }, {
          key: "_updateChildNodes",
          value: function _updateChildNodes(container, children) {
            var composed = Array.prototype.slice.call(container[NATIVE_PREFIX + 'childNodes']);
            var splices = calculateSplices(children, composed); // process removals

            for (var i = 0, d = 0, s; i < splices.length && (s = splices[i]); i++) {
              for (var j = 0, n; j < s.removed.length && (n = s.removed[j]); j++) {
                // check if the node is still where we expect it is before trying
                // to remove it; this can happen if we move a node and
                // then schedule its previous host for distribution resulting in
                // the node being removed here.
                if (n[NATIVE_PREFIX + 'parentNode'] === container) {
                  container[NATIVE_PREFIX + 'removeChild'](n);
                } // TODO(sorvell): avoid the need for splicing here.


                composed.splice(s.index + d, 1);
              }

              d -= s.addedCount;
            } // process adds


            for (var _i4 = 0, _s, next; _i4 < splices.length && (_s = splices[_i4]); _i4++) {
              //eslint-disable-line no-redeclare
              next = composed[_s.index];

              for (var _j = _s.index, _n2; _j < _s.index + _s.addedCount; _j++) {
                _n2 = children[_j];
                container[NATIVE_PREFIX + 'insertBefore'](_n2, next);
                composed.splice(_j, 0, _n2);
              }
            }
          }
        }, {
          key: "_ensureSlotData",
          value: function _ensureSlotData() {
            this._pendingSlots = this._pendingSlots || [];
            this._slotList = this._slotList || [];
            this._slotMap = this._slotMap || {};
          }
        }, {
          key: "_addSlots",
          value: function _addSlots(slots) {
            var _this$_pendingSlots;

            this._ensureSlotData();

            (_this$_pendingSlots = this._pendingSlots).push.apply(_this$_pendingSlots, _toConsumableArray(slots));
          }
        }, {
          key: "_validateSlots",
          value: function _validateSlots() {
            if (this._pendingSlots && this._pendingSlots.length) {
              this._mapSlots(this._pendingSlots);

              this._pendingSlots = [];
            }
          }
          /**
           * Adds the given slots. Slots are maintained in an dom-ordered list.
           * In addition a map of name to slot is updated.
           */

        }, {
          key: "_mapSlots",
          value: function _mapSlots(slots) {
            var slotNamesToSort;

            for (var i = 0; i < slots.length; i++) {
              var slot = slots[i]; // ensure insertionPoints's and their parents have logical dom info.
              // save logical tree info
              // a. for shadyRoot
              // b. for insertion points (fallback)
              // c. for parents of insertion points

              recordChildNodes(slot);
              var slotParent = slot[SHADY_PREFIX + 'parentNode'];
              recordChildNodes(slotParent);
              var slotParentData = shadyDataForNode(slotParent);
              slotParentData.__childSlotCount = (slotParentData.__childSlotCount || 0) + 1;

              var name = this._nameForSlot(slot);

              if (this._slotMap[name]) {
                slotNamesToSort = slotNamesToSort || {};
                slotNamesToSort[name] = true;

                this._slotMap[name].push(slot);
              } else {
                this._slotMap[name] = [slot];
              }

              this._slotList.push(slot);
            }

            if (slotNamesToSort) {
              for (var n in slotNamesToSort) {
                this._slotMap[n] = this._sortSlots(this._slotMap[n]);
              }
            }
          }
        }, {
          key: "_nameForSlot",
          value: function _nameForSlot(slot) {
            var name = slot['name'] || slot.getAttribute('name') || CATCHALL_NAME;
            slot.__slotName = name;
            return name;
          }
          /**
           * Slots are kept in an ordered list. Slots with the same name
           * are sorted here by tree order.
           */

        }, {
          key: "_sortSlots",
          value: function _sortSlots(slots) {
            // NOTE: Cannot use `compareDocumentPosition` because it's not polyfilled,
            // but the code here could be used to polyfill the preceeding/following info
            // in `compareDocumentPosition`.
            return slots.sort(function (a, b) {
              var listA = ancestorList(a);
              var listB = ancestorList(b);

              for (var i = 0; i < listA.length; i++) {
                var nA = listA[i];
                var nB = listB[i];

                if (nA !== nB) {
                  var c$ = Array.from(nA[SHADY_PREFIX + 'parentNode'][SHADY_PREFIX + 'childNodes']);
                  return c$.indexOf(nA) - c$.indexOf(nB);
                }
              }
            });
          }
          /**
           * Removes from tracked slot data any slots contained within `container` and
           * then updates the tracked data (_slotList and _slotMap).
           * Any removed slots also have their `assignedNodes` removed from comopsed dom.
           */

        }, {
          key: "_removeContainedSlots",
          value: function _removeContainedSlots(container) {
            if (!this._slotList) {
              return;
            }

            this._validateSlots();

            var didRemove;
            var map = this._slotMap;

            for (var n in map) {
              var slots = map[n];

              for (var i = 0; i < slots.length; i++) {
                var slot = slots[i];

                if (contains(container, slot)) {
                  slots.splice(i, 1);

                  var x = this._slotList.indexOf(slot);

                  if (x >= 0) {
                    this._slotList.splice(x, 1);

                    var slotParentData = shadyDataForNode(slot[SHADY_PREFIX + 'parentNode']);

                    if (slotParentData && slotParentData.__childSlotCount) {
                      slotParentData.__childSlotCount--;
                    }
                  }

                  i--;

                  this._removeFlattenedNodes(slot);

                  didRemove = true;
                }
              }
            }

            return didRemove;
          }
        }, {
          key: "_updateSlotName",
          value: function _updateSlotName(slot) {
            if (!this._slotList) {
              return;
            } // make sure slotMap is initialized with this slot


            this._validateSlots();

            var oldName = slot.__slotName;

            var name = this._nameForSlot(slot);

            if (name === oldName) {
              return;
            } // remove from existing tracking


            var slots = this._slotMap[oldName];
            var i = slots.indexOf(slot);

            if (i >= 0) {
              slots.splice(i, 1);
            } // add to new location and sort if nedessary


            var list = this._slotMap[name] || (this._slotMap[name] = []);
            list.push(slot);

            if (list.length > 1) {
              this._slotMap[name] = this._sortSlots(list);
            }
          }
        }, {
          key: "_removeFlattenedNodes",
          value: function _removeFlattenedNodes(slot) {
            var data = shadyDataForNode(slot);
            var n$ = data.flattenedNodes;

            if (n$) {
              for (var i = 0; i < n$.length; i++) {
                var node = n$[i];
                var parent = node[NATIVE_PREFIX + 'parentNode'];

                if (parent) {
                  parent[NATIVE_PREFIX + 'removeChild'](node);
                }
              }
            }

            data.flattenedNodes = [];
            data.assignedNodes = [];
          }
        }, {
          key: "_hasInsertionPoint",
          value: function _hasInsertionPoint() {
            this._validateSlots();

            return Boolean(this._slotList && this._slotList.length);
          }
        }]);

        return ShadyRoot;
      }();

      patchShadyRoot(ShadyRoot.prototype);
      /**
        Implements a pared down version of ShadowDOM's scoping, which is easy to
        polyfill across browsers.
      */

      var attachShadow = function attachShadow(host, options) {
        if (!host) {
          throw new Error('Must provide a host.');
        }

        if (!options) {
          throw new Error('Not enough arguments.');
        }

        return new ShadyRoot(ShadyRootConstructionToken, host, options);
      }; // Mitigate connect/disconnect spam by wrapping custom element classes.

      if (window['customElements'] && settings.inUse && !settings['preferPerformance']) {
        // process connect/disconnect after roots have rendered to avoid
        // issues with reaction stack.
        var connectMap = new Map();

        rootRendered = function rootRendered() {
          // allow elements to connect
          // save map state (without needing polyfills on IE11)
          var r = [];
          connectMap.forEach(function (v, k) {
            r.push([k, v]);
          });
          connectMap.clear();

          for (var i = 0; i < r.length; i++) {
            var e = r[i][0],
                value = r[i][1];

            if (value) {
              e.__shadydom_connectedCallback();
            } else {
              e.__shadydom_disconnectedCallback();
            }
          }
        }; // Document is in loading state and flag is set (deferConnectionCallbacks)
        // so process connection stack when `readystatechange` fires.


        if (isRendering) {
          document.addEventListener('readystatechange', function () {
            isRendering = false;
            rootRendered();
          }, {
            once: true
          });
        }
        /*
         * (1) elements can only be connected/disconnected if they are in the expected
         * state.
         * (2) never run connect/disconnect during rendering to avoid reaction stack issues.
         */


        var ManageConnect = function ManageConnect(base, connected, disconnected) {
          var counter = 0;
          var connectFlag = "__isConnected".concat(counter++);

          if (connected || disconnected) {
            /** @this {!HTMLElement} */
            base.prototype.connectedCallback = base.prototype.__shadydom_connectedCallback = function () {
              // if rendering defer connected
              // otherwise connect only if we haven't already
              if (isRendering) {
                connectMap.set(this, true);
              } else if (!this[connectFlag]) {
                this[connectFlag] = true;

                if (connected) {
                  connected.call(this);
                }
              }
            };
            /** @this {!HTMLElement} */


            base.prototype.disconnectedCallback = base.prototype.__shadydom_disconnectedCallback = function () {
              // if rendering, cancel a pending connection and queue disconnect,
              // otherwise disconnect only if a connection has been allowed
              if (isRendering) {
                // This is necessary only because calling removeChild
                // on a node that requires distribution leaves it in the DOM tree
                // until distribution.
                // NOTE: remember this is checking the patched isConnected to determine
                // if the node is in the logical tree.
                if (!this.isConnected) {
                  connectMap.set(this, false);
                }
              } else if (this[connectFlag]) {
                this[connectFlag] = false;

                if (disconnected) {
                  disconnected.call(this);
                }
              }
            };
          }

          return base;
        };

        var define$1 = window['customElements']['define']; // NOTE: Instead of patching customElements.define,
        // re-define on the CustomElementRegistry.prototype.define
        // for Safari 10 compatibility (it's flakey otherwise).

        Object.defineProperty(window['CustomElementRegistry'].prototype, 'define', {
          value: function value(name, constructor) {
            var connected = constructor.prototype.connectedCallback;
            var disconnected = constructor.prototype.disconnectedCallback;
            define$1.call(window['customElements'], name, ManageConnect(constructor, connected, disconnected)); // unpatch connected/disconnected on class; custom elements tears this off
            // so the patch is maintained, but if the user calls these methods for
            // e.g. testing, they will be as expected.

            constructor.prototype.connectedCallback = connected;
            constructor.prototype.disconnectedCallback = disconnected;
          }
        });
      }
      /** @return {!ShadyRoot|undefined} */


      var ownerShadyRootForNode = function ownerShadyRootForNode(node) {
        var root = node[SHADY_PREFIX + 'getRootNode']();

        if (isShadyRoot(root)) {
          return root;
        }
      };

      /** @implements {IWrapper} */

      var Wrapper =
      /*#__PURE__*/
      function () {
        /** @param {!Node} node */
        function Wrapper(node) {
          _classCallCheck(this, Wrapper);

          this.node = node;
        } // node


        _createClass(Wrapper, [{
          key: "addEventListener",
          value: function addEventListener$$1(name, fn, options) {
            return this.node[SHADY_PREFIX + 'addEventListener'](name, fn, options);
          }
        }, {
          key: "removeEventListener",
          value: function removeEventListener$$1(name, fn, options) {
            return this.node[SHADY_PREFIX + 'removeEventListener'](name, fn, options);
          }
        }, {
          key: "appendChild",
          value: function appendChild(node) {
            return this.node[SHADY_PREFIX + 'appendChild'](node);
          }
        }, {
          key: "insertBefore",
          value: function insertBefore(node, ref_node) {
            return this.node[SHADY_PREFIX + 'insertBefore'](node, ref_node);
          }
        }, {
          key: "removeChild",
          value: function removeChild(node) {
            return this.node[SHADY_PREFIX + 'removeChild'](node);
          }
        }, {
          key: "replaceChild",
          value: function replaceChild(node, ref_node) {
            return this.node[SHADY_PREFIX + 'replaceChild'](node, ref_node);
          }
        }, {
          key: "cloneNode",
          value: function cloneNode(deep) {
            return this.node[SHADY_PREFIX + 'cloneNode'](deep);
          }
        }, {
          key: "getRootNode",
          value: function getRootNode(options) {
            return this.node[SHADY_PREFIX + 'getRootNode'](options);
          }
        }, {
          key: "contains",
          value: function contains$$1(node) {
            return this.node[SHADY_PREFIX + 'contains'](node);
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(event) {
            return this.node[SHADY_PREFIX + 'dispatchEvent'](event);
          } // element

        }, {
          key: "setAttribute",
          value: function setAttribute(name, value) {
            this.node[SHADY_PREFIX + 'setAttribute'](name, value);
          } // NOTE: not needed, just here for balance

        }, {
          key: "getAttribute",
          value: function getAttribute(name) {
            return this.node[NATIVE_PREFIX + 'getAttribute'](name);
          } // NOTE: not needed, just here for balance

        }, {
          key: "hasAttribute",
          value: function hasAttribute(name) {
            return this.node[NATIVE_PREFIX + 'hasAttribute'](name);
          }
        }, {
          key: "removeAttribute",
          value: function removeAttribute(name) {
            this.node[SHADY_PREFIX + 'removeAttribute'](name);
          }
        }, {
          key: "attachShadow",
          value: function attachShadow(options) {
            return this.node[SHADY_PREFIX + 'attachShadow'](options);
          }
          /** @return {!Node|undefined} */

        }, {
          key: "focus",
          // NOTE: not needed, just here for balance

          /** @override */
          value: function focus() {
            this.node[NATIVE_PREFIX + 'focus']();
          }
        }, {
          key: "blur",
          value: function blur() {
            this.node[SHADY_PREFIX + 'blur']();
          } // document

        }, {
          key: "importNode",
          value: function importNode(node, deep) {
            if (this.node.nodeType === Node.DOCUMENT_NODE) {
              return this.node[SHADY_PREFIX + 'importNode'](node, deep);
            }
          }
        }, {
          key: "getElementById",
          value: function getElementById(id) {
            if (this.node.nodeType === Node.DOCUMENT_NODE) {
              return this.node[SHADY_PREFIX + 'getElementById'](id);
            }
          } // query

        }, {
          key: "querySelector",
          value: function querySelector(selector) {
            return this.node[SHADY_PREFIX + 'querySelector'](selector);
          }
        }, {
          key: "querySelectorAll",
          value: function querySelectorAll(selector, useNative) {
            return this.node[SHADY_PREFIX + 'querySelectorAll'](selector, useNative);
          } // slot

        }, {
          key: "assignedNodes",
          value: function assignedNodes(options) {
            if (this.node.localName === 'slot') {
              return this.node[SHADY_PREFIX + 'assignedNodes'](options);
            }
          }
        }, {
          key: "activeElement",
          get: function get() {
            if (isShadyRoot(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) {
              var e = this.node[SHADY_PREFIX + 'activeElement'];
              return e;
            }
          }
          /**
           * Installed for compatibility with browsers (older Chrome/Safari) that do
           * not have a configurable `activeElement` accessor. Enables noPatch and
           * patch mode both to consistently use ShadyDOM.wrap(document)._activeElement.
           * @override
           * @return {!Node|undefined}
           */

        }, {
          key: "_activeElement",
          get: function get() {
            return this.activeElement;
          }
        }, {
          key: "host",
          get: function get() {
            if (isShadyRoot(this.node)) {
              return (
                /** @type {!ShadowRoot} */
                this.node.host
              );
            }
          }
        }, {
          key: "parentNode",
          get: function get() {
            return this.node[SHADY_PREFIX + 'parentNode'];
          }
        }, {
          key: "firstChild",
          get: function get() {
            return this.node[SHADY_PREFIX + 'firstChild'];
          }
        }, {
          key: "lastChild",
          get: function get() {
            return this.node[SHADY_PREFIX + 'lastChild'];
          }
        }, {
          key: "nextSibling",
          get: function get() {
            return this.node[SHADY_PREFIX + 'nextSibling'];
          }
        }, {
          key: "previousSibling",
          get: function get() {
            return this.node[SHADY_PREFIX + 'previousSibling'];
          }
        }, {
          key: "childNodes",
          get: function get() {
            return this.node[SHADY_PREFIX + 'childNodes'];
          }
        }, {
          key: "parentElement",
          get: function get() {
            return this.node[SHADY_PREFIX + 'parentElement'];
          }
        }, {
          key: "firstElementChild",
          get: function get() {
            return this.node[SHADY_PREFIX + 'firstElementChild'];
          }
        }, {
          key: "lastElementChild",
          get: function get() {
            return this.node[SHADY_PREFIX + 'lastElementChild'];
          }
        }, {
          key: "nextElementSibling",
          get: function get() {
            return this.node[SHADY_PREFIX + 'nextElementSibling'];
          }
        }, {
          key: "previousElementSibling",
          get: function get() {
            return this.node[SHADY_PREFIX + 'previousElementSibling'];
          }
        }, {
          key: "children",
          get: function get() {
            return this.node[SHADY_PREFIX + 'children'];
          }
        }, {
          key: "childElementCount",
          get: function get() {
            return this.node[SHADY_PREFIX + 'childElementCount'];
          }
        }, {
          key: "shadowRoot",
          get: function get() {
            return this.node[SHADY_PREFIX + 'shadowRoot'];
          }
        }, {
          key: "assignedSlot",
          get: function get() {
            return this.node[SHADY_PREFIX + 'assignedSlot'];
          }
        }, {
          key: "isConnected",
          get: function get() {
            return this.node[SHADY_PREFIX + 'isConnected'];
          }
        }, {
          key: "innerHTML",
          get: function get() {
            return this.node[SHADY_PREFIX + 'innerHTML'];
          },
          set: function set(value) {
            this.node[SHADY_PREFIX + 'innerHTML'] = value;
          }
        }, {
          key: "textContent",
          get: function get() {
            return this.node[SHADY_PREFIX + 'textContent'];
          },
          set: function set(value) {
            this.node[SHADY_PREFIX + 'textContent'] = value;
          }
        }, {
          key: "slot",
          get: function get() {
            return this.node[SHADY_PREFIX + 'slot'];
          },
          set: function set(value) {
            this.node[SHADY_PREFIX + 'slot'] = value;
          }
        }]);

        return Wrapper;
      }();

      eventPropertyNames.forEach(function (name) {
        Object.defineProperty(Wrapper.prototype, name, {
          /** @this {Wrapper} */
          get: function get() {
            return this.node[SHADY_PREFIX + name];
          },

          /** @this {Wrapper} */
          set: function set(value) {
            this.node[SHADY_PREFIX + name] = value;
          },
          configurable: true
        });
      });
      var wrapperMap = new WeakMap();
      function wrap(obj) {
        if (isShadyRoot(obj) || obj instanceof Wrapper) {
          return obj;
        }

        var wrapper = wrapperMap.get(obj);

        if (!wrapper) {
          wrapper = new Wrapper(obj);
          wrapperMap.set(obj, wrapper);
        }

        return wrapper;
      }

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      var EventTargetPatches = getOwnPropertyDescriptors({
        /** @this {Node} */
        dispatchEvent: function dispatchEvent(event) {
          flush();
          return this[NATIVE_PREFIX + 'dispatchEvent'](event);
        },
        addEventListener: addEventListener,
        removeEventListener: removeEventListener
      });

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      var SlotablePatches = getOwnPropertyDescriptors({
        /** @this {Node} */
        get assignedSlot() {
          // Force any parent's shadowRoot to flush so that distribution occurs
          // and this node has an assignedSlot.
          var parent = this[SHADY_PREFIX + 'parentNode'];
          var ownerRoot = parent && parent[SHADY_PREFIX + 'shadowRoot'];

          if (ownerRoot) {
            ownerRoot._render();
          }

          var nodeData = shadyDataForNode(this);
          return nodeData && nodeData.assignedSlot || null;
        }

      });

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      var doc$1 = window.document;
      /**
       * Should be called whenever an attribute changes. If the `slot` attribute
       * changes, provokes rendering if necessary. If a `<slot>` element's `name`
       * attribute changes, updates the root's slot map and renders.
       * @param {Node} node
       * @param {string} name
       */

      function distributeAttributeChange(node, name) {
        if (name === 'slot') {
          var parent = node[SHADY_PREFIX + 'parentNode'];

          if (hasShadowRootWithSlot(parent)) {
            shadyDataForNode(parent).root._asyncRender();
          }
        } else if (node.localName === 'slot' && name === 'name') {
          var root = ownerShadyRootForNode(node);

          if (root) {
            root._updateSlotName(node);

            root._asyncRender();
          }
        }
      }

      var ElementPatches = getOwnPropertyDescriptors({
        /** @this {Element} */
        get previousElementSibling() {
          var nodeData = shadyDataForNode(this);

          if (nodeData && nodeData.previousSibling !== undefined) {
            var n = this[SHADY_PREFIX + 'previousSibling'];

            while (n && n.nodeType !== Node.ELEMENT_NODE) {
              n = n[SHADY_PREFIX + 'previousSibling'];
            }

            return n;
          } else {
            return this[NATIVE_PREFIX + 'previousElementSibling'];
          }
        },

        /** @this {Element} */
        get nextElementSibling() {
          var nodeData = shadyDataForNode(this);

          if (nodeData && nodeData.nextSibling !== undefined) {
            var n = this[SHADY_PREFIX + 'nextSibling'];

            while (n && n.nodeType !== Node.ELEMENT_NODE) {
              n = n[SHADY_PREFIX + 'nextSibling'];
            }

            return n;
          } else {
            return this[NATIVE_PREFIX + 'nextElementSibling'];
          }
        },

        /** @this {Element} */
        get slot() {
          return this.getAttribute('slot');
        },

        /** @this {Element} */
        set slot(value) {
          this[SHADY_PREFIX + 'setAttribute']('slot', value);
        },

        // Note: Can be patched on element prototype on all browsers.
        // Must be patched on instance on browsers that support native Shadow DOM
        // but do not have builtin accessors (old Chrome).

        /** @this {Element} */
        get shadowRoot() {
          var nodeData = shadyDataForNode(this);
          return nodeData && nodeData.publicRoot || null;
        },

        /** @this {Element} */
        get className() {
          return this.getAttribute('class') || '';
        },

        /**
         * @this {Element}
         * @param {string} value
         */
        set className(value) {
          this[SHADY_PREFIX + 'setAttribute']('class', value);
        },

        /**
         * @this {Element}
         * @param {string} attr
         * @param {string} value
         */
        setAttribute: function setAttribute(attr, value) {
          if (this.ownerDocument !== doc$1) {
            this[NATIVE_PREFIX + 'setAttribute'](attr, value);
          } else if (!scopeClassAttribute(this, attr, value)) {
            this[NATIVE_PREFIX + 'setAttribute'](attr, value);
            distributeAttributeChange(this, attr);
          }
        },

        /**
         * @this {Element}
         * @param {string} attr
         */
        removeAttribute: function removeAttribute(attr) {
          this[NATIVE_PREFIX + 'removeAttribute'](attr);
          distributeAttributeChange(this, attr);
        },

        /**
         * @this {Element}
         * @param {!{mode: string}} options
         */
        attachShadow: function attachShadow$$1(options) {
          return attachShadow(this, options);
        }
      });

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      var HTMLElementPatches = getOwnPropertyDescriptors({
        /** @this {HTMLElement} */
        blur: function blur() {
          var nodeData = shadyDataForNode(this);
          var root = nodeData && nodeData.root;
          var shadowActive = root && root.activeElement;

          if (shadowActive) {
            shadowActive[SHADY_PREFIX + 'blur']();
          } else {
            this[NATIVE_PREFIX + 'blur']();
          }
        }
      });
      eventPropertyNames.forEach(function (property) {
        HTMLElementPatches[property] = {
          /** @this {HTMLElement} */
          set: function set(fn) {
            var shadyData = ensureShadyDataForNode(this);
            var eventName = property.substring(2);
            shadyData.__onCallbackListeners[property] && this.removeEventListener(eventName, shadyData.__onCallbackListeners[property]);
            this[SHADY_PREFIX + 'addEventListener'](eventName, fn);
            shadyData.__onCallbackListeners[property] = fn;
          },

          /** @this {HTMLElement} */
          get: function get() {
            var shadyData = shadyDataForNode(this);
            return shadyData && shadyData.__onCallbackListeners[property];
          },
          configurable: true
        };
      });

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      var SlotPatches = getOwnPropertyDescriptors({
        /**
         * @this {HTMLSlotElement}
         * @param {Object=} options
         */
        assignedNodes: function assignedNodes(options) {
          if (this.localName === 'slot') {
            // Force any containing shadowRoot to flush so that distribution occurs
            // and this node has assignedNodes.
            var root = this[SHADY_PREFIX + 'getRootNode']();

            if (root && isShadyRoot(root)) {
              root._render();
            }

            var nodeData = shadyDataForNode(this);
            return nodeData ? (options && options.flatten ? nodeData.flattenedNodes : nodeData.assignedNodes) || [] : [];
          }
        }
      });

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      var doc$2 = window.document;
      var DocumentPatches = getOwnPropertyDescriptors({
        // note: Though not technically correct, we fast path `importNode`
        // when called on a node not owned by the main document.
        // This allows, for example, elements that cannot
        // contain custom elements and are therefore not likely to contain shadowRoots
        // to cloned natively. This is a fairly significant performance win.

        /**
         * @this {Document}
         * @param {Node} node
         * @param {boolean} deep
         */
        importNode: function importNode(node, deep) {
          // A template element normally has no children with shadowRoots, so make
          // sure we always make a deep copy to correctly construct the template.content
          if (node.ownerDocument !== doc$2 || node.localName === 'template') {
            return this[NATIVE_PREFIX + 'importNode'](node, deep);
          }

          var n = this[NATIVE_PREFIX + 'importNode'](node, false);

          if (deep) {
            var c$ = node[SHADY_PREFIX + 'childNodes'];

            for (var i = 0, nc; i < c$.length; i++) {
              nc = this[SHADY_PREFIX + 'importNode'](c$[i], true);
              n[SHADY_PREFIX + 'appendChild'](nc);
            }
          }

          return n;
        }
      });

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      var WindowPatches = getOwnPropertyDescriptors({
        // NOTE: ensure these methods are bound to `window` so that `this` is correct
        // when called directly from global context without a receiver; e.g.
        // `addEventListener(...)`.
        addEventListener: addEventListener.bind(window),
        removeEventListener: removeEventListener.bind(window)
      });

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */

      var NonStandardHTMLElement = {};

      if (Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'parentElement')) {
        NonStandardHTMLElement.parentElement = NodePatches.parentElement;
      }

      if (Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'contains')) {
        NonStandardHTMLElement.contains = NodePatches.contains;
      }

      if (Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'children')) {
        NonStandardHTMLElement.children = ParentNodePatches.children;
      }

      if (Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'innerHTML')) {
        NonStandardHTMLElement.innerHTML = ElementOrShadowRootPatches.innerHTML;
      }

      if (Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'className')) {
        NonStandardHTMLElement.className = ElementPatches.className;
      } // Avoid patching `innerHTML` if it does not exist on Element (IE)
      // and we can patch accessors (hasDescriptors).


      var ElementShouldHaveInnerHTML = !settings.hasDescriptors || 'innerHTML' in Element.prototype; // setup patching

      var patchMap = {
        EventTarget: [EventTargetPatches],
        Node: [NodePatches, !window.EventTarget ? EventTargetPatches : null],
        Text: [SlotablePatches],
        Element: [ElementPatches, ParentNodePatches, SlotablePatches, ElementShouldHaveInnerHTML ? ElementOrShadowRootPatches : null, !window.HTMLSlotElement ? SlotPatches : null],
        HTMLElement: [HTMLElementPatches, NonStandardHTMLElement],
        HTMLSlotElement: [SlotPatches],
        DocumentFragment: [ParentNodeDocumentOrFragmentPatches, DocumentOrFragmentPatches],
        Document: [DocumentPatches, ParentNodeDocumentOrFragmentPatches, DocumentOrFragmentPatches, DocumentOrShadowRootPatches],
        Window: [WindowPatches]
      };

      var getPatchPrototype = function getPatchPrototype(name) {
        return window[name] && window[name].prototype;
      }; // Note, must avoid patching accessors on prototypes when descriptors are not correct
      // because the CustomElements polyfill checks if these exist before patching instances.
      // CustomElements polyfill *only* cares about these accessors.


      var disallowedNativePatches = settings.hasDescriptors ? null : ['innerHTML', 'textContent'];
      /** @param {string=} prefix */

      var applyPatches = function applyPatches(prefix) {
        var disallowed = prefix ? null : disallowedNativePatches;

        var _loop = function _loop(p) {
          var proto = getPatchPrototype(p);
          patchMap[p].forEach(function (patch) {
            return proto && patch && patchProperties(proto, patch, prefix, disallowed);
          });
        };

        for (var p in patchMap) {
          _loop(p);
        }
      };
      var addShadyPrefixedProperties = function addShadyPrefixedProperties() {
        // perform shady patches
        applyPatches(SHADY_PREFIX); // install `_activeElement` because some browsers (older Chrome/Safari) do not have
        // a 'configurable' `activeElement` accesssor.

        var descriptor = DocumentOrShadowRootPatches.activeElement;
        Object.defineProperty(document, '_activeElement', descriptor); // On Window, we're patching `addEventListener` which is a weird auto-bound
        // property that is not directly on the Window prototype.

        patchProperties(Window.prototype, WindowPatches, SHADY_PREFIX);
      };

      /**
      @license
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */

      if (settings.inUse) {
        var ShadyDOM = {
          // TODO(sorvell): remove when Polymer does not depend on this.
          'inUse': settings.inUse,
          // NOTE: old browsers without prototype accessors (very old Chrome
          // and Safari) need manually patched accessors to properly set
          // `innerHTML` and `textContent` when an element is:
          // (1) inside a shadowRoot
          // (2) does not have special (slot) children itself
          // (3) and setting the property needs to provoke distribution (because
          // a nested slot is added/removed)
          'patch': function patch(node) {
            patchInsideElementAccessors(node);
            patchOutsideElementAccessors(node);
            return node;
          },
          'isShadyRoot': isShadyRoot,
          'enqueue': enqueue,
          'flush': flush,
          'flushInitial': function flushInitial(root) {
            root._flushInitial();
          },
          'settings': settings,
          'filterMutations': filterMutations,
          'observeChildren': observeChildren,
          'unobserveChildren': unobserveChildren,
          // Set to true to defer native custom elements connection until the
          // document has fully parsed. This enables custom elements that create
          // shadowRoots to be defined while the document is loading. Elements
          // customized as they are created by the parser will successfully
          // render with this flag on.
          'deferConnectionCallbacks': settings['deferConnectionCallbacks'],
          // Set to true to speed up the polyfill slightly at the cost of correctness
          // * does not patch querySelector/All on Document or DocumentFragment
          // * does not wrap connected/disconnected callbacks to de-dup these
          // when using native customElements
          // * does not wait to process children of elements with shadowRoots
          // meaning shadowRoots should not be created while an element is parsing
          // (e.g. if a custom element that creates a shadowRoot is defined before
          // a candidate element in the document below it.
          'preferPerformance': settings['preferPerformance'],
          // Integration point with ShadyCSS to disable styling MutationObserver,
          // as ShadyDOM will now handle dynamic scoping.
          'handlesDynamicScoping': true,
          'wrap': settings.noPatch ? wrap : function (n) {
            return n;
          },
          'Wrapper': Wrapper,
          'composedPath': composedPath,
          // Set to true to avoid patching regular platform property names. When set,
          // Shadow DOM compatible behavior is only available when accessing DOM
          // API using `ShadyDOM.wrap`, e.g. `ShadyDOM.wrap(element).shadowRoot`.
          // This setting provides a small performance boost, but requires all DOM API
          // access that requires Shadow DOM behavior to be proxied via `ShadyDOM.wrap`.
          'noPatch': settings.noPatch,
          'nativeMethods': nativeMethods,
          'nativeTree': nativeTree
        };
        window['ShadyDOM'] = ShadyDOM; // Modifies native prototypes for Node, Element, etc. to
        // make native platform behavior available at prefixed names, e.g.
        // `utils.NATIVE_PREFIX + 'firstChild'` or `__shady_native_firstChild`.
        // This allows the standard names to be safely patched while retaining the
        // ability for native behavior to be used. This polyfill manipulates DOM
        // by using this saved native behavior.
        // Note, some browsers do not have proper element descriptors for
        // accessors; in this case, native behavior for these accessors is simulated
        // via a TreeWalker.

        addNativePrefixedProperties(); // Modifies native prototypes for Node, Element, etc. to make ShadowDOM
        // behavior available at prefixed names, e.g.
        // `utils.SHADY_PREFIX + 'firstChild` or `__shady_firstChild`. This is done
        // so this polyfill can perform Shadow DOM style DOM manipulation.
        // Because patching normal platform property names is optional, these prefixed
        // names are used internally.

        addShadyPrefixedProperties(); // Modifies native prototypes for Node, Element, etc. to patch
        // regular platform property names to have Shadow DOM compatible API behavior.
        // This applies the utils.SHADY_PREFIX behavior to normal names. For example,
        // if `noPatch` is not set, then `el.__shady_firstChild` is equivalent to
        // `el.firstChild`.
        // NOTE, on older browsers (old Chrome/Safari) native accessors cannot be
        // patched on prototypes (e.g. Node.prototype.firstChild cannot be modified).
        // On these browsers, instance level patching is performed where needed; this
        // instance patching is only done when `noPatch` is *not* set.

        if (!settings.noPatch) {
          applyPatches(); // Patch click event behavior only if we're patching

          patchClick();
        } // For simplicity, patch events unconditionally.
        // Patches the event system to have Shadow DOM compatible behavior (e.g.
        // event retargeting). When `noPatch` is set, retargeting is only available
        // when adding event listeners and dispatching events via `ShadyDOM.wrap`
        // (e.g. `ShadyDOM.wrap(element).addEventListener(...)`).


        patchEvents();
        window.ShadowRoot =
        /** @type {function(new:ShadowRoot)} */
        ShadyRoot;
      }

      var reservedTagList = new Set(['annotation-xml', 'color-profile', 'font-face', 'font-face-src', 'font-face-uri', 'font-face-format', 'font-face-name', 'missing-glyph']);
      /**
       * @param {string} localName
       * @returns {boolean}
       */

      function isValidCustomElementName(localName) {
        var reserved = reservedTagList.has(localName);
        var validForm = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(localName);
        return !reserved && validForm;
      }
      /**
       * @private
       * @param {!Node} node
       * @return {boolean}
       */

      function isConnected(node) {
        // Use `Node#isConnected`, if defined.
        var nativeValue = node.isConnected;

        if (nativeValue !== undefined) {
          return nativeValue;
        }
        /** @type {?Node|undefined} */


        var current = node;

        while (current && !(current.__CE_isImportDocument || current instanceof Document)) {
          current = current.parentNode || (window.ShadowRoot && current instanceof ShadowRoot ? current.host : undefined);
        }

        return !!(current && (current.__CE_isImportDocument || current instanceof Document));
      }
      /**
       * @param {!Node} root
       * @param {!Node} start
       * @return {?Node}
       */

      function nextSiblingOrAncestorSibling(root, start) {
        var node = start;

        while (node && node !== root && !node.nextSibling) {
          node = node.parentNode;
        }

        return !node || node === root ? null : node.nextSibling;
      }
      /**
       * @param {!Node} root
       * @param {!Node} start
       * @return {?Node}
       */


      function nextNode(root, start) {
        return start.firstChild ? start.firstChild : nextSiblingOrAncestorSibling(root, start);
      }
      /**
       * @param {!Node} root
       * @param {!function(!Element)} callback
       * @param {!Set<Node>=} visitedImports
       */


      function walkDeepDescendantElements(root, callback) {
        var visitedImports = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Set();
        var node = root;

        while (node) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            var element =
            /** @type {!Element} */
            node;
            callback(element);
            var localName = element.localName;

            if (localName === 'link' && element.getAttribute('rel') === 'import') {
              // If this import (polyfilled or not) has it's root node available,
              // walk it.
              var importNode =
              /** @type {!Node} */
              element.import;

              if (importNode instanceof Node && !visitedImports.has(importNode)) {
                // Prevent multiple walks of the same import root.
                visitedImports.add(importNode);

                for (var child = importNode.firstChild; child; child = child.nextSibling) {
                  walkDeepDescendantElements(child, callback, visitedImports);
                }
              } // Ignore descendants of import links to prevent attempting to walk the
              // elements created by the HTML Imports polyfill that we just walked
              // above.


              node = nextSiblingOrAncestorSibling(root, element);
              continue;
            } else if (localName === 'template') {
              // Ignore descendants of templates. There shouldn't be any descendants
              // because they will be moved into `.content` during construction in
              // browsers that support template but, in case they exist and are still
              // waiting to be moved by a polyfill, they will be ignored.
              node = nextSiblingOrAncestorSibling(root, element);
              continue;
            } // Walk shadow roots.


            var shadowRoot = element.__CE_shadowRoot;

            if (shadowRoot) {
              for (var _child = shadowRoot.firstChild; _child; _child = _child.nextSibling) {
                walkDeepDescendantElements(_child, callback, visitedImports);
              }
            }
          }

          node = nextNode(root, node);
        }
      }
      /**
       * Used to suppress Closure's "Modifying the prototype is only allowed if the
       * constructor is in the same scope" warning without using
       * `@suppress {newCheckTypes, duplicate}` because `newCheckTypes` is too broad.
       *
       * @param {!Object} destination
       * @param {string} name
       * @param {*} value
       */

      function setPropertyUnchecked(destination, name, value) {
        destination[name] = value;
      }

      /**
       * @enum {number}
       */
      var CustomElementState = {
        custom: 1,
        failed: 2
      };

      var CustomElementInternals =
      /*#__PURE__*/
      function () {
        function CustomElementInternals() {
          _classCallCheck(this, CustomElementInternals);

          /** @type {!Map<string, !CustomElementDefinition>} */
          this._localNameToDefinition = new Map();
          /** @type {!Map<!Function, !CustomElementDefinition>} */

          this._constructorToDefinition = new Map();
          /** @type {!Array<!function(!Node)>} */

          this._patches = [];
          /** @type {boolean} */

          this._hasPatches = false;
        }
        /**
         * @param {string} localName
         * @param {!CustomElementDefinition} definition
         */


        _createClass(CustomElementInternals, [{
          key: "setDefinition",
          value: function setDefinition(localName, definition) {
            this._localNameToDefinition.set(localName, definition);

            this._constructorToDefinition.set(definition.constructorFunction, definition);
          }
          /**
           * @param {string} localName
           * @return {!CustomElementDefinition|undefined}
           */

        }, {
          key: "localNameToDefinition",
          value: function localNameToDefinition(localName) {
            return this._localNameToDefinition.get(localName);
          }
          /**
           * @param {!Function} constructor
           * @return {!CustomElementDefinition|undefined}
           */

        }, {
          key: "constructorToDefinition",
          value: function constructorToDefinition(constructor) {
            return this._constructorToDefinition.get(constructor);
          }
          /**
           * @param {!function(!Node)} listener
           */

        }, {
          key: "addPatch",
          value: function addPatch(listener) {
            this._hasPatches = true;

            this._patches.push(listener);
          }
          /**
           * @param {!Node} node
           */

        }, {
          key: "patchTree",
          value: function patchTree(node) {
            var _this = this;

            if (!this._hasPatches) return;
            walkDeepDescendantElements(node, function (element) {
              return _this.patch(element);
            });
          }
          /**
           * @param {!Node} node
           */

        }, {
          key: "patch",
          value: function patch(node) {
            if (!this._hasPatches) return;
            if (node.__CE_patched) return;
            node.__CE_patched = true;

            for (var i = 0; i < this._patches.length; i++) {
              this._patches[i](node);
            }
          }
          /**
           * @param {!Node} root
           */

        }, {
          key: "connectTree",
          value: function connectTree(root) {
            var elements = [];
            walkDeepDescendantElements(root, function (element) {
              return elements.push(element);
            });

            for (var i = 0; i < elements.length; i++) {
              var element = elements[i];

              if (element.__CE_state === CustomElementState.custom) {
                this.connectedCallback(element);
              } else {
                this.upgradeElement(element);
              }
            }
          }
          /**
           * @param {!Node} root
           */

        }, {
          key: "disconnectTree",
          value: function disconnectTree(root) {
            var elements = [];
            walkDeepDescendantElements(root, function (element) {
              return elements.push(element);
            });

            for (var i = 0; i < elements.length; i++) {
              var element = elements[i];

              if (element.__CE_state === CustomElementState.custom) {
                this.disconnectedCallback(element);
              }
            }
          }
          /**
           * Upgrades all uncustomized custom elements at and below a root node for
           * which there is a definition. When custom element reaction callbacks are
           * assumed to be called synchronously (which, by the current DOM / HTML spec
           * definitions, they are *not*), callbacks for both elements customized
           * synchronously by the parser and elements being upgraded occur in the same
           * relative order.
           *
           * NOTE: This function, when used to simulate the construction of a tree that
           * is already created but not customized (i.e. by the parser), does *not*
           * prevent the element from reading the 'final' (true) state of the tree. For
           * example, the element, during truly synchronous parsing / construction would
           * see that it contains no children as they have not yet been inserted.
           * However, this function does not modify the tree, the element will
           * (incorrectly) have children. Additionally, self-modification restrictions
           * for custom element constructors imposed by the DOM spec are *not* enforced.
           *
           *
           * The following nested list shows the steps extending down from the HTML
           * spec's parsing section that cause elements to be synchronously created and
           * upgraded:
           *
           * The "in body" insertion mode:
           * https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
           * - Switch on token:
           *   .. other cases ..
           *   -> Any other start tag
           *      - [Insert an HTML element](below) for the token.
           *
           * Insert an HTML element:
           * https://html.spec.whatwg.org/multipage/syntax.html#insert-an-html-element
           * - Insert a foreign element for the token in the HTML namespace:
           *   https://html.spec.whatwg.org/multipage/syntax.html#insert-a-foreign-element
           *   - Create an element for a token:
           *     https://html.spec.whatwg.org/multipage/syntax.html#create-an-element-for-the-token
           *     - Will execute script flag is true?
           *       - (Element queue pushed to the custom element reactions stack.)
           *     - Create an element:
           *       https://dom.spec.whatwg.org/#concept-create-element
           *       - Sync CE flag is true?
           *         - Constructor called.
           *         - Self-modification restrictions enforced.
           *       - Sync CE flag is false?
           *         - (Upgrade reaction enqueued.)
           *     - Attributes appended to element.
           *       (`attributeChangedCallback` reactions enqueued.)
           *     - Will execute script flag is true?
           *       - (Element queue popped from the custom element reactions stack.
           *         Reactions in the popped stack are invoked.)
           *   - (Element queue pushed to the custom element reactions stack.)
           *   - Insert the element:
           *     https://dom.spec.whatwg.org/#concept-node-insert
           *     - Shadow-including descendants are connected. During parsing
           *       construction, there are no shadow-*excluding* descendants.
           *       However, the constructor may have validly attached a shadow
           *       tree to itself and added descendants to that shadow tree.
           *       (`connectedCallback` reactions enqueued.)
           *   - (Element queue popped from the custom element reactions stack.
           *     Reactions in the popped stack are invoked.)
           *
           * @param {!Node} root
           * @param {{
           *   visitedImports: (!Set<!Node>|undefined),
           *   upgrade: (!function(!Element)|undefined),
           * }=} options
           */

        }, {
          key: "patchAndUpgradeTree",
          value: function patchAndUpgradeTree(root) {
            var _this2 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var visitedImports = options.visitedImports || new Set();

            var upgrade = options.upgrade || function (element) {
              return _this2.upgradeElement(element);
            };

            var elements = [];

            var gatherElements = function gatherElements(element) {
              if (element.localName === 'link' && element.getAttribute('rel') === 'import') {
                // The HTML Imports polyfill sets a descendant element of the link to
                // the `import` property, specifically this is *not* a Document.
                var importNode =
                /** @type {?Node} */
                element.import;

                if (importNode instanceof Node) {
                  importNode.__CE_isImportDocument = true; // Connected links are associated with the registry.

                  importNode.__CE_hasRegistry = true;
                }

                if (importNode && importNode.readyState === 'complete') {
                  importNode.__CE_documentLoadHandled = true;
                } else {
                  // If this link's import root is not available, its contents can't be
                  // walked. Wait for 'load' and walk it when it's ready.
                  element.addEventListener('load', function () {
                    var importNode =
                    /** @type {!Node} */
                    element.import;
                    if (importNode.__CE_documentLoadHandled) return;
                    importNode.__CE_documentLoadHandled = true; // Clone the `visitedImports` set that was populated sync during
                    // the `patchAndUpgradeTree` call that caused this 'load' handler to
                    // be added. Then, remove *this* link's import node so that we can
                    // walk that import again, even if it was partially walked later
                    // during the same `patchAndUpgradeTree` call.

                    var clonedVisitedImports = new Set(visitedImports);
                    clonedVisitedImports.delete(importNode);

                    _this2.patchAndUpgradeTree(importNode, {
                      visitedImports: clonedVisitedImports,
                      upgrade: upgrade
                    });
                  });
                }
              } else {
                elements.push(element);
              }
            }; // `walkDeepDescendantElements` populates (and internally checks against)
            // `visitedImports` when traversing a loaded import.


            walkDeepDescendantElements(root, gatherElements, visitedImports);

            if (this._hasPatches) {
              for (var i = 0; i < elements.length; i++) {
                this.patch(elements[i]);
              }
            }

            for (var _i = 0; _i < elements.length; _i++) {
              upgrade(elements[_i]);
            }
          }
          /**
           * @param {!HTMLElement} element
           */

        }, {
          key: "upgradeElement",
          value: function upgradeElement(element) {
            var currentState = element.__CE_state;
            if (currentState !== undefined) return; // Prevent elements created in documents without a browsing context from
            // upgrading.
            //
            // https://html.spec.whatwg.org/multipage/custom-elements.html#look-up-a-custom-element-definition
            //   "If document does not have a browsing context, return null."
            //
            // https://html.spec.whatwg.org/multipage/window-object.html#dom-document-defaultview
            //   "The defaultView IDL attribute of the Document interface, on getting,
            //   must return this Document's browsing context's WindowProxy object, if
            //   this Document has an associated browsing context, or null otherwise."

            var ownerDocument = element.ownerDocument;
            if (!ownerDocument.defaultView && !(ownerDocument.__CE_isImportDocument && ownerDocument.__CE_hasRegistry)) return;
            var definition = this.localNameToDefinition(element.localName);
            if (!definition) return;
            definition.constructionStack.push(element);
            var constructor = definition.constructorFunction;

            try {
              try {
                var result = new constructor();

                if (result !== element) {
                  throw new Error('The custom element constructor did not produce the element being upgraded.');
                }
              } finally {
                definition.constructionStack.pop();
              }
            } catch (e) {
              element.__CE_state = CustomElementState.failed;
              throw e;
            }

            element.__CE_state = CustomElementState.custom;
            element.__CE_definition = definition;

            if (definition.attributeChangedCallback) {
              var observedAttributes = definition.observedAttributes;

              for (var i = 0; i < observedAttributes.length; i++) {
                var name = observedAttributes[i];
                var value = element.getAttribute(name);

                if (value !== null) {
                  this.attributeChangedCallback(element, name, null, value, null);
                }
              }
            }

            if (isConnected(element)) {
              this.connectedCallback(element);
            }
          }
          /**
           * @param {!Element} element
           */

        }, {
          key: "connectedCallback",
          value: function connectedCallback(element) {
            var definition = element.__CE_definition;

            if (definition.connectedCallback) {
              definition.connectedCallback.call(element);
            }
          }
          /**
           * @param {!Element} element
           */

        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback(element) {
            var definition = element.__CE_definition;

            if (definition.disconnectedCallback) {
              definition.disconnectedCallback.call(element);
            }
          }
          /**
           * @param {!Element} element
           * @param {string} name
           * @param {?string} oldValue
           * @param {?string} newValue
           * @param {?string} namespace
           */

        }, {
          key: "attributeChangedCallback",
          value: function attributeChangedCallback(element, name, oldValue, newValue, namespace) {
            var definition = element.__CE_definition;

            if (definition.attributeChangedCallback && definition.observedAttributes.indexOf(name) > -1) {
              definition.attributeChangedCallback.call(element, name, oldValue, newValue, namespace);
            }
          }
        }]);

        return CustomElementInternals;
      }();

      var DocumentConstructionObserver =
      /*#__PURE__*/
      function () {
        function DocumentConstructionObserver(internals, doc) {
          _classCallCheck(this, DocumentConstructionObserver);

          /**
           * @type {!CustomElementInternals}
           */
          this._internals = internals;
          /**
           * @type {!Document}
           */

          this._document = doc;
          /**
           * @type {MutationObserver|undefined}
           */

          this._observer = undefined; // Simulate tree construction for all currently accessible nodes in the
          // document.

          this._internals.patchAndUpgradeTree(this._document);

          if (this._document.readyState === 'loading') {
            this._observer = new MutationObserver(this._handleMutations.bind(this)); // Nodes created by the parser are given to the observer *before* the next
            // task runs. Inline scripts are run in a new task. This means that the
            // observer will be able to handle the newly parsed nodes before the inline
            // script is run.

            this._observer.observe(this._document, {
              childList: true,
              subtree: true
            });
          }
        }

        _createClass(DocumentConstructionObserver, [{
          key: "disconnect",
          value: function disconnect() {
            if (this._observer) {
              this._observer.disconnect();
            }
          }
          /**
           * @param {!Array<!MutationRecord>} mutations
           */

        }, {
          key: "_handleMutations",
          value: function _handleMutations(mutations) {
            // Once the document's `readyState` is 'interactive' or 'complete', all new
            // nodes created within that document will be the result of script and
            // should be handled by patching.
            var readyState = this._document.readyState;

            if (readyState === 'interactive' || readyState === 'complete') {
              this.disconnect();
            }

            for (var i = 0; i < mutations.length; i++) {
              var addedNodes = mutations[i].addedNodes;

              for (var j = 0; j < addedNodes.length; j++) {
                var node = addedNodes[j];

                this._internals.patchAndUpgradeTree(node);
              }
            }
          }
        }]);

        return DocumentConstructionObserver;
      }();

      /**
       * @template T
       */
      var Deferred =
      /*#__PURE__*/
      function () {
        function Deferred() {
          var _this = this;

          _classCallCheck(this, Deferred);

          /**
           * @private
           * @type {T|undefined}
           */
          this._value = undefined;
          /**
           * @private
           * @type {Function|undefined}
           */

          this._resolve = undefined;
          /**
           * @private
           * @type {!Promise<T>}
           */

          this._promise = new Promise(function (resolve) {
            _this._resolve = resolve;

            if (_this._value) {
              resolve(_this._value);
            }
          });
        }
        /**
         * @param {T} value
         */


        _createClass(Deferred, [{
          key: "resolve",
          value: function resolve(value) {
            if (this._value) {
              throw new Error('Already resolved.');
            }

            this._value = value;

            if (this._resolve) {
              this._resolve(value);
            }
          }
          /**
           * @return {!Promise<T>}
           */

        }, {
          key: "toPromise",
          value: function toPromise() {
            return this._promise;
          }
        }]);

        return Deferred;
      }();

      /**
       * @unrestricted
       */

      var CustomElementRegistry =
      /*#__PURE__*/
      function () {
        /**
         * @param {!CustomElementInternals} internals
         */
        function CustomElementRegistry(internals) {
          _classCallCheck(this, CustomElementRegistry);

          /**
           * @private
           * @type {boolean}
           */
          this._elementDefinitionIsRunning = false;
          /**
           * @private
           * @type {!CustomElementInternals}
           */

          this._internals = internals;
          /**
           * @private
           * @type {!Map<string, !Deferred<undefined>>}
           */

          this._whenDefinedDeferred = new Map();
          /**
           * The default flush callback triggers the document walk synchronously.
           * @private
           * @type {!Function}
           */

          this._flushCallback = function (fn) {
            return fn();
          };
          /**
           * @private
           * @type {boolean}
           */


          this._flushPending = false;
          /**
           * @private
           * @type {!Array<!CustomElementDefinition>}
           */

          this._pendingDefinitions = [];
          /**
           * @private
           * @type {!DocumentConstructionObserver}
           */

          this._documentConstructionObserver = new DocumentConstructionObserver(internals, document);
        }
        /**
         * @param {string} localName
         * @param {!Function} constructor
         */


        _createClass(CustomElementRegistry, [{
          key: "define",
          value: function define(localName, constructor) {
            var _this = this;

            if (!(constructor instanceof Function)) {
              throw new TypeError('Custom element constructors must be functions.');
            }

            if (!isValidCustomElementName(localName)) {
              throw new SyntaxError("The element name '".concat(localName, "' is not valid."));
            }

            if (this._internals.localNameToDefinition(localName)) {
              throw new Error("A custom element with name '".concat(localName, "' has already been defined."));
            }

            if (this._elementDefinitionIsRunning) {
              throw new Error('A custom element is already being defined.');
            }

            this._elementDefinitionIsRunning = true;
            var connectedCallback;
            var disconnectedCallback;
            var adoptedCallback;
            var attributeChangedCallback;
            var observedAttributes;

            try {
              /** @type {!Object} */
              var prototype = constructor.prototype;

              if (!(prototype instanceof Object)) {
                throw new TypeError('The custom element constructor\'s prototype is not an object.');
              }

              function getCallback(name) {
                var callbackValue = prototype[name];

                if (callbackValue !== undefined && !(callbackValue instanceof Function)) {
                  throw new Error("The '".concat(name, "' callback must be a function."));
                }

                return callbackValue;
              }

              connectedCallback = getCallback('connectedCallback');
              disconnectedCallback = getCallback('disconnectedCallback');
              adoptedCallback = getCallback('adoptedCallback');
              attributeChangedCallback = getCallback('attributeChangedCallback');
              observedAttributes = constructor['observedAttributes'] || [];
            } catch (e) {
              return;
            } finally {
              this._elementDefinitionIsRunning = false;
            }

            var definition = {
              localName: localName,
              constructorFunction: constructor,
              connectedCallback: connectedCallback,
              disconnectedCallback: disconnectedCallback,
              adoptedCallback: adoptedCallback,
              attributeChangedCallback: attributeChangedCallback,
              observedAttributes: observedAttributes,
              constructionStack: []
            };

            this._internals.setDefinition(localName, definition);

            this._pendingDefinitions.push(definition); // If we've already called the flush callback and it hasn't called back yet,
            // don't call it again.


            if (!this._flushPending) {
              this._flushPending = true;

              this._flushCallback(function () {
                return _this._flush();
              });
            }
          }
        }, {
          key: "upgrade",
          value: function upgrade(element) {
            this._internals.patchAndUpgradeTree(element);
          }
        }, {
          key: "_flush",
          value: function _flush() {
            var _this2 = this;

            // If no new definitions were defined, don't attempt to flush. This could
            // happen if a flush callback keeps the function it is given and calls it
            // multiple times.
            if (this._flushPending === false) return;
            this._flushPending = false;
            var pendingDefinitions = this._pendingDefinitions;
            /**
             * Unupgraded elements with definitions that were defined *before* the last
             * flush, in document order.
             * @type {!Array<!HTMLElement>}
             */

            var elementsWithStableDefinitions = [];
            /**
             * A map from `localName`s of definitions that were defined *after* the last
             * flush to unupgraded elements matching that definition, in document order.
             * @type {!Map<string, !Array<!HTMLElement>>}
             */

            var elementsWithPendingDefinitions = new Map();

            for (var i = 0; i < pendingDefinitions.length; i++) {
              elementsWithPendingDefinitions.set(pendingDefinitions[i].localName, []);
            }

            this._internals.patchAndUpgradeTree(document, {
              upgrade: function upgrade(element) {
                // Ignore the element if it has already upgraded or failed to upgrade.
                if (element.__CE_state !== undefined) return;
                var localName = element.localName; // If there is an applicable pending definition for the element, add the
                // element to the list of elements to be upgraded with that definition.

                var pendingElements = elementsWithPendingDefinitions.get(localName);

                if (pendingElements) {
                  pendingElements.push(element); // If there is *any other* applicable definition for the element, add it
                  // to the list of elements with stable definitions that need to be upgraded.
                } else if (_this2._internals.localNameToDefinition(localName)) {
                  elementsWithStableDefinitions.push(element);
                }
              }
            }); // Upgrade elements with 'stable' definitions first.


            for (var _i = 0; _i < elementsWithStableDefinitions.length; _i++) {
              this._internals.upgradeElement(elementsWithStableDefinitions[_i]);
            } // Upgrade elements with 'pending' definitions in the order they were defined.


            while (pendingDefinitions.length > 0) {
              var definition = pendingDefinitions.shift();
              var localName = definition.localName; // Attempt to upgrade all applicable elements.

              var pendingUpgradableElements = elementsWithPendingDefinitions.get(definition.localName);

              for (var _i2 = 0; _i2 < pendingUpgradableElements.length; _i2++) {
                this._internals.upgradeElement(pendingUpgradableElements[_i2]);
              } // Resolve any promises created by `whenDefined` for the definition.


              var deferred = this._whenDefinedDeferred.get(localName);

              if (deferred) {
                deferred.resolve(undefined);
              }
            }
          }
          /**
           * @param {string} localName
           * @return {Function|undefined}
           */

        }, {
          key: "get",
          value: function get(localName) {
            var definition = this._internals.localNameToDefinition(localName);

            if (definition) {
              return definition.constructorFunction;
            }

            return undefined;
          }
          /**
           * @param {string} localName
           * @return {!Promise<undefined>}
           */

        }, {
          key: "whenDefined",
          value: function whenDefined(localName) {
            if (!isValidCustomElementName(localName)) {
              return Promise.reject(new SyntaxError("'".concat(localName, "' is not a valid custom element name.")));
            }

            var prior = this._whenDefinedDeferred.get(localName);

            if (prior) {
              return prior.toPromise();
            }

            var deferred = new Deferred();

            this._whenDefinedDeferred.set(localName, deferred);

            var definition = this._internals.localNameToDefinition(localName); // Resolve immediately only if the given local name has a definition *and*
            // the full document walk to upgrade elements with that local name has
            // already happened.


            if (definition && !this._pendingDefinitions.some(function (d) {
              return d.localName === localName;
            })) {
              deferred.resolve(undefined);
            }

            return deferred.toPromise();
          }
        }, {
          key: "polyfillWrapFlushCallback",
          value: function polyfillWrapFlushCallback(outer) {
            this._documentConstructionObserver.disconnect();

            var inner = this._flushCallback;

            this._flushCallback = function (flush) {
              return outer(function () {
                return inner(flush);
              });
            };
          }
        }]);

        return CustomElementRegistry;
      }(); // Closure compiler exports.
      window['CustomElementRegistry'] = CustomElementRegistry;
      CustomElementRegistry.prototype['define'] = CustomElementRegistry.prototype.define;
      CustomElementRegistry.prototype['upgrade'] = CustomElementRegistry.prototype.upgrade;
      CustomElementRegistry.prototype['get'] = CustomElementRegistry.prototype.get;
      CustomElementRegistry.prototype['whenDefined'] = CustomElementRegistry.prototype.whenDefined;
      CustomElementRegistry.prototype['polyfillWrapFlushCallback'] = CustomElementRegistry.prototype.polyfillWrapFlushCallback;

      var Native = {
        Document_createElement: window.Document.prototype.createElement,
        Document_createElementNS: window.Document.prototype.createElementNS,
        Document_importNode: window.Document.prototype.importNode,
        Document_prepend: window.Document.prototype['prepend'],
        Document_append: window.Document.prototype['append'],
        DocumentFragment_prepend: window.DocumentFragment.prototype['prepend'],
        DocumentFragment_append: window.DocumentFragment.prototype['append'],
        Node_cloneNode: window.Node.prototype.cloneNode,
        Node_appendChild: window.Node.prototype.appendChild,
        Node_insertBefore: window.Node.prototype.insertBefore,
        Node_removeChild: window.Node.prototype.removeChild,
        Node_replaceChild: window.Node.prototype.replaceChild,
        Node_textContent: Object.getOwnPropertyDescriptor(window.Node.prototype, 'textContent'),
        Element_attachShadow: window.Element.prototype['attachShadow'],
        Element_innerHTML: Object.getOwnPropertyDescriptor(window.Element.prototype, 'innerHTML'),
        Element_getAttribute: window.Element.prototype.getAttribute,
        Element_setAttribute: window.Element.prototype.setAttribute,
        Element_removeAttribute: window.Element.prototype.removeAttribute,
        Element_getAttributeNS: window.Element.prototype.getAttributeNS,
        Element_setAttributeNS: window.Element.prototype.setAttributeNS,
        Element_removeAttributeNS: window.Element.prototype.removeAttributeNS,
        Element_insertAdjacentElement: window.Element.prototype['insertAdjacentElement'],
        Element_insertAdjacentHTML: window.Element.prototype['insertAdjacentHTML'],
        Element_prepend: window.Element.prototype['prepend'],
        Element_append: window.Element.prototype['append'],
        Element_before: window.Element.prototype['before'],
        Element_after: window.Element.prototype['after'],
        Element_replaceWith: window.Element.prototype['replaceWith'],
        Element_remove: window.Element.prototype['remove'],
        HTMLElement: window.HTMLElement,
        HTMLElement_innerHTML: Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, 'innerHTML'),
        HTMLElement_insertAdjacentElement: window.HTMLElement.prototype['insertAdjacentElement'],
        HTMLElement_insertAdjacentHTML: window.HTMLElement.prototype['insertAdjacentHTML']
      };

      /**
       * This class exists only to work around Closure's lack of a way to describe
       * singletons. It represents the 'already constructed marker' used in custom
       * element construction stacks.
       *
       * https://html.spec.whatwg.org/#concept-already-constructed-marker
       * @extends AlreadyConstructedMarkerType
       */
      var AlreadyConstructedMarker = function AlreadyConstructedMarker() {
        _classCallCheck(this, AlreadyConstructedMarker);
      };

      var AlreadyConstructedMarker$1 = new AlreadyConstructedMarker();

      /**
       * @param {!CustomElementInternals} internals
       */

      function PatchHTMLElement (internals) {
        window['HTMLElement'] = function () {
          /**
           * @type {function(new: HTMLElement): !HTMLElement}
           */
          function HTMLElement() {
            // This should really be `new.target` but `new.target` can't be emulated
            // in ES5. Assuming the user keeps the default value of the constructor's
            // prototype's `constructor` property, this is equivalent.
            var constructor =
            /** @type {!Function} */
            this.constructor;
            var definition = internals.constructorToDefinition(constructor);

            if (!definition) {
              throw new Error('The custom element being constructed was not registered with `customElements`.');
            }

            var constructionStack = definition.constructionStack;

            if (constructionStack.length === 0) {
              var _element =
              /** @type {!HTMLElement} */
              Native.Document_createElement.call(document, definition.localName);

              Object.setPrototypeOf(_element, constructor.prototype);
              _element.__CE_state = CustomElementState.custom;
              _element.__CE_definition = definition;
              internals.patch(_element);
              return _element;
            }

            var lastIndex = constructionStack.length - 1;
            var element = constructionStack[lastIndex];

            if (element === AlreadyConstructedMarker$1) {
              throw new Error('The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.');
            }

            var toConstructElement =
            /** @type {!HTMLElement} */
            element;
            constructionStack[lastIndex] = AlreadyConstructedMarker$1;
            Object.setPrototypeOf(toConstructElement, constructor.prototype);
            internals.patch(toConstructElement);
            return toConstructElement;
          }

          HTMLElement.prototype = Native.HTMLElement.prototype; // Safari 9 has `writable: false` on the propertyDescriptor
          // Make it writable so that TypeScript can patch up the
          // constructor in the ES5 compiled code.

          Object.defineProperty(HTMLElement.prototype, 'constructor', {
            writable: true,
            configurable: true,
            enumerable: false,
            value: HTMLElement
          });
          return HTMLElement;
        }();
      }

      /**
       * @param {!CustomElementInternals} internals
       * @param {!Object} destination
       * @param {!ParentNodeNativeMethods} builtIn
       */

      function PatchParentNode (internals, destination, builtIn) {
        /**
         * @param {!function(...(!Node|string))} builtInMethod
         * @return {!function(...(!Node|string))}
         */
        function appendPrependPatch(builtInMethod) {
          return function () {
            /**
             * A copy of `nodes`, with any DocumentFragment replaced by its children.
             * @type {!Array<!Node>}
             */
            var flattenedNodes = [];
            /**
             * Elements in `nodes` that were connected before this call.
             * @type {!Array<!Node>}
             */

            var connectedElements = [];

            for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
              nodes[_key] = arguments[_key];
            }

            for (var i = 0; i < nodes.length; i++) {
              var node = nodes[i];

              if (node instanceof Element && isConnected(node)) {
                connectedElements.push(node);
              }

              if (node instanceof DocumentFragment) {
                for (var child = node.firstChild; child; child = child.nextSibling) {
                  flattenedNodes.push(child);
                }
              } else {
                flattenedNodes.push(node);
              }
            }

            builtInMethod.apply(this, nodes);

            for (var _i = 0; _i < connectedElements.length; _i++) {
              internals.disconnectTree(connectedElements[_i]);
            }

            if (isConnected(this)) {
              for (var _i2 = 0; _i2 < flattenedNodes.length; _i2++) {
                var _node = flattenedNodes[_i2];

                if (_node instanceof Element) {
                  internals.connectTree(_node);
                }
              }
            }
          };
        }

        if (builtIn.prepend !== undefined) {
          setPropertyUnchecked(destination, 'prepend', appendPrependPatch(builtIn.prepend));
        }

        if (builtIn.append !== undefined) {
          setPropertyUnchecked(destination, 'append', appendPrependPatch(builtIn.append));
        }
      }

      /**
       * @param {!CustomElementInternals} internals
       */

      function PatchDocument (internals) {
        setPropertyUnchecked(Document.prototype, 'createElement',
        /**
         * @this {Document}
         * @param {string} localName
         * @return {!Element}
         */
        function (localName) {
          // Only create custom elements if this document is associated with the registry.
          if (this.__CE_hasRegistry) {
            var definition = internals.localNameToDefinition(localName);

            if (definition) {
              return new definition.constructorFunction();
            }
          }

          var result =
          /** @type {!Element} */
          Native.Document_createElement.call(this, localName);
          internals.patch(result);
          return result;
        });
        setPropertyUnchecked(Document.prototype, 'importNode',
        /**
         * @this {Document}
         * @param {!Node} node
         * @param {boolean=} deep
         * @return {!Node}
         */
        function (node, deep) {
          var clone =
          /** @type {!Node} */
          Native.Document_importNode.call(this, node, !!deep); // Only create custom elements if this document is associated with the registry.

          if (!this.__CE_hasRegistry) {
            internals.patchTree(clone);
          } else {
            internals.patchAndUpgradeTree(clone);
          }

          return clone;
        });
        var NS_HTML = "http://www.w3.org/1999/xhtml";
        setPropertyUnchecked(Document.prototype, 'createElementNS',
        /**
         * @this {Document}
         * @param {?string} namespace
         * @param {string} localName
         * @return {!Element}
         */
        function (namespace, localName) {
          // Only create custom elements if this document is associated with the registry.
          if (this.__CE_hasRegistry && (namespace === null || namespace === NS_HTML)) {
            var definition = internals.localNameToDefinition(localName);

            if (definition) {
              return new definition.constructorFunction();
            }
          }

          var result =
          /** @type {!Element} */
          Native.Document_createElementNS.call(this, namespace, localName);
          internals.patch(result);
          return result;
        });
        PatchParentNode(internals, Document.prototype, {
          prepend: Native.Document_prepend,
          append: Native.Document_append
        });
      }

      /**
       * @param {!CustomElementInternals} internals
       */

      function PatchDocumentFragment (internals) {
        PatchParentNode(internals, DocumentFragment.prototype, {
          prepend: Native.DocumentFragment_prepend,
          append: Native.DocumentFragment_append
        });
      }

      /**
       * @param {!CustomElementInternals} internals
       */

      function PatchNode (internals) {
        // `Node#nodeValue` is implemented on `Attr`.
        // `Node#textContent` is implemented on `Attr`, `Element`.
        setPropertyUnchecked(Node.prototype, 'insertBefore',
        /**
         * @this {Node}
         * @param {!Node} node
         * @param {?Node} refNode
         * @return {!Node}
         */
        function (node, refNode) {
          if (node instanceof DocumentFragment) {
            var insertedNodes = Array.prototype.slice.apply(node.childNodes);

            var _nativeResult = Native.Node_insertBefore.call(this, node, refNode); // DocumentFragments can't be connected, so `disconnectTree` will never
            // need to be called on a DocumentFragment's children after inserting it.


            if (isConnected(this)) {
              for (var i = 0; i < insertedNodes.length; i++) {
                internals.connectTree(insertedNodes[i]);
              }
            }

            return _nativeResult;
          }

          var nodeWasConnected = isConnected(node);
          var nativeResult = Native.Node_insertBefore.call(this, node, refNode);

          if (nodeWasConnected) {
            internals.disconnectTree(node);
          }

          if (isConnected(this)) {
            internals.connectTree(node);
          }

          return nativeResult;
        });
        setPropertyUnchecked(Node.prototype, 'appendChild',
        /**
         * @this {Node}
         * @param {!Node} node
         * @return {!Node}
         */
        function (node) {
          if (node instanceof DocumentFragment) {
            var insertedNodes = Array.prototype.slice.apply(node.childNodes);

            var _nativeResult2 = Native.Node_appendChild.call(this, node); // DocumentFragments can't be connected, so `disconnectTree` will never
            // need to be called on a DocumentFragment's children after inserting it.


            if (isConnected(this)) {
              for (var i = 0; i < insertedNodes.length; i++) {
                internals.connectTree(insertedNodes[i]);
              }
            }

            return _nativeResult2;
          }

          var nodeWasConnected = isConnected(node);
          var nativeResult = Native.Node_appendChild.call(this, node);

          if (nodeWasConnected) {
            internals.disconnectTree(node);
          }

          if (isConnected(this)) {
            internals.connectTree(node);
          }

          return nativeResult;
        });
        setPropertyUnchecked(Node.prototype, 'cloneNode',
        /**
         * @this {Node}
         * @param {boolean=} deep
         * @return {!Node}
         */
        function (deep) {
          var clone = Native.Node_cloneNode.call(this, !!deep); // Only create custom elements if this element's owner document is
          // associated with the registry.

          if (!this.ownerDocument.__CE_hasRegistry) {
            internals.patchTree(clone);
          } else {
            internals.patchAndUpgradeTree(clone);
          }

          return clone;
        });
        setPropertyUnchecked(Node.prototype, 'removeChild',
        /**
         * @this {Node}
         * @param {!Node} node
         * @return {!Node}
         */
        function (node) {
          var nodeWasConnected = isConnected(node);
          var nativeResult = Native.Node_removeChild.call(this, node);

          if (nodeWasConnected) {
            internals.disconnectTree(node);
          }

          return nativeResult;
        });
        setPropertyUnchecked(Node.prototype, 'replaceChild',
        /**
         * @this {Node}
         * @param {!Node} nodeToInsert
         * @param {!Node} nodeToRemove
         * @return {!Node}
         */
        function (nodeToInsert, nodeToRemove) {
          if (nodeToInsert instanceof DocumentFragment) {
            var insertedNodes = Array.prototype.slice.apply(nodeToInsert.childNodes);

            var _nativeResult3 = Native.Node_replaceChild.call(this, nodeToInsert, nodeToRemove); // DocumentFragments can't be connected, so `disconnectTree` will never
            // need to be called on a DocumentFragment's children after inserting it.


            if (isConnected(this)) {
              internals.disconnectTree(nodeToRemove);

              for (var i = 0; i < insertedNodes.length; i++) {
                internals.connectTree(insertedNodes[i]);
              }
            }

            return _nativeResult3;
          }

          var nodeToInsertWasConnected = isConnected(nodeToInsert);
          var nativeResult = Native.Node_replaceChild.call(this, nodeToInsert, nodeToRemove);
          var thisIsConnected = isConnected(this);

          if (thisIsConnected) {
            internals.disconnectTree(nodeToRemove);
          }

          if (nodeToInsertWasConnected) {
            internals.disconnectTree(nodeToInsert);
          }

          if (thisIsConnected) {
            internals.connectTree(nodeToInsert);
          }

          return nativeResult;
        });

        function patch_textContent(destination, baseDescriptor) {
          Object.defineProperty(destination, 'textContent', {
            enumerable: baseDescriptor.enumerable,
            configurable: true,
            get: baseDescriptor.get,
            set:
            /** @this {Node} */
            function set(assignedValue) {
              // If this is a text node then there are no nodes to disconnect.
              if (this.nodeType === Node.TEXT_NODE) {
                baseDescriptor.set.call(this, assignedValue);
                return;
              }

              var removedNodes = undefined; // Checking for `firstChild` is faster than reading `childNodes.length`
              // to compare with 0.

              if (this.firstChild) {
                // Using `childNodes` is faster than `children`, even though we only
                // care about elements.
                var childNodes = this.childNodes;
                var childNodesLength = childNodes.length;

                if (childNodesLength > 0 && isConnected(this)) {
                  // Copying an array by iterating is faster than using slice.
                  removedNodes = new Array(childNodesLength);

                  for (var i = 0; i < childNodesLength; i++) {
                    removedNodes[i] = childNodes[i];
                  }
                }
              }

              baseDescriptor.set.call(this, assignedValue);

              if (removedNodes) {
                for (var _i = 0; _i < removedNodes.length; _i++) {
                  internals.disconnectTree(removedNodes[_i]);
                }
              }
            }
          });
        }

        if (Native.Node_textContent && Native.Node_textContent.get) {
          patch_textContent(Node.prototype, Native.Node_textContent);
        } else {
          internals.addPatch(function (element) {
            patch_textContent(element, {
              enumerable: true,
              configurable: true,
              // NOTE: This implementation of the `textContent` getter assumes that
              // text nodes' `textContent` getter will not be patched.
              get:
              /** @this {Node} */
              function get() {
                /** @type {!Array<string>} */
                var parts = [];

                for (var i = 0; i < this.childNodes.length; i++) {
                  parts.push(this.childNodes[i].textContent);
                }

                return parts.join('');
              },
              set:
              /** @this {Node} */
              function set(assignedValue) {
                while (this.firstChild) {
                  Native.Node_removeChild.call(this, this.firstChild);
                }

                Native.Node_appendChild.call(this, document.createTextNode(assignedValue));
              }
            });
          });
        }
      }

      /**
       * @param {!CustomElementInternals} internals
       * @param {!Object} destination
       * @param {!ChildNodeNativeMethods} builtIn
       */

      function PatchChildNode (internals, destination, builtIn) {
        /**
         * @param {!function(...(!Node|string))} builtInMethod
         * @return {!function(...(!Node|string))}
         */
        function beforeAfterPatch(builtInMethod) {
          return function () {
            /**
             * A copy of `nodes`, with any DocumentFragment replaced by its children.
             * @type {!Array<!Node>}
             */
            var flattenedNodes = [];
            /**
             * Elements in `nodes` that were connected before this call.
             * @type {!Array<!Node>}
             */

            var connectedElements = [];

            for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
              nodes[_key] = arguments[_key];
            }

            for (var i = 0; i < nodes.length; i++) {
              var node = nodes[i];

              if (node instanceof Element && isConnected(node)) {
                connectedElements.push(node);
              }

              if (node instanceof DocumentFragment) {
                for (var child = node.firstChild; child; child = child.nextSibling) {
                  flattenedNodes.push(child);
                }
              } else {
                flattenedNodes.push(node);
              }
            }

            builtInMethod.apply(this, nodes);

            for (var _i = 0; _i < connectedElements.length; _i++) {
              internals.disconnectTree(connectedElements[_i]);
            }

            if (isConnected(this)) {
              for (var _i2 = 0; _i2 < flattenedNodes.length; _i2++) {
                var _node = flattenedNodes[_i2];

                if (_node instanceof Element) {
                  internals.connectTree(_node);
                }
              }
            }
          };
        }

        if (builtIn.before !== undefined) {
          setPropertyUnchecked(destination, 'before', beforeAfterPatch(builtIn.before));
        }

        if (builtIn.before !== undefined) {
          setPropertyUnchecked(destination, 'after', beforeAfterPatch(builtIn.after));
        }

        if (builtIn.replaceWith !== undefined) {
          setPropertyUnchecked(destination, 'replaceWith',
          /**
           * @param {...(!Node|string)} nodes
           */
          function () {
            /**
             * A copy of `nodes`, with any DocumentFragment replaced by its children.
             * @type {!Array<!Node|string>}
             */
            var flattenedNodes = [];
            /**
             * Elements in `nodes` that were connected before this call.
             * @type {!Array<!Node>}
             */

            var connectedElements = [];

            for (var _len2 = arguments.length, nodes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              nodes[_key2] = arguments[_key2];
            }

            for (var i = 0; i < nodes.length; i++) {
              var node = nodes[i];

              if (node instanceof Element && isConnected(node)) {
                connectedElements.push(node);
              }

              if (node instanceof DocumentFragment) {
                for (var child = node.firstChild; child; child = child.nextSibling) {
                  flattenedNodes.push(child);
                }
              } else {
                flattenedNodes.push(node);
              }
            }

            var wasConnected = isConnected(this);
            builtIn.replaceWith.apply(this, nodes);

            for (var _i3 = 0; _i3 < connectedElements.length; _i3++) {
              internals.disconnectTree(connectedElements[_i3]);
            }

            if (wasConnected) {
              internals.disconnectTree(this);

              for (var _i4 = 0; _i4 < flattenedNodes.length; _i4++) {
                var _node2 = flattenedNodes[_i4];

                if (_node2 instanceof Element) {
                  internals.connectTree(_node2);
                }
              }
            }
          });
        }

        if (builtIn.remove !== undefined) {
          setPropertyUnchecked(destination, 'remove', function () {
            var wasConnected = isConnected(this);
            builtIn.remove.call(this);

            if (wasConnected) {
              internals.disconnectTree(this);
            }
          });
        }
      }

      /**
       * @param {!CustomElementInternals} internals
       */

      function PatchElement (internals) {
        if (Native.Element_attachShadow) {
          setPropertyUnchecked(Element.prototype, 'attachShadow',
          /**
           * @this {Element}
           * @param {!{mode: string}} init
           * @return {ShadowRoot}
           */
          function (init) {
            var shadowRoot = Native.Element_attachShadow.call(this, init);
            this.__CE_shadowRoot = shadowRoot;
            return shadowRoot;
          });
        }

        function patch_innerHTML(destination, baseDescriptor) {
          Object.defineProperty(destination, 'innerHTML', {
            enumerable: baseDescriptor.enumerable,
            configurable: true,
            get: baseDescriptor.get,
            set:
            /** @this {Element} */
            function set(htmlString) {
              var _this = this;

              var isConnected$$1 = isConnected(this); // NOTE: In IE11, when using the native `innerHTML` setter, all nodes
              // that were previously descendants of the context element have all of
              // their children removed as part of the set - the entire subtree is
              // 'disassembled'. This work around walks the subtree *before* using the
              // native setter.

              /** @type {!Array<!Element>|undefined} */

              var removedElements = undefined;

              if (isConnected$$1) {
                removedElements = [];
                walkDeepDescendantElements(this, function (element) {
                  if (element !== _this) {
                    removedElements.push(element);
                  }
                });
              }

              baseDescriptor.set.call(this, htmlString);

              if (removedElements) {
                for (var i = 0; i < removedElements.length; i++) {
                  var element = removedElements[i];

                  if (element.__CE_state === CustomElementState.custom) {
                    internals.disconnectedCallback(element);
                  }
                }
              } // Only create custom elements if this element's owner document is
              // associated with the registry.


              if (!this.ownerDocument.__CE_hasRegistry) {
                internals.patchTree(this);
              } else {
                internals.patchAndUpgradeTree(this);
              }

              return htmlString;
            }
          });
        }

        if (Native.Element_innerHTML && Native.Element_innerHTML.get) {
          patch_innerHTML(Element.prototype, Native.Element_innerHTML);
        } else if (Native.HTMLElement_innerHTML && Native.HTMLElement_innerHTML.get) {
          patch_innerHTML(HTMLElement.prototype, Native.HTMLElement_innerHTML);
        } else {
          internals.addPatch(function (element) {
            patch_innerHTML(element, {
              enumerable: true,
              configurable: true,
              // Implements getting `innerHTML` by performing an unpatched `cloneNode`
              // of the element and returning the resulting element's `innerHTML`.
              // TODO: Is this too expensive?
              get:
              /** @this {Element} */
              function get() {
                return Native.Node_cloneNode.call(this, true).innerHTML;
              },
              // Implements setting `innerHTML` by creating an unpatched element,
              // setting `innerHTML` of that element and replacing the target
              // element's children with those of the unpatched element.
              set:
              /** @this {Element} */
              function set(assignedValue) {
                // NOTE: re-route to `content` for `template` elements.
                // We need to do this because `template.appendChild` does not
                // route into `template.content`.
                var isTemplate = this.localName === 'template';
                /** @type {!Node} */

                var content = isTemplate ?
                /** @type {!HTMLTemplateElement} */
                this.content : this;
                /** @type {!Node} */

                var rawElement = Native.Document_createElementNS.call(document, this.namespaceURI, this.localName);
                rawElement.innerHTML = assignedValue;

                while (content.childNodes.length > 0) {
                  Native.Node_removeChild.call(content, content.childNodes[0]);
                }

                var container = isTemplate ? rawElement.content : rawElement;

                while (container.childNodes.length > 0) {
                  Native.Node_appendChild.call(content, container.childNodes[0]);
                }
              }
            });
          });
        }

        setPropertyUnchecked(Element.prototype, 'setAttribute',
        /**
         * @this {Element}
         * @param {string} name
         * @param {string} newValue
         */
        function (name, newValue) {
          // Fast path for non-custom elements.
          if (this.__CE_state !== CustomElementState.custom) {
            return Native.Element_setAttribute.call(this, name, newValue);
          }

          var oldValue = Native.Element_getAttribute.call(this, name);
          Native.Element_setAttribute.call(this, name, newValue);
          newValue = Native.Element_getAttribute.call(this, name);
          internals.attributeChangedCallback(this, name, oldValue, newValue, null);
        });
        setPropertyUnchecked(Element.prototype, 'setAttributeNS',
        /**
         * @this {Element}
         * @param {?string} namespace
         * @param {string} name
         * @param {string} newValue
         */
        function (namespace, name, newValue) {
          // Fast path for non-custom elements.
          if (this.__CE_state !== CustomElementState.custom) {
            return Native.Element_setAttributeNS.call(this, namespace, name, newValue);
          }

          var oldValue = Native.Element_getAttributeNS.call(this, namespace, name);
          Native.Element_setAttributeNS.call(this, namespace, name, newValue);
          newValue = Native.Element_getAttributeNS.call(this, namespace, name);
          internals.attributeChangedCallback(this, name, oldValue, newValue, namespace);
        });
        setPropertyUnchecked(Element.prototype, 'removeAttribute',
        /**
         * @this {Element}
         * @param {string} name
         */
        function (name) {
          // Fast path for non-custom elements.
          if (this.__CE_state !== CustomElementState.custom) {
            return Native.Element_removeAttribute.call(this, name);
          }

          var oldValue = Native.Element_getAttribute.call(this, name);
          Native.Element_removeAttribute.call(this, name);

          if (oldValue !== null) {
            internals.attributeChangedCallback(this, name, oldValue, null, null);
          }
        });
        setPropertyUnchecked(Element.prototype, 'removeAttributeNS',
        /**
         * @this {Element}
         * @param {?string} namespace
         * @param {string} name
         */
        function (namespace, name) {
          // Fast path for non-custom elements.
          if (this.__CE_state !== CustomElementState.custom) {
            return Native.Element_removeAttributeNS.call(this, namespace, name);
          }

          var oldValue = Native.Element_getAttributeNS.call(this, namespace, name);
          Native.Element_removeAttributeNS.call(this, namespace, name); // In older browsers, `Element#getAttributeNS` may return the empty string
          // instead of null if the attribute does not exist. For details, see;
          // https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNS#Notes

          var newValue = Native.Element_getAttributeNS.call(this, namespace, name);

          if (oldValue !== newValue) {
            internals.attributeChangedCallback(this, name, oldValue, newValue, namespace);
          }
        });

        function patch_insertAdjacentElement(destination, baseMethod) {
          setPropertyUnchecked(destination, 'insertAdjacentElement',
          /**
           * @this {Element}
           * @param {string} position
           * @param {!Element} element
           * @return {?Element}
           */
          function (position, element) {
            var wasConnected = isConnected(element);
            var insertedElement =
            /** @type {!Element} */
            baseMethod.call(this, position, element);

            if (wasConnected) {
              internals.disconnectTree(element);
            }

            if (isConnected(insertedElement)) {
              internals.connectTree(element);
            }

            return insertedElement;
          });
        }

        if (Native.HTMLElement_insertAdjacentElement) {
          patch_insertAdjacentElement(HTMLElement.prototype, Native.HTMLElement_insertAdjacentElement);
        } else if (Native.Element_insertAdjacentElement) {
          patch_insertAdjacentElement(Element.prototype, Native.Element_insertAdjacentElement);
        } else {
          console.warn('Custom Elements: `Element#insertAdjacentElement` was not patched.');
        }

        function patch_insertAdjacentHTML(destination, baseMethod) {
          /**
           * Patches and upgrades all nodes which are siblings between `start`
           * (inclusive) and `end` (exclusive). If `end` is `null`, then all siblings
           * following `start` will be patched and upgraded.
           * @param {!Node} start
           * @param {?Node} end
           */
          function upgradeNodesInRange(start, end) {
            var nodes = [];

            for (var node = start; node !== end; node = node.nextSibling) {
              nodes.push(node);
            }

            for (var i = 0; i < nodes.length; i++) {
              internals.patchAndUpgradeTree(nodes[i]);
            }
          }

          setPropertyUnchecked(destination, 'insertAdjacentHTML',
          /**
           * @this {Element}
           * @param {string} position
           * @param {string} text
           */
          function (position, text) {
            position = position.toLowerCase();

            if (position === "beforebegin") {
              var marker = this.previousSibling;
              baseMethod.call(this, position, text);
              upgradeNodesInRange(marker ||
              /** @type {!Node} */
              this.parentNode.firstChild, this);
            } else if (position === "afterbegin") {
              var _marker = this.firstChild;
              baseMethod.call(this, position, text);
              upgradeNodesInRange(
              /** @type {!Node} */
              this.firstChild, _marker);
            } else if (position === "beforeend") {
              var _marker2 = this.lastChild;
              baseMethod.call(this, position, text);
              upgradeNodesInRange(_marker2 ||
              /** @type {!Node} */
              this.firstChild, null);
            } else if (position === "afterend") {
              var _marker3 = this.nextSibling;
              baseMethod.call(this, position, text);
              upgradeNodesInRange(
              /** @type {!Node} */
              this.nextSibling, _marker3);
            } else {
              throw new SyntaxError("The value provided (".concat(String(position), ") is ") + "not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
            }
          });
        }

        if (Native.HTMLElement_insertAdjacentHTML) {
          patch_insertAdjacentHTML(HTMLElement.prototype, Native.HTMLElement_insertAdjacentHTML);
        } else if (Native.Element_insertAdjacentHTML) {
          patch_insertAdjacentHTML(Element.prototype, Native.Element_insertAdjacentHTML);
        } else {
          console.warn('Custom Elements: `Element#insertAdjacentHTML` was not patched.');
        }

        PatchParentNode(internals, Element.prototype, {
          prepend: Native.Element_prepend,
          append: Native.Element_append
        });
        PatchChildNode(internals, Element.prototype, {
          before: Native.Element_before,
          after: Native.Element_after,
          replaceWith: Native.Element_replaceWith,
          remove: Native.Element_remove
        });
      }

      /**
       * @license
       * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
       */
      var priorCustomElements = window['customElements'];

      if (!priorCustomElements || priorCustomElements['forcePolyfill'] || typeof priorCustomElements['define'] != 'function' || typeof priorCustomElements['get'] != 'function') {
        /** @type {!CustomElementInternals} */
        var internals = new CustomElementInternals();
        PatchHTMLElement(internals);
        PatchDocument(internals);
        PatchDocumentFragment(internals);
        PatchNode(internals);
        PatchElement(internals); // The main document is always associated with the registry.

        document.__CE_hasRegistry = true;
        /** @type {!CustomElementRegistry} */

        var customElements$1 = new CustomElementRegistry(internals);
        Object.defineProperty(window, 'customElements', {
          configurable: true,
          enumerable: true,
          value: customElements$1
        });
      }

      /**
      @license
      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */

      var StyleNode = function StyleNode() {
        _classCallCheck(this, StyleNode);

        /** @type {number} */
        this['start'] = 0;
        /** @type {number} */

        this['end'] = 0;
        /** @type {StyleNode} */

        this['previous'] = null;
        /** @type {StyleNode} */

        this['parent'] = null;
        /** @type {Array<StyleNode>} */

        this['rules'] = null;
        /** @type {string} */

        this['parsedCssText'] = '';
        /** @type {string} */

        this['cssText'] = '';
        /** @type {boolean} */

        this['atRule'] = false;
        /** @type {number} */

        this['type'] = 0;
        /** @type {string} */

        this['keyframesName'] = '';
        /** @type {string} */

        this['selector'] = '';
        /** @type {string} */

        this['parsedSelector'] = '';
      };

      /**
       * @param {string} text
       * @return {StyleNode}
       */

      function parse(text) {
        text = clean(text);
        return parseCss(lex(text), text);
      } // remove stuff we don't care about that may hinder parsing

      /**
       * @param {string} cssText
       * @return {string}
       */

      function clean(cssText) {
        return cssText.replace(RX.comments, '').replace(RX.port, '');
      } // super simple {...} lexer that returns a node tree

      /**
       * @param {string} text
       * @return {StyleNode}
       */


      function lex(text) {
        var root = new StyleNode();
        root['start'] = 0;
        root['end'] = text.length;
        var n = root;

        for (var i = 0, l = text.length; i < l; i++) {
          if (text[i] === OPEN_BRACE) {
            if (!n['rules']) {
              n['rules'] = [];
            }

            var p = n;
            var previous = p['rules'][p['rules'].length - 1] || null;
            n = new StyleNode();
            n['start'] = i + 1;
            n['parent'] = p;
            n['previous'] = previous;
            p['rules'].push(n);
          } else if (text[i] === CLOSE_BRACE) {
            n['end'] = i + 1;
            n = n['parent'] || root;
          }
        }

        return root;
      } // add selectors/cssText to node tree

      /**
       * @param {StyleNode} node
       * @param {string} text
       * @return {StyleNode}
       */


      function parseCss(node, text) {
        var t = text.substring(node['start'], node['end'] - 1);
        node['parsedCssText'] = node['cssText'] = t.trim();

        if (node['parent']) {
          var ss = node['previous'] ? node['previous']['end'] : node['parent']['start'];
          t = text.substring(ss, node['start'] - 1);
          t = _expandUnicodeEscapes(t);
          t = t.replace(RX.multipleSpaces, ' '); // TODO(sorvell): ad hoc; make selector include only after last ;
          // helps with mixin syntax

          t = t.substring(t.lastIndexOf(';') + 1);
          var s = node['parsedSelector'] = node['selector'] = t.trim();
          node['atRule'] = s.indexOf(AT_START) === 0; // note, support a subset of rule types...

          if (node['atRule']) {
            if (s.indexOf(MEDIA_START) === 0) {
              node['type'] = types.MEDIA_RULE;
            } else if (s.match(RX.keyframesRule)) {
              node['type'] = types.KEYFRAMES_RULE;
              node['keyframesName'] = node['selector'].split(RX.multipleSpaces).pop();
            }
          } else {
            if (s.indexOf(VAR_START) === 0) {
              node['type'] = types.MIXIN_RULE;
            } else {
              node['type'] = types.STYLE_RULE;
            }
          }
        }

        var r$ = node['rules'];

        if (r$) {
          for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
            parseCss(r, text);
          }
        }

        return node;
      }
      /**
       * conversion of sort unicode escapes with spaces like `\33 ` (and longer) into
       * expanded form that doesn't require trailing space `\000033`
       * @param {string} s
       * @return {string}
       */


      function _expandUnicodeEscapes(s) {
        return s.replace(/\\([0-9a-f]{1,6})\s/gi, function () {
          var code = arguments[1],
              repeat = 6 - code.length;

          while (repeat--) {
            code = '0' + code;
          }

          return '\\' + code;
        });
      }
      /**
       * stringify parsed css.
       * @param {StyleNode} node
       * @param {boolean=} preserveProperties
       * @param {string=} text
       * @return {string}
       */


      function stringify(node, preserveProperties) {
        var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        // calc rule cssText
        var cssText = '';

        if (node['cssText'] || node['rules']) {
          var r$ = node['rules'];

          if (r$ && !_hasMixinRules(r$)) {
            for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
              cssText = stringify(r, preserveProperties, cssText);
            }
          } else {
            cssText = preserveProperties ? node['cssText'] : removeCustomProps(node['cssText']);
            cssText = cssText.trim();

            if (cssText) {
              cssText = '  ' + cssText + '\n';
            }
          }
        } // emit rule if there is cssText


        if (cssText) {
          if (node['selector']) {
            text += node['selector'] + ' ' + OPEN_BRACE + '\n';
          }

          text += cssText;

          if (node['selector']) {
            text += CLOSE_BRACE + '\n\n';
          }
        }

        return text;
      }
      /**
       * @param {Array<StyleNode>} rules
       * @return {boolean}
       */

      function _hasMixinRules(rules) {
        var r = rules[0];
        return Boolean(r) && Boolean(r['selector']) && r['selector'].indexOf(VAR_START) === 0;
      }
      /**
       * @param {string} cssText
       * @return {string}
       */


      function removeCustomProps(cssText) {
        cssText = removeCustomPropAssignment(cssText);
        return removeCustomPropApply(cssText);
      }
      /**
       * @param {string} cssText
       * @return {string}
       */


      function removeCustomPropAssignment(cssText) {
        return cssText.replace(RX.customProp, '').replace(RX.mixinProp, '');
      }
      /**
       * @param {string} cssText
       * @return {string}
       */

      function removeCustomPropApply(cssText) {
        return cssText.replace(RX.mixinApply, '').replace(RX.varApply, '');
      }
      /** @enum {number} */


      var types = {
        STYLE_RULE: 1,
        KEYFRAMES_RULE: 7,
        MEDIA_RULE: 4,
        MIXIN_RULE: 1000
      };
      var OPEN_BRACE = '{';
      var CLOSE_BRACE = '}'; // helper regexp's

      var RX = {
        comments: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
        port: /@import[^;]*;/gim,
        customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
        mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
        mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
        varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
        keyframesRule: /^@[^\s]*keyframes/,
        multipleSpaces: /\s+/g
      };
      var VAR_START = '--';
      var MEDIA_START = '@media';
      var AT_START = '@';

      /**
      @license
      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */

      var nativeShadow = !(window['ShadyDOM'] && window['ShadyDOM']['inUse']);
      var nativeCssVariables_;
      /**
       * @param {(ShadyCSSOptions | ShadyCSSInterface)=} settings
       */

      function calcCssVariables(settings) {
        if (settings && settings['shimcssproperties']) {
          nativeCssVariables_ = false;
        } else {
          // chrome 49 has semi-working css vars, check if box-shadow works
          // safari 9.1 has a recalc bug: https://bugs.webkit.org/show_bug.cgi?id=155782
          // However, shim css custom properties are only supported with ShadyDOM enabled,
          // so fall back on native if we do not detect ShadyDOM
          // Edge 15: custom properties used in ::before and ::after will also be used in the parent element
          // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12414257/
          nativeCssVariables_ = nativeShadow || Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) && window.CSS && CSS.supports && CSS.supports('box-shadow', '0 0 0 var(--foo)'));
        }
      }
      /** @type {string | undefined} */


      var cssBuild;

      if (window.ShadyCSS && window.ShadyCSS.cssBuild !== undefined) {
        cssBuild = window.ShadyCSS.cssBuild;
      }
      /** @type {boolean} */


      var disableRuntime = Boolean(window.ShadyCSS && window.ShadyCSS.disableRuntime);

      if (window.ShadyCSS && window.ShadyCSS.nativeCss !== undefined) {
        nativeCssVariables_ = window.ShadyCSS.nativeCss;
      } else if (window.ShadyCSS) {
        calcCssVariables(window.ShadyCSS); // reset window variable to let ShadyCSS API take its place

        window.ShadyCSS = undefined;
      } else {
        calcCssVariables(window['WebComponents'] && window['WebComponents']['flags']);
      } // Hack for type error under new type inference which doesn't like that
      // nativeCssVariables is updated in a function and assigns the type
      // `function(): ?` instead of `boolean`.


      var nativeCssVariables =
      /** @type {boolean} */
      nativeCssVariables_;

      /**
      @license
      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      var VAR_ASSIGN = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi;
      var MIXIN_MATCH = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;
      var VAR_CONSUMED = /(--[\w-]+)\s*([:,;)]|$)/gi;
      var ANIMATION_MATCH = /(animation\s*:)|(animation-name\s*:)/;
      var MEDIA_MATCH = /@media\s(.*)/;
      var BRACKETED = /\{[^}]*\}/g;
      var HOST_PREFIX = '(?:^|[^.#[:])';
      var HOST_SUFFIX = '($|[.:[\\s>+~])';

      /**
      @license
      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      /** @type {!Set<string>} */

      var styleTextSet = new Set();
      var scopingAttribute = 'shady-unscoped';
      /**
       * Add a specifically-marked style to the document directly, and only one copy of that style.
       *
       * @param {!HTMLStyleElement} style
       * @return {undefined}
       */

      function processUnscopedStyle(style) {
        var text = style.textContent;

        if (!styleTextSet.has(text)) {
          styleTextSet.add(text);
          var newStyle = style.cloneNode(true);
          document.head.appendChild(newStyle);
        }
      }
      /**
       * Check if a style is supposed to be unscoped
       * @param {!HTMLStyleElement} style
       * @return {boolean} true if the style has the unscoping attribute
       */

      function isUnscopedStyle(style) {
        return style.hasAttribute(scopingAttribute);
      }

      /**
      @license
      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      /**
       * @param {string|StyleNode} rules
       * @param {function(StyleNode)=} callback
       * @return {string}
       */

      function toCssText(rules, callback) {
        if (!rules) {
          return '';
        }

        if (typeof rules === 'string') {
          rules = parse(rules);
        }

        if (callback) {
          forEachRule(rules, callback);
        }

        return stringify(rules, nativeCssVariables);
      }
      /**
       * @param {HTMLStyleElement} style
       * @return {StyleNode}
       */

      function rulesForStyle(style) {
        if (!style['__cssRules'] && style.textContent) {
          style['__cssRules'] = parse(style.textContent);
        }

        return style['__cssRules'] || null;
      } // Tests if a rule is a keyframes selector, which looks almost exactly
      // like a normal selector but is not (it has nothing to do with scoping
      // for example).

      /**
       * @param {StyleNode} rule
       * @return {boolean}
       */

      function isKeyframesSelector(rule) {
        return Boolean(rule['parent']) && rule['parent']['type'] === types.KEYFRAMES_RULE;
      }
      /**
       * @param {StyleNode} node
       * @param {Function=} styleRuleCallback
       * @param {Function=} keyframesRuleCallback
       * @param {boolean=} onlyActiveRules
       */

      function forEachRule(node, styleRuleCallback, keyframesRuleCallback, onlyActiveRules) {
        if (!node) {
          return;
        }

        var skipRules = false;
        var type = node['type'];

        if (onlyActiveRules) {
          if (type === types.MEDIA_RULE) {
            var matchMedia = node['selector'].match(MEDIA_MATCH);

            if (matchMedia) {
              // if rule is a non matching @media rule, skip subrules
              if (!window.matchMedia(matchMedia[1]).matches) {
                skipRules = true;
              }
            }
          }
        }

        if (type === types.STYLE_RULE) {
          styleRuleCallback(node);
        } else if (keyframesRuleCallback && type === types.KEYFRAMES_RULE) {
          keyframesRuleCallback(node);
        } else if (type === types.MIXIN_RULE) {
          skipRules = true;
        }

        var r$ = node['rules'];

        if (r$ && !skipRules) {
          for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
            forEachRule(r, styleRuleCallback, keyframesRuleCallback, onlyActiveRules);
          }
        }
      } // add a string of cssText to the document.

      /**
       * @param {string} cssText
       * @param {string} moniker
       * @param {Node} target
       * @param {Node} contextNode
       * @return {HTMLStyleElement}
       */

      function applyCss(cssText, moniker, target, contextNode) {
        var style = createScopeStyle(cssText, moniker);
        applyStyle(style, target, contextNode);
        return style;
      }
      /**
       * @param {string} cssText
       * @param {string} moniker
       * @return {HTMLStyleElement}
       */

      function createScopeStyle(cssText, moniker) {
        var style =
        /** @type {HTMLStyleElement} */
        document.createElement('style');

        if (moniker) {
          style.setAttribute('scope', moniker);
        }

        style.textContent = cssText;
        return style;
      }
      /**
       * Track the position of the last added style for placing placeholders
       * @type {Node}
       */

      var lastHeadApplyNode = null; // insert a comment node as a styling position placeholder.

      /**
       * @param {string} moniker
       * @return {!Comment}
       */

      function applyStylePlaceHolder(moniker) {
        var placeHolder = document.createComment(' Shady DOM styles for ' + moniker + ' ');
        var after = lastHeadApplyNode ? lastHeadApplyNode['nextSibling'] : null;
        var scope = document.head;
        scope.insertBefore(placeHolder, after || scope.firstChild);
        lastHeadApplyNode = placeHolder;
        return placeHolder;
      }
      /**
       * @param {HTMLStyleElement} style
       * @param {?Node} target
       * @param {?Node} contextNode
       */

      function applyStyle(style, target, contextNode) {
        target = target || document.head;
        var after = contextNode && contextNode.nextSibling || target.firstChild;
        target.insertBefore(style, after);

        if (!lastHeadApplyNode) {
          lastHeadApplyNode = style;
        } else {
          // only update lastHeadApplyNode if the new style is inserted after the old lastHeadApplyNode
          var position = style.compareDocumentPosition(lastHeadApplyNode);

          if (position === Node.DOCUMENT_POSITION_PRECEDING) {
            lastHeadApplyNode = style;
          }
        }
      }
      /**
       * Walk from text[start] matching parens and
       * returns position of the outer end paren
       * @param {string} text
       * @param {number} start
       * @return {number}
       */

      function findMatchingParen(text, start) {
        var level = 0;

        for (var i = start, l = text.length; i < l; i++) {
          if (text[i] === '(') {
            level++;
          } else if (text[i] === ')') {
            if (--level === 0) {
              return i;
            }
          }
        }

        return -1;
      }
      /**
       * @param {string} str
       * @param {function(string, string, string, string)} callback
       */

      function processVariableAndFallback(str, callback) {
        // find 'var('
        var start = str.indexOf('var(');

        if (start === -1) {
          // no var?, everything is prefix
          return callback(str, '', '', '');
        } //${prefix}var(${inner})${suffix}


        var end = findMatchingParen(str, start + 3);
        var inner = str.substring(start + 4, end);
        var prefix = str.substring(0, start); // suffix may have other variables

        var suffix = processVariableAndFallback(str.substring(end + 1), callback);
        var comma = inner.indexOf(','); // value and fallback args should be trimmed to match in property lookup

        if (comma === -1) {
          // variable, no fallback
          return callback(prefix, inner.trim(), '', suffix);
        } // var(${value},${fallback})


        var value = inner.substring(0, comma).trim();
        var fallback = inner.substring(comma + 1).trim();
        return callback(prefix, value, fallback, suffix);
      }
      /**
       * @param {Element} element
       * @param {string} value
       */

      function setElementClassRaw(element, value) {
        // use native setAttribute provided by ShadyDOM when setAttribute is patched
        if (nativeShadow) {
          element.setAttribute('class', value);
        } else {
          window['ShadyDOM']['nativeMethods']['setAttribute'].call(element, 'class', value);
        }
      }
      /**
       * @type {function(*):*}
       */

      var wrap$1 = window['ShadyDOM'] && window['ShadyDOM']['wrap'] || function (node) {
        return node;
      };
      /**
       * @param {Element | {is: string, extends: string}} element
       * @return {{is: string, typeExtension: string}}
       */

      function getIsExtends(element) {
        var localName = element['localName'];
        var is = '',
            typeExtension = '';
        /*
        NOTE: technically, this can be wrong for certain svg elements
        with `-` in the name like `<font-face>`
        */

        if (localName) {
          if (localName.indexOf('-') > -1) {
            is = localName;
          } else {
            typeExtension = localName;
            is = element.getAttribute && element.getAttribute('is') || '';
          }
        } else {
          is =
          /** @type {?} */
          element.is;
          typeExtension =
          /** @type {?} */
          element.extends;
        }

        return {
          is: is,
          typeExtension: typeExtension
        };
      }
      /**
       * @param {Element|DocumentFragment} element
       * @return {string}
       */

      function gatherStyleText(element) {
        /** @type {!Array<string>} */
        var styleTextParts = [];
        var styles =
        /** @type {!NodeList<!HTMLStyleElement>} */
        element.querySelectorAll('style');

        for (var i = 0; i < styles.length; i++) {
          var style = styles[i];

          if (isUnscopedStyle(style)) {
            if (!nativeShadow) {
              processUnscopedStyle(style);
              style.parentNode.removeChild(style);
            }
          } else {
            styleTextParts.push(style.textContent);
            style.parentNode.removeChild(style);
          }
        }

        return styleTextParts.join('').trim();
      }
      /**
       * Split a selector separated by commas into an array in a smart way
       * @param {string} selector
       * @return {!Array<string>}
       */

      function splitSelectorList(selector) {
        var parts = [];
        var part = '';

        for (var i = 0; i >= 0 && i < selector.length; i++) {
          // A selector with parentheses will be one complete part
          if (selector[i] === '(') {
            // find the matching paren
            var end = findMatchingParen(selector, i); // push the paren block into the part

            part += selector.slice(i, end + 1); // move the index to after the paren block

            i = end;
          } else if (selector[i] === ',') {
            parts.push(part);
            part = '';
          } else {
            part += selector[i];
          }
        } // catch any pieces after the last comma


        if (part) {
          parts.push(part);
        }

        return parts;
      }
      var CSS_BUILD_ATTR = 'css-build';
      /**
       * Return the polymer-css-build "build type" applied to this element
       *
       * @param {!HTMLElement} element
       * @return {string} Can be "", "shady", or "shadow"
       */

      function getCssBuild(element) {
        if (cssBuild !== undefined) {
          return (
            /** @type {string} */
            cssBuild
          );
        }

        if (element.__cssBuild === undefined) {
          // try attribute first, as it is the common case
          var attrValue = element.getAttribute(CSS_BUILD_ATTR);

          if (attrValue) {
            element.__cssBuild = attrValue;
          } else {
            var buildComment = getBuildComment(element);

            if (buildComment !== '') {
              // remove build comment so it is not needlessly copied into every element instance
              removeBuildComment(element);
            }

            element.__cssBuild = buildComment;
          }
        }

        return element.__cssBuild || '';
      }
      /**
       * Check if the given element, either a <template> or <style>, has been processed
       * by polymer-css-build.
       *
       * If so, then we can make a number of optimizations:
       * - polymer-css-build will decompose mixins into individual CSS Custom Properties,
       * so the ApplyShim can be skipped entirely.
       * - Under native ShadowDOM, the style text can just be copied into each instance
       * without modification
       * - If the build is "shady" and ShadyDOM is in use, the styling does not need
       * scoping beyond the shimming of CSS Custom Properties
       *
       * @param {!HTMLElement} element
       * @return {boolean}
       */

      function elementHasBuiltCss(element) {
        return getCssBuild(element) !== '';
      }
      /**
       * For templates made with tagged template literals, polymer-css-build will
       * insert a comment of the form `<!--css-build:shadow-->`
       *
       * @param {!HTMLElement} element
       * @return {string}
       */

      function getBuildComment(element) {
        var buildComment = element.localName === 'template' ?
        /** @type {!HTMLTemplateElement} */
        element.content.firstChild : element.firstChild;

        if (buildComment instanceof Comment) {
          var commentParts = buildComment.textContent.trim().split(':');

          if (commentParts[0] === CSS_BUILD_ATTR) {
            return commentParts[1];
          }
        }

        return '';
      }
      /**
       * Check if the css build status is optimal, and do no unneeded work.
       *
       * @param {string=} cssBuild CSS build status
       * @return {boolean} css build is optimal or not
       */

      function isOptimalCssBuild() {
        var cssBuild$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        // CSS custom property shim always requires work
        if (cssBuild$$1 === '' || !nativeCssVariables) {
          return false;
        }

        return nativeShadow ? cssBuild$$1 === 'shadow' : cssBuild$$1 === 'shady';
      }
      /**
       * @param {!HTMLElement} element
       */

      function removeBuildComment(element) {
        var buildComment = element.localName === 'template' ?
        /** @type {!HTMLTemplateElement} */
        element.content.firstChild : element.firstChild;
        buildComment.parentNode.removeChild(buildComment);
      }

      /**
      @license
      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      /* Transforms ShadowDOM styling into ShadyDOM styling

      * scoping:

        * elements in scope get scoping selector class="x-foo-scope"
        * selectors re-written as follows:

          div button -> div.x-foo-scope button.x-foo-scope

      * :host -> scopeName

      * :host(...) -> scopeName...

      * ::slotted(...) -> scopeName > ...

      * ...:dir(ltr|rtl) -> [dir="ltr|rtl"] ..., ...[dir="ltr|rtl"]

      * :host(:dir[rtl]) -> scopeName:dir(rtl) -> [dir="rtl"] scopeName, scopeName[dir="rtl"]

      */

      var SCOPE_NAME = 'style-scope';

      var StyleTransformer =
      /*#__PURE__*/
      function () {
        function StyleTransformer() {
          _classCallCheck(this, StyleTransformer);
        }

        _createClass(StyleTransformer, [{
          key: "dom",

          /**
           * Given a node and scope name, add a scoping class to each node
           * in the tree. This facilitates transforming css into scoped rules.
           * @param {!Node} node
           * @param {string} scope
           * @param {boolean=} shouldRemoveScope
           * @deprecated
           */
          value: function dom(node, scope, shouldRemoveScope) {
            var _this = this;

            var fn = function fn(node) {
              _this.element(node, scope || '', shouldRemoveScope);
            };

            this._transformDom(node, fn);
          }
          /**
           * Given a node and scope name, add a scoping class to each node in the tree.
           * @param {!Node} node
           * @param {string} scope
           */

        }, {
          key: "domAddScope",
          value: function domAddScope(node, scope) {
            var _this2 = this;

            var fn = function fn(node) {
              _this2.element(node, scope || '');
            };

            this._transformDom(node, fn);
          }
          /**
           * @param {!Node} startNode
           * @param {!function(!Node)} transformer
           */

        }, {
          key: "_transformDom",
          value: function _transformDom(startNode, transformer) {
            if (startNode.nodeType === Node.ELEMENT_NODE) {
              transformer(startNode);
            }

            var c$;

            if (startNode.localName === 'template') {
              var template =
              /** @type {!HTMLTemplateElement} */
              startNode; // In case the template is in svg context, fall back to the node
              // since it won't be an HTMLTemplateElement with a .content property

              c$ = (template.content || template._content || template).childNodes;
            } else {
              c$ =
              /** @type {!ParentNode} */
              startNode.children || startNode.childNodes;
            }

            if (c$) {
              for (var i = 0; i < c$.length; i++) {
                this._transformDom(c$[i], transformer);
              }
            }
          }
          /**
           * @param {?} element
           * @param {?} scope
           * @param {?=} shouldRemoveScope
           */

        }, {
          key: "element",
          value: function element(_element, scope, shouldRemoveScope) {
            // note: if using classes, we add both the general 'style-scope' class
            // as well as the specific scope. This enables easy filtering of all
            // `style-scope` elements
            if (scope) {
              // note: svg on IE does not have classList so fallback to class
              if (_element.classList) {
                if (shouldRemoveScope) {
                  _element.classList.remove(SCOPE_NAME);

                  _element.classList.remove(scope);
                } else {
                  _element.classList.add(SCOPE_NAME);

                  _element.classList.add(scope);
                }
              } else if (_element.getAttribute) {
                var c = _element.getAttribute(CLASS);

                if (shouldRemoveScope) {
                  if (c) {
                    var newValue = c.replace(SCOPE_NAME, '').replace(scope, '');
                    setElementClassRaw(_element, newValue);
                  }
                } else {
                  var _newValue = (c ? c + ' ' : '') + SCOPE_NAME + ' ' + scope;

                  setElementClassRaw(_element, _newValue);
                }
              }
            }
          }
          /**
           * Given a node, replace the scoping class to each subnode in the tree.
           * @param {!Node} node
           * @param {string} oldScope
           * @param {string} newScope
           */

        }, {
          key: "domReplaceScope",
          value: function domReplaceScope(node, oldScope, newScope) {
            var _this3 = this;

            var fn = function fn(node) {
              _this3.element(node, oldScope, true);

              _this3.element(node, newScope);
            };

            this._transformDom(node, fn);
          }
          /**
           * Given a node, remove the scoping class to each subnode in the tree.
           * @param {!Node} node
           * @param {string} oldScope
           */

        }, {
          key: "domRemoveScope",
          value: function domRemoveScope(node, oldScope) {
            var _this4 = this;

            var fn = function fn(node) {
              _this4.element(node, oldScope || '', true);
            };

            this._transformDom(node, fn);
          }
          /**
           * @param {?} element
           * @param {?} styleRules
           * @param {?=} callback
           * @param {string=} cssBuild
           * @param {string=} cssText
           * @return {string}
           */

        }, {
          key: "elementStyles",
          value: function elementStyles(element, styleRules, callback) {
            var cssBuild$$1 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
            var cssText = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';

            // no need to shim selectors if settings.useNativeShadow, also
            // a shady css build will already have transformed selectors
            // NOTE: This method may be called as part of static or property shimming.
            // When there is a targeted build it will not be called for static shimming,
            // but when the property shim is used it is called and should opt out of
            // static shimming work when a proper build exists.
            if (cssText === '') {
              if (nativeShadow || cssBuild$$1 === 'shady') {
                cssText = toCssText(styleRules, callback);
              } else {
                var _StyleUtil$getIsExten = getIsExtends(element),
                    is = _StyleUtil$getIsExten.is,
                    typeExtension = _StyleUtil$getIsExten.typeExtension;

                cssText = this.css(styleRules, is, typeExtension, callback) + '\n\n';
              }
            }

            return cssText.trim();
          } // Given a string of cssText and a scoping string (scope), returns
          // a string of scoped css where each selector is transformed to include
          // a class created from the scope. ShadowDOM selectors are also transformed
          // (e.g. :host) to use the scoping selector.

        }, {
          key: "css",
          value: function css(rules, scope, ext, callback) {
            var hostScope = this._calcHostScope(scope, ext);

            scope = this._calcElementScope(scope);
            var self = this;
            return toCssText(rules, function (
            /** StyleNode */
            rule) {
              if (!rule.isScoped) {
                self.rule(rule, scope, hostScope);
                rule.isScoped = true;
              }

              if (callback) {
                callback(rule, scope, hostScope);
              }
            });
          }
        }, {
          key: "_calcElementScope",
          value: function _calcElementScope(scope) {
            if (scope) {
              return CSS_CLASS_PREFIX + scope;
            } else {
              return '';
            }
          }
        }, {
          key: "_calcHostScope",
          value: function _calcHostScope(scope, ext) {
            return ext ? "[is=".concat(scope, "]") : scope;
          }
        }, {
          key: "rule",
          value: function rule(_rule, scope, hostScope) {
            this._transformRule(_rule, this._transformComplexSelector, scope, hostScope);
          }
          /**
           * transforms a css rule to a scoped rule.
           *
           * @param {StyleNode} rule
           * @param {Function} transformer
           * @param {string=} scope
           * @param {string=} hostScope
           */

        }, {
          key: "_transformRule",
          value: function _transformRule(rule, transformer, scope, hostScope) {
            // NOTE: save transformedSelector for subsequent matching of elements
            // against selectors (e.g. when calculating style properties)
            rule['selector'] = rule.transformedSelector = this._transformRuleCss(rule, transformer, scope, hostScope);
          }
          /**
           * @param {StyleNode} rule
           * @param {Function} transformer
           * @param {string=} scope
           * @param {string=} hostScope
           */

        }, {
          key: "_transformRuleCss",
          value: function _transformRuleCss(rule, transformer, scope, hostScope) {
            var p$ = splitSelectorList(rule['selector']); // we want to skip transformation of rules that appear in keyframes,
            // because they are keyframe selectors, not element selectors.

            if (!isKeyframesSelector(rule)) {
              for (var i = 0, l = p$.length, p; i < l && (p = p$[i]); i++) {
                p$[i] = transformer.call(this, p, scope, hostScope);
              }
            }

            return p$.filter(function (part) {
              return Boolean(part);
            }).join(COMPLEX_SELECTOR_SEP);
          }
          /**
           * @param {string} selector
           * @return {string}
           */

        }, {
          key: "_twiddleNthPlus",
          value: function _twiddleNthPlus(selector) {
            return selector.replace(NTH, function (m, type, inside) {
              if (inside.indexOf('+') > -1) {
                inside = inside.replace(/\+/g, '___');
              } else if (inside.indexOf('___') > -1) {
                inside = inside.replace(/___/g, '+');
              }

              return ":".concat(type, "(").concat(inside, ")");
            });
          }
          /**
           * Preserve `:matches()` selectors by replacing them with MATCHES_REPLACMENT
           * and returning an array of `:matches()` selectors.
           * Use `_replacesMatchesPseudo` to replace the `:matches()` parts
           *
           * @param {string} selector
           * @return {{selector: string, matches: !Array<string>}}
           */

        }, {
          key: "_preserveMatchesPseudo",
          value: function _preserveMatchesPseudo(selector) {
            /** @type {!Array<string>} */
            var matches = [];
            var match;

            while (match = selector.match(MATCHES)) {
              var start = match.index;
              var end = findMatchingParen(selector, start);

              if (end === -1) {
                throw new Error("".concat(match.input, " selector missing ')'"));
              }

              var part = selector.slice(start, end + 1);
              selector = selector.replace(part, MATCHES_REPLACEMENT);
              matches.push(part);
            }

            return {
              selector: selector,
              matches: matches
            };
          }
          /**
           * Replace MATCHES_REPLACMENT character with the given set of `:matches()`
           * selectors.
           *
           * @param {string} selector
           * @param {!Array<string>} matches
           * @return {string}
           */

        }, {
          key: "_replaceMatchesPseudo",
          value: function _replaceMatchesPseudo(selector, matches) {
            var parts = selector.split(MATCHES_REPLACEMENT);
            return matches.reduce(function (acc, cur, idx) {
              return acc + cur + parts[idx + 1];
            }, parts[0]);
          }
          /**
           * @param {string} selector
           * @param {string} scope
           * @param {string=} hostScope
           */

        }, {
          key: "_transformComplexSelector",
          value: function _transformComplexSelector(selector, scope, hostScope) {
            var _this5 = this;

            var stop = false;
            selector = selector.trim(); // Remove spaces inside of selectors like `:nth-of-type` because it confuses SIMPLE_SELECTOR_SEP

            var isNth = NTH.test(selector);

            if (isNth) {
              selector = selector.replace(NTH, function (m, type, inner) {
                return ":".concat(type, "(").concat(inner.replace(/\s/g, ''), ")");
              });
              selector = this._twiddleNthPlus(selector);
            } // Preserve selectors like `:-webkit-any` so that SIMPLE_SELECTOR_SEP does
            // not get confused by spaces inside the pseudo selector


            var isMatches = MATCHES.test(selector);
            /** @type {!Array<string>} */

            var matches;

            if (isMatches) {
              var _this$_preserveMatche = this._preserveMatchesPseudo(selector);

              selector = _this$_preserveMatche.selector;
              matches = _this$_preserveMatche.matches;
            }

            selector = selector.replace(SLOTTED_START, "".concat(HOST, " $1"));
            selector = selector.replace(SIMPLE_SELECTOR_SEP, function (m, c, s) {
              if (!stop) {
                var info = _this5._transformCompoundSelector(s, c, scope, hostScope);

                stop = stop || info.stop;
                c = info.combinator;
                s = info.value;
              }

              return c + s;
            }); // replace `:matches()` selectors

            if (isMatches) {
              selector = this._replaceMatchesPseudo(selector, matches);
            }

            if (isNth) {
              selector = this._twiddleNthPlus(selector);
            }

            return selector;
          }
        }, {
          key: "_transformCompoundSelector",
          value: function _transformCompoundSelector(selector, combinator, scope, hostScope) {
            // replace :host with host scoping class
            var slottedIndex = selector.indexOf(SLOTTED);

            if (selector.indexOf(HOST) >= 0) {
              selector = this._transformHostSelector(selector, hostScope); // replace other selectors with scoping class
            } else if (slottedIndex !== 0) {
              selector = scope ? this._transformSimpleSelector(selector, scope) : selector;
            } // mark ::slotted() scope jump to replace with descendant selector + arg
            // also ignore left-side combinator


            var slotted = false;

            if (slottedIndex >= 0) {
              combinator = '';
              slotted = true;
            } // process scope jumping selectors up to the scope jump and then stop


            var stop;

            if (slotted) {
              stop = true;

              if (slotted) {
                // .zonk ::slotted(.foo) -> .zonk.scope > .foo
                selector = selector.replace(SLOTTED_PAREN, function (m, paren) {
                  return " > ".concat(paren);
                });
              }
            }

            selector = selector.replace(DIR_PAREN, function (m, before, dir) {
              return "[dir=\"".concat(dir, "\"] ").concat(before, ", ").concat(before, "[dir=\"").concat(dir, "\"]");
            });
            return {
              value: selector,
              combinator: combinator,
              stop: stop
            };
          }
        }, {
          key: "_transformSimpleSelector",
          value: function _transformSimpleSelector(selector, scope) {
            var attributes = selector.split(/(\[.+?\])/);
            var output = [];

            for (var i = 0; i < attributes.length; i++) {
              // Do not attempt to transform any attribute selector content
              if (i % 2 === 1) {
                output.push(attributes[i]);
              } else {
                var part = attributes[i];

                if (!(part === '' && i === attributes.length - 1)) {
                  var p$ = part.split(PSEUDO_PREFIX);
                  p$[0] += scope;
                  output.push(p$.join(PSEUDO_PREFIX));
                }
              }
            }

            return output.join('');
          } // :host(...) -> scopeName...

        }, {
          key: "_transformHostSelector",
          value: function _transformHostSelector(selector, hostScope) {
            var m = selector.match(HOST_PAREN);
            var paren = m && m[2].trim() || '';

            if (paren) {
              if (!paren[0].match(SIMPLE_SELECTOR_PREFIX)) {
                // paren starts with a type selector
                var typeSelector = paren.split(SIMPLE_SELECTOR_PREFIX)[0]; // if the type selector is our hostScope then avoid pre-pending it

                if (typeSelector === hostScope) {
                  return paren; // otherwise, this selector should not match in this scope so
                  // output a bogus selector.
                } else {
                  return SELECTOR_NO_MATCH;
                }
              } else {
                // make sure to do a replace here to catch selectors like:
                // `:host(.foo)::before`
                return selector.replace(HOST_PAREN, function (m, host, paren) {
                  return hostScope + paren;
                });
              } // if no paren, do a straight :host replacement.
              // TODO(sorvell): this should not strictly be necessary but
              // it's needed to maintain support for `:host[foo]` type selectors
              // which have been improperly used under Shady DOM. This should be
              // deprecated.

            } else {
              return selector.replace(HOST, hostScope);
            }
          }
          /**
           * @param {StyleNode} rule
           */

        }, {
          key: "documentRule",
          value: function documentRule(rule) {
            // reset selector in case this is redone.
            rule['selector'] = rule['parsedSelector'];
            this.normalizeRootSelector(rule);

            this._transformRule(rule, this._transformDocumentSelector);
          }
          /**
           * @param {StyleNode} rule
           */

        }, {
          key: "normalizeRootSelector",
          value: function normalizeRootSelector(rule) {
            if (rule['selector'] === ROOT) {
              rule['selector'] = 'html';
            }
          }
          /**
           * @param {string} selector
           */

        }, {
          key: "_transformDocumentSelector",
          value: function _transformDocumentSelector(selector) {
            if (selector.match(HOST)) {
              // remove ':host' type selectors in document rules
              return '';
            } else if (selector.match(SLOTTED)) {
              return this._transformComplexSelector(selector, SCOPE_DOC_SELECTOR);
            } else {
              return this._transformSimpleSelector(selector.trim(), SCOPE_DOC_SELECTOR);
            }
          }
        }, {
          key: "SCOPE_NAME",
          get: function get() {
            return SCOPE_NAME;
          }
        }]);

        return StyleTransformer;
      }();

      var NTH = /:(nth[-\w]+)\(([^)]+)\)/;
      var SCOPE_DOC_SELECTOR = ":not(.".concat(SCOPE_NAME, ")");
      var COMPLEX_SELECTOR_SEP = ',';
      var SIMPLE_SELECTOR_SEP = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g;
      var SIMPLE_SELECTOR_PREFIX = /[[.:#*]/;
      var HOST = ':host';
      var ROOT = ':root';
      var SLOTTED = '::slotted';
      var SLOTTED_START = new RegExp("^(".concat(SLOTTED, ")")); // NOTE: this supports 1 nested () pair for things like
      // :host(:not([selected]), more general support requires
      // parsing which seems like overkill

      var HOST_PAREN = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/; // similar to HOST_PAREN

      var SLOTTED_PAREN = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/;
      var DIR_PAREN = /(.*):dir\((?:(ltr|rtl))\)/;
      var CSS_CLASS_PREFIX = '.';
      var PSEUDO_PREFIX = ':';
      var CLASS = 'class';
      var SELECTOR_NO_MATCH = 'should_not_match';
      var MATCHES = /:(?:matches|any|-(?:webkit|moz)-any)/;
      var MATCHES_REPLACEMENT = "\uE000";
      var StyleTransformer$1 = new StyleTransformer();

      /**
      @license
      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */

      /** @const {string} */

      var infoKey = '__styleInfo';

      var StyleInfo =
      /*#__PURE__*/
      function () {
        _createClass(StyleInfo, null, [{
          key: "get",

          /**
           * @param {Element} node
           * @return {StyleInfo}
           */
          value: function get(node) {
            if (node) {
              return node[infoKey];
            } else {
              return null;
            }
          }
          /**
           * @param {!Element} node
           * @param {StyleInfo} styleInfo
           * @return {StyleInfo}
           */

        }, {
          key: "set",
          value: function set(node, styleInfo) {
            node[infoKey] = styleInfo;
            return styleInfo;
          }
          /**
           * @param {StyleNode} ast
           * @param {Node=} placeholder
           * @param {Array<string>=} ownStylePropertyNames
           * @param {string=} elementName
           * @param {string=} typeExtension
           * @param {string=} cssBuild
           */

        }]);

        function StyleInfo(ast, placeholder, ownStylePropertyNames, elementName, typeExtension, cssBuild) {
          _classCallCheck(this, StyleInfo);

          /** @type {StyleNode} */
          this.styleRules = ast || null;
          /** @type {Node} */

          this.placeholder = placeholder || null;
          /** @type {!Array<string>} */

          this.ownStylePropertyNames = ownStylePropertyNames || [];
          /** @type {Object} */

          this.overrideStyleProperties = null;
          /** @type {string} */

          this.elementName = elementName || '';
          /** @type {string} */

          this.cssBuild = cssBuild || '';
          /** @type {string} */

          this.typeExtension = typeExtension || '';
          /** @type {Object<string, string>} */

          this.styleProperties = null;
          /** @type {?string} */

          this.scopeSelector = null;
          /** @type {HTMLStyleElement} */

          this.customStyle = null;
        }

        _createClass(StyleInfo, [{
          key: "_getStyleRules",
          value: function _getStyleRules() {
            return this.styleRules;
          }
        }]);

        return StyleInfo;
      }();
      StyleInfo.prototype['_getStyleRules'] = StyleInfo.prototype._getStyleRules;

      /**
      @license
      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */

      /**
       * @param {string} selector
       * @return {boolean}
       * @this {Element}
       */

      var matchesSelector$1 = function matchesSelector(selector) {
        var method = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;
        return method && method.call(this, selector);
      };

      var IS_IE = navigator.userAgent.match('Trident');
      var XSCOPE_NAME = 'x-scope';

      var StyleProperties =
      /*#__PURE__*/
      function () {
        function StyleProperties() {
          _classCallCheck(this, StyleProperties);
        }

        _createClass(StyleProperties, [{
          key: "decorateStyles",

          /**
           * decorates styles with rule info and returns an array of used style property names
           *
           * @param {StyleNode} rules
           * @return {Array<string>}
           */
          value: function decorateStyles(rules) {
            var self = this,
                props = {},
                keyframes = [],
                ruleIndex = 0;
            forEachRule(rules, function (rule) {
              self.decorateRule(rule); // mark in-order position of ast rule in styles block, used for cache key

              rule.index = ruleIndex++;
              self.collectPropertiesInCssText(rule.propertyInfo.cssText, props);
            }, function onKeyframesRule(rule) {
              keyframes.push(rule);
            }); // Cache all found keyframes rules for later reference:

            rules._keyframes = keyframes; // return this list of property names *consumes* in these styles.

            var names = [];

            for (var i in props) {
              names.push(i);
            }

            return names;
          } // decorate a single rule with property info

        }, {
          key: "decorateRule",
          value: function decorateRule(rule) {
            if (rule.propertyInfo) {
              return rule.propertyInfo;
            }

            var info = {},
                properties = {};
            var hasProperties = this.collectProperties(rule, properties);

            if (hasProperties) {
              info.properties = properties; // TODO(sorvell): workaround parser seeing mixins as additional rules

              rule['rules'] = null;
            }

            info.cssText = this.collectCssText(rule);
            rule.propertyInfo = info;
            return info;
          } // collects the custom properties from a rule's cssText

        }, {
          key: "collectProperties",
          value: function collectProperties(rule, properties) {
            var info = rule.propertyInfo;

            if (info) {
              if (info.properties) {
                Object.assign(properties, info.properties);
                return true;
              }
            } else {
              var m,
                  rx = VAR_ASSIGN;
              var cssText = rule['parsedCssText'];
              var value;
              var any;

              while (m = rx.exec(cssText)) {
                // note: group 2 is var, 3 is mixin
                value = (m[2] || m[3]).trim(); // value of 'inherit' or 'unset' is equivalent to not setting the property here

                if (value !== 'inherit' || value !== 'unset') {
                  properties[m[1].trim()] = value;
                }

                any = true;
              }

              return any;
            }
          } // returns cssText of properties that consume variables/mixins

        }, {
          key: "collectCssText",
          value: function collectCssText(rule) {
            return this.collectConsumingCssText(rule['parsedCssText']);
          } // NOTE: we support consumption inside mixin assignment
          // but not production, so strip out {...}

        }, {
          key: "collectConsumingCssText",
          value: function collectConsumingCssText(cssText) {
            return cssText.replace(BRACKETED, '').replace(VAR_ASSIGN, '');
          }
        }, {
          key: "collectPropertiesInCssText",
          value: function collectPropertiesInCssText(cssText, props) {
            var m;

            while (m = VAR_CONSUMED.exec(cssText)) {
              var name = m[1]; // This regex catches all variable names, and following non-whitespace char
              // If next char is not ':', then variable is a consumer

              if (m[2] !== ':') {
                props[name] = true;
              }
            }
          } // turns custom properties into realized values.

        }, {
          key: "reify",
          value: function reify(props) {
            // big perf optimization here: reify only *own* properties
            // since this object has __proto__ of the element's scope properties
            var names = Object.getOwnPropertyNames(props);

            for (var i = 0, n; i < names.length; i++) {
              n = names[i];
              props[n] = this.valueForProperty(props[n], props);
            }
          } // given a property value, returns the reified value
          // a property value may be:
          // (1) a literal value like: red or 5px;
          // (2) a variable value like: var(--a), var(--a, red), or var(--a, --b) or
          // var(--a, var(--b));
          // (3) a literal mixin value like { properties }. Each of these properties
          // can have values that are: (a) literal, (b) variables, (c) @apply mixins.

        }, {
          key: "valueForProperty",
          value: function valueForProperty(property, props) {
            // case (1) default
            // case (3) defines a mixin and we have to reify the internals
            if (property) {
              if (property.indexOf(';') >= 0) {
                property = this.valueForProperties(property, props);
              } else {
                // case (2) variable
                var self = this;

                var fn = function fn(prefix, value, fallback, suffix) {
                  if (!value) {
                    return prefix + suffix;
                  }

                  var propertyValue = self.valueForProperty(props[value], props); // if value is "initial", then the variable should be treated as unset

                  if (!propertyValue || propertyValue === 'initial') {
                    // fallback may be --a or var(--a) or literal
                    propertyValue = self.valueForProperty(props[fallback] || fallback, props) || fallback;
                  } else if (propertyValue === 'apply-shim-inherit') {
                    // CSS build will replace `inherit` with `apply-shim-inherit`
                    // for use with native css variables.
                    // Since we have full control, we can use `inherit` directly.
                    propertyValue = 'inherit';
                  }

                  return prefix + (propertyValue || '') + suffix;
                };

                property = processVariableAndFallback(property, fn);
              }
            }

            return property && property.trim() || '';
          } // note: we do not yet support mixin within mixin

        }, {
          key: "valueForProperties",
          value: function valueForProperties(property, props) {
            var parts = property.split(';');

            for (var i = 0, p, m; i < parts.length; i++) {
              if (p = parts[i]) {
                MIXIN_MATCH.lastIndex = 0;
                m = MIXIN_MATCH.exec(p);

                if (m) {
                  p = this.valueForProperty(props[m[1]], props);
                } else {
                  var colon = p.indexOf(':');

                  if (colon !== -1) {
                    var pp = p.substring(colon);
                    pp = pp.trim();
                    pp = this.valueForProperty(pp, props) || pp;
                    p = p.substring(0, colon) + pp;
                  }
                }

                parts[i] = p && p.lastIndexOf(';') === p.length - 1 ? // strip trailing ;
                p.slice(0, -1) : p || '';
              }
            }

            return parts.join(';');
          }
        }, {
          key: "applyProperties",
          value: function applyProperties(rule, props) {
            var output = ''; // dynamically added sheets may not be decorated so ensure they are.

            if (!rule.propertyInfo) {
              this.decorateRule(rule);
            }

            if (rule.propertyInfo.cssText) {
              output = this.valueForProperties(rule.propertyInfo.cssText, props);
            }

            rule['cssText'] = output;
          } // Apply keyframe transformations to the cssText of a given rule. The
          // keyframeTransforms object is a map of keyframe names to transformer
          // functions which take in cssText and spit out transformed cssText.

        }, {
          key: "applyKeyframeTransforms",
          value: function applyKeyframeTransforms(rule, keyframeTransforms) {
            var input = rule['cssText'];
            var output = rule['cssText'];

            if (rule.hasAnimations == null) {
              // Cache whether or not the rule has any animations to begin with:
              rule.hasAnimations = ANIMATION_MATCH.test(input);
            } // If there are no animations referenced, we can skip transforms:


            if (rule.hasAnimations) {
              var transform; // If we haven't transformed this rule before, we iterate over all
              // transforms:

              if (rule.keyframeNamesToTransform == null) {
                rule.keyframeNamesToTransform = [];

                for (var keyframe in keyframeTransforms) {
                  transform = keyframeTransforms[keyframe];
                  output = transform(input); // If the transform actually changed the CSS text, we cache the
                  // transform name for future use:

                  if (input !== output) {
                    input = output;
                    rule.keyframeNamesToTransform.push(keyframe);
                  }
                }
              } else {
                // If we already have a list of keyframe names that apply to this
                // rule, we apply only those keyframe name transforms:
                for (var i = 0; i < rule.keyframeNamesToTransform.length; ++i) {
                  transform = keyframeTransforms[rule.keyframeNamesToTransform[i]];
                  input = transform(input);
                }

                output = input;
              }
            }

            rule['cssText'] = output;
          } // Test if the rules in these styles matches the given `element` and if so,
          // collect any custom properties into `props`.

          /**
           * @param {StyleNode} rules
           * @param {Element} element
           */

        }, {
          key: "propertyDataFromStyles",
          value: function propertyDataFromStyles(rules, element) {
            var _this = this;

            var props = {}; // generates a unique key for these matches

            var o = []; // note: active rules excludes non-matching @media rules

            forEachRule(rules, function (rule) {
              // TODO(sorvell): we could trim the set of rules at declaration
              // time to only include ones that have properties
              if (!rule.propertyInfo) {
                _this.decorateRule(rule);
              } // match element against transformedSelector: selector may contain
              // unwanted uniquification and parsedSelector does not directly match
              // for :host selectors.


              var selectorToMatch = rule.transformedSelector || rule['parsedSelector'];

              if (element && rule.propertyInfo.properties && selectorToMatch) {
                if (matchesSelector$1.call(element, selectorToMatch)) {
                  _this.collectProperties(rule, props); // produce numeric key for these matches for lookup


                  addToBitMask(rule.index, o);
                }
              }
            }, null, true);
            return {
              properties: props,
              key: o
            };
          }
          /**
           * @param {Element} scope
           * @param {StyleNode} rule
           * @param {string} cssBuild
           * @param {function(Object)} callback
           */

        }, {
          key: "whenHostOrRootRule",
          value: function whenHostOrRootRule(scope, rule, cssBuild$$1, callback) {
            if (!rule.propertyInfo) {
              this.decorateRule(rule);
            }

            if (!rule.propertyInfo.properties) {
              return;
            }

            var _StyleUtil$getIsExten = getIsExtends(scope),
                is = _StyleUtil$getIsExten.is,
                typeExtension = _StyleUtil$getIsExten.typeExtension;

            var hostScope = is ? StyleTransformer$1._calcHostScope(is, typeExtension) : 'html';
            var parsedSelector = rule['parsedSelector'];
            var isRoot = parsedSelector === ':host > *' || parsedSelector === 'html';
            var isHost = parsedSelector.indexOf(':host') === 0 && !isRoot; // build info is either in scope (when scope is an element) or in the style
            // when scope is the default scope; note: this allows default scope to have
            // mixed mode built and unbuilt styles.

            if (cssBuild$$1 === 'shady') {
              // :root -> x-foo > *.x-foo for elements and html for custom-style
              isRoot = parsedSelector === hostScope + ' > *.' + hostScope || parsedSelector.indexOf('html') !== -1; // :host -> x-foo for elements, but sub-rules have .x-foo in them

              isHost = !isRoot && parsedSelector.indexOf(hostScope) === 0;
            }

            if (!isRoot && !isHost) {
              return;
            }

            var selectorToMatch = hostScope;

            if (isHost) {
              // need to transform :host because `:host` does not work with `matches`
              if (!rule.transformedSelector) {
                // transform :host into a matchable selector
                rule.transformedSelector = StyleTransformer$1._transformRuleCss(rule, StyleTransformer$1._transformComplexSelector, StyleTransformer$1._calcElementScope(is), hostScope);
              }

              selectorToMatch = rule.transformedSelector || hostScope;
            }

            callback({
              selector: selectorToMatch,
              isHost: isHost,
              isRoot: isRoot
            });
          }
          /**
           * @param {Element} scope
           * @param {StyleNode} rules
           * @param {string} cssBuild
           * @return {Object}
           */

        }, {
          key: "hostAndRootPropertiesForScope",
          value: function hostAndRootPropertiesForScope(scope, rules, cssBuild$$1) {
            var _this2 = this;

            var hostProps = {},
                rootProps = {}; // note: active rules excludes non-matching @media rules

            forEachRule(rules, function (rule) {
              // if scope is StyleDefaults, use _element for matchesSelector
              _this2.whenHostOrRootRule(scope, rule, cssBuild$$1, function (info) {
                var element = scope._element || scope;

                if (matchesSelector$1.call(element, info.selector)) {
                  if (info.isHost) {
                    _this2.collectProperties(rule, hostProps);
                  } else {
                    _this2.collectProperties(rule, rootProps);
                  }
                }
              });
            }, null, true);
            return {
              rootProps: rootProps,
              hostProps: hostProps
            };
          }
          /**
           * @param {Element} element
           * @param {Object} properties
           * @param {string} scopeSelector
           */

        }, {
          key: "transformStyles",
          value: function transformStyles(element, properties, scopeSelector) {
            var self = this;

            var _StyleUtil$getIsExten2 = getIsExtends(element),
                is = _StyleUtil$getIsExten2.is,
                typeExtension = _StyleUtil$getIsExten2.typeExtension;

            var hostSelector = StyleTransformer$1._calcHostScope(is, typeExtension);

            var rxHostSelector = element.extends ? '\\' + hostSelector.slice(0, -1) + '\\]' : hostSelector;
            var hostRx = new RegExp(HOST_PREFIX + rxHostSelector + HOST_SUFFIX);

            var _StyleInfo$get = StyleInfo.get(element),
                rules = _StyleInfo$get.styleRules,
                cssBuild$$1 = _StyleInfo$get.cssBuild;

            var keyframeTransforms = this._elementKeyframeTransforms(element, rules, scopeSelector);

            return StyleTransformer$1.elementStyles(element, rules, function (rule) {
              self.applyProperties(rule, properties);

              if (!nativeShadow && !isKeyframesSelector(rule) && rule['cssText']) {
                // NOTE: keyframe transforms only scope munge animation names, so it
                // is not necessary to apply them in ShadowDOM.
                self.applyKeyframeTransforms(rule, keyframeTransforms);

                self._scopeSelector(rule, hostRx, hostSelector, scopeSelector);
              }
            }, cssBuild$$1);
          }
          /**
           * @param {Element} element
           * @param {StyleNode} rules
           * @param {string} scopeSelector
           * @return {Object}
           */

        }, {
          key: "_elementKeyframeTransforms",
          value: function _elementKeyframeTransforms(element, rules, scopeSelector) {
            var keyframesRules = rules._keyframes;
            var keyframeTransforms = {};

            if (!nativeShadow && keyframesRules) {
              // For non-ShadowDOM, we transform all known keyframes rules in
              // advance for the current scope. This allows us to catch keyframes
              // rules that appear anywhere in the stylesheet:
              for (var i = 0, keyframesRule = keyframesRules[i]; i < keyframesRules.length; keyframesRule = keyframesRules[++i]) {
                this._scopeKeyframes(keyframesRule, scopeSelector);

                keyframeTransforms[keyframesRule['keyframesName']] = this._keyframesRuleTransformer(keyframesRule);
              }
            }

            return keyframeTransforms;
          } // Generate a factory for transforming a chunk of CSS text to handle a
          // particular scoped keyframes rule.

          /**
           * @param {StyleNode} keyframesRule
           * @return {function(string):string}
           */

        }, {
          key: "_keyframesRuleTransformer",
          value: function _keyframesRuleTransformer(keyframesRule) {
            return function (cssText) {
              return cssText.replace(keyframesRule.keyframesNameRx, keyframesRule.transformedKeyframesName);
            };
          }
          /**
           * Transforms `@keyframes` names to be unique for the current host.
           * Example: @keyframes foo-anim -> @keyframes foo-anim-x-foo-0
           *
           * @param {StyleNode} rule
           * @param {string} scopeId
           */

        }, {
          key: "_scopeKeyframes",
          value: function _scopeKeyframes(rule, scopeId) {
            // Animation names are of the form [\w-], so ensure that the name regex does not partially apply
            // to similarly named keyframe names by checking for a word boundary at the beginning and
            // a non-word boundary or `-` at the end.
            rule.keyframesNameRx = new RegExp("\\b".concat(rule['keyframesName'], "(?!\\B|-)"), 'g');
            rule.transformedKeyframesName = rule['keyframesName'] + '-' + scopeId;
            rule.transformedSelector = rule.transformedSelector || rule['selector'];
            rule['selector'] = rule.transformedSelector.replace(rule['keyframesName'], rule.transformedKeyframesName);
          } // Strategy: x scope shim a selector e.g. to scope `.x-foo-42` (via classes):
          // non-host selector: .a.x-foo -> .x-foo-42 .a.x-foo
          // host selector: x-foo.wide -> .x-foo-42.wide
          // note: we use only the scope class (.x-foo-42) and not the hostSelector
          // (x-foo) to scope :host rules; this helps make property host rules
          // have low specificity. They are overrideable by class selectors but,
          // unfortunately, not by type selectors (e.g. overriding via
          // `.special` is ok, but not by `x-foo`).

          /**
           * @param {StyleNode} rule
           * @param {RegExp} hostRx
           * @param {string} hostSelector
           * @param {string} scopeId
           */

        }, {
          key: "_scopeSelector",
          value: function _scopeSelector(rule, hostRx, hostSelector, scopeId) {
            rule.transformedSelector = rule.transformedSelector || rule['selector'];
            var selector = rule.transformedSelector;
            var scope = '.' + scopeId;
            var parts = splitSelectorList(selector);

            for (var i = 0, l = parts.length, p; i < l && (p = parts[i]); i++) {
              parts[i] = p.match(hostRx) ? p.replace(hostSelector, scope) : scope + ' ' + p;
            }

            rule['selector'] = parts.join(',');
          }
          /**
           * @param {Element} element
           * @param {string} selector
           * @param {string} old
           */

        }, {
          key: "applyElementScopeSelector",
          value: function applyElementScopeSelector(element, selector, old) {
            var c = element.getAttribute('class') || '';
            var v = c;

            if (old) {
              v = c.replace(new RegExp('\\s*' + XSCOPE_NAME + '\\s*' + old + '\\s*', 'g'), ' ');
            }

            v += (v ? ' ' : '') + XSCOPE_NAME + ' ' + selector;

            if (c !== v) {
              setElementClassRaw(element, v);
            }
          }
          /**
           * @param {HTMLElement} element
           * @param {Object} properties
           * @param {string} selector
           * @param {HTMLStyleElement} style
           * @return {HTMLStyleElement}
           */

        }, {
          key: "applyElementStyle",
          value: function applyElementStyle(element, properties, selector, style) {
            // calculate cssText to apply
            var cssText = style ? style.textContent || '' : this.transformStyles(element, properties, selector); // if shady and we have a cached style that is not style, decrement

            var styleInfo = StyleInfo.get(element);
            var s = styleInfo.customStyle;

            if (s && !nativeShadow && s !== style) {
              s['_useCount']--;

              if (s['_useCount'] <= 0 && s.parentNode) {
                s.parentNode.removeChild(s);
              }
            } // apply styling always under native or if we generated style
            // or the cached style is not in document(!)


            if (nativeShadow) {
              // update existing style only under native
              if (styleInfo.customStyle) {
                styleInfo.customStyle.textContent = cssText;
                style = styleInfo.customStyle; // otherwise, if we have css to apply, do so
              } else if (cssText) {
                // apply css after the scope style of the element to help with
                // style precedence rules.
                style = applyCss(cssText, selector, element.shadowRoot, styleInfo.placeholder);
              }
            } else {
              // shady and no cache hit
              if (!style) {
                // apply css after the scope style of the element to help with
                // style precedence rules.
                if (cssText) {
                  style = applyCss(cssText, selector, null, styleInfo.placeholder);
                } // shady and cache hit but not in document

              } else if (!style.parentNode) {
                if (IS_IE && cssText.indexOf('@media') > -1) {
                  // @media rules may be stale in IE 10 and 11
                  // refresh the text content of the style to revalidate them.
                  style.textContent = cssText;
                }

                applyStyle(style, null, styleInfo.placeholder);
              }
            } // ensure this style is our custom style and increment its use count.


            if (style) {
              style['_useCount'] = style['_useCount'] || 0; // increment use count if we changed styles

              if (styleInfo.customStyle != style) {
                style['_useCount']++;
              }

              styleInfo.customStyle = style;
            }

            return style;
          }
          /**
           * @param {Element} style
           * @param {Object} properties
           */

        }, {
          key: "applyCustomStyle",
          value: function applyCustomStyle(style, properties) {
            var rules = rulesForStyle(
            /** @type {HTMLStyleElement} */
            style);
            var self = this;
            style.textContent = toCssText(rules, function (
            /** StyleNode */
            rule) {
              var css = rule['cssText'] = rule['parsedCssText'];

              if (rule.propertyInfo && rule.propertyInfo.cssText) {
                // remove property assignments
                // so next function isn't confused
                // NOTE: we have 3 categories of css:
                // (1) normal properties,
                // (2) custom property assignments (--foo: red;),
                // (3) custom property usage: border: var(--foo); @apply(--foo);
                // In elements, 1 and 3 are separated for efficiency; here they
                // are not and this makes this case unique.
                css = removeCustomPropAssignment(
                /** @type {string} */
                css); // replace with reified properties, scenario is same as mixin

                rule['cssText'] = self.valueForProperties(css, properties);
              }
            });
          }
        }, {
          key: "XSCOPE_NAME",
          get: function get() {
            return XSCOPE_NAME;
          }
        }]);

        return StyleProperties;
      }();
      /**
       * @param {number} n
       * @param {Array<number>} bits
       */


      function addToBitMask(n, bits) {
        var o = parseInt(n / 32, 10);
        var v = 1 << n % 32;
        bits[o] = (bits[o] || 0) | v;
      }

      var StyleProperties$1 = new StyleProperties();

      /**
      @license
      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      /** @type {!Object<string, !Node>} */

      var placeholderMap = {};
      /**
       * @param {string} elementName
       * @return {Node}
       */

      function getStylePlaceholder(elementName) {
        return placeholderMap[elementName] || null;
      }
      /**
       * @param {string} elementName
       */

      function ensureStylePlaceholder(elementName) {
        if (!placeholderMap[elementName]) {
          placeholderMap[elementName] = applyStylePlaceHolder(elementName);
        }
      }
      /**
       * @const {CustomElementRegistry}
       */

      var ce = window['customElements'];

      if (ce && !nativeShadow && !disableRuntime) {
        /**
         * @const {function(this:CustomElementRegistry, string,function(new:HTMLElement),{extends: string}=)}
         */
        var origDefine = ce['define'];
        /**
         * @param {string} name
         * @param {function(new:HTMLElement)} clazz
         * @param {{extends: string}=} options
         */

        var wrappedDefine = function wrappedDefine(name, clazz, options) {
          ensureStylePlaceholder(name);
          origDefine.call(
          /** @type {!CustomElementRegistry} */
          ce, name, clazz, options);
        };

        ce['define'] = wrappedDefine;
      }

      /**
      @license
      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */

      var StyleCache =
      /*#__PURE__*/
      function () {
        function StyleCache() {
          var typeMax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

          _classCallCheck(this, StyleCache);

          // map element name -> [{properties, styleElement, scopeSelector}]
          this.cache = {};
          /** @type {number} */

          this.typeMax = typeMax;
        }

        _createClass(StyleCache, [{
          key: "_validate",
          value: function _validate(cacheEntry, properties, ownPropertyNames) {
            for (var idx = 0; idx < ownPropertyNames.length; idx++) {
              var pn = ownPropertyNames[idx];

              if (cacheEntry.properties[pn] !== properties[pn]) {
                return false;
              }
            }

            return true;
          }
        }, {
          key: "store",
          value: function store(tagname, properties, styleElement, scopeSelector) {
            var list = this.cache[tagname] || [];
            list.push({
              properties: properties,
              styleElement: styleElement,
              scopeSelector: scopeSelector
            });

            if (list.length > this.typeMax) {
              list.shift();
            }

            this.cache[tagname] = list;
          }
        }, {
          key: "fetch",
          value: function fetch(tagname, properties, ownPropertyNames) {
            var list = this.cache[tagname];

            if (!list) {
              return;
            } // reverse list for most-recent lookups


            for (var idx = list.length - 1; idx >= 0; idx--) {
              var entry = list[idx];

              if (this._validate(entry, properties, ownPropertyNames)) {
                return entry;
              }
            }
          }
        }]);

        return StyleCache;
      }();

      /**
      @license
      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      var flush$1 = function flush() {};
      /**
       * @param {!Element} element
       * @return {string}
       */

      function getClasses(element) {
        if (element.classList && element.classList.value) {
          return element.classList.value;
        } else {
          // NOTE: className is patched to remove scoping classes in ShadyDOM
          // use getAttribute('class') instead, which is unpatched
          return element.getAttribute('class') || '';
        }
      }

      var scopeRegExp = new RegExp("".concat(StyleTransformer$1.SCOPE_NAME, "\\s*([^\\s]*)"));
      /**
       * @param {!Element} element
       * @return {string}
       */

      function getCurrentScope(element) {
        var match = getClasses(element).match(scopeRegExp);

        if (match) {
          return match[1];
        } else {
          return '';
        }
      }
      /**
       * @param {!Node} node
       */

      function getOwnerScope(node) {
        var ownerRoot = wrap$1(node).getRootNode();

        if (ownerRoot === node || ownerRoot === node.ownerDocument) {
          return '';
        }

        var host =
        /** @type {!ShadowRoot} */
        ownerRoot.host;

        if (!host) {
          // this may actually be a document fragment
          return '';
        }

        return getIsExtends(host).is;
      }
      /**
       * @param {!HTMLElement|!HTMLDocument} element
       */

      function ensureCorrectSubtreeScoping(element) {
        // find unscoped subtree nodes
        var unscopedNodes = window['ShadyDOM']['nativeMethods']['querySelectorAll'].call(element, ":not(.".concat(StyleTransformer$1.SCOPE_NAME, ")"));

        for (var j = 0; j < unscopedNodes.length; j++) {
          // it's possible, during large batch inserts, that nodes that aren't
          // scoped within the current scope were added.
          // To make sure that any unscoped nodes that were inserted in the current batch are correctly styled,
          // query all unscoped nodes and force their style-scope to be applied.
          // This could happen if a sub-element appended an unscoped node in its shadowroot and this function
          // runs on a parent element of the host of that unscoped node:
          // parent-element -> element -> unscoped node
          // Here unscoped node should have the style-scope element, not parent-element.
          var unscopedNode = unscopedNodes[j];
          var scopeForPreviouslyUnscopedNode = getOwnerScope(unscopedNode);

          if (scopeForPreviouslyUnscopedNode) {
            StyleTransformer$1.element(unscopedNode, scopeForPreviouslyUnscopedNode);
          }
        }
      }
      /**
       * @param {HTMLElement} el
       * @return {boolean}
       */

      function isElementWithBuiltCss(el) {
        if (el.localName === 'style' || el.localName === 'template') {
          return elementHasBuiltCss(el);
        }

        return false;
      }
      /**
       * @param {Array<MutationRecord|null>|null} mxns
       */


      function handler(mxns) {
        for (var x = 0; x < mxns.length; x++) {
          var mxn = mxns[x];

          if (mxn.target === document.documentElement || mxn.target === document.head) {
            continue;
          }

          for (var i = 0; i < mxn.addedNodes.length; i++) {
            var n = mxn.addedNodes[i];

            if (n.nodeType !== Node.ELEMENT_NODE) {
              continue;
            }

            n =
            /** @type {HTMLElement} */
            n; // eslint-disable-line no-self-assign

            var root = n.getRootNode();
            var currentScope = getCurrentScope(n); // node was scoped, but now is in document
            // If this element has built css, we must not remove scoping as this node
            // will be used as a template or style without re - applying scoping as an optimization

            if (currentScope && root === n.ownerDocument && !isElementWithBuiltCss(n)) {
              StyleTransformer$1.domRemoveScope(n, currentScope);
            } else if (root instanceof ShadowRoot) {
              var newScope = getOwnerScope(n); // rescope current node and subtree if necessary

              if (newScope !== currentScope) {
                StyleTransformer$1.domReplaceScope(n, currentScope, newScope);
              } // make sure all the subtree elements are scoped correctly


              ensureCorrectSubtreeScoping(n);
            }
          }
        }
      } // if native Shadow DOM is being used, or ShadyDOM handles dynamic scoiping, do not activate the MutationObserver


      if (!nativeShadow && !(window['ShadyDOM'] && window['ShadyDOM']['handlesDynamicScoping'])) {
        var observer = new MutationObserver(handler);

        var start = function start(node) {
          observer.observe(node, {
            childList: true,
            subtree: true
          });
        };

        var nativeCustomElements = window['customElements'] && !window['customElements']['polyfillWrapFlushCallback']; // need to start immediately with native custom elements
        // TODO(dfreedm): with polyfilled HTMLImports and native custom elements
        // excessive mutations may be observed; this can be optimized via cooperation
        // with the HTMLImports polyfill.

        if (nativeCustomElements) {
          start(document);
        } else {
          var delayedStart = function delayedStart() {
            start(document.body);
          }; // use polyfill timing if it's available


          if (window['HTMLImports']) {
            window['HTMLImports']['whenReady'](delayedStart); // otherwise push beyond native imports being ready
            // which requires RAF + readystate interactive.
          } else {
            requestAnimationFrame(function () {
              if (document.readyState === 'loading') {
                var listener = function listener() {
                  delayedStart();
                  document.removeEventListener('readystatechange', listener);
                };

                document.addEventListener('readystatechange', listener);
              } else {
                delayedStart();
              }
            });
          }
        }

        flush$1 = function flush() {
          handler(observer.takeRecords());
        };
      }

      /**
      @license
      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      /**
       * @const {!Object<string, !HTMLTemplateElement>}
       */

      var templateMap = {};

      /**
      @license
      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */

      /*
       * Utilities for handling invalidating apply-shim mixins for a given template.
       *
       * The invalidation strategy involves keeping track of the "current" version of a template's mixins, and updating that count when a mixin is invalidated.
       * The template
       */

      /** @const {string} */

      var CURRENT_VERSION = '_applyShimCurrentVersion';
      /** @const {string} */

      var NEXT_VERSION = '_applyShimNextVersion';
      /** @const {string} */

      var VALIDATING_VERSION = '_applyShimValidatingVersion';
      /**
       * @const {Promise<void>}
       */

      var promise = Promise.resolve();
      /**
       * @param {string} elementName
       */

      function invalidate(elementName) {
        var template = templateMap[elementName];

        if (template) {
          invalidateTemplate(template);
        }
      }
      /**
       * This function can be called multiple times to mark a template invalid
       * and signal that the style inside must be regenerated.
       *
       * Use `startValidatingTemplate` to begin an asynchronous validation cycle.
       * During that cycle, call `templateIsValidating` to see if the template must
       * be revalidated
       * @param {HTMLTemplateElement} template
       */

      function invalidateTemplate(template) {
        // default the current version to 0
        template[CURRENT_VERSION] = template[CURRENT_VERSION] || 0; // ensure the "validating for" flag exists

        template[VALIDATING_VERSION] = template[VALIDATING_VERSION] || 0; // increment the next version

        template[NEXT_VERSION] = (template[NEXT_VERSION] || 0) + 1;
      }
      /**
       * @param {HTMLTemplateElement} template
       * @return {boolean}
       */

      function templateIsValid(template) {
        return template[CURRENT_VERSION] === template[NEXT_VERSION];
      }
      /**
       * Returns true if the template is currently invalid and `startValidating` has been called since the last invalidation.
       * If false, the template must be validated.
       * @param {HTMLTemplateElement} template
       * @return {boolean}
       */

      function templateIsValidating(template) {
        return !templateIsValid(template) && template[VALIDATING_VERSION] === template[NEXT_VERSION];
      }
      /**
       * Begin an asynchronous invalidation cycle.
       * This should be called after every validation of a template
       *
       * After one microtask, the template will be marked as valid until the next call to `invalidateTemplate`
       * @param {HTMLTemplateElement} template
       */

      function startValidatingTemplate(template) {
        // remember that the current "next version" is the reason for this validation cycle
        template[VALIDATING_VERSION] = template[NEXT_VERSION]; // however, there only needs to be one async task to clear the counters

        if (!template._validating) {
          template._validating = true;
          promise.then(function () {
            // sync the current version to let future invalidations cause a refresh cycle
            template[CURRENT_VERSION] = template[NEXT_VERSION];
            template._validating = false;
          });
        }
      }

      /**
      @license
      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      /**
       * @param {Element} element
       * @param {Object=} properties
       */

      function updateNativeProperties(element, properties) {
        // remove previous properties
        for (var p in properties) {
          // NOTE: for bc with shim, don't apply null values.
          if (p === null) {
            element.style.removeProperty(p);
          } else {
            element.style.setProperty(p, properties[p]);
          }
        }
      }
      /**
       * return true if `cssText` contains a mixin definition or consumption
       * @param {string} cssText
       * @return {boolean}
       */

      function detectMixin(cssText) {
        var has = MIXIN_MATCH.test(cssText) || VAR_ASSIGN.test(cssText); // reset state of the regexes

        MIXIN_MATCH.lastIndex = 0;
        VAR_ASSIGN.lastIndex = 0;
        return has;
      }

      /**
      @license
      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      /** @type {Promise<void>} */

      var readyPromise = null;
      /** @type {?function(?function())} */

      var whenReady = window['HTMLImports'] && window['HTMLImports']['whenReady'] || null;
      /** @type {function()} */

      var resolveFn;
      /**
       * @param {?function()} callback
       */

      function documentWait(callback) {
        requestAnimationFrame(function () {
          if (whenReady) {
            whenReady(callback);
          } else {
            if (!readyPromise) {
              readyPromise = new Promise(function (resolve) {
                resolveFn = resolve;
              });

              if (document.readyState === 'complete') {
                resolveFn();
              } else {
                document.addEventListener('readystatechange', function () {
                  if (document.readyState === 'complete') {
                    resolveFn();
                  }
                });
              }
            }

            readyPromise.then(function () {
              callback && callback();
            });
          }
        });
      }

      /**
      @license
      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      var SEEN_MARKER = '__seenByShadyCSS';
      var CACHED_STYLE = '__shadyCSSCachedStyle';
      /** @type {?function(!HTMLStyleElement)} */

      var transformFn = null;
      /** @type {?function()} */

      var validateFn = null;
      /**
      This interface is provided to add document-level <style> elements to ShadyCSS for processing.
      These styles must be processed by ShadyCSS to simulate ShadowRoot upper-bound encapsulation from outside styles
      In addition, these styles may also need to be processed for @apply rules and CSS Custom Properties

      To add document-level styles to ShadyCSS, one can call `ShadyCSS.addDocumentStyle(styleElement)` or `ShadyCSS.addDocumentStyle({getStyle: () => styleElement})`

      In addition, if the process used to discover document-level styles can be synchronously flushed, one should set `ShadyCSS.documentStyleFlush`.
      This function will be called when calculating styles.

      An example usage of the document-level styling api can be found in `examples/document-style-lib.js`

      @unrestricted
      */

      var CustomStyleInterface =
      /*#__PURE__*/
      function () {
        function CustomStyleInterface() {
          _classCallCheck(this, CustomStyleInterface);

          /** @type {!Array<!CustomStyleProvider>} */
          this['customStyles'] = [];
          this['enqueued'] = false; // NOTE(dfreedm): use quotes here to prevent closure inlining to `function(){}`;

          documentWait(function () {
            if (window['ShadyCSS']['flushCustomStyles']) {
              window['ShadyCSS']['flushCustomStyles']();
            }
          });
        }
        /**
         * Queue a validation for new custom styles to batch style recalculations
         */


        _createClass(CustomStyleInterface, [{
          key: "enqueueDocumentValidation",
          value: function enqueueDocumentValidation() {
            if (this['enqueued'] || !validateFn) {
              return;
            }

            this['enqueued'] = true;
            documentWait(validateFn);
          }
          /**
           * @param {!HTMLStyleElement} style
           */

        }, {
          key: "addCustomStyle",
          value: function addCustomStyle(style) {
            if (!style[SEEN_MARKER]) {
              style[SEEN_MARKER] = true;
              this['customStyles'].push(style);
              this.enqueueDocumentValidation();
            }
          }
          /**
           * @param {!CustomStyleProvider} customStyle
           * @return {HTMLStyleElement}
           */

        }, {
          key: "getStyleForCustomStyle",
          value: function getStyleForCustomStyle(customStyle) {
            if (customStyle[CACHED_STYLE]) {
              return customStyle[CACHED_STYLE];
            }

            var style;

            if (customStyle['getStyle']) {
              style = customStyle['getStyle']();
            } else {
              style = customStyle;
            }

            return style;
          }
          /**
           * @return {!Array<!CustomStyleProvider>}
           */

        }, {
          key: "processStyles",
          value: function processStyles() {
            var cs = this['customStyles'];

            for (var i = 0; i < cs.length; i++) {
              var customStyle = cs[i];

              if (customStyle[CACHED_STYLE]) {
                continue;
              }

              var style = this.getStyleForCustomStyle(customStyle);

              if (style) {
                // HTMLImports polyfill may have cloned the style into the main document,
                // which is referenced with __appliedElement.
                var styleToTransform =
                /** @type {!HTMLStyleElement} */
                style['__appliedElement'] || style;

                if (transformFn) {
                  transformFn(styleToTransform);
                }

                customStyle[CACHED_STYLE] = styleToTransform;
              }
            }

            return cs;
          }
        }]);

        return CustomStyleInterface;
      }();
      CustomStyleInterface.prototype['addCustomStyle'] = CustomStyleInterface.prototype.addCustomStyle;
      CustomStyleInterface.prototype['getStyleForCustomStyle'] = CustomStyleInterface.prototype.getStyleForCustomStyle;
      CustomStyleInterface.prototype['processStyles'] = CustomStyleInterface.prototype.processStyles;
      /* eslint-enable no-self-assign */

      Object.defineProperties(CustomStyleInterface.prototype, {
        'transformCallback': {
          /** @return {?function(!HTMLStyleElement)} */
          get: function get() {
            return transformFn;
          },

          /** @param {?function(!HTMLStyleElement)} fn */
          set: function set(fn) {
            transformFn = fn;
          }
        },
        'validateCallback': {
          /** @return {?function()} */
          get: function get() {
            return validateFn;
          },

          /**
           * @param {?function()} fn
           * @this {CustomStyleInterface}
           */
          set: function set(fn) {
            var needsEnqueue = false;

            if (!validateFn) {
              needsEnqueue = true;
            }

            validateFn = fn;

            if (needsEnqueue) {
              this.enqueueDocumentValidation();
            }
          }
        }
      });

      /**
      @license
      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */

      /** @type {!Object<string, string>} */

      var adoptedCssTextMap = {};
      /**
       * @const {StyleCache}
       */

      var styleCache = new StyleCache();

      var ScopingShim =
      /*#__PURE__*/
      function () {
        function ScopingShim() {
          _classCallCheck(this, ScopingShim);

          this._scopeCounter = {};
          this._documentOwner =
          /** @type {!HTMLElement} */
          document.documentElement;
          var ast = new StyleNode();
          ast['rules'] = [];
          this._documentOwnerStyleInfo = StyleInfo.set(this._documentOwner, new StyleInfo(ast));
          this._elementsHaveApplied = false;
          /** @type {?Object} */

          this._applyShim = null;
          /** @type {?CustomStyleInterfaceInterface} */

          this._customStyleInterface = null;
        }

        _createClass(ScopingShim, [{
          key: "flush",
          value: function flush$$1() {
            flush$1();
          }
        }, {
          key: "_generateScopeSelector",
          value: function _generateScopeSelector(name) {
            var id = this._scopeCounter[name] = (this._scopeCounter[name] || 0) + 1;
            return "".concat(name, "-").concat(id);
          }
        }, {
          key: "getStyleAst",
          value: function getStyleAst(style) {
            return rulesForStyle(style);
          }
        }, {
          key: "styleAstToString",
          value: function styleAstToString(ast) {
            return toCssText(ast);
          }
        }, {
          key: "_gatherStyles",
          value: function _gatherStyles(template) {
            return gatherStyleText(template.content);
          }
          /**
           * Prepare the styling and template for the given element type
           *
           * @param {!HTMLTemplateElement} template
           * @param {string} elementName
           * @param {string=} typeExtension
           */

        }, {
          key: "prepareTemplate",
          value: function prepareTemplate(template, elementName, typeExtension) {
            this.prepareTemplateDom(template, elementName);
            this.prepareTemplateStyles(template, elementName, typeExtension);
          }
          /**
           * Prepare styling for the given element type
           * @param {!HTMLTemplateElement} template
           * @param {string} elementName
           * @param {string=} typeExtension
           */

        }, {
          key: "prepareTemplateStyles",
          value: function prepareTemplateStyles(template, elementName, typeExtension) {
            if (template._prepared || disableRuntime) {
              return;
            } // style placeholders are only used when ShadyDOM is active


            if (!nativeShadow) {
              ensureStylePlaceholder(elementName);
            }

            template._prepared = true;
            template.name = elementName;
            template.extends = typeExtension;
            templateMap[elementName] = template;
            var cssBuild$$1 = getCssBuild(template);
            var optimalBuild = isOptimalCssBuild(cssBuild$$1);
            var info = {
              is: elementName,
              extends: typeExtension
            };
            var cssText = this._gatherStyles(template) + (adoptedCssTextMap[elementName] || ''); // check if the styling has mixin definitions or uses

            this._ensure();

            if (!optimalBuild) {
              var hasMixins = !cssBuild$$1 && detectMixin(cssText);
              var ast = parse(cssText); // only run the applyshim transforms if there is a mixin involved

              if (hasMixins && nativeCssVariables && this._applyShim) {
                this._applyShim['transformRules'](ast, elementName);
              }

              template['_styleAst'] = ast;
            }

            var ownPropertyNames = [];

            if (!nativeCssVariables) {
              ownPropertyNames = StyleProperties$1.decorateStyles(template['_styleAst']);
            }

            if (!ownPropertyNames.length || nativeCssVariables) {
              var root = nativeShadow ? template.content : null;
              var placeholder = getStylePlaceholder(elementName);

              var style = this._generateStaticStyle(info, template['_styleAst'], root, placeholder, cssBuild$$1, optimalBuild ? cssText : '');

              template._style = style;
            }

            template._ownPropertyNames = ownPropertyNames;
          }
          /**
           * @param {!Array<string>} cssTextArray
           * @param {string} elementName
           */

        }, {
          key: "prepareAdoptedCssText",
          value: function prepareAdoptedCssText(cssTextArray, elementName) {
            adoptedCssTextMap[elementName] = cssTextArray.join(' ');
          }
          /**
           * Prepare template for the given element type
           * @param {!HTMLTemplateElement} template
           * @param {string} elementName
           */

        }, {
          key: "prepareTemplateDom",
          value: function prepareTemplateDom(template, elementName) {
            if (disableRuntime) {
              return;
            }

            var cssBuild$$1 = getCssBuild(template);

            if (!nativeShadow && cssBuild$$1 !== 'shady' && !template._domPrepared) {
              template._domPrepared = true;
              StyleTransformer$1.domAddScope(template.content, elementName);
            }
          }
          /**
           * @param {!{is: string, extends: (string|undefined)}} info
           * @param {!StyleNode} rules
           * @param {DocumentFragment} shadowroot
           * @param {Node} placeholder
           * @param {string} cssBuild
           * @param {string=} cssText
           * @return {?HTMLStyleElement}
           */

        }, {
          key: "_generateStaticStyle",
          value: function _generateStaticStyle(info, rules, shadowroot, placeholder, cssBuild$$1, cssText) {
            cssText = StyleTransformer$1.elementStyles(info, rules, null, cssBuild$$1, cssText);

            if (cssText.length) {
              return applyCss(cssText, info.is, shadowroot, placeholder);
            }

            return null;
          }
        }, {
          key: "_prepareHost",
          value: function _prepareHost(host) {
            var _StyleUtil$getIsExten = getIsExtends(host),
                is = _StyleUtil$getIsExten.is,
                typeExtension = _StyleUtil$getIsExten.typeExtension;

            var placeholder = getStylePlaceholder(is);
            var template = templateMap[is];

            if (!template) {
              return;
            }

            var ast = template['_styleAst'];
            var ownStylePropertyNames = template._ownPropertyNames;
            var cssBuild$$1 = getCssBuild(template);
            var styleInfo = new StyleInfo(ast, placeholder, ownStylePropertyNames, is, typeExtension, cssBuild$$1);
            StyleInfo.set(host, styleInfo);
            return styleInfo;
          }
        }, {
          key: "_ensureApplyShim",
          value: function _ensureApplyShim() {
            if (this._applyShim) {
              return;
            } else if (window.ShadyCSS && window.ShadyCSS.ApplyShim) {
              this._applyShim =
              /** @type {!Object} */
              window.ShadyCSS.ApplyShim;
              this._applyShim['invalidCallback'] = invalidate;
            }
          }
        }, {
          key: "_ensureCustomStyleInterface",
          value: function _ensureCustomStyleInterface() {
            var _this = this;

            if (this._customStyleInterface) {
              return;
            } else if (window.ShadyCSS && window.ShadyCSS.CustomStyleInterface) {
              this._customStyleInterface =
              /** @type {!CustomStyleInterfaceInterface} */
              window.ShadyCSS.CustomStyleInterface;
              /** @type {function(!HTMLStyleElement)} */

              this._customStyleInterface['transformCallback'] = function (style) {
                _this.transformCustomStyleForDocument(style);
              };

              this._customStyleInterface['validateCallback'] = function () {
                requestAnimationFrame(function () {
                  if (_this._customStyleInterface['enqueued'] || _this._elementsHaveApplied) {
                    _this.flushCustomStyles();
                  }
                });
              };
            }
          }
        }, {
          key: "_ensure",
          value: function _ensure() {
            this._ensureApplyShim();

            this._ensureCustomStyleInterface();
          }
          /**
           * Flush and apply custom styles to document
           */

        }, {
          key: "flushCustomStyles",
          value: function flushCustomStyles() {
            if (disableRuntime) {
              return;
            }

            this._ensure();

            if (!this._customStyleInterface) {
              return;
            }

            var customStyles = this._customStyleInterface['processStyles'](); // early return if custom-styles don't need validation


            if (!this._customStyleInterface['enqueued']) {
              return;
            } // bail if custom styles are built optimally


            if (isOptimalCssBuild(this._documentOwnerStyleInfo.cssBuild)) {
              return;
            }

            if (!nativeCssVariables) {
              this._updateProperties(this._documentOwner, this._documentOwnerStyleInfo);

              this._applyCustomStyles(customStyles);

              if (this._elementsHaveApplied) {
                // if custom elements have upgraded and there are no native css variables, we must recalculate the whole tree
                this.styleDocument();
              }
            } else if (!this._documentOwnerStyleInfo.cssBuild) {
              this._revalidateCustomStyleApplyShim(customStyles);
            }

            this._customStyleInterface['enqueued'] = false;
          }
          /**
           * Apply styles for the given element
           *
           * @param {!HTMLElement} host
           * @param {Object=} overrideProps
           */

        }, {
          key: "styleElement",
          value: function styleElement(host, overrideProps) {
            if (disableRuntime) {
              if (overrideProps) {
                if (!StyleInfo.get(host)) {
                  StyleInfo.set(host, new StyleInfo(null));
                }

                var _styleInfo =
                /** @type {!StyleInfo} */
                StyleInfo.get(host);

                this._mixOverrideStyleProps(_styleInfo, overrideProps);

                this.styleElementNativeVariables(host, _styleInfo);
              }

              return;
            }

            var styleInfo = StyleInfo.get(host) || this._prepareHost(host); // if there is no style info at this point, bail


            if (!styleInfo) {
              return;
            } // Only trip the `elementsHaveApplied` flag if a node other that the root document has `applyStyle` called


            if (!this._isRootOwner(host)) {
              this._elementsHaveApplied = true;
            }

            if (overrideProps) {
              this._mixOverrideStyleProps(styleInfo, overrideProps);
            }

            if (!nativeCssVariables) {
              this.styleElementShimVariables(host, styleInfo);
            } else {
              this.styleElementNativeVariables(host, styleInfo);
            }
          }
          /**
           * @param {!StyleInfo} styleInfo
           * @param {Object} overrideProps
           */

        }, {
          key: "_mixOverrideStyleProps",
          value: function _mixOverrideStyleProps(styleInfo, overrideProps) {
            styleInfo.overrideStyleProperties = styleInfo.overrideStyleProperties || {};
            Object.assign(styleInfo.overrideStyleProperties, overrideProps);
          }
          /**
           * @param {!HTMLElement} host
           * @param {!StyleInfo} styleInfo
           */

        }, {
          key: "styleElementShimVariables",
          value: function styleElementShimVariables(host, styleInfo) {
            this.flush();

            this._updateProperties(host, styleInfo);

            if (styleInfo.ownStylePropertyNames && styleInfo.ownStylePropertyNames.length) {
              this._applyStyleProperties(host, styleInfo);
            }
          }
          /**
           * @param {!HTMLElement} host
           * @param {!StyleInfo} styleInfo
           */

        }, {
          key: "styleElementNativeVariables",
          value: function styleElementNativeVariables(host, styleInfo) {
            var _StyleUtil$getIsExten2 = getIsExtends(host),
                is = _StyleUtil$getIsExten2.is;

            if (styleInfo.overrideStyleProperties) {
              updateNativeProperties(host, styleInfo.overrideStyleProperties);
            }

            var template = templateMap[is]; // bail early if there is no shadowroot for this element

            if (!template && !this._isRootOwner(host)) {
              return;
            } // bail early if the template was built with polymer-css-build


            if (template && elementHasBuiltCss(template)) {
              return;
            }

            if (template && template._style && !templateIsValid(template)) {
              // update template
              if (!templateIsValidating(template)) {
                this._ensure();

                this._applyShim && this._applyShim['transformRules'](template['_styleAst'], is);
                template._style.textContent = StyleTransformer$1.elementStyles(host, styleInfo.styleRules);
                startValidatingTemplate(template);
              } // update instance if native shadowdom


              if (nativeShadow) {
                var root = host.shadowRoot;

                if (root) {
                  var style = root.querySelector('style');

                  if (style) {
                    style.textContent = StyleTransformer$1.elementStyles(host, styleInfo.styleRules);
                  }
                }
              }

              styleInfo.styleRules = template['_styleAst'];
            }
          }
        }, {
          key: "_styleOwnerForNode",
          value: function _styleOwnerForNode(node) {
            var root = wrap$1(node).getRootNode();
            var host = root.host;

            if (host) {
              if (StyleInfo.get(host) || this._prepareHost(host)) {
                return host;
              } else {
                return this._styleOwnerForNode(host);
              }
            }

            return this._documentOwner;
          }
        }, {
          key: "_isRootOwner",
          value: function _isRootOwner(node) {
            return node === this._documentOwner;
          }
        }, {
          key: "_applyStyleProperties",
          value: function _applyStyleProperties(host, styleInfo) {
            var is = getIsExtends(host).is;
            var cacheEntry = styleCache.fetch(is, styleInfo.styleProperties, styleInfo.ownStylePropertyNames);
            var cachedScopeSelector = cacheEntry && cacheEntry.scopeSelector;
            var cachedStyle = cacheEntry ? cacheEntry.styleElement : null;
            var oldScopeSelector = styleInfo.scopeSelector; // only generate new scope if cached style is not found

            styleInfo.scopeSelector = cachedScopeSelector || this._generateScopeSelector(is);
            var style = StyleProperties$1.applyElementStyle(host, styleInfo.styleProperties, styleInfo.scopeSelector, cachedStyle);

            if (!nativeShadow) {
              StyleProperties$1.applyElementScopeSelector(host, styleInfo.scopeSelector, oldScopeSelector);
            }

            if (!cacheEntry) {
              styleCache.store(is, styleInfo.styleProperties, style, styleInfo.scopeSelector);
            }

            return style;
          }
        }, {
          key: "_updateProperties",
          value: function _updateProperties(host, styleInfo) {
            var owner = this._styleOwnerForNode(host);

            var ownerStyleInfo = StyleInfo.get(owner);
            var ownerProperties = ownerStyleInfo.styleProperties; // style owner has not updated properties yet
            // go up the chain and force property update,
            // except if the owner is the document

            if (owner !== this._documentOwner && !ownerProperties) {
              this._updateProperties(owner, ownerStyleInfo);

              ownerProperties = ownerStyleInfo.styleProperties;
            }

            var props = Object.create(ownerProperties || null);
            var hostAndRootProps = StyleProperties$1.hostAndRootPropertiesForScope(host, styleInfo.styleRules, styleInfo.cssBuild);
            var propertyData = StyleProperties$1.propertyDataFromStyles(ownerStyleInfo.styleRules, host);
            var propertiesMatchingHost = propertyData.properties;
            Object.assign(props, hostAndRootProps.hostProps, propertiesMatchingHost, hostAndRootProps.rootProps);

            this._mixinOverrideStyles(props, styleInfo.overrideStyleProperties);

            StyleProperties$1.reify(props);
            styleInfo.styleProperties = props;
          }
        }, {
          key: "_mixinOverrideStyles",
          value: function _mixinOverrideStyles(props, overrides) {
            for (var p in overrides) {
              var v = overrides[p]; // skip override props if they are not truthy or 0
              // in order to fall back to inherited values

              if (v || v === 0) {
                props[p] = v;
              }
            }
          }
          /**
           * Update styles of the whole document
           *
           * @param {Object=} properties
           */

        }, {
          key: "styleDocument",
          value: function styleDocument(properties) {
            this.styleSubtree(this._documentOwner, properties);
          }
          /**
           * Update styles of a subtree
           *
           * @param {!HTMLElement} host
           * @param {Object=} properties
           */

        }, {
          key: "styleSubtree",
          value: function styleSubtree(host, properties) {
            var wrappedHost = wrap$1(host);
            var root = wrappedHost.shadowRoot;

            if (root || this._isRootOwner(host)) {
              this.styleElement(host, properties);
            } // process the shadowdom children of `host`


            var shadowChildren = root && (
            /** @type {!ParentNode} */
            root.children || root.childNodes);

            if (shadowChildren) {
              for (var i = 0; i < shadowChildren.length; i++) {
                var c =
                /** @type {!HTMLElement} */
                shadowChildren[i];
                this.styleSubtree(c);
              }
            } else {
              // process the lightdom children of `host`
              var children = wrappedHost.children || wrappedHost.childNodes;

              if (children) {
                for (var _i = 0; _i < children.length; _i++) {
                  var _c =
                  /** @type {!HTMLElement} */
                  children[_i];
                  this.styleSubtree(_c);
                }
              }
            }
          }
          /* Custom Style operations */

        }, {
          key: "_revalidateCustomStyleApplyShim",
          value: function _revalidateCustomStyleApplyShim(customStyles) {
            for (var i = 0; i < customStyles.length; i++) {
              var c = customStyles[i];

              var s = this._customStyleInterface['getStyleForCustomStyle'](c);

              if (s) {
                this._revalidateApplyShim(s);
              }
            }
          }
        }, {
          key: "_applyCustomStyles",
          value: function _applyCustomStyles(customStyles) {
            for (var i = 0; i < customStyles.length; i++) {
              var c = customStyles[i];

              var s = this._customStyleInterface['getStyleForCustomStyle'](c);

              if (s) {
                StyleProperties$1.applyCustomStyle(s, this._documentOwnerStyleInfo.styleProperties);
              }
            }
          }
        }, {
          key: "transformCustomStyleForDocument",
          value: function transformCustomStyleForDocument(style) {
            var _this2 = this;

            var cssBuild$$1 = getCssBuild(style);

            if (cssBuild$$1 !== this._documentOwnerStyleInfo.cssBuild) {
              this._documentOwnerStyleInfo.cssBuild = cssBuild$$1;
            }

            if (isOptimalCssBuild(cssBuild$$1)) {
              return;
            }

            var ast = rulesForStyle(style);
            forEachRule(ast, function (rule) {
              if (nativeShadow) {
                StyleTransformer$1.normalizeRootSelector(rule);
              } else {
                StyleTransformer$1.documentRule(rule);
              }

              if (nativeCssVariables && cssBuild$$1 === '') {
                _this2._ensure();

                _this2._applyShim && _this2._applyShim['transformRule'](rule);
              }
            });

            if (nativeCssVariables) {
              style.textContent = toCssText(ast);
            } else {
              this._documentOwnerStyleInfo.styleRules['rules'].push(ast);
            }
          }
        }, {
          key: "_revalidateApplyShim",
          value: function _revalidateApplyShim(style) {
            if (nativeCssVariables && this._applyShim) {
              var ast = rulesForStyle(style);

              this._ensure();

              this._applyShim['transformRules'](ast);

              style.textContent = toCssText(ast);
            }
          }
        }, {
          key: "getComputedStyleValue",
          value: function getComputedStyleValue$$1(element, property) {
            var value;

            if (!nativeCssVariables) {
              // element is either a style host, or an ancestor of a style host
              var styleInfo = StyleInfo.get(element) || StyleInfo.get(this._styleOwnerForNode(element));
              value = styleInfo.styleProperties[property];
            } // fall back to the property value from the computed styling


            value = value || window.getComputedStyle(element).getPropertyValue(property); // trim whitespace that can come after the `:` in css
            // example: padding: 2px -> " 2px"

            return value ? value.trim() : '';
          } // given an element and a classString, replaces
          // the element's class with the provided classString and adds
          // any necessary ShadyCSS static and property based scoping selectors

        }, {
          key: "setElementClass",
          value: function setElementClass(element, classString) {
            var root = wrap$1(element).getRootNode();
            var classes = classString ? classString.split(/\s/) : [];
            var scopeName = root.host && root.host.localName; // If no scope, try to discover scope name from existing class.
            // This can occur if, for example, a template stamped element that
            // has been scoped is manipulated when not in a root.

            if (!scopeName) {
              var classAttr = element.getAttribute('class');

              if (classAttr) {
                var k$ = classAttr.split(/\s/);

                for (var i = 0; i < k$.length; i++) {
                  if (k$[i] === StyleTransformer$1.SCOPE_NAME) {
                    scopeName = k$[i + 1];
                    break;
                  }
                }
              }
            }

            if (scopeName) {
              classes.push(StyleTransformer$1.SCOPE_NAME, scopeName);
            }

            if (!nativeCssVariables) {
              var styleInfo = StyleInfo.get(element);

              if (styleInfo && styleInfo.scopeSelector) {
                classes.push(StyleProperties$1.XSCOPE_NAME, styleInfo.scopeSelector);
              }
            }

            setElementClassRaw(element, classes.join(' '));
          }
        }, {
          key: "_styleInfoForNode",
          value: function _styleInfoForNode(node) {
            return StyleInfo.get(node);
          }
          /**
           * @param {!Element} node
           * @param {string} scope
           */

        }, {
          key: "scopeNode",
          value: function scopeNode(node, scope) {
            StyleTransformer$1.element(node, scope);
          }
          /**
           * @param {!Element} node
           * @param {string} scope
           */

        }, {
          key: "unscopeNode",
          value: function unscopeNode(node, scope) {
            StyleTransformer$1.element(node, scope, true);
          }
          /**
           * @param {!Node} node
           * @return {string}
           */

        }, {
          key: "scopeForNode",
          value: function scopeForNode(node) {
            return getOwnerScope(node);
          }
          /**
           * @param {!Element} node
           * @return {string}
           */

        }, {
          key: "currentScopeForNode",
          value: function currentScopeForNode(node) {
            return getCurrentScope(node);
          }
        }]);

        return ScopingShim;
      }();
      ScopingShim.prototype['flush'] = ScopingShim.prototype.flush;
      ScopingShim.prototype['prepareTemplate'] = ScopingShim.prototype.prepareTemplate;
      ScopingShim.prototype['styleElement'] = ScopingShim.prototype.styleElement;
      ScopingShim.prototype['styleDocument'] = ScopingShim.prototype.styleDocument;
      ScopingShim.prototype['styleSubtree'] = ScopingShim.prototype.styleSubtree;
      ScopingShim.prototype['getComputedStyleValue'] = ScopingShim.prototype.getComputedStyleValue;
      ScopingShim.prototype['setElementClass'] = ScopingShim.prototype.setElementClass;
      ScopingShim.prototype['_styleInfoForNode'] = ScopingShim.prototype._styleInfoForNode;
      ScopingShim.prototype['transformCustomStyleForDocument'] = ScopingShim.prototype.transformCustomStyleForDocument;
      ScopingShim.prototype['getStyleAst'] = ScopingShim.prototype.getStyleAst;
      ScopingShim.prototype['styleAstToString'] = ScopingShim.prototype.styleAstToString;
      ScopingShim.prototype['flushCustomStyles'] = ScopingShim.prototype.flushCustomStyles;
      ScopingShim.prototype['scopeNode'] = ScopingShim.prototype.scopeNode;
      ScopingShim.prototype['unscopeNode'] = ScopingShim.prototype.unscopeNode;
      ScopingShim.prototype['scopeForNode'] = ScopingShim.prototype.scopeForNode;
      ScopingShim.prototype['currentScopeForNode'] = ScopingShim.prototype.currentScopeForNode;
      ScopingShim.prototype['prepareAdoptedCssText'] = ScopingShim.prototype.prepareAdoptedCssText;
      /* eslint-enable no-self-assign */

      Object.defineProperties(ScopingShim.prototype, {
        'nativeShadow': {
          get: function get() {
            return nativeShadow;
          }
        },
        'nativeCss': {
          get: function get() {
            return nativeCssVariables;
          }
        }
      });

      /**
      @license
      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      /** @const {ScopingShim} */

      var scopingShim$1 = new ScopingShim();
      var ApplyShim, CustomStyleInterface$1;

      if (window['ShadyCSS']) {
        ApplyShim = window['ShadyCSS']['ApplyShim'];
        CustomStyleInterface$1 = window['ShadyCSS']['CustomStyleInterface'];
      }

      window.ShadyCSS = {
        ScopingShim: scopingShim$1,

        /**
         * @param {!HTMLTemplateElement} template
         * @param {string} elementName
         * @param {string=} elementExtends
         */
        prepareTemplate: function prepareTemplate(template, elementName, elementExtends) {
          scopingShim$1.flushCustomStyles();
          scopingShim$1.prepareTemplate(template, elementName, elementExtends);
        },

        /**
         * @param {!HTMLTemplateElement} template
         * @param {string} elementName
         */
        prepareTemplateDom: function prepareTemplateDom(template, elementName) {
          scopingShim$1.prepareTemplateDom(template, elementName);
        },

        /**
         * @param {!HTMLTemplateElement} template
         * @param {string} elementName
         * @param {string=} elementExtends
         */
        prepareTemplateStyles: function prepareTemplateStyles(template, elementName, elementExtends) {
          scopingShim$1.flushCustomStyles();
          scopingShim$1.prepareTemplateStyles(template, elementName, elementExtends);
        },

        /**
         * @param {!HTMLElement} element
         * @param {Object=} properties
         */
        styleSubtree: function styleSubtree(element, properties) {
          scopingShim$1.flushCustomStyles();
          scopingShim$1.styleSubtree(element, properties);
        },

        /**
         * @param {!HTMLElement} element
         */
        styleElement: function styleElement(element) {
          scopingShim$1.flushCustomStyles();
          scopingShim$1.styleElement(element);
        },

        /**
         * @param {Object=} properties
         */
        styleDocument: function styleDocument(properties) {
          scopingShim$1.flushCustomStyles();
          scopingShim$1.styleDocument(properties);
        },
        flushCustomStyles: function flushCustomStyles() {
          scopingShim$1.flushCustomStyles();
        },

        /**
         * @param {Element} element
         * @param {string} property
         * @return {string}
         */
        getComputedStyleValue: function getComputedStyleValue(element, property) {
          return scopingShim$1.getComputedStyleValue(element, property);
        },
        nativeCss: nativeCssVariables,
        nativeShadow: nativeShadow,
        cssBuild: cssBuild,
        disableRuntime: disableRuntime
      };

      if (ApplyShim) {
        window.ShadyCSS.ApplyShim = ApplyShim;
      }

      if (CustomStyleInterface$1) {
        window.ShadyCSS.CustomStyleInterface = CustomStyleInterface$1;
      }

    }
  };
});
//# sourceMappingURL=chunk-260346dc.js.map
