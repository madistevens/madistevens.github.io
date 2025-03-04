function setup() {
    noCanvas();

    // remixing https://p5js.org/reference/p5/createDiv/
    let headerDiv = createDiv();
    headerDiv.class('header');
    let header = createElement('h1', 'Assignment 01 - Penguins Making Salmon Miso Soup');
    header.parent(headerDiv);

    let recipeDiv = createDiv();
    recipeDiv.class('recipe-nav');
    let recipeLink = createA('https://honest-food.net/salmon-miso-soup-recipe/', 'Salmon Miso Soup Recipe');
    recipeLink.parent(recipeDiv);

    // remixing https://p5js.org/reference/p5/createP/
    let paragraph = createP('Ingredients: 2 quarts salmon stock or dashi, 1 pound soba noodles, 1/2 pound cooked salmon scraps, or diced salmon, 1/2 cup red or white miso, 1/4 cup sliced green onions');
    let paragraph1 = createP('Instructions: Get your salmon stock or dashi warm in a pot. Cook your soba noodles according to the instructions on the package. Drain and set some in each person\'s bowl. Add some salmon to each bowl, along with some green onions. Mix the miso with the stock -- you can double the amount of miso if you\'d like -- and pour over the noodles. Serve immediately.');

    //remixing https://p5js.org/reference/p5/createVideo/
    let video = createVideo('penguin.mp4');
    video.class('centered-video'); 
    video.showControls();
    // end of remixing createVideo

    let container = createDiv();
    container.class('text-container'); 
    container.child(video);

    let videoDiv = createDiv();
    videoDiv.class('video-nav');
    let videoLink = createA('https://www.youtube.com/watch?v=D1_yfWdkQVo', 'Cooking Animated Short Film - Poly Table');
    videoLink.parent(videoDiv);
    // end of remixing createDiv

    let paragraph2 = createP('Penguins making salmon miso soup... what more could you want? I found this video on Youtube which I have link above. The creator has the channel Poly Table. I found a lot of their videos super cute and found lots of penguin content, which I quite enjoyed. Check out their channel if you\'re looking for more :)');
    // end of remixing createP

    // remixing https://p5js.org/reference/p5.Element/child/
    container.child(videoDiv);
    container.child(paragraph2);
    // end of remixing .child()
}