import { Response, Request, NextFunction } from "express";

function ensureAdm(req: Request, res: Response, next: NextFunction) {
    const adm = true

    if (adm) {
        return next()
    }

    return res.status(401).json({
        error: 'Unauthorized'
    })
}

export { ensureAdm }