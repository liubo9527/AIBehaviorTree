class SF_InputParam{
    //目的地址
	private _targetPos : egret.Point;
	public get targetPos() : egret.Point {
		return this._targetPos;
	}
	public set targetPos(v : egret.Point) {
		this._targetPos = v;
	}
	//SF owner
	private _owner : SF;
	public get owner() : SF {
		return this._owner;
	}
	public set owner(v : SF) {
		this._owner = v;
	}
	//
	
	private _timeStep : number;
	public get timeStep() : number {
		return this._timeStep;
	}
	public set timeStep(v : number) {
		this._timeStep = v;
	}
	
}

class SF_OutputParam{
	
}

class SF_Param{
	
	private _inputParam : SF_InputParam;
	public get inputParam() : SF_InputParam {
		return this._inputParam;
	}
	public set inputParam(v : SF_InputParam) {
		this._inputParam = v;
	}
	
	private _outputParam : SF_OutputParam;
	public get outputParam() : SF_OutputParam {
		return this._outputParam;
	}
	public set outputParam(v : SF_OutputParam) {
		this._outputParam = v;
	}
	
}

class SF extends egret.DisplayObjectContainer{
	private _animationName : string;
	public get animationName() : string {
		return this._animationName;
	}
	public set animationName(v : string) {
		if(this.animationName !=v){
			this._animationName = v;
			this.sfPlay(v);
		}
	}
	//自身属性
	private _moveSpeed : number;
	public get moveSpeed() : number {
		return this._moveSpeed;
	}
	public set moveSpeed(v : number) {
		this._moveSpeed = v;
	}
	//sf 转向
	private _face : number = 1;
	public get face() : number {
		return this._face;
	}
	public set face(v : number) {
		if(v != this.face){
			this._face = v;
			this.scaleX = this.face;
		}
	}
	


	//输出和输入
	private _param : SF_Param;
	public get param() : SF_Param {
		return this._param;
	}
	public set param(v : SF_Param) {
		this._param = v;
	}
	//
	
	private _behaviorRootNode : BehaviorNode;
	public get behaviorRootNode() : BehaviorNode {
		return this._behaviorRootNode;
	}
	public set behaviorRootNode(v : BehaviorNode) {
		this._behaviorRootNode = v;
	}
	

	private _SF_armature;
	private _lastFrameTime;
	private _SF_display;
	public constructor() {
		super();
		this.createSF();
	}
 	createSF(){
		var sf_ske = RES.getRes("shadowFiend_ske_json");
		var sf_tex_json = RES.getRes("shadowFiend_tex_json");
		var sf_tex_png = RES.getRes("shadowFiend_tex_png");

		var dragonbonesFactory = new dragonBones.EgretFactory();
		dragonbonesFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(sf_ske));
		dragonbonesFactory.addTextureAtlasData(dragonbonesFactory.parseTextureAtlasData(sf_tex_json, sf_tex_png));
		//创建shadowFiend
		this._SF_armature = dragonbonesFactory.buildArmature("shadowFiend");
		///注意是display
		this._SF_display = this._SF_armature.getDisplay();
		this.addChild(this._SF_display);
		this.x = 300;
		this.y = 300;
		
		var sfInput = new SF_InputParam();
		sfInput.owner = this;
		sfInput.targetPos = new egret.Point(200, 200);
		this.param = new SF_Param();
		this.param.inputParam = sfInput;
		this.moveSpeed = 1;

		var root = BehaviorNodeFactory.createPriorityBehaviorNode(null, "root");
		var sequence = BehaviorNodeFactory.createSquenceBehaviorNode(root, "sequence");
		sequence.behaviorNodePrecondition = new BehaviorNodePreconditionNOT(new CON_hasReachTarget()); 
		var turnFace = BehaviorNodeFactory.createTerminalBehaviorNode("SF_turnFace", sequence, "turnFace");
		turnFace.behaviorNodePrecondition = new BehaviorNodePreconditionTRUE();
		var move = BehaviorNodeFactory.createTerminalBehaviorNode("SF_move", sequence, "move");
		move.behaviorNodePrecondition =  new CON_hasTurnFace();
		var idle = BehaviorNodeFactory.createTerminalBehaviorNode("SF_idle", root, "idle");
		idle.behaviorNodePrecondition = new BehaviorNodePreconditionTRUE();

		this.behaviorRootNode = root;
		dragonBones.WorldClock.clock.add(this._SF_armature);
		egret.startTick(this.onTicker, this);
	}


	sfPlay(animationName){
		this._SF_armature.animation.gotoAndPlay(animationName);
	}
	
	private onTicker(currentTime){//所有的时钟判断
		//同步骨骼动画
		if(!this._lastFrameTime){
			this._lastFrameTime = currentTime;
		}
		var pass = currentTime - this._lastFrameTime;
		this._lastFrameTime = currentTime;
		dragonBones.WorldClock.clock.advanceTime(pass/1000)
		//游戏逻辑判断tick
		if(this.behaviorRootNode.evaluate(this.param.inputParam)){
			this.param.inputParam.timeStep = pass;
			this.behaviorRootNode.tick(this.param.inputParam);
		}
		return false;
	}
}

class SF_move extends BehaviorTerminalNode{
	_doExecute(input:SF_InputParam):BehaviorRunningStatus{
		//
		input.owner.animationName = "run";
		var  targetPos = input.targetPos;				
		var  currentPos = new egret.Point(input.owner.x, input.owner.y);
		var distance = egret.Point.distance(targetPos, currentPos);
		var subPos = currentPos.subtract(targetPos);
		//将subPos转化为单位坐标
		var unitPos = new egret.Point(subPos.x/distance, subPos.y/distance);
		var speedX = unitPos.x*input.owner.moveSpeed;
		var speedY = unitPos.y*input.owner.moveSpeed;
		if(distance < input.owner.moveSpeed * 2){//!!!!!注意这里的处理
			input.owner.x -= speedX;
			input.owner.y -= speedY;
			return BehaviorRunningStatus.k_BRS_Finish;
		}else{
			input.owner.x -= speedX;
			input.owner.y -= speedY;
			return BehaviorRunningStatus.k_BRS_Executing;
		}
	}
}

class SF_idle extends BehaviorTerminalNode{
	private _timeCount = 2000;
	_doExecute(input:SF_InputParam):BehaviorRunningStatus{
		 input.owner.animationName = "uniqueAttack";
		 this._timeCount -= input.timeStep;
		 if(this._timeCount < 0){
			this._timeCount = 2000;
			return BehaviorRunningStatus.k_BRS_Finish;
		}else{
			return BehaviorRunningStatus.k_BRS_Executing;
		}
	}
}

class SF_turnFace extends BehaviorTerminalNode{
	private _timeCount = 200;
	_doExecute(input:SF_InputParam):BehaviorRunningStatus{
		//input.owner.animationName = "skillAttack1";
		var targetPos = input.targetPos;
		var currentPos = new egret.Point(input.owner.x, input.owner.y);
		var subPos = targetPos.subtract(currentPos);	
		this._timeCount -= input.timeStep;
		if(this._timeCount < 0){
			this._timeCount = 200;
			if(subPos.x <= 0){
				input.owner.face = -1;
			}else{
				input.owner.face = 1;
			}
			return BehaviorRunningStatus.k_BRS_Finish;
		}else{
			return BehaviorRunningStatus.k_BRS_Executing;
		}
	}
}
//
class CON_hasTurnFace extends BehaviorNodePrecondition{
	externalCondition(input:SF_InputParam):boolean{
		var targetPos = input.targetPos;
		var currentPos = new egret.Point(input.owner.x, input.owner.y);
		var subPos = targetPos.subtract(currentPos);	
		if(subPos.x * input.owner.face < 0){
			return false;
		}
		return true;
	}
}

class CON_hasReachTarget extends BehaviorNodePrecondition{
	externalCondition(input:SF_InputParam):boolean{
		var  targetPos = input.targetPos;
		var  currentPos = new egret.Point(input.owner.x, input.owner.y);
		var distance = egret.Point.distance(targetPos, currentPos);
		if(distance < input.owner.moveSpeed){
			return true;
		}
		return false;
	}
}