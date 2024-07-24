document.addEventListener('DOMContentLoaded', () => {
    const startGameBtn = document.getElementById('startGameBtn');
    const submitGuessBtn = document.getElementById('submitGuessBtn');
    const playAgainBtn = document.getElementById('playAgainBtn');
    const hintBtn = document.getElementById('hintBtn');

    const homepage = document.getElementById('homepage');
    const gamepage = document.getElementById('gamepage');
    const resultpage = document.getElementById('resultpage');

    const timeFrame = document.getElementById('timeFrame');
    const country = document.getElementById('country');
    const category = document.getElementById('category');
    const gender = document.getElementById('gender');
    const fame = document.getElementById('fame');
    const hint = document.getElementById('hint');

    const guessInput = document.getElementById('guessInput');
    const resultMessage = document.getElementById('resultMessage');
    const figureInfo = document.getElementById('figureInfo');
    const scoreDisplay = document.getElementById('score');

    const historicalFigures = [
        {
            name: 'Albert Einstein',
            timeFrame: '1879-1955',
            country: 'Germany (later USA)',
            category: 'Science',
            gender: 'Male',
            fame: 'Famous',
            info: 'Albert Einstein was a theoretical physicist who developed the theory of relativity.',
            hint: 'He developed the theory of relativity.'
        },
        {
            name: 'Cleopatra',
            timeFrame: '69-30 BC',
            country: 'Egypt',
            category: 'Politics',
            gender: 'Female',
            fame: 'Famous',
            info: 'Cleopatra was the last active ruler of the Ptolemaic Kingdom of Egypt.',
            hint: 'She was the last active ruler of the Ptolemaic Kingdom of Egypt.'
        },
        {
            name: 'William Shakespeare',
            timeFrame: '1564-1616',
            country: 'England',
            category: 'Literature',
            gender: 'Male',
            fame: 'Famous',
            info: 'William Shakespeare was an English playwright, poet, and actor, widely regarded as the greatest writer in the English language.',
            hint: 'He is widely regarded as the greatest writer in the English language.'
        },
        {
            name: 'Joan of Arc',
            timeFrame: '1412-1431',
            country: 'France',
            category: 'Military',
            gender: 'Female',
            fame: 'Famous',
            info: 'Joan of Arc was a French heroine and military leader during the Hundred Years\' War.',
            hint: 'She led the French army to victory during the Hundred Years\' War.'
        },
        {
            name: 'George Washington',
            timeFrame: '1732-1799',
            country: 'USA',
            category: 'Politics',
            gender: 'Male',
            fame: 'Famous',
            info: 'George Washington was the first President of the United States.',
            hint: 'He was the first President of the United States.'
        },
        {
            name: 'Marie Curie',
            timeFrame: '1867-1934',
            country: 'Poland (later France)',
            category: 'Science',
            gender: 'Female',
            fame: 'Famous',
            info: 'Marie Curie was a physicist and chemist who conducted pioneering research on radioactivity.',
            hint: 'She conducted pioneering research on radioactivity.'
        },
        {
            name: 'Genghis Khan',
            timeFrame: 'c. 1162-1227',
            country: 'Mongol Empire',
            category: 'Military',
            gender: 'Male',
            fame: 'Famous',
            info: 'Genghis Khan was the founder and first Great Khan of the Mongol Empire.',
            hint: 'He was the founder of the Mongol Empire.'
        },
        {
            name: 'Mozart',
            timeFrame: '1756-1791',
            country: 'Austria',
            category: 'Music',
            gender: 'Male',
            fame: 'Famous',
            info: 'Wolfgang Amadeus Mozart was a prolific and influential composer of the classical era.',
            hint: 'He was a prolific composer of the classical era.'
        },
        {
            name: 'Florence Nightingale',
            timeFrame: '1820-1910',
            country: 'England',
            category: 'Healthcare',
            gender: 'Female',
            fame: 'Famous',
            info: 'Florence Nightingale was the founder of modern nursing.',
            hint: 'She is known as the founder of modern nursing.'
        },
        {
            name: 'Leonardo da Vinci',
            timeFrame: '1452-1519',
            country: 'Italy',
            category: 'Art',
            gender: 'Male',
            fame: 'Famous',
            info: 'Leonardo da Vinci was a polymath of the Renaissance who is widely considered one of the most diversely talented individuals ever to have lived.',
            hint: 'He painted the Mona Lisa.'
        },
        {
            name: 'Adolf Hitler',
            timeFrame: '1889-1945',
            country: 'Germany',
            category: 'Politics',
            gender: 'Male',
            fame: 'Infamous',
            info: 'Adolf Hitler was a German politician and leader of the Nazi Party, responsible for initiating World War II and the Holocaust.',
            hint: 'He was the leader of the Nazi Party.'
        },
        {
            name: 'Isaac Newton',
            timeFrame: '1643-1727',
            country: 'England',
            category: 'Science',
            gender: 'Male',
            fame: 'Famous',
            info: 'Sir Isaac Newton was an English mathematician, physicist, astronomer, and author who is widely recognized as one of the most influential scientists of all time.',
            hint: 'He formulated the laws of motion and universal gravitation.'
        },
        {
            name: 'Queen Victoria',
            timeFrame: '1819-1901',
            country: 'United Kingdom',
            category: 'Politics',
            gender: 'Female',
            fame: 'Famous',
            info: 'Queen Victoria was the Queen of the United Kingdom of Great Britain and Ireland from 1837 until her death in 1901.',
            hint: 'She was the queen of the United Kingdom during the 19th century.'
        },
        {
            name: 'Mahatma Gandhi',
            timeFrame: '1869-1948',
            country: 'India',
            category: 'Politics',
            gender: 'Male',
            fame: 'Famous',
            info: 'Mahatma Gandhi was an Indian lawyer, anti-colonial nationalist, and political ethicist who employed nonviolent resistance to lead the successful campaign for India\'s independence from British rule.',
            hint: 'He led India to independence through nonviolent resistance.'
        },
        {
            name: 'Julius Caesar',
            timeFrame: '100-44 BC',
            country: 'Roman Republic',
            category: 'Politics',
            gender: 'Male',
            fame: 'Famous',
            info: 'Julius Caesar was a Roman general and statesman who played a critical role in the events that led to the demise of the Roman Republic and the rise of the Roman Empire.',
            hint: 'He was a Roman general and statesman.'
        },
        {
            name: 'Mother Teresa',
            timeFrame: '1910-1997',
            country: 'Albania (later India)',
            category: 'Charity',
            gender: 'Female',
            fame: 'Famous',
            info: 'Mother Teresa was a Roman Catholic nun and missionary who founded the Missionaries of Charity.',
            hint: 'She founded the Missionaries of Charity.'
        },
        {
            name: 'Alexander the Great',
            timeFrame: '356-323 BC',
            country: 'Macedonia',
            category: 'Military',
            gender: 'Male',
            fame: 'Famous',
            info: 'Alexander the Great was a king of Macedonia who conquered an empire that stretched from the Balkans to modern-day Pakistan.',
            hint: 'He created one of the largest empires in history.'
        },
        {
            name: 'Sigmund Freud',
            timeFrame: '1856-1939',
            country: 'Austria',
            category: 'Science',
            gender: 'Male',
            fame: 'Famous',
            info: 'Sigmund Freud was an Austrian neurologist and the founder of psychoanalysis.',
            hint: 'He is known as the father of psychoanalysis.'
        },
        {
            name: 'Napoleon Bonaparte',
            timeFrame: '1769-1821',
            country: 'France',
            category: 'Military',
            gender: 'Male',
            fame: 'Famous',
            info: 'Napoleon Bonaparte was a French military leader and emperor who conquered much of Europe in the early 19th century.',
            hint: 'He was a French military leader and emperor.'
        },
        {
            name: 'Harriet Tubman',
            timeFrame: '1822-1913',
            country: 'USA',
            category: 'Abolitionist',
            gender: 'Female',
            fame: 'Famous',
            info: 'Harriet Tubman was an American abolitionist and political activist. Born into slavery, she escaped and subsequently made some 13 missions to rescue approximately 70 enslaved people.',
            hint: 'She was an American abolitionist who escaped from slavery and helped others do the same.'
        }
    ];

    let currentFigure = {};
    let score = 0;

    startGameBtn.addEventListener('click', startGame);
    submitGuessBtn.addEventListener('click', submitGuess);
    playAgainBtn.addEventListener('click', startGame);
    hintBtn.addEventListener('click', showHint);

    function startGame() {
        homepage.classList.add('hidden');
        resultpage.classList.add('hidden');
        gamepage.classList.remove('hidden');
        gamepage.classList.add('visible');

        currentFigure = historicalFigures[Math.floor(Math.random() * historicalFigures.length)];
        timeFrame.textContent = `Time Frame: ${currentFigure.timeFrame}`;
        country.textContent = `Country: ${currentFigure.country}`;
        category.textContent = `Category: ${currentFigure.category}`;
        gender.textContent = `Gender: ${currentFigure.gender}`;
        fame.textContent = `Famous/Infamous: ${currentFigure.fame}`;
        hint.textContent = '';
        guessInput.value = '';
    }

    function submitGuess() {
        const userGuess = guessInput.value.trim().toLowerCase();
        if (userGuess === currentFigure.name.toLowerCase()) {
            resultMessage.textContent = 'Correct!';
            score++;
        } else {
            resultMessage.textContent = 'Incorrect!';
        }
        scoreDisplay.textContent = score;
        figureInfo.textContent = `The correct answer was ${currentFigure.name}. ${currentFigure.info}`;
        gamepage.classList.add('hidden');
        gamepage.classList.remove('visible');
        resultpage.classList.remove('hidden');
        resultpage.classList.add('visible');
    }

    function showHint() {
        hint.textContent = `Hint: ${currentFigure.hint}`;
    }
});
