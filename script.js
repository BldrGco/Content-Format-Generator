const creativePrompts = {
    hook: [
        "Smack them with a wild ‘what if’ they can’t shake!",
        "Tease a secret they’ll beg to know.",
        // ... all 100 from my earlier list
    ],
    story: [
        "Tell the day you crashed and burned.",
        "Spill a moment you’d rather forget.",
        // ... all 100 from earlier
    ],
    lesson: [
        "Strip it to a truth they can’t dodge.",
        "Turn their ‘duh’ into a ‘whoa.’",
        // ... all 100 from earlier
    ],
    action: [
        "Give them a 5-minute win they can try.",
        "Make it so simple they can’t say no.",
        // ... all 100 from earlier
    ],
    problem: [
        "Name the ache they can’t shake off.",
        "Point to a rut they’re stuck in.",
        // ... all 100 from above
    ],
    agitation: [
        "Twist the knife they’re bleeding from.",
        "Pile on the chaos they can’t stand.",
        // ... all 100 from above
    ],
    solution: [
        "Drop a fix that flips the script.",
        "Hand them a key they can turn.",
        // ... all 100 from above
    ],
    question: [
        "What’s the one thing they can’t crack?",
        "Why do they keep tripping here?",
        // ... all 100 from above
    ],
    insight: [
        "Drop a truth that twists their view.",
        "Reveal a thread they’ve never pulled.",
        // ... all 100 from above
    ],
    takeaway: [
        "Sum it up in a line that sticks.",
        "Leave them with a spark that burns.",
        // ... all 100 from above
    ],
    listItem: [
        "Kick it off with a quick win.",
        "Throw in an unexpected hack.",
        // ... all 100 from earlier
    ],
    myth: [
        "Pick a belief everyone swears by.",
        "Target a cliché that’s overdue.",
        // ... all 100 from earlier
    ],
    fact: [
        "Hit them with a truth that’s fresh.",
        "Back it up with a quick hit.",
        // ... all 100 from earlier
    ]
};

// Leave your getRandomPrompt and generateStructure functions as they are below this

function getRandomPrompt(type) {
    const prompts = creativePrompts[type] || [];
    return prompts[Math.floor(Math.random() * prompts.length)] || "Get creative here!";
}

function generateStructure() {
    const description = document.getElementById('description').value.trim();
    const format = document.getElementById('format').value;
    let output = '';

    if (!description) {
        output = 'Please enter a description!';
    } else {
        switch (format) {
            case 'hook-story-lesson-action':
                output = `- Hook: Grab them with a bold opener\n  *${getRandomPrompt('hook')}*\n` +
                         `- Story: Share your journey\n  *${getRandomPrompt('story')}*\n` +
                         `- Lesson: Reveal the core truth\n  *${getRandomPrompt('lesson')}*\n` +
                         `- Actionable You: Give one clear step\n  *${getRandomPrompt('action')}*`;
                break;
            case 'problem-agitation-solution':
                output = `- Problem: Name the struggle\n  *${getRandomPrompt('problem')}*\n` +
                         `- Agitation: Turn up the heat\n  *${getRandomPrompt('agitation')}*\n` +
                         `- Solution: Deliver the fix\n  *${getRandomPrompt('solution')}*`;
                break;
            case 'question-insight-takeaway':
                output = `- Question: Spark their curiosity\n  *${getRandomPrompt('question')}*\n` +
                         `- Insight: Offer a fresh angle\n  *${getRandomPrompt('insight')}*\n` +
                         `- Takeaway: Leave them with a gem\n  *${getRandomPrompt('takeaway')}*`;
                break;
            case 'listicle':
                output = `- Title: Craft a catchy list headline\n  *${getRandomPrompt('listItem')}*\n` +
                         `- Item 1: Lead with a strong tip\n  *${getRandomPrompt('listItem')}*\n` +
                         `- Item 2: Add a practical idea\n  *${getRandomPrompt('listItem')}*\n` +
                         `- Item 3: Mix in a bold move\n  *${getRandomPrompt('listItem')}*\n` +
                         `- Item 4: Share a hidden gem\n  *${getRandomPrompt('listItem')}*\n` +
                         `- Item 5: End with a bang\n  *${getRandomPrompt('listItem')}*`;
                break;
            case 'myth-fact':
                output = `- Myth: Bust a common lie\n  *${getRandomPrompt('myth')}*\n` +
                         `- Fact: Drop the real deal\n  *${getRandomPrompt('fact')}*`;
                break;
            default:
                output = 'Select a valid format!';
        }
    }

    document.getElementById('output').textContent = output;
}
