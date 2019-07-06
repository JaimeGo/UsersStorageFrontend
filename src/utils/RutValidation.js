



const rutValidator = (rut)=>{
    console.log(rut);

    let value = rut.replace('.','');

    value = value.replace('-','');

    let body = value.slice(0,-1);
    let dv = value.slice(-1).toUpperCase();

    if(body.length < 7) {return false;}

    let sum = 0;
    let multiple = 2;

    for(let i=1;i<=body.length;i++) {

        let index = multiple * value.charAt(body.length - i);

        sum = sum + index;

        if(multiple < 7) { multiple = multiple + 1; } else { multiple = 2; }

    }

    let dvExpected = 11 - (sum % 11);

    dv = (dv === 'K')?10:dv;
    dv = (dv === 0)?11:dv;

    return dvExpected.toString(10) === dv;
    
    
    
};

export default rutValidator;

