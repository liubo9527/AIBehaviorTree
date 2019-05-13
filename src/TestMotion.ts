class MotionExample extends egret.DisplayObjectContainer {
  label: egret.TextField;
  motion: egret.Motion;
  private plane;
  constructor() {
      super();
      //文本框
      this.label = new egret.TextField();
      this.label.y = 400;
      this.label.x = 50;
      this.addChild(this.label);​

	  this.plane = new egret.Bitmap(RES.getRes("airplane_png"));
	  this.addChild(this.plane);
        // 关键代码开始
      this.motion = new egret.Motion();
      this.motion.addEventListener(egret.Event.CHANGE,this.onMotion,this);
      this.motion.start();  // 开始监听设备运动状态
        // stop ( ):void  停止监听设备运动状态

  }
  onMotion(e:egret.MotionEvent){
      this.label.text =
          "加速度: \nx:"+e.accelerationIncludingGravity.x
          +",\ny:"+e.accelerationIncludingGravity.y
          +",\nz:"+e.accelerationIncludingGravity.z;​
        //  关键代码结束
      if(e.accelerationIncludingGravity.y > 0)
      {
          this.plane.y--;
      }
        if(e.accelerationIncludingGravity.y < 0)
      {
          this.plane.y++;
      }
	  if(e.accelerationIncludingGravity.x > 0)
      {
          this.plane.x++;
      }
        if(e.accelerationIncludingGravity.x < 0)
      {
          this.plane.x--;
      }
  }
}