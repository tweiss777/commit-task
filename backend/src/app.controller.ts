import { Controller,  Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {

    fallBack(@Res() res: Response) {
        res.sendFile('index.html', {
            root: join(__dirname, '../../frontend/dist'),
        });
    }
}
