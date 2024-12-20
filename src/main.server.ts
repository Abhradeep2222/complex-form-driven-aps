// export default bootstrap;
// import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import express from 'express';
import { enableProdMode } from '@angular/core';
import { join } from 'path';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { createServer } from 'http';
// import { AppServerModule } from '../src/main.server';
import { renderModule } from '@angular/platform-server';
import { bootstrapApplication } from '@angular/platform-browser';


const app = express();
enableProdMode();
const myExpressEngine = () => {
  // Some local implementation
};

// const bootstrap = () => bootstrapApplication(AppComponent, config);
const PORTS = process.env['PORT'] || 4201;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');
// const _PORT = app.listen(4201, () => {
//   console.log(`Listening on port 4201`);
// });
const PORT = app.listen(PORTS, () => {
  console.log(`Listening on port ${PORT}`);
});


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

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export function bootstrapServerApp() {
  return bootstrapApplication(AppComponent);
}

export { AppComponent };
    // function ngExpressEngine(arg0: { bootstrap: typeof AppComponent; }): (path: string, options: object, callback: (e: any, rendered?: string) => void) => void {
    //     throw new Error('Function not implemented.');
    // }
    function _ngExpressEngine(_options: { bootstrap: typeof AppComponent }) {
      return (_filePath: string, options: any, callback: (err: any, html?: string) => void) => {
          const module = options.bootstrap;
          renderModule(module, {
              document: options.document,
              url: options.req.url,
          }).then(html => {
              callback(null, html);
          }).catch(err => {
              callback(err);
          });
      };
      
  
  }

