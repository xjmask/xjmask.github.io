window.__require=function t(e,n,o){function i(c,a){if(!n[c]){if(!e[c]){var p=c.split("/");if(p=p[p.length-1],!e[p]){var r="function"==typeof __require&&__require;if(!a&&r)return r(p,!0);if(s)return s(p,!0);throw new Error("Cannot find module '"+c+"'")}}var d=n[c]={exports:{}};e[c][0].call(d.exports,function(t){return i(e[c][1][t]||t)},d,d.exports,t,e,n,o)}return n[c].exports}for(var s="function"==typeof __require&&__require,c=0;c<o.length;c++)i(o[c]);return i}({AI:[function(t,e,n){"use strict";cc._RF.push(e,"814b9EY1lhIzZdMpgzu9bOh","AI"),cc.Class({extends:cc.Component,properties:{think_time:.3},onLoad:function(){this.weapon=cc.find("Canvas/weapon")},start:function(){this.now_time=this.think_time,this.condition=this.getComponent("player").condition,this.status=this.weapon.getComponent("weapon").status,this.agent=this.getComponent("nav_agent")},onBeginContact:function(t,e,n){"weapon"===n.node.name&&(this.b=n.node.getComponent("weapon").status)},find_weapon:function(){var t=cc.find("Canvas/weapon"),e=this.node.getPosition(),n=t.getPosition();n.sub(e).mag();this.condition,!1===this.status&&this.agent.walk_to(n),this.node.x<this.weapon.x&&(this.node.scaleX=.3),this.node.x>this.weapon.x&&(this.node.scaleX=-.3)},find_player:function(){var t=cc.find("Canvas/player"),e=this.node.getPosition(),n=t.getPosition();n.sub(e).mag();this.condition,!0===this.b&&this.agent.walk_to(n),this.node.x<n.x&&(this.node.scaleX=.3,cc.log("1")),this.node.x>n.x&&(this.node.scaleX=-.3,cc.log("2"))},update:function(t){this.now_time+=t,this.now_time,this.think_time,this.condition,!1===this.status&&(this.find_weapon(),this.now_time=0),this.now_time,this.think_time,this.condition,!0===this.b&&(this.find_player(),this.now_time=0)}}),cc._RF.pop()},{}],alert:[function(t,e,n){"use strict";cc._RF.push(e,"bba6aTvic5OsKnR194H01kN","alert"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},start:function(){},update:function(t){}}),cc._RF.pop()},{}],box_born:[function(t,e,n){"use strict";var o;function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}cc._RF.push(e,"cdfa7zF44lL5rNYFqfZUg+Z","box_born"),cc.Class((i(o={extends:cc.Component,properties:{prefab:{default:null,type:cc.Prefab}},onLoad:function(){},start:function(){}},"start",function(){var t=cc.director.getScene(),e=cc.instantiate(this.prefab);e.parent=t,e.setPosition(900,430)}),i(o,"update",function(t){}),o)),cc._RF.pop()},{}],box:[function(t,e,n){"use strict";cc._RF.push(e,"5a804ji0uJN167jcIAEOnXU","box"),cc.Class({extends:cc.Component,properties:{player:{default:null,type:cc.Node},target:cc.Node},onLoad:function(){this.des=!1,cc.director.getCollisionManager().enabled=!0,cc.director.getCollisionManager().enabledDebugDraw=!0,cc.director.enabledDrawBoundingBox=!0},start:function(){},update:function(){}}),cc._RF.pop()},{}],btnok:[function(t,e,n){"use strict";cc._RF.push(e,"aa66921XAxCvqGgx7pQv1+r","btnok"),cc.Class({extends:cc.Component,properties:{},start:function(){},game_start:function(){cc.director.resume(),cc.director.loadScene("game")}}),cc._RF.pop()},{}],game:[function(t,e,n){"use strict";cc._RF.push(e,"de2b2BVDOFGwoK4/XVohnfM","game"),cc.Class({extends:cc.Component,properties:{UI:{default:null,type:cc.Node},labelcolor:{default:null,type:cc.Node}},onLoad:function(){},start:function(){this.UI.active=!1,this.labelcolor.color=new cc.color(0,0,0,255)},update:function(t){this.node.childrenCount<10&&(this.UI.active=!0)}}),cc._RF.pop()},{}],jump:[function(t,e,n){"use strict";cc._RF.push(e,"3920f2zWUxJQp8qAFSk9xFm","jump"),cc.Class({extends:cc.Component,properties:{player:{default:null,type:cc.Node},speed:0},onLoad:function(){},start:function(){this.jump=!1,this.body=this.getComponent(cc.RigidBody),this.node.on(cc.Node.EventType.TOUCH_START,function(t){this.jump=!0,setTimeout(function(){this.jump=!1}.bind(this),100)},this)},update:function(t){this.jump&&(this.player.y+=30)}}),cc._RF.pop()},{}],move_left:[function(t,e,n){"use strict";cc._RF.push(e,"c2a31RRY7hNeaxg1UrKYbcj","move_left"),cc.Class({extends:cc.Component,properties:{player:{default:null,type:cc.Node},speed:0},start:function(){this.left=!1,this.body=this.getComponent(cc.RigidBody),this.node.on(cc.Node.EventType.TOUCH_START,function(t){this.left=!0},this),this.node.on(cc.Node.EventType.TOUCH_END,function(t){this.left=!1},this)},onload:function(){},update:function(t){this.left&&(this.player.x-=this.speed*t,this.player.scaleX=-.3,this.player.x>0&&(this.player.y-=t*this.speed))}}),cc._RF.pop()},{}],move_right:[function(t,e,n){"use strict";cc._RF.push(e,"549c8s5VBpAyoFRrl1zEQRM","move_right"),cc.Class({extends:cc.Component,properties:{player:{default:null,type:cc.Node},speed:0},start:function(){this.right=!1,this.body=this.getComponent(cc.RigidBody),this.node.on(cc.Node.EventType.TOUCH_START,function(t){this.right=!0},this),this.node.on(cc.Node.EventType.TOUCH_END,function(t){this.right=!1},this)},onload:function(){},update:function(t){this.right&&(this.player.x+=this.speed*t,this.player.scaleX=.3,this.player.x<0&&(this.player.y-=t*this.speed))}}),cc._RF.pop()},{}],nav_agent:[function(t,e,n){"use strict";cc._RF.push(e,"67a9bpFPjxPbpzlSPdyXCzf","nav_agent"),cc.Class({extends:cc.Component,properties:{speed:0},onLoad:function(){},start:function(){this.is_walking=!1},walk_to:function(t){var e=this.node.getPosition(),n=t.sub(e),o=n.mag();this.walk_time=o/this.speed,this.vx=this.speed*n.x/o,this.vy=this.speed*n.y/o,this.passed_time=0,this.is_walking=!0},update:function(t){this.passed_time>this.walk_time&&(t-=this.passed_time-this.walk_time),this.passed_time+=t,this.node.x+=this.vx*t,this.node.y+=this.vy*t,this.passed_time>=this.walk_time&&(this.is_walking=!1)}}),cc._RF.pop()},{}],player_sprite:[function(t,e,n){"use strict";cc._RF.push(e,"69afb7oazFLErhYO6p/IhfQ","player_sprite"),cc.Class({extends:cc.Component,properties:{player:{default:null,type:cc.Node}},onLoad:function(){},start:function(){},update:function(t){this.node.x=this.player.x,this.node.y=this.player.y,this.node.angle=this.player.angle}}),cc._RF.pop()},{}],player:[function(t,e,n){"use strict";cc._RF.push(e,"92db9Ys3HRNU4RnZTVG6FKb","player"),cc.Class({extends:cc.Component,properties:{},start:function(){},onLoad:function(){this.condition=!1,cc.director.getPhysicsManager().enabled=!0,cc.director.getCollisionManager().enabled=!0,cc.director.getCollisionManager().enabledDebugDraw=!0,cc.director.enabledDrawBoundingBox=!0},update:function(t){this.node.x<-23&&(this.node.angle=-26.833,cc.log("angle",this.node.angle)),this.node.x>23&&(this.node.angle=26.833),23>this.node.x>-23&&(this.node.angle=0)}}),cc._RF.pop()},{}],tanchuang:[function(t,e,n){"use strict";cc._RF.push(e,"275d9pPZgVMv6QEjA4JfaBF","tanchuang"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},start:function(){},update:function(t){}}),cc._RF.pop()},{}],weapon:[function(t,e,n){"use strict";cc._RF.push(e,"9d32aayx/ZIEbTgiCumLFJV","weapon"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.move=!1,cc.director.getCollisionManager().enabled=!0,cc.director.getCollisionManager().enabledDebugDraw=!0,cc.director.enabledDrawBoundingBox=!0,this.status=!1},start:function(){this.node.x<-23&&(this.node.y=-268/532*this.node.x-205),this.node.x>23&&(this.node.y=268/515*this.node.x-205),cc.log("weapon status",this.status)},onBeginContact:function(t,e,n){var o=n.node.getComponent("player").condition;if(cc.log("player condition",o),n.node.name,!1===this.status&&(this.move=!0,this.status=!0,o=!0,this.follow=n.node,cc.log("weapon status",this.status,"npc condition",o)),n.node.name,this.status,!1===o&&(cc.log("weapon status",this.status,"npc condition",o),n.node.destroy(),cc.log("othercollider destroy")),"weapon"===n.node.name)var i=n.node.getComponent("weapon").status;n.node.name,this.status,!0===i&&cc.log("123")},update:function(t){this.move&&(this.node.scaleX=this.follow.scaleX,this.node.scaleX<0&&(this.node.x=this.follow.x-80,this.node.y=this.follow.y),this.node.scaleX>0&&(this.node.x=this.follow.x+80,this.node.y=this.follow.y))}}),cc._RF.pop()},{}]},{},["AI","alert","box","box_born","btnok","game","jump","move_left","move_right","nav_agent","player","player_sprite","tanchuang","weapon"]);