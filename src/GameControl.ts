class GameControl extends eui.Component {
	private lastFrameTime;
	//private shadowFiend:dragonBones.Armature;

	private shadowFiendDisplay;
	public constructor() {
		super();
	}

	childrenCreated(){
		super.childrenCreated();
		this.skinName = "GameControlSkin";
		this.init();
	}

	init(){
		var shadowFiend = new SF();
		this.addChild(shadowFiend);

		this.parent.addEventListener(egret.TouchEvent.TOUCH_TAP, (e:egret.TouchEvent)=>{
			var pos = new egret.Point(e.stageX, e.stageY);
			shadowFiend.param.inputParam.targetPos = pos;
		}, this);
	}
}