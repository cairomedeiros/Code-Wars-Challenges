let x = 'cairo medeiros oi'

function subs(x){

    const change = x.replace(/\s+/g, '');
    //const change = x.replace(/ /g, '');
    //const change = x.split(' ').join('');
    console.log(change);
    
}

subs(x);