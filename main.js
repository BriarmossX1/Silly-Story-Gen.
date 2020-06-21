var storyArea = document.querySelector(".storyArea");
var randomizeStory = document.querySelector(".randStory");
var inputName = document.querySelector("#nameIn");
var names = new Array();

names[0] = "Bob"

function getRandomStory() {
    if (inputName.value !== '') {
        randName = inputName.value;

        for (let i = 0; i < names.length; i++) {
            var test = 0;
            if (names[i] == inputName.value) {
                test += 1;
            }
            if (test == 1) { break; }
            if (names[i] == names[names.length - 1] && test == 0) {
                names.push(inputName.value);
                break;
            }
        }
    } else {
        var randName = names[Math.floor(Math.random() * names.length)];
    }

    var stories = new Array();

    stories[0] = "All " + randName + " could think about was how it would all end. There was still a bit of uncertainty in the equation, but the basics were there for anyone to see. No matter how much " + randName + " tried to see the positive, it wasn't anywhere to be seen. The end was coming and it wasn't going to be pretty."
    stories[1] = "There are different types of secrets. " + randName + " had held onto plenty of them during his life, but this one was different. " + randName + " found himself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did."
    stories[2] = randName + " had spent year and year accumulating the information. He knew it inside out and if there was ever anyone looking for an expert in the field, " + randName + " would be the one to call. The problem was that there was nobody interested in the information besides him and he knew it. Years of information painstakingly memorized and sorted with not a sole giving even an ounce of interest in the topic."
    stories[3] = randName + " put his hand into the hole, sliding his hand down as far as his arm could reach. " + randName + " wiggled his fingers hoping to touch something, but all he felt was air. " + randName + " shifted the weight of his body to try and reach an inch or two more down the hole. His fingers still touched nothing but air."
    stories[4] = "There was something special about this little creature. " + randName + " couldn't quite pinpoint what it was, but he knew with all his heart that it was true. It wasn't a matter of if " + randName + " was going to try and save it, but a matter of how he was going to save it. " + randName + " went back to the car to get a blanket and when he returned the creature was gone."
    stories[5] = "The headphones were on. They had been utilized on purpose. " + randName + " could hear his mom yelling in the background, but couldn't make out exactly what the yelling was about. That was exactly why he had put them on. " + randName + " knew his mom would enter his room at any minute, and " + randName + " could pretend that he hadn't heard any of the previous yelling."
    stories[6] = randName + " was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death. " + randName + " raced down the road ignoring speed limits and weaving between cars. He was only a few minutes away when traffic came to a dead standstill on the road ahead."
    stories[7] = randName + " wore the crown with pride. There was something that made doing anything he didn't really want to do a bit easier when he wore it. " + randName + " really didn't care what those staring through the window were thinking as he vacuumed his apartment."
    stories[8] = "At that moment " + randName + " had a thought that he'd never imagine he'd consider. \"I could just cheat,\" " + randName + " thought, \"and that would solve the problem.\" " + randName + " tried to move on from the thought but it was persistent. It didn't want to go away and, if he was honest with himself, he didn't want it to."
    stories[9] = randName + " had come to the conclusion that you could tell a lot about a person by their ears. The way they stuck out and the size of the earlobes could give you wonderful insights into the person. Of course, " + randName + " couldn't scientifically prove any of this, but that didn't matter to him. Before anything else, " + randName + " would size up the ears of the person he was talking to."
    stories[10] = "It had been his dream for years but " + randName + " had failed to take any action toward making it come true. There had always been a good excuse to delay or prioritize another project. As " + randName + " woke, he realized he was once again at a crossroads. Would it be another excuse or would " + randName + " finally find the courage to pursue his dream? " + randName + " rose and took his first step."

    var randStory = stories[Math.floor(Math.random() * stories.length)];
    var newStory = randStory;
    storyArea.textContent = newStory;
}