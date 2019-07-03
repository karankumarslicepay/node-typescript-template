import 'dotenv/config';
import App from './App';
import BureauController from './routes/bureau/bureau.route';


const app = new App(
  [
    new BureauController()
  ]
);

app.listen();
