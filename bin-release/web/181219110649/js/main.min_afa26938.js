var __reflect=this&&this.__reflect||function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n},__extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);n.prototype=t.prototype,e.prototype=new n},__awaiter=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function a(e){try{c(o.next(e))}catch(t){r(t)}}function s(e){try{c(o["throw"](e))}catch(t){r(t)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}c((o=o.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return o([e,t])}}function o(n){if(i)throw new TypeError("Generator is already executing.");for(;c;)try{if(i=1,r&&(a=r[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(r,n[1])).done)return a;switch(r=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,r=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(a=c.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){c.label=n[1];break}if(6===n[0]&&c.label<a[1]){c.label=a[1],a=n;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(n);break}a[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(o){n=[6,o],r=0}finally{i=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,r,a,s,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},BehaviorTree=function(){function e(){}return e}();__reflect(BehaviorTree.prototype,"BehaviorTree");var maxChildNumber=16,E_ParallelFinishCondition;!function(e){e[e.k_PFC_OR=1]="k_PFC_OR",e[e.k_PFC_AND=2]="k_PFC_AND"}(E_ParallelFinishCondition||(E_ParallelFinishCondition={}));var BehaviorRunningStatus;!function(e){e[e.k_BRS_ERROR_Transition=-1]="k_BRS_ERROR_Transition",e[e.k_BRS_Executing=0]="k_BRS_Executing",e[e.k_BRS_Finish=1]="k_BRS_Finish"}(BehaviorRunningStatus||(BehaviorRunningStatus={}));var E_TerminalNodeStates;!function(e){e[e.K_TNS_Ready=1]="K_TNS_Ready",e[e.K_TNS_Running=2]="K_TNS_Running",e[e.K_TNS_Finish=3]="K_TNS_Finish"}(E_TerminalNodeStates||(E_TerminalNodeStates={}));var BehaviorNode=function(){function e(e,t){void 0===t&&(t=null),this._parentBehaviorNode=e,this._behaviorNodePrecondition=e}return Object.defineProperty(e.prototype,"behaviorNodePrecondition",{get:function(){return this._behaviorNodePrecondition},set:function(e){this._behaviorNodePrecondition=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"debugName",{get:function(){return this._debugName},set:function(e){this._debugName=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"lastActiveNode",{get:function(){return this._lastActiveNode},set:function(e){this._lastActiveNode=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeNode",{get:function(){return this._activeNode},set:function(e){this._activeNode=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"parentBehaviorNode",{get:function(){return this._parentBehaviorNode},set:function(e){this._parentBehaviorNode=e},enumerable:!0,configurable:!0}),e.prototype.evaluate=function(e){return null==this._behaviorNodePrecondition||this._behaviorNodePrecondition.externalCondition(e)&&this._doEvaluate(e)},e.prototype.addChilBehaviordNode=function(e){var t=this._childBehaviorNodeList.indexOf(e);t>-1&&this._childBehaviorNodeList.push(),console.log("The number of child nodes is ",this._childBehaviorNodeList.length)},e.prototype.tick=function(e){return this._doTick(e)},e.prototype.transition=function(e){},e.prototype.checkIndex=function(e){return e>=0&&e<this._childBehaviorNodeList.length},e}();__reflect(BehaviorNode.prototype,"BehaviorNode");var BehaviorNodePrecondition=function(){function e(){}return e}();__reflect(BehaviorNodePrecondition.prototype,"BehaviorNodePrecondition");var BehaviorNodePreconditionTRUE=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.externalCondition=function(e){return!0},t}(BehaviorNodePrecondition);__reflect(BehaviorNodePreconditionTRUE.prototype,"BehaviorNodePreconditionTRUE");var BehaviorNodePreconditionFALSE=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.externalCondition=function(e){return!1},t}(BehaviorNodePrecondition);__reflect(BehaviorNodePreconditionFALSE.prototype,"BehaviorNodePreconditionFALSE");var BehaviorNodePreconditionNOT=function(e){function t(t){var n=e.call(this)||this;return n._lhs=t,n}return __extends(t,e),t.prototype.externalCondition=function(e){return!this._lhs.externalCondition(e)},t}(BehaviorNodePrecondition);__reflect(BehaviorNodePreconditionNOT.prototype,"BehaviorNodePreconditionNOT");var behaviorNodePreconditionAND=function(e){function t(t,n){var o=e.call(this)||this;return o._behaviorNodePreconditionOne=t,o._behaviorNodePreconditionTwo=n,o}return __extends(t,e),t.prototype.externalCondition=function(e){return this._behaviorNodePreconditionOne.externalCondition(e)&&this._behaviorNodePreconditionTwo.externalCondition(e)},t}(BehaviorNodePrecondition);__reflect(behaviorNodePreconditionAND.prototype,"behaviorNodePreconditionAND");var behaviorNodePreconditionOR=function(e){function t(t,n){var o=e.call(this)||this;return o._behaviorNodePreconditionOne=t,o._behaviorNodePreconditionTwo=n,o}return __extends(t,e),t.prototype.externalCondition=function(e){return this._behaviorNodePreconditionOne.externalCondition(e)||this._behaviorNodePreconditionTwo.externalCondition(e)},t}(BehaviorNodePrecondition);__reflect(behaviorNodePreconditionOR.prototype,"behaviorNodePreconditionOR");var behaviorNodePreconditionXOR=function(e){function t(t,n){var o=e.call(this)||this;return o._behaviorNodePreconditionOne=t,o._behaviorNodePreconditionTwo=n,o}return __extends(t,e),t.prototype.externalCondition=function(e){return this._behaviorNodePreconditionOne.externalCondition(e)!==this._behaviorNodePreconditionTwo.externalCondition(e)},t}(BehaviorNodePrecondition);__reflect(behaviorNodePreconditionXOR.prototype,"behaviorNodePreconditionXOR");var BehaviorNodePrioritySelector=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._doEvaluate=function(e){this._currentSelectIndex=maxChildNumber;for(var t=0;t<this._childBehaviorNodeList.length;t++){var n=this._childBehaviorNodeList[t];if(n.evaluate(e))return this._currentSelectIndex=t,!0}return!1},t.prototype._doTransition=function(e){this.checkIndex(this._lastSelectIndex)&&this._childBehaviorNodeList[this._lastSelectIndex].transition(e),this._lastSelectIndex=maxChildNumber},t.prototype._doTick=function(e){var t=BehaviorRunningStatus.k_BRS_Finish;if(this.checkIndex(this._currentSelectIndex)&&this._lastSelectIndex!=this._currentSelectIndex&&(this.checkIndex(this._lastSelectIndex)&&this._childBehaviorNodeList[this._lastSelectIndex].transition(e),this._lastSelectIndex=this._currentSelectIndex),this.checkIndex(this._lastSelectIndex)){var n=this._childBehaviorNodeList[this._lastSelectIndex];t=n.tick(e),t&&(this._lastSelectIndex=maxChildNumber)}return t},t}(BehaviorNode);__reflect(BehaviorNodePrioritySelector.prototype,"BehaviorNodePrioritySelector");var BehaviorNodeNonePrioritySelector=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._doEvaluate=function(t){return this.checkIndex(this._currentSelectIndex)&&this._childBehaviorNodeList[this._currentSelectIndex].evaluate(t)?!0:e.prototype._doEvaluate.call(this,t)},t}(BehaviorNodePrioritySelector);__reflect(BehaviorNodeNonePrioritySelector.prototype,"BehaviorNodeNonePrioritySelector");var BehaviorNodeSequence=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._doEvaluate=function(e){var t;if(t=this._currentBehaviorNodeIndex==maxChildNumber?0:this._currentBehaviorNodeIndex,this.checkIndex(t)){var n=this._childBehaviorNodeList[t];if(n.evaluate(e))return!0}return!1},t.prototype._doTransition=function(e){if(this.checkIndex(this._currentBehaviorNodeIndex)){var t=this._childBehaviorNodeList[this._currentBehaviorNodeIndex];t.transition(t)}this._currentBehaviorNodeIndex=maxChildNumber},t.prototype._doTick=function(e){var t=BehaviorRunningStatus.k_BRS_Finish;this._currentBehaviorNodeIndex==maxChildNumber&&(this._currentBehaviorNodeIndex=0);var n=this._childBehaviorNodeList[this._currentBehaviorNodeIndex];return t=n.tick(e),t==BehaviorRunningStatus.k_BRS_Finish&&(++this._currentBehaviorNodeIndex,this._currentBehaviorNodeIndex==this._childBehaviorNodeList.length?this._currentBehaviorNodeIndex=maxChildNumber:t=BehaviorRunningStatus.k_BRS_Executing),t==BehaviorRunningStatus.k_BRS_ERROR_Transition&&(this._currentBehaviorNodeIndex=maxChildNumber),t},t}(BehaviorNode);__reflect(BehaviorNodeSequence.prototype,"BehaviorNodeSequence");var BehaviorTerminalNode=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._doTransition=function(e){this._needExit&&this._doExit(e,BehaviorRunningStatus.k_BRS_ERROR_Transition),this.activeNode=null,this._states=E_TerminalNodeStates.K_TNS_Ready},t.prototype._doEvaluate=function(e){return!1},t.prototype._doTick=function(e){var t=BehaviorRunningStatus.k_BRS_Finish;switch(this._states){case E_TerminalNodeStates.K_TNS_Ready:this._doEnter(e),this._needExit=!0,this._states=E_TerminalNodeStates.K_TNS_Running,this.activeNode=this;break;case E_TerminalNodeStates.K_TNS_Running:var t=this._doExecute(e);this.activeNode=this,(t==BehaviorRunningStatus.k_BRS_Finish||0>t)&&(this._states=E_TerminalNodeStates.K_TNS_Finish);break;case E_TerminalNodeStates.K_TNS_Finish:this._needExit&&this._doExit(e,t),this._states=E_TerminalNodeStates.K_TNS_Ready,this._needExit=!1,this.activeNode=null;break;default:console.log("terminal states error")}return t},t.prototype._doEnter=function(e){},t.prototype._doExit=function(e,t){},t}(BehaviorNode);__reflect(BehaviorTerminalNode.prototype,"BehaviorTerminalNode");var BehaviorParallelNode=function(e){function t(t,n){void 0===n&&(n=null);var o=e.call(this,t,n)||this;o._childNodeStatesList=[];for(var i=0;maxChildNumber>i;i++)o._childNodeStatesList.push(BehaviorRunningStatus.k_BRS_Executing);return o}return __extends(t,e),t.prototype._doEvaluate=function(e){return this._childBehaviorNodeList.forEach(function(t){return t.evaluate(e)?void 0:!1}),!1},t.prototype.setFinishCondition=function(e){this._finishCondition=e},t.prototype._doTransition=function(e){this._childNodeStatesList.forEach(function(e){e=BehaviorRunningStatus.k_BRS_Executing}),this._childBehaviorNodeList.forEach(function(t){t.transition(e)})},t.prototype._doTick=function(e){var t=this,n=0,o=0;return this._childBehaviorNodeList.forEach(function(i){var r=i;if(t._finishCondition==E_ParallelFinishCondition.k_PFC_OR){if(t._childNodeStatesList[o]==BehaviorRunningStatus.k_BRS_Executing&&(t._childNodeStatesList[o]=r.tick(e)),t._childNodeStatesList[o]!=BehaviorRunningStatus.k_BRS_Executing)return t._childNodeStatesList.forEach(function(e){e=BehaviorRunningStatus.k_BRS_Executing}),BehaviorRunningStatus.k_BRS_Finish}else t._finishCondition==E_ParallelFinishCondition.k_PFC_AND&&(t._childNodeStatesList[o]==BehaviorRunningStatus.k_BRS_Executing&&(t._childNodeStatesList[o]=r.tick(e)),t._childNodeStatesList[o]!=BehaviorRunningStatus.k_BRS_Executing&&n++);o++}),n==this._childBehaviorNodeList.length?(this._childNodeStatesList.forEach(function(e){e=BehaviorRunningStatus.k_BRS_Executing}),BehaviorRunningStatus.k_BRS_Finish):BehaviorRunningStatus.k_BRS_Executing},t}(BehaviorNode);__reflect(BehaviorParallelNode.prototype,"BehaviorParallelNode");var LoopConst;!function(e){e.kFiniteLoop=-1}(LoopConst||(LoopConst={}));var BehaviorLoopNode=function(e){function t(t,n,o){void 0===n&&(n=null),void 0===o&&(o=LoopConst.kFiniteLoop);var i=e.call(this,t,n)||this;return i._loopCount=LoopConst.kFiniteLoop,i._currentCount=0,i._loopCount=o,i}return __extends(t,e),t.prototype._doEvaluate=function(e){var t=this._loopCount==LoopConst.kFiniteLoop||this._currentCount<this._loopCount;return t&&this.checkIndex(0)&&this._childBehaviorNodeList[0].evaluate(e)?!0:!1},t.prototype._doTransition=function(e){this.checkIndex(0)&&this._childBehaviorNodeList[0].transition(e),this._currentCount=0},t.prototype._doTick=function(e){var t=BehaviorRunningStatus.k_BRS_Finish;if(this.checkIndex(0)){var n=this._childBehaviorNodeList[0];t=n.tick(e),t==BehaviorRunningStatus.k_BRS_Finish&&(this._loopCount==LoopConst.kFiniteLoop?(this._currentCount++,this._currentCount==this._loopCount&&(t=BehaviorRunningStatus.k_BRS_Executing)):t=BehaviorRunningStatus.k_BRS_Executing)}return t&&(this._currentCount=0),t},t}(BehaviorNode);__reflect(BehaviorLoopNode.prototype,"BehaviorLoopNode");var BehaviorNodeFactory=function(){function e(){}return e.createParallelBehaviorNode=function(e,t,n){var o=new BehaviorParallelNode(e);return o.setFinishCondition(t),this.behaviorNodeCommonSet(o,e,n),o},e.createPriorityBehaviorNode=function(e,t){var n=new BehaviorNodePrioritySelector(parent);return this.behaviorNodeCommonSet(n,e,t),n},e.createNonePriorityBehaviorNode=function(e,t){var n=new BehaviorNodeNonePrioritySelector(e);return this.behaviorNodeCommonSet(n,e,t),n},e.createSquenceBehaviorNode=function(e,t){var n=new BehaviorNodeSequence(e);return this.behaviorNodeCommonSet(n,e,t),n},e.createLoopBehaviorNode=function(e,t,n){var o=new BehaviorLoopNode(e,n);return this.behaviorNodeCommonSet(o,e,t),o},e.createTerminalBehaviorNode=function(e,t,n){var o=egret.getDefinitionByName(e),i=new o(t);return this.behaviorNodeCommonSet(i,t,n),i},e.behaviorNodeCommonSet=function(e,t,n){null!=t&&(t.addChilBehaviordNode(e),e.debugName=n)},e}();__reflect(BehaviorNodeFactory.prototype,"BehaviorNodeFactory");var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function o(o){t.call(n,o,e)}if(RES.hasRes(e)){var i=RES.getRes(e);i?o(i):RES.getResAsync(e,o,this)}else RES.getResByUrl(e,o,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var GameControl=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.skinName="GameControlSkin",this.init()},t.prototype.init=function(){var e=new MotionExample;this.addChild(e)},t}(eui.Component);__reflect(GameControl.prototype,"GameControl");var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return[4,this.loadResource()];case 1:return n.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return e=n.sent(),[4,platform.login()];case 3:return n.sent(),[4,platform.getUserInfo()];case 4:return t=n.sent(),console.log(t),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return t.trys.push([0,4,,5]),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return t.sent(),[4,this.loadTheme()];case 2:return t.sent(),[4,RES.loadGroup("preload",0,null)];case 3:return t.sent(),[3,5];case 4:return e=t.sent(),console.error(e),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var o=new eui.Theme("resource/default.thm.json",e.stage);o.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){var e=new GameControl;this.stage.addChild(e)},t}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var SF_InputParam=function(){function e(){}return Object.defineProperty(e.prototype,"targetPos",{get:function(){return this._targetPos},set:function(e){this._targetPos=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"owner",{get:function(){return this._owner},set:function(e){this._owner=e},enumerable:!0,configurable:!0}),e}();__reflect(SF_InputParam.prototype,"SF_InputParam");var SF_OutputParam=function(){function e(){}return e}();__reflect(SF_OutputParam.prototype,"SF_OutputParam");var SF_Param=function(){function e(){}return Object.defineProperty(e.prototype,"inputParam",{get:function(){return this._inputParam},set:function(e){this._inputParam=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"outputParam",{get:function(){return this._outputParam},set:function(e){this._outputParam=e},enumerable:!0,configurable:!0}),e}();__reflect(SF_Param.prototype,"SF_Param");var SF=function(e){function t(){var t=e.call(this)||this;return t.createSF(),t}return __extends(t,e),Object.defineProperty(t.prototype,"moveSpeed",{get:function(){return this._moveSpeed},set:function(e){this._moveSpeed=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"param",{get:function(){return this._param},set:function(e){this._param=e},enumerable:!0,configurable:!0}),t.prototype.createSF=function(){var e=RES.getRes("shadowFiend_ske_json"),t=RES.getRes("shadowFiend_tex_json"),n=RES.getRes("shadowFiend_tex_png"),o=new dragonBones.EgretFactory;o.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(e)),o.addTextureAtlasData(o.parseTextureAtlasData(t,n)),this._SF_armature=o.buildArmature("shadowFiend"),this._SF_display=this._SF_armature.getDisplay(),this.addChild(this._SF_display),dragonBones.WorldClock.clock.add(this._SF_armature),egret.startTick(this.onTicker,this)},t.prototype.SFPlay=function(e){this._SF_armature.animation.gotoAndPlay(e)},t.prototype.onTicker=function(e){this._lastFrameTime||(this._lastFrameTime=e);var t=e-this._lastFrameTime;return this._lastFrameTime=e,dragonBones.WorldClock.clock.advanceTime(t/1e3),!1},t.prototype.init=function(){},t}(egret.DisplayObjectContainer);__reflect(SF.prototype,"SF");var SF_move=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._doExecute=function(e){return BehaviorRunningStatus.k_BRS_Finish},t}(BehaviorTerminalNode);__reflect(SF_move.prototype,"SF_move");var MotionExample=function(e){function t(){var t=e.call(this)||this;return t.label=new egret.TextField,t.label.y=400,t.label.x=50,t.addChild(t.label),t.plane=new egret.Bitmap(RES.getRes("airplane_png")),t.addChild(t.plane),t.motion=new egret.Motion,t.motion.addEventListener(egret.Event.CHANGE,t.onMotion,t),t.motion.start(),t}return __extends(t,e),t.prototype.onMotion=function(e){this.label.text="加速度: \nx:"+e.accelerationIncludingGravity.x+",\ny:"+e.accelerationIncludingGravity.y+",\nz:"+e.accelerationIncludingGravity.z,e.accelerationIncludingGravity.y>0&&this.plane.y--,e.accelerationIncludingGravity.y<0&&this.plane.y++,e.accelerationIncludingGravity.x>0&&this.plane.x++,e.accelerationIncludingGravity.x<0&&this.plane.x--},t}(egret.DisplayObjectContainer);__reflect(MotionExample.prototype,"MotionExample");var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,n,o){function i(e){t.call(o,e)}function r(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),n.call(o))}var a=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(o,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,n){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(o,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var s=e.split("/");s.pop();var c=s.join("/")+"_EUI.json";generateJSON.paths[e]?egret.callLater(function(){t.call(o,generateJSON.paths[e])},this):RES.getResByUrl(c,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){t.call(o,generateJSON.paths[e])},a)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(o,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),RES.getResByUrl(e,i,this,RES.ResourceItem.TYPE_TEXT)},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);