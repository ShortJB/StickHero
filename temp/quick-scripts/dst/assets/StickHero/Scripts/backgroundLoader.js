
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/StickHero/Scripts/backgroundLoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ba569pWT1NW4FvgybtQ/YJ', 'backgroundLoader');
// StickHero/Scripts/backgroundLoader.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // use this for initialization
  onLoad: function onLoad() {
    var randomNum = "bg" + ((Math.random() * 100 | 0) % 3 + 1);
    var bgSprite = this.node.getComponent(cc.Sprite);
    cc.loader.loadRes("hero/" + randomNum, cc.SpriteFrame, function (err, SpriteFrame) {
      bgSprite.spriteFrame = SpriteFrame;
    });
    cc.log(randomNum);
  } // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3RpY2tIZXJvXFxTY3JpcHRzXFxiYWNrZ3JvdW5kTG9hZGVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwicmFuZG9tTnVtIiwiTWF0aCIsInJhbmRvbSIsImJnU3ByaXRlIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MO0FBQ0FDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQixRQUFJQyxTQUFTLEdBQUcsUUFBUSxDQUFDQyxJQUFJLENBQUNDLE1BQUwsS0FBYyxHQUFkLEdBQWtCLENBQW5CLElBQXNCLENBQXRCLEdBQXdCLENBQWhDLENBQWhCO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QlYsRUFBRSxDQUFDVyxNQUExQixDQUFmO0FBQ0FYLElBQUFBLEVBQUUsQ0FBQ1ksTUFBSCxDQUFVQyxPQUFWLENBQWtCLFVBQVFSLFNBQTFCLEVBQXFDTCxFQUFFLENBQUNjLFdBQXhDLEVBQXFELFVBQUNDLEdBQUQsRUFBTUQsV0FBTixFQUFzQjtBQUN2RU4sTUFBQUEsUUFBUSxDQUFDUSxXQUFULEdBQXVCRixXQUF2QjtBQUNILEtBRkQ7QUFHQWQsSUFBQUEsRUFBRSxDQUFDaUIsR0FBSCxDQUFPWixTQUFQO0FBQ0gsR0FmSSxDQWdCTDtBQUNBO0FBRUE7O0FBbkJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJhbmRvbU51bSA9IFwiYmdcIiArICgoTWF0aC5yYW5kb20oKSoxMDB8MCklMysxKTtcclxuICAgICAgICB2YXIgYmdTcHJpdGUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJoZXJvL1wiK3JhbmRvbU51bSwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIFNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGJnU3ByaXRlLnNwcml0ZUZyYW1lID0gU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MubG9nKHJhbmRvbU51bSk7XHJcbiAgICB9LFxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiJdfQ==