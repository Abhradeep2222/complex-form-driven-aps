

// export default bootstrap;
// 
// 
import { bootstrapApplication } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
// import { ngExpressEngine } from '@nguniversal/express-engine';
import express from 'express';
import { join } from 'path';

// import { AppServerModule } from '../src/main.server';
import { renderModule } from '@angular/platform-server';

const app = express();
const bootstrap = () => bootstrapApplication(AppComponent, config);
const PORT = process.env['PORT'] || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

app.engine('html', ngExpressEngine({
  bootstrap: AppComponent,
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

app.get('*', (req: any, res: { render: (arg0: string, arg1: { req: any; }) => void; }) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});

export { AppComponent };
    function ngExpressEngine(arg0: { bootstrap: typeof AppComponent; }): (path: string, options: object, callback: (e: any, rendered?: string) => void) => void {
        throw new Error('Function not implemented.');
    }

