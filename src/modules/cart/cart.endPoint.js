
import {roles} from '../../middleware/auth.js'

export const endPoints = {
    create :[roles.User , roles.Admin],
    update :[roles.User , roles.Admin],
    delete :[roles.User , roles.Admin],
    get :[roles.User],

}