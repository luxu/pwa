console.log('[Application] start push listening');

const messaging = firebase.messaging();

messaging.requestPermission().then(function () {
    console.log('Permission garanted');

    return messaging.getToken().then(function (currentToken) {
        if (currentToken) {
            console.log(currentToken);
            return currentToken;
        } else {
            console.warn('Nenhumid disponível, solicite permissão para gerar um')
        }
    });
});

messaging.getToken()
    .then(function (currentToken) {
        if (currentToken) {
            console.log(currentToken);
            return currentToken;
        } else {
            console.warn('Nenhumid disponível, solicite permissão para gerar um')
        }
    })
    .catch(function (err) {
        console.warn('get token err', err);
    });