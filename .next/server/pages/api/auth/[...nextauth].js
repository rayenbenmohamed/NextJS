"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            async authorize (credentials, req) {\n                const { email , password  } = credentials;\n                console.log(email, password);\n                const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"https://backend-commerce-2023-jwt.vercel.app/api/users/login\", {\n                    email,\n                    password\n                });\n                if (res) {\n                    const user = res.data.user;\n                    const token = res.data.accessToken;\n                    console.log(user);\n                    console.log(token);\n                    return user;\n                } else {\n                    console.log(\"ERROR \");\n                    return null;\n                }\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/login\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUM7QUFDaUM7QUFDeEM7QUFDMUIsaUVBQWVBLGdEQUFRQSxDQUFDO0lBQ3ZCRyxTQUFTO1FBQ1RDLFVBQVU7SUFDVjtJQUNBQyxXQUFXO1FBQ1hKLHNFQUFtQkEsQ0FBQztZQUNwQixNQUFNSyxXQUFVQyxXQUFXLEVBQUNDLEdBQUcsRUFBQztnQkFFaEMsTUFBTSxFQUFDQyxNQUFLLEVBQUVDLFNBQVEsRUFBQyxHQUFHSDtnQkFDMUJJLFFBQVFDLEdBQUcsQ0FBQ0gsT0FBT0M7Z0JBRW5CLE1BQU1HLE1BQU0sTUFDYlgsaURBQVUsQ0FBQyxnRUFBK0Q7b0JBQ3pFTztvQkFDQUM7Z0JBQ0E7Z0JBQ0EsSUFBR0csS0FBSTtvQkFDUCxNQUFNRSxPQUFPRixJQUFJRyxJQUFJLENBQUNELElBQUk7b0JBQzFCLE1BQU1FLFFBQVFKLElBQUlHLElBQUksQ0FBQ0UsV0FBVztvQkFDbENQLFFBQVFDLEdBQUcsQ0FBQ0c7b0JBQ1pKLFFBQVFDLEdBQUcsQ0FBQ0s7b0JBQ1osT0FBT0Y7Z0JBQ1AsT0FDSztvQkFDTEosUUFBUUMsR0FBRyxDQUFDO29CQUNaLE9BQU8sSUFBSTtnQkFDWCxDQUFDO1lBQ0Q7UUFDQTtLQUVDO0lBQ0RPLE9BQVE7UUFDUkMsUUFBUTtJQUNSO0lBQ0FDLFFBQVNDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtBQUNyQyxFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cDEvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiBzZXNzaW9uOiB7XHJcbiBzdHJhdGVneSA6J2p3dCdcclxuIH0sXHJcbiBwcm92aWRlcnM6IFtcclxuIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLHJlcSl7XHJcblxyXG4gY29uc3Qge2VtYWlsLCBwYXNzd29yZH0gPSBjcmVkZW50aWFscztcclxuIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZClcclxuXHJcbiBjb25zdCByZXMgPSBhd2FpdFxyXG5heGlvcy5wb3N0KCdodHRwczovL2JhY2tlbmQtY29tbWVyY2UtMjAyMy1qd3QudmVyY2VsLmFwcC9hcGkvdXNlcnMvbG9naW4nLHtcclxuIGVtYWlsLFxyXG4gcGFzc3dvcmRcclxuIH0pXHJcbiBpZihyZXMpe1xyXG4gY29uc3QgdXNlciA9IHJlcy5kYXRhLnVzZXI7XHJcbiBjb25zdCB0b2tlbiA9IHJlcy5kYXRhLmFjY2Vzc1Rva2VuO1xyXG4gY29uc29sZS5sb2codXNlcilcclxuIGNvbnNvbGUubG9nKHRva2VuKVxyXG4gcmV0dXJuIHVzZXI7XHJcbiB9XHJcbiBlbHNlIHtcclxuIGNvbnNvbGUubG9nKFwiRVJST1IgXCIpO1xyXG4gcmV0dXJuIG51bGw7XHJcbiB9XHJcbiB9XHJcbiB9KVxyXG5cclxuIF0sXHJcbiBwYWdlcyA6IHtcclxuIHNpZ25JbjogJy9sb2dpbidcclxuIH0sXHJcbiBzZWNyZXQgOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVRcclxufSk7Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImF4aW9zIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicHJvdmlkZXJzIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJyZXEiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsInJlcyIsInBvc3QiLCJ1c2VyIiwiZGF0YSIsInRva2VuIiwiYWNjZXNzVG9rZW4iLCJwYWdlcyIsInNpZ25JbiIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();