System.register("chunks:///_virtual/main",["./SwitchScene.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/SwitchScene.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,c,n,o,r;return{setters:[function(e){t=e.inheritsLoose},function(e){c=e.cclegacy,n=e._decorator,o=e.director,r=e.Component}],execute:function(){var i;c._RF.push({},"908b5FKDQhOYZy1RZVQ9U4X","SwitchScene",void 0);var s=n.ccclass;n.property,e("SwitchScene",s("SwitchScene")(i=function(e){function c(){return e.apply(this,arguments)||this}t(c,e);var n=c.prototype;return n.start=function(){},n.switchScene=function(e,t){console.log(t),o.loadScene(t)},c}(r))||i);c._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});