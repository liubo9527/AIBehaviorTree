
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/GameControlSkin.exml'] = window.GameControlSkin = (function (_super) {
	__extends(GameControlSkin, _super);
	function GameControlSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i()];
	}
	var _proto = GameControlSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xfca4a4;
		t.height = 720;
		t.width = 1280;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return GameControlSkin;
})(eui.Skin);