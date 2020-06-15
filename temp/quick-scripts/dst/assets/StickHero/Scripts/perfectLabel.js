
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/StickHero/Scripts/perfectLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68d3cmKQRxMxJwM5MfqZrPh', 'perfectLabel');
// StickHero/Scripts/perfectLabel.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // use this for initialization
  onLoad: function onLoad() {
    this.anim = this.node.getComponent(cc.Animation);
    this.label = this.node.getComponent(cc.Label);
  },
  showPerfect: function showPerfect(count) {
    this.label.string = "Perfect x" + count;
    var fadeInAction = cc.fadeIn(0.1);
    var moveAction = cc.moveBy(1, cc.p(0, 0));
    var fadeOutAction = cc.fadeOut(0);
    var seq = cc.sequence(fadeInAction, moveAction, fadeOutAction);
    this.node.runAction(seq); //has bug.  web will 花屏...
    // this.anim.play("perfect_anim");
  },
  removeLabel: function removeLabel() {
    // this.node.x = -100;
    // this.node.y = -100;
    cc.log("removeLabel");
  },
  showLabel: function showLabel() {
    // this.node.x = cc.director.getWinSize().width/2;
    // this.node.y = cc.director.getWinSize().height/2;
    cc.log("showLabel");
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3RpY2tIZXJvXFxTY3JpcHRzXFxwZXJmZWN0TGFiZWwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJhbmltIiwibm9kZSIsImdldENvbXBvbmVudCIsIkFuaW1hdGlvbiIsImxhYmVsIiwiTGFiZWwiLCJzaG93UGVyZmVjdCIsImNvdW50Iiwic3RyaW5nIiwiZmFkZUluQWN0aW9uIiwiZmFkZUluIiwibW92ZUFjdGlvbiIsIm1vdmVCeSIsInAiLCJmYWRlT3V0QWN0aW9uIiwiZmFkZU91dCIsInNlcSIsInNlcXVlbmNlIiwicnVuQWN0aW9uIiwicmVtb3ZlTGFiZWwiLCJsb2ciLCJzaG93TGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0w7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCLFNBQUtDLElBQUwsR0FBWSxLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJQLEVBQUUsQ0FBQ1EsU0FBMUIsQ0FBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxLQUFLSCxJQUFMLENBQVVDLFlBQVYsQ0FBdUJQLEVBQUUsQ0FBQ1UsS0FBMUIsQ0FBYjtBQUNILEdBWEk7QUFZTEMsRUFBQUEsV0FaSyx1QkFZT0MsS0FaUCxFQVlhO0FBQ2QsU0FBS0gsS0FBTCxDQUFXSSxNQUFYLEdBQW9CLGNBQWNELEtBQWxDO0FBQ0EsUUFBSUUsWUFBWSxHQUFHZCxFQUFFLENBQUNlLE1BQUgsQ0FBVSxHQUFWLENBQW5CO0FBQ0EsUUFBSUMsVUFBVSxHQUFHaEIsRUFBRSxDQUFDaUIsTUFBSCxDQUFVLENBQVYsRUFBWWpCLEVBQUUsQ0FBQ2tCLENBQUgsQ0FBSyxDQUFMLEVBQU8sQ0FBUCxDQUFaLENBQWpCO0FBQ0EsUUFBSUMsYUFBYSxHQUFHbkIsRUFBRSxDQUFDb0IsT0FBSCxDQUFXLENBQVgsQ0FBcEI7QUFDQSxRQUFJQyxHQUFHLEdBQUdyQixFQUFFLENBQUNzQixRQUFILENBQVlSLFlBQVosRUFBeUJFLFVBQXpCLEVBQW9DRyxhQUFwQyxDQUFWO0FBQ0EsU0FBS2IsSUFBTCxDQUFVaUIsU0FBVixDQUFvQkYsR0FBcEIsRUFOYyxDQU9kO0FBQ0E7QUFDSCxHQXJCSTtBQXNCTEcsRUFBQUEsV0F0QksseUJBc0JRO0FBQ1Q7QUFDQTtBQUNBeEIsSUFBQUEsRUFBRSxDQUFDeUIsR0FBSCxDQUFPLGFBQVA7QUFDSCxHQTFCSTtBQTJCTEMsRUFBQUEsU0EzQkssdUJBMkJNO0FBQ1A7QUFDQTtBQUNBMUIsSUFBQUEsRUFBRSxDQUFDeUIsR0FBSCxDQUFPLFdBQVA7QUFDSDtBQS9CSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1BlcmZlY3QoY291bnQpe1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCJQZXJmZWN0IHhcIiArIGNvdW50O1xyXG4gICAgICAgIHZhciBmYWRlSW5BY3Rpb24gPSBjYy5mYWRlSW4oMC4xKTtcclxuICAgICAgICB2YXIgbW92ZUFjdGlvbiA9IGNjLm1vdmVCeSgxLGNjLnAoMCwwKSk7XHJcbiAgICAgICAgdmFyIGZhZGVPdXRBY3Rpb24gPSBjYy5mYWRlT3V0KDApO1xyXG4gICAgICAgIHZhciBzZXEgPSBjYy5zZXF1ZW5jZShmYWRlSW5BY3Rpb24sbW92ZUFjdGlvbixmYWRlT3V0QWN0aW9uKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHNlcSk7XHJcbiAgICAgICAgLy9oYXMgYnVnLiAgd2ViIHdpbGwg6Iqx5bGPLi4uXHJcbiAgICAgICAgLy8gdGhpcy5hbmltLnBsYXkoXCJwZXJmZWN0X2FuaW1cIik7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTGFiZWwoKXtcclxuICAgICAgICAvLyB0aGlzLm5vZGUueCA9IC0xMDA7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnkgPSAtMTAwO1xyXG4gICAgICAgIGNjLmxvZyhcInJlbW92ZUxhYmVsXCIpO1xyXG4gICAgfSxcclxuICAgIHNob3dMYWJlbCgpe1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS54ID0gY2MuZGlyZWN0b3IuZ2V0V2luU2l6ZSgpLndpZHRoLzI7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnkgPSBjYy5kaXJlY3Rvci5nZXRXaW5TaXplKCkuaGVpZ2h0LzI7XHJcbiAgICAgICAgY2MubG9nKFwic2hvd0xhYmVsXCIpO1xyXG4gICAgfVxyXG59KTtcclxuIl19