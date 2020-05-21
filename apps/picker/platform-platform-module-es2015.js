(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["platform-platform-module"],{

/***/ "./src/app/platform/platform-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/platform/platform-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PlatformRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformRoutingModule", function() { return PlatformRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _platform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform.component */ "./src/app/platform/platform.component.ts");





const routes = [{ path: '', component: _platform_component__WEBPACK_IMPORTED_MODULE_2__["PlatformComponent"] }];
class PlatformRoutingModule {
}
PlatformRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlatformRoutingModule });
PlatformRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlatformRoutingModule_Factory(t) { return new (t || PlatformRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlatformRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/platform/platform.component.ts":
/*!************************************************!*\
  !*** ./src/app/platform/platform.component.ts ***!
  \************************************************/
/*! exports provided: PlatformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformComponent", function() { return PlatformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PlatformComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlatformComponent.ɵfac = function PlatformComponent_Factory(t) { return new (t || PlatformComponent)(); };
PlatformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlatformComponent, selectors: [["picker-platform"]], decls: 2, vars: 0, template: function PlatformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "platform works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3BpY2tlci9zcmMvYXBwL3BsYXRmb3JtL3BsYXRmb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'picker-platform',
                templateUrl: './platform.component.html',
                styleUrls: ['./platform.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/platform/platform.module.ts":
/*!*********************************************!*\
  !*** ./src/app/platform/platform.module.ts ***!
  \*********************************************/
/*! exports provided: PlatformModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _platform_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform-routing.module */ "./src/app/platform/platform-routing.module.ts");
/* harmony import */ var _platform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./platform.component */ "./src/app/platform/platform.component.ts");
/* harmony import */ var _picker_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @picker/material */ "../../libs/material/src/index.ts");






class PlatformModule {
}
PlatformModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlatformModule });
PlatformModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlatformModule_Factory(t) { return new (t || PlatformModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _platform_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlatformRoutingModule"],
            _picker_material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlatformModule, { declarations: [_platform_component__WEBPACK_IMPORTED_MODULE_3__["PlatformComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _platform_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlatformRoutingModule"],
        _picker_material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_platform_component__WEBPACK_IMPORTED_MODULE_3__["PlatformComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _platform_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlatformRoutingModule"],
                    _picker_material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=platform-platform-module-es2015.js.map