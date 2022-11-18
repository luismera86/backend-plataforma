import { Request, Response } from "express"

// export const getUsers = (req: Request, res: Response) => { 
//     try {
        
//     } catch (error) {
        
//     }
// }

export const getUsers = (req: Request, res: Response) => { 
    try {
        res.status(200).json({ msg: 'holdfsa'})
    } catch (error) {
        
    }
}


 

