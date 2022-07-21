let garden = 'gravel gravel slug moss gravel'


function clean(g){
    let gg = garden.filter((item) => item == "gravel")

    return gg

}

console.log(clean(g));