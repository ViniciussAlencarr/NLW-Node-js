import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { ensureAdm } from './middlewares/ensureAdm'


const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()

router.use(ensureAdm)
router.post('/users', createUserController.handle)
router.post('/tags', ensureAdm,createTagController.handle)

export { router }