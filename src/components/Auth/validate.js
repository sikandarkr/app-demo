function validate (str,callback){
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var bool = re.test(str);
    callback(bool);
}

export default validate;