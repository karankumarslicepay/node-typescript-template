interface Service {
    get(id:String);
    put(id:String,body:Object);
    post(body:Object);
    delete(id:String);
}

export default Service;
