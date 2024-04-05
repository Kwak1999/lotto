function drawNumbers() {
    const lottoNumbers = document.getElementById('lottoNumbers');
    lottoNumbers.innerHTML = ''; // 이전에 추첨된 번호를 지움

    const numbers = [];

    // 1부터 45까지의 무작위 번호 생성
    while (numbers.length < 6) {
        const randomNum = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }

    // 번호를 오름차순으로 정렬
    numbers.sort((a, b) => a - b);

    // 생성된 번호를 HTML에 추가
    numbers.forEach(number => {
        const div = document.createElement('div');
        div.textContent = number;
        lottoNumbers.appendChild(div);
    });
}
