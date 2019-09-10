import { Router } from 'express';

interface Controller {
  path: string;
  router: Router;
  childRouter: Router
}

export default Controller;
