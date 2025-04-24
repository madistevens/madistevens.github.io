let input, button, dropdown, output, fullscreenButton, clearButton, resetButton;

function setup() {
    noCanvas();

    createElement('h1', 'Poetry Generator');
    createP('Enter a word or phrase to inspire your poem:');
    input = createInput();
    input.class('text-input');

    createP('Select a poetry style:');
    dropdown = createSelect();
    dropdown.option('Haiku');
    dropdown.option('Free Verse');
    dropdown.option('Rhyming Couplets');
    dropdown.class('dropdown-menu');

    button = createButton('Generate Poem');
    button.class('generate-button');
    button.mousePressed(generatePoem);

    fullscreenButton = createButton('Enter Fullscreen');
    fullscreenButton.class('fullscreen-button');
    fullscreenButton.mousePressed(toggleFullscreen);

    clearButton = createButton('Clear Poem');
    clearButton.class('clear-button');
    clearButton.mousePressed(clearPoem);

    resetButton = createButton('Reset Input');
    resetButton.class('reset-button');
    resetButton.mousePressed(resetInput);

    createP('Your poem will appear below:');
    output = createDiv();
    output.class('poem-output');
}

function generatePoem() {
    const userInput = input.value();
    const style = dropdown.value();

    if (!userInput) {
        output.html('Please enter a word or phrase to inspire your poem.');
        return;
    }

    let poem = '';
    if (style === 'Haiku') {
        poem = `${userInput} in springtime<br>
                Blossoms bloom and rivers flow<br>
                Nature sings its song.`;
    } else if (style === 'Free Verse') {
        poem = `The ${userInput} drifts<br>
                Through the endless sky,<br>
                Whispering secrets<br>
                To the stars.`;
    } else if (style === 'Rhyming Couplets') {
        poem = `The ${userInput} shines so bright,<br>
                Guiding us through the night.`;
    }

    output.html(poem);
}

function toggleFullscreen() {
    let fs = fullscreen();
    fullscreen(!fs);
    fullscreenButton.html(fs ? 'Enter Fullscreen' : 'Exit Fullscreen');
}

function clearPoem() {
    output.html('');
}

function resetInput() {
    input.value('');
}

function keyPressed() {
    if (keyCode === ESCAPE) {
        fullscreen(false);
        fullscreenButton.html('Enter Fullscreen');
    }
}