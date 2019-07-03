import * as express from 'express';
import Controller from '../../interfaces/controller.interface';
import BureauService from '../../services/bureau/bureau.service';

class BureauController implements Controller {
  public path = '/bureau';
  public router = express.Router();
  private bureau = new BureauService();
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:uuid/:bureauName`, this.getBureau);
  }

  private getBureau = (req, res) => {
    let { uuid, bureauName } = req.params;
    return this.bureau.getBureau(uuid,bureauName)
    .then(bureauData => {
      return res.status(200).send(bureauData);
    })
    .catch(error => {
      return res.status(500).send(error);
    })
  }
}

export default BureauController;
