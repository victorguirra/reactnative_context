export default function signIn(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'hdsiadioadsfiaosmdsaofhiaspdfdinosdpsdsampdsamoasoafdpfaiopnds',
                user:{
                    name: 'Victor',
                    email: 'victor.hugo.guirra@gmail.com'
                }
            })
        }, 2000)
    });
}