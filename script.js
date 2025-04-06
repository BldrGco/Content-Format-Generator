const creativePrompts = {
    hook: [
        "Start with a bold question that stops them in their tracks!",
        "Drop a surprising stat to hook their curiosity.",
        "Paint a vivid scene they can’t unsee."
    ],
    story: [
        "Share a raw, messy moment that feels human.",
        "Take them back to a time you failed—then flipped it.",
        "Zoom in on a tiny detail that changes everything."
    ],
    lesson: [
        "Boil it down to one punchy truth they’ll remember.",
        "Connect it to something they already know.",
        "Flip a common belief on its head."
    ],
    action: [
        "Give them a 5-minute win they can try today.",
        "Make it so simple they can’t say no.",
        "Add a quirky twist to keep it fun."
    ],
    problem: [
        "Call out a pain they’ve felt but never named.",
        "Zoom in on the worst-case scenario.",
        "Make it relatable with a ‘you’ve been there’ vibe."
    ],
    agitation: [
        "Twist the knife—show what’s at stake.",
        "Pile on the frustration they’re dying to escape.",
        "Hint at the chaos if they don’t act."
    ],
    solution: [
        "Offer a fix that feels like a lightbulb moment.",
        "Break it into a dead-simple step.",
        "Tease a reward they’ll crave."
    ],
    question: [
        "Ask something they’ve secretly wondered.",
        "Pose a riddle that begs for an answer.",
        "Challenge a belief they take for granted."
    ],
    insight: [
        "Drop a truth that shifts their perspective.",
        "Reveal a hidden pattern they’ve missed.",
        "Tie it to a universal ‘aha’ moment."
    ],
    takeaway: [
        "Sum it up in a sticky one-liner.",
        "Leave them with a spark of hope.",
        "Make it a mantra they’ll repeat."
    ],
    listItem: [
        "Kick it off with a quick win.",
        "Throw in an unexpected hack.",
        "End with a bold, game-changing move."
    ],
    myth: [
        "Pick a belief everyone swears by.",
        "Target a cliché that’s overdue for a takedown.",
        "Start with ‘They say…’ and debunk it."
    ],
    fact: [
        "Hit them with a truth that feels fresh.",
        "Back it up with a quick, real example.",
        "Make it counterintuitive and crisp."
    ]
};

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
