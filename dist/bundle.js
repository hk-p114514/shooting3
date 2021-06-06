(()=>{"use strict";var e={715:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Character=void 0;var r=o(62),n=function(){function e(e,t,o,r,n){this.x=e,this.y=t,this.vectorX=o,this.vectorY=r,this.radius=n,this.death=!1,this.block=0}return e.prototype.update=function(){this.block=r.checkBlock(this.x,this.y,this.radius)},e}();t.Character=n},220:function(e,t,o){var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)});Object.defineProperty(t,"__esModule",{value:!0}),t.Enemy=void 0;var a=o(221),c=o(687),s=o(519),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.update=function(){e.prototype.update.call(this),c.enemyMove1(this)},t.prototype.draw=function(){a.drawObject(this,s.consts.enemyColor)},t}(o(715).Character);t.Enemy=i},875:function(e,t,o){var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)});Object.defineProperty(t,"__esModule",{value:!0}),t.Player=void 0;var a=o(221),c=o(25),s=o(519),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.update=function(){e.prototype.update.call(this),c.playerControl(this)},t.prototype.draw=function(){a.drawObject(this,s.consts.playerColor)},t}(o(715).Character);t.Player=i},643:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.enemyLoop=void 0;var r=o(519);t.enemyLoop=function(){for(var e=0;e<r.enemy.length;e++){if(r.enemy[e].death)return;r.enemy[e].draw(),r.enemy[e].update()}}},62:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.checkBlock=void 0;var r=o(519);t.checkBlock=function(e,t,o){var n=0;return o<t&&t<r.consts.canvasHeight/2?o<e&&e<r.consts.canvasWidth/2?n=1:r.consts.canvasWidth/2<e&&e<r.consts.canvasWidth&&(n=2):r.consts.canvasHeight/2<t&&t<r.consts.canvasHeight&&(o<e&&e<r.consts.canvasWidth/2?n=3:r.consts.canvasWidth/2<e&&e<r.consts.canvasWidth&&(n=4)),n}},221:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.drawObject=void 0;var r=o(519);t.drawObject=function(e,t){r.ctx&&(r.ctx.beginPath(),r.ctx.arc(e.x,e.y,e.radius,0,2*Math.PI),r.ctx.fillStyle=t,r.ctx.fill(),r.ctx.closePath())}},687:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.enemyMove1=void 0;var r=o(519),n=o(207);t.enemyMove1=function(e){e.x>=e.radius&&e.x<=r.consts.canvasWidth||(n.rand(0,3)||(e.vectorX+=n.rand(-5,5)),e.vectorX*=-1),e.y>=e.radius&&e.y<=r.consts.canvasHeight||(n.rand(0,3)||(e.vectorY+=n.rand(-5,5)),e.vectorY*=-1),e.x+=e.vectorX,e.y+=e.vectorY}},25:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.playerControl=void 0;var r=o(519);t.playerControl=function(e){r.keysProperty.up&&e.y>e.radius&&(e.y-=e.vectorY),r.keysProperty.right&&e.x<r.consts.canvasWidth-e.radius&&(e.x+=e.vectorX),r.keysProperty.down&&e.y<r.consts.canvasHeight-e.radius&&(e.y+=e.vectorY),r.keysProperty.left&&e.x>e.radius&&(e.x-=e.vectorX)}},207:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.rand=void 0,t.rand=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},137:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.gameLoop=void 0;var r=o(643),n=o(354),a=o(519);t.gameLoop=function(){n.keyMove(),a.ctx&&a.ctx.clearRect(0,0,a.consts.canvasWidth,a.consts.canvasHeight),r.enemyLoop(),a.player.update(),a.player.draw()}},123:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getCanvas=void 0,t.getCanvas=function(){return document.getElementById("canvas")}},8:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getContext=void 0,t.getContext=function(e){var t=null;return e&&(t=e.getContext("2d")),t}},354:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.keyMove=void 0;var r=o(519);t.keyMove=function(){document.addEventListener("keydown",(function(e){var t=e.key;"ArrowUp"===t&&(r.keysProperty.up=!0),"ArrowRight"===t&&(r.keysProperty.right=!0),"ArrowDown"===t&&(r.keysProperty.down=!0),"ArrowLeft"===t&&(r.keysProperty.left=!0)})),document.addEventListener("keyup",(function(e){var t=e.key;"ArrowUp"===t&&(r.keysProperty.up=!1),"ArrowRight"===t&&(r.keysProperty.right=!1),"ArrowDown"===t&&(r.keysProperty.down=!1),"ArrowLeft"===t&&(r.keysProperty.left=!1)}))}},519:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.enemy=t.ctx=t.DEBUG=t.point=t.player=t.keysProperty=t.consts=void 0,t.DEBUG=!0;var r=o(123),n=o(8),a=o(137),c=o(220),s=o(875),i=o(207),u=r.getCanvas(),y=n.getContext(u);t.ctx=y;var d=document.getElementById("point");t.point=d;var p={fps:1e3/30,canvasWidth:500,canvasHeight:500,playerColor:"#E31212",maxEnemyCount:10,enemyColor:"#6638f0"};t.consts=p,t.keysProperty={up:!1,right:!1,down:!1,left:!1};var v=new s.Player(p.canvasWidth/2,p.canvasHeight-10,10,10,10);t.player=v;var l=[];t.enemy=l;for(var h=0;h<p.maxEnemyCount;h++)l.push(new c.Enemy(i.rand(0,p.canvasWidth),i.rand(0,p.canvasHeight),i.rand(1,10),i.rand(1,10),10));u.width=p.canvasWidth,u.height=p.canvasHeight,setInterval(a.gameLoop,p.fps)}},t={};!function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,o),a.exports}(519)})();