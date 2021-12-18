import auth0 from "auth0-js"
import router from "../router"

const webAuth = new auth0.WebAuth({
    domain: 'dev-mei12s29.us.auth0.com',
    clientID: '6yREtuCzC7IYyoQklga51NYdeClTJ0R9',
    redirectUri: 'https://vue-test-demo-intern.netlify.app/details',
    responseType: 'token id_token',
    scope: 'openid profile'
})

let token = {}

const handleAuth = () => {
    webAuth.parseHash({ hash: window.location.hash }, (err, auth) => {
        if (auth && auth.accessToken && auth.idToken) {
            token.accessToken = auth.accessToken;
            token.idToken = auth.idToken;
            token.expiry = new Date().getTime() + auth.expiresIn * 1000;
            router.push("/details")
        }
        else {
            console.log(err)
        }
    })
}

const isLoggedIn = () => {
    return token.accessToken && new Date().getTime() < token.expiry;
};

const login = () => {
    webAuth.authorize();
};

const logUserOut = () => {
    token = {};
    webAuth.logout();
};

export { handleAuth, login, isLoggedIn, logUserOut }
