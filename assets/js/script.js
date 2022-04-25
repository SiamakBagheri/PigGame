var scores, roundScores, activePlayer;
init();
document.querySelector('.btn--roll').addEventListener('click', function() {
    // اعداد تصادفی بین 1 تا 6
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
    // اینجا از نان در میاریم تا نمایش داده شه
    diceDOM.style.display = 'block';
    // اینجا متغیر تاس رو بجایی شماره های عکس میزاریم
    diceDOM.src = './assets/images/dice-' + dice + '.png';
    // اینجا میگیم اگه یک نبود
    if (dice !== 1) {
        // بیا اضافه کن به امتیاز هر نوبت
        roundScores += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScores;
    } else {
        // امتیاز نوبت رو صفر کن و بازیکن رو تغییر بده
        nextPlayer();
    }
});
document.querySelector('.btn--hold').addEventListener('click', function() {
    scores[activePlayer] += roundScores;
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 10) {
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('#name--' + activePlayer).textContent = 'تبریک، شما برنده شدید';
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');
        document.querySelector('.player--' + activePlayer).classList.add('player--winner');
    } else {
        // امتیاز نوبت رو صفر کن و بازیکن رو تغییر بده
        nextPlayer();
    };
});

function nextPlayer() {
    // اگر یک اومد بیا امتیاز هر نوبت رو صفر کن
    roundScores = 0;
    // و بازیکن رو تغییر بده
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // بعد این صف کردن هارو به کاربر نمایش بده
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    // اینجا نان میکنیم 1 اومد و بازیکن این نوبت رو باخت
    document.querySelector('.dice').style.display = 'none';
};
document.querySelector('.btn--new').addEventListener('click', init);

function init() {
    // امتیاز هر بازیکن
    scores = [0, 0];
    //امتیاز هر نوبت
    roundScores = 0;
    // صفر بازیکن اول و یک بازیکن دوم
    activePlayer = 0;
    // اینجا نان میکنیم در شروع کار نمایش داده نشود
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
};