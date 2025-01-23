const express=require('express')
const router=express.Router()

const {createRoadMap,getRoadMap,getRoadMapById,getRoadMapByName,updateRoadMap,deleteRoadMap}=require('../controllers/RoadMap.controller')

router.post('/create',createRoadMap)
router.get('/',getRoadMap)
router.get('/:id',getRoadMapById)
router.get('/:name',getRoadMapByName)
router.put('/:id',updateRoadMap)
router.delete('/:id',deleteRoadMap)
module.exports=router   
