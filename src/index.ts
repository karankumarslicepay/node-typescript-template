import 'dotenv/config';
import App from './App';
import BureauController from './routes/Demo/bureau.route';


const app = new App(
  [
    new BureauController()
  ]
);

app.listen();
