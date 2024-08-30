function generateStory() {
    const topic = document.getElementById('topic').value;
    const storyContainer = document.getElementById('story');

    if (topic.trim() === "") {
        storyContainer.innerHTML = "<p>Please enter a topic.</p>";
        return;
    }

    // Simple example of a story generator
    const storyPart1 = `Once upon a time in the world of ${topic}, there was a brave hero who set out on an epic journey. They encountered many challenges along the way, but their courage never faltered.`;
    const storyPart2 = `As the days went by, the hero's legend grew, inspiring others in the land of ${topic} to rise and face their own fears. And so, the hero's story became a beacon of hope for generations to come.`;

    storyContainer.innerHTML = `<p>${storyPart1}</p><p>${storyPart2}</p>`;
}
