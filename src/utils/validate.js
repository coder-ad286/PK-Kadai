export const validateFields = (data) => {
    let error = false;
    data.forEach(element => {
        if(!element.trim() || element.trim()==="null" ){
            error= true;
        }
    });
    return error;
}