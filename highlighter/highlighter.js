/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// ------------------------------------------------------
//             see options.js defaultOptions
// ------------------------------------------------------
const options = {
  isSelectionValid: function ({
    selectionString,
    selection
  }) {
    return selectionString.length >= 6 && selection.type !== 'None' && selection.type !== 'Caret';
  },
  isWindowLocationValid: function (windowLocation) {
    const blacklistedHosts = ['linkedin.com', 'collabedit.com', 'coderpad.io', 'jsbin.com', 'plnkr.co', 'youtube.com'];
    return !blacklistedHosts.some(h => windowLocation.host.includes(h));
  },
  areKeysPressed: function (pressedKeys = []) {
    // return pressedKeys.includes('Meta'); // CMD key
    // return pressedKeys.includes('Alt'); // Option key
    return true;
  },
  // occurrenceRegex: function (selectionString) {
  //   return new RegExp(selectionString, 'i'); // partial word, case insensitive
  //   // return new RegExp(selectionString); // partial word, case sensitive
  //   // return new RegExp(`\\b${selectionString}\\b`, 'i'); // whole word, case insensitive
  //   // return new RegExp(`\\b${selectionString}\\b`); // whole word, case sensitive
  // },
  // isAncestorNodeValid: function isAncestorNodeValid(ancestorNode) {
  //   return !ancestorNode || (!ancestorNode.classList || !ancestorNode.classList.contains('CodeMirror')) && ancestorNode.nodeName !== 'SCRIPT' && ancestorNode.nodeName !== 'STYLE' && ancestorNode.nodeName !== 'HEAD' && ancestorNode.nodeName !== 'TITLE' && ancestorNode.nodeName !== 'INPUT' && ancestorNode.nodeName !== 'TEXTAREA' && ancestorNode.contentEditable !== 'true' && isAncestorNodeValid(ancestorNode.parentNode);
  // },
  trimRegex: function () {
    // leading, selectionString, trailing
    // trim parts maintained for offset analysis
    return /^(\s*)(\S+(?:\s+\S+)*)(\s*)$/;
  },
  // highlightedClassName: 'highlighted_selection',
  // styles: {
  //   backgroundColor: 'rgb(255,255,0,1)',
  //   // yellow 100%
  //   margin: '0',
  //   padding: '0',
  //   lineHeight: '1' // display: 'inline',
  //
  // },
  // areScrollMarkersEnabled: function () {
  //   return true;
  // },
  // scrollMarkerClassName: 'highlighted_selection_scroll_marker',
  // scrollMarkerStyles: function ({
  //   window,
  //   document,
  //   highlightedNode
  // }) {
  //   const clientRect = highlightedNode.getBoundingClientRect();
  //
  //   if (!clientRect.width || !clientRect.height) {
  //     return false;
  //   }
  //
  //   return {
  //     height: '2px',
  //     width: '16px',
  //     boxSizing: 'content-box',
  //     border: '1px solid grey',
  //     position: 'fixed',
  //     top: // window height times percent of element position in document
  //     window.innerHeight * (+window.scrollY + clientRect.top + 0.5 * (clientRect.top - clientRect.bottom)) / document.body.clientHeight + 'px',
  //     right: '0px',
  //     backgroundColor: 'yellow',
  //     zIndex: '2147483647'
  //   };
  // }
};
chrome.storage.sync.get('optionsText', e => {
  if (e.optionsText) {
    try {
      const userOptions = eval(e.optionsText);
      Object.entries(userOptions).forEach(([key, value]) => {
        options[key] = value;
      });
    } catch (e) {
      console.error('Error parsing BetterWriter options.\n\n', e);
    }
  }

  initialize();
});

function initialize() {
  console.log("BetterWriter: starting initialize()")
  // const highlightedMarkTemplate = document.createElement('mark');
  // highlightedMarkTemplate.className = options.highlightedClassName;
  // Object.entries(options.styles).forEach(([styleName, styleValue]) => {
  //   highlightedMarkTemplate.style[styleName] = styleValue;
  // });
  const pressedKeys = [];
  document.addEventListener('keydown', e => {
    const index = pressedKeys.indexOf(e.key);

    if (index === -1) {
      pressedKeys.push(e.key);
    }
  });
  document.addEventListener('keyup', e => {
    const index = pressedKeys.indexOf(e.key);

    if (index !== -1) {
      pressedKeys.splice(index, 1);
    }
  });
  window.addEventListener('blur', e => {
    pressedKeys.splice(0, pressedKeys.length);
  });
  document.addEventListener('selectionchange', onSelectionChange);
  let latestStartTime = null;

  function onSelectionChange(e) {
    latestStartTime = performance.now();
    if (!options.isWindowLocationValid(window.location)) return;
    if (!options.areKeysPressed(pressedKeys)) return;
    removeThenHighlight(latestStartTime);
  }

  ;

  function removeThenHighlight(startTime) {
    // requestAnimationFrame(() => {
    //   if (startTime !== latestStartTime) return;
    //   document.querySelectorAll('.' + options.highlightedClassName).forEach(element => {
    //     const parent = element.parentNode;
    //
    //     if (parent) {
    //       parent.replaceChild(new Text(element.textContent || ''), element);
    //       parent.normalize();
    //     }
    //   });
    //
    //   if (options.areScrollMarkersEnabled()) {
    //     document.querySelectorAll('.' + options.scrollMarkerClassName).forEach(element => {
    //       document.body.removeChild(element);
    //     });
    //   }

      highlight(startTime);
    // });
  }

  function highlight(startTime) {
    const selection = document.getSelection();
    const trimmedSelection = String(selection).match(options.trimRegex());
    if (!trimmedSelection) return;
    const leadingSpaces = trimmedSelection[1];
    const selectionString = trimmedSelection[2];
    const trailingSpaces = trimmedSelection[3];
    if (!options.isSelectionValid({
      selectionString,
      selection
    })) return; // https://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript

    console.log("highlighted valid selected text", selectionString);

    // const occurrenceRegex = options.occurrenceRegex(selectionString.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
    // const allTextNodes = [];
    // const treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    //
    // while (treeWalker.nextNode()) {
    //   allTextNodes.push(treeWalker.currentNode);
    // }

    // for (let i = 0; i < allTextNodes.length; i++) {
    //   const textNode = allTextNodes[i];
    //   const parent = textNode.parentNode;
    //   const highlightedNodes = highlightOccurrences(textNode);
    //
    //   if (highlightedNodes) {
    //     if (parent) parent.normalize();
    //   }
    //
    //   ;
    // }

    // if (options.areScrollMarkersEnabled()) {
    //   requestAnimationFrame(() => {
    //     if (startTime !== latestStartTime) return;
    //     const highlighted = document.querySelectorAll('.' + options.highlightedClassName);
    //     const scrollMarkersFragment = document.createDocumentFragment();
    //
    //     for (let i = 0; i < highlighted.length; i++) {
    //       setTimeout(() => {
    //         if (startTime !== latestStartTime) return;
    //         const highlightedNode = highlighted[i];
    //         const scrollMarker = document.createElement('div');
    //         scrollMarker.className = options.scrollMarkerClassName;
    //         const scrollMarkerStyles = options.scrollMarkerStyles({
    //           window,
    //           document,
    //           highlightedNode
    //         });
    //
    //         if (scrollMarkerStyles) {
    //           Object.entries(scrollMarkerStyles).forEach(([styleName, styleValue]) => {
    //             scrollMarker.style[styleName] = styleValue;
    //           });
    //           scrollMarkersFragment.appendChild(scrollMarker);
    //         }
    //       }, 0);
    //     }
    //
    //     setTimeout(() => {
    //       if (startTime === latestStartTime) {
    //         document.body.appendChild(scrollMarkersFragment);
    //       }
    //     }, 0);
    //   });
    // }

    // function highlightOccurrences(textNode) {
    //   const match = occurrenceRegex.exec(textNode.data);
    //   if (!match) return;
    //   if (!options.isAncestorNodeValid(textNode.parentNode)) return;
    //   const matchIndex = match.index;
    //   const anchorToFocusDirection = selection.anchorNode.compareDocumentPosition(selection.focusNode);
    //   const isUsersSelection = anchorToFocusDirection & Node.DOCUMENT_POSITION_FOLLOWING ? textNode === selection.anchorNode && (selection.anchorNode.nodeType === Node.ELEMENT_NODE && selection.anchorOffset === 0 || selection.anchorOffset === matchIndex - leadingSpaces.length) || textNode === selection.focusNode && (selection.focusNode.nodeType === Node.ELEMENT_NODE && selection.focusOffset === 0 || selection.focusOffset === matchIndex + selectionString.length + trailingSpaces.length) || textNode !== selection.anchorNode && textNode !== selection.focusNode && selection.anchorNode.compareDocumentPosition(textNode) & Node.DOCUMENT_POSITION_FOLLOWING && selection.focusNode.compareDocumentPosition(textNode) & Node.DOCUMENT_POSITION_PRECEDING : anchorToFocusDirection & Node.DOCUMENT_POSITION_PRECEDING ? textNode === selection.anchorNode && (selection.anchorNode.nodeType === Node.ELEMENT_NODE && selection.anchorOffset === 0 || selection.anchorNode.nodeType === Node.TEXT_NODE && selection.anchorOffset === matchIndex + selectionString.length + trailingSpaces.length) || textNode === selection.focusNode && (selection.focusNode.nodeType === Node.ELEMENT_NODE && selection.focusOffset === 0 || selection.focusOffset === matchIndex - leadingSpaces.length) || textNode !== selection.anchorNode && textNode !== selection.focusNode && selection.anchorNode.compareDocumentPosition(textNode) & Node.DOCUMENT_POSITION_PRECEDING && selection.focusNode.compareDocumentPosition(textNode) & Node.DOCUMENT_POSITION_FOLLOWING : selection.anchorOffset < selection.focusOffset && textNode === selection.anchorNode && selection.anchorOffset === matchIndex - leadingSpaces.length || selection.anchorOffset > selection.focusOffset && textNode === selection.focusNode && selection.focusOffset === matchIndex - leadingSpaces.length;
    //
    //   if (!isUsersSelection) {
    //     const trimmedTextNode = textNode.splitText(matchIndex);
    //     const remainingTextNode = trimmedTextNode.splitText(selectionString.length);
    //     const highlightedNode = highlightedMarkTemplate.cloneNode(true);
    //     highlightedNode.appendChild(trimmedTextNode.cloneNode(true));
    //     const parent = trimmedTextNode.parentNode;
    //     if (parent) parent.replaceChild(highlightedNode, trimmedTextNode);
    //     const otherHighlightedNodes = highlightOccurrences(remainingTextNode) || [];
    //     return [highlightedNode].concat(otherHighlightedNodes);
    //   } else {
    //     const clonedNode = textNode.cloneNode();
    //     const remainingClonedTextNode = clonedNode.splitText(matchIndex + selectionString.length);
    //     if (occurrenceRegex.exec(remainingClonedTextNode.data)) return highlightOccurrences(textNode.splitText(matchIndex + selectionString.length));
    //   }
    // }
  }

  ;
}

/***/ })
/******/ ]);
