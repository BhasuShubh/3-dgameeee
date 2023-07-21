AFRAME.registerComponent("bullets", {
    init : function(){
        this.showBullet()
    },
    showBullet : function(){
        window.addEventListener('keydown', e=>{
            console.log(e)
            if(e.key == ' '){
                var bullet = document.createElement('a-entity')
                bullet.setAttribute('geometry', {primitive : 'sphere', radius : '.1'})
                bullet.setAttribute('material', 'color :black')
                //console.log('hellllo')

                var cam = document.querySelector('#camera')
                var pos = cam.getAttribute('position')
                bullet.setAttribute('position', {x : pos.x, y: pos.y, z :pos.z})

                var camera = document.querySelector('#camera').object3D
                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction)

                bullet.setAttribute('velocity', direction.multiplyScalar(-50))
                var scene =document.querySelector('#scene')
                
                scene.appendChild(bullet)
            }
        })
    },
})