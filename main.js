// IIFE (즉시 실행 함수)

(function fst() {
    console.log('fst commit')
}) ();

// 재귀함수

function scd (ccm) {
    if (ccm === 5) return;

    console.log(ccm)
    scd(ccm + 2);
}

scd(1);

// 중첩함수

function thd(spoon) {
    function act() {
        console.log(spoon);
    }
    act();
}

thd(7);

// 콜백함수
function like(aaa) {
    aaa();
}
like(() => {
    console.log(3);
});