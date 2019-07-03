import Bureau from '../../models/bureau.model';

class BureauService {
  private uuid: string;

  constructor() {
    
  }

  getBureau(uuid: string,bureauName: string) {
    return Bureau.findOne({uuid,bureauName}).sort({createdAt:-1})
    .then(bureauData => bureauData)
    .catch(error => error);
  }  
}

export default BureauService;
