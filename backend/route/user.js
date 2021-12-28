import express from 'express'

import {saveData} from '../controller/user.js'

const router = express.Router()

router.post('/',saveData)

export default router
