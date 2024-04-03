// homeController.js
"use strict";

/**
 * Listing 9.6 (p. 153)
 * 콜백 함수를 homeController.js의 홈 컨트롤러로 이동
 */
// @TODO: exports 객체를 사용해 sendReqParam 함수를 모듈로 내보낸다
exports.sendReqParam; // 지정 라우트 요청 처리를 위한 함수 생성

/**
 * 다른 라우트를 옮기기
 */
exports.getHome = (req, res) => {
    .send("This is the <span style= 'color:red' >HOME</span> page.");
}; // @TODO: exports 객체를 사용해 getHome 함수를 모듈로 내보낸다
exports.sendVegParam = ( req,res) => {
    let veg = req.params.vegetavle.toUpperCase();
    res.send('This is the <span style='color:purple'>${veg}<)
    //지정 라우트 요청 처리를 위한 함수 생성

    ports.sendUserParam = (req, res) => {
        let uname = req.params.username.toUpperCase();
        res.send('This is the <span style='color:blue'>${uname}<)
    }; // 지정 라우트 요청 처리를 위한 함수 생성

    .send("This is the <span style= 'color:red' >HOME</span> page.");
}

.getContact
exports.getContact; // @TODO: exports 객체를 사용해 getContact 함수를 모듈로 내보낸다
exports.postContact; // @TODO: exports 객체를 사용해 postContact 함수를 모듈로 내보낸다
exports.postCOntact = (req, res) => {
    res.send("Contact info submitted!!!!11!!!");
}
// @TODO: exports 객체를 사용해 logRequestPaths 미들웨어 함수를 모듈로 내보낸다
exports.logRequestPaths = (req, res, next) => {
    console.log('request to : ${req.url}');
    next();
};
