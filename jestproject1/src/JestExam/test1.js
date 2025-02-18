
function getUser(id) {

    // 만약 id가 음수가 들어오거나 1d값이 100을 넘길 경우에는
    // '잘못된 아이디입니다' 라닌 메세지를 띄우는 예외를 작성해보세요.
    //  -> 커스텀 예외는 하면 좋고 아니면 말고

    if(id < 0 || id > 100) {
        throw new Error('잘못된 아이디입니다');
    }

    return {
        id,
        email: `user${id}@gunchim.com`
    };
}

// 위의 함수는 컴포넌트가 아닌 모듈함수임을 선언
module.exports = { getUser };