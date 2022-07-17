class Vec3{constructor(e,t,d,a){this.id=e,this.x=t,this.y=d,this.z=a}}class Vec2{constructor(e,t){this.x=e,this.y=t}}class Matrix3x3{constructor(e){this.values=e}multiply(e){const t=this.values[0][0]*e.x+this.values[1][0]*e.y+this.values[2][0]*e.z,d=this.values[0][1]*e.x+this.values[1][1]*e.y+this.values[2][1]*e.z,a=this.values[0][2]*e.x+this.values[1][2]*e.y+this.values[2][2]*e.z;return new Vec3(e.id,t,d,a)}}class Matrix3x2{constructor(e){this.values=e}multiply(e){return new Vec2(0,0)}}class Edge{constructor(e,t){this.idA=e,this.idB=t}}class Model{vertices=[];edges=[];addVertex(e){const t="vert-"+this.vertices.length,d=new Vec3(t,e.x,e.y,e.z);return this.vertices.push(d),d}addEdge(e,t){this.edges.push(new Edge(e.id,t.id))}map(e){const t=new Model;return t.vertices=this.vertices.map(e),t.edges=[...this.edges],t}}class State{constructor(e=new Model,t=0,d=0){this.model=e,this.cameraAngleX=t,this.cameraAngleY=d}}class Context{constructor(e,t=800,d=600,a=0,s=0){this.canvas=e,this.width=t,this.height=d,this.mouseX=a,this.mouseY=s}}const vertexRadius=3,scaleFactor=100,fudgeFactor=.2,render=(e,t)=>{const d=new Map;for(let e of t.vertices){const t=1+.2*e.z;d.set(e.id,new Vec2(e.x/t,e.y/t))}e.canvas.fillStyle="black",e.canvas.beginPath(),e.canvas.rect(0,0,e.width,e.height),e.canvas.fill();const a=t=>100*t+e.width/2,s=t=>100*t+e.height/2;e.canvas.fillStyle="white";for(let[t,i]of d)e.canvas.beginPath(),e.canvas.ellipse(a(i.x),s(i.y),3,3,0,0,2*Math.PI),e.canvas.fill();e.canvas.strokeStyle="white";for(let i of t.edges){const t=d.get(i.idA),n=d.get(i.idB);t&&n&&(e.canvas.beginPath(),e.canvas.moveTo(a(t.x),s(t.y)),e.canvas.lineTo(a(n.x),s(n.y)),e.canvas.stroke())}},setup=(e,t)=>{const d=t.model;for(let e=-2;e<3;e++){const t=0,a=e,s=0,i=d.addVertex({x:-.5+t,y:.5+a,z:.5+s}),n=d.addVertex({x:.5+t,y:.5+a,z:.5+s}),c=d.addVertex({x:-.5+t,y:.5+a,z:-.5+s}),r=d.addVertex({x:.5+t,y:.5+a,z:-.5+s}),o=d.addVertex({x:-.5+t,y:-.5+a,z:.5+s}),h=d.addVertex({x:.5+t,y:-.5+a,z:.5+s}),l=d.addVertex({x:-.5+t,y:-.5+a,z:-.5+s}),g=d.addVertex({x:.5+t,y:-.5+a,z:-.5+s});d.addEdge(i,n),d.addEdge(n,r),d.addEdge(r,c),d.addEdge(c,i),d.addEdge(o,h),d.addEdge(h,g),d.addEdge(g,l),d.addEdge(l,o),d.addEdge(i,o),d.addEdge(n,h),d.addEdge(c,l),d.addEdge(r,g)}for(let e=-2;e<3;e++){const t=e,a=0,s=0,i=d.addVertex({x:-.5+t,y:.5+a,z:.5+s}),n=d.addVertex({x:.5+t,y:.5+a,z:.5+s}),c=d.addVertex({x:-.5+t,y:.5+a,z:-.5+s}),r=d.addVertex({x:.5+t,y:.5+a,z:-.5+s}),o=d.addVertex({x:-.5+t,y:-.5+a,z:.5+s}),h=d.addVertex({x:.5+t,y:-.5+a,z:.5+s}),l=d.addVertex({x:-.5+t,y:-.5+a,z:-.5+s}),g=d.addVertex({x:.5+t,y:-.5+a,z:-.5+s});d.addEdge(i,n),d.addEdge(n,r),d.addEdge(r,c),d.addEdge(c,i),d.addEdge(o,h),d.addEdge(h,g),d.addEdge(g,l),d.addEdge(l,o),d.addEdge(i,o),d.addEdge(n,h),d.addEdge(c,l),d.addEdge(r,g)}},draw=(e,t)=>{t.cameraAngleX=-(e.mouseY-e.height/2)/e.height*Math.PI,t.cameraAngleY=(e.mouseX-e.width/2)/e.width*Math.PI;let d=Math.sin(t.cameraAngleX),a=Math.cos(t.cameraAngleX);const s=new Matrix3x3([[1,0,0],[0,a,-d],[0,d,a]]);d=Math.sin(t.cameraAngleY),a=Math.cos(t.cameraAngleY);const i=new Matrix3x3([[a,0,d],[0,1,0],[-d,0,a]]),n=t.model.map((e=>s.multiply(e))).map((e=>i.multiply(e)));render(e,n)};window.onload=()=>{const e=document.getElementById("stage");e.width=window.innerWidth,e.height=window.innerHeight;const t=e.getContext("2d");if(!t)throw new Error("Failed to acquire canvas context");const d=new State,a=new Context(t,e.width,e.height),s=e.getBoundingClientRect();window.onmousemove=e=>{a.mouseX=e.clientX-s.left,a.mouseY=e.clientY-s.top},setup(0,d);const i=()=>{draw(a,d),window.requestAnimationFrame(i)};i()};
//# sourceMappingURL=index.0115301c.js.map
