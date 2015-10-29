var myGame = {
  config : {
      lives: 10,
      speed : 0.9,
      actionButton: 'leftmouse',
      endTrigger : 'Trigger.End',
      screenImages : [
        {
          src:'/images/start.png',
          id : 'mainScreen'
        },
        {
          src : '/images/lose.png',
          id : 'loseScreen'
        },
        {
          src : '/images/win.png',
          id : 'winScreen'
        }
      ],
      livesImage : {
        src : '/images/heart.png',
        dX:0,
        dY:10,
        dWidth:30,
        dHeight:30
      },
      cameraSettings : {
        offset : {
          x : 0,
          y : 0,
          z : -20
        },
        rotation : {
          x: 0,
          y: 0,
          z: 0
        }
      }
  },

  scripts : function(){
    //TODO this is where you can add your own game logic
  }
};

function start(){
  //Creates the Game Engine
  new A3D.Game(myGame.config);

  //Loads the first scene. Then Launches the Module
  A3D.ActiveGame._loadScene('./scenes/','myGame.babylon',function(){
    myGame.Scroller = new A3D.Module.Scroller(myGame.config);
    myGame.Scroller.loadModule(myGame.scripts);
  });
}

document.addEventListener( "DOMContentLoaded", start, false );
