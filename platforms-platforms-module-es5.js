function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["platforms-platforms-module"], {
  /***/
  "./src/app/platforms/platforms-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/platforms/platforms-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: PlatformsRoutingModule */

  /***/
  function srcAppPlatformsPlatformsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlatformsRoutingModule", function () {
      return PlatformsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _platforms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./platforms.component */
    "./src/app/platforms/platforms.component.ts");

    var routes = [{
      path: '',
      component: _platforms_component__WEBPACK_IMPORTED_MODULE_2__["PlatformsComponent"]
    }];

    var PlatformsRoutingModule = function PlatformsRoutingModule() {
      _classCallCheck(this, PlatformsRoutingModule);
    };

    PlatformsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PlatformsRoutingModule
    });
    PlatformsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PlatformsRoutingModule_Factory(t) {
        return new (t || PlatformsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlatformsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/platforms/platforms.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/platforms/platforms.component.ts ***!
    \**************************************************/

  /*! exports provided: PlatformsComponent */

  /***/
  function srcAppPlatformsPlatformsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlatformsComponent", function () {
      return PlatformsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _picker_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @picker/core-data */
    "../../libs/core-data/src/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var PlatformsComponent = /*#__PURE__*/function () {
      function PlatformsComponent(platformsService) {
        _classCallCheck(this, PlatformsComponent);

        this.platformsService = platformsService;
      }

      _createClass(PlatformsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPlatforms();
        }
      }, {
        key: "getPlatforms",
        value: function getPlatforms() {
          this.platforms$ = this.platformsService.all();
        }
      }]);

      return PlatformsComponent;
    }();

    PlatformsComponent.ɵfac = function PlatformsComponent_Factory(t) {
      return new (t || PlatformsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_picker_core_data__WEBPACK_IMPORTED_MODULE_1__["PlatformsService"]));
    };

    PlatformsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlatformsComponent,
      selectors: [["picker-platforms"]],
      decls: 4,
      vars: 5,
      template: function PlatformsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.platforms$)));
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3BpY2tlci9zcmMvYXBwL3BsYXRmb3Jtcy9wbGF0Zm9ybXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'picker-platforms',
          templateUrl: './platforms.component.html',
          styleUrls: ['./platforms.component.css']
        }]
      }], function () {
        return [{
          type: _picker_core_data__WEBPACK_IMPORTED_MODULE_1__["PlatformsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/platforms/platforms.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/platforms/platforms.module.ts ***!
    \***********************************************/

  /*! exports provided: PlatformsModule */

  /***/
  function srcAppPlatformsPlatformsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlatformsModule", function () {
      return PlatformsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _platforms_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./platforms-routing.module */
    "./src/app/platforms/platforms-routing.module.ts");
    /* harmony import */


    var _platforms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./platforms.component */
    "./src/app/platforms/platforms.component.ts");
    /* harmony import */


    var _picker_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @picker/material */
    "../../libs/material/src/index.ts");

    var PlatformsModule = function PlatformsModule() {
      _classCallCheck(this, PlatformsModule);
    };

    PlatformsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PlatformsModule
    });
    PlatformsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PlatformsModule_Factory(t) {
        return new (t || PlatformsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _platforms_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlatformsRoutingModule"], _picker_material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlatformsModule, {
        declarations: [_platforms_component__WEBPACK_IMPORTED_MODULE_3__["PlatformsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _platforms_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlatformsRoutingModule"], _picker_material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_platforms_component__WEBPACK_IMPORTED_MODULE_3__["PlatformsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _platforms_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlatformsRoutingModule"], _picker_material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=platforms-platforms-module-es5.js.map