const creativePrompts = {
    hook: [
        { text: "Smack them with a wild ‘what if’ they can’t shake!", tags: ["curiosity", "disruption"] },
        { text: "Tease a secret they’ll beg to know.", tags: ["mystery", "intrigue"] },
        { text: "Hit them with a stat that stops their scroll.", tags: ["data", "impact"] },
        { text: "Call out their biggest fear, no filter.", tags: ["emotion", "bold"] },
        { text: "Shatter their status quo with an inconvenient truth bomb.", tags: ["change", "truth"] }
    ],
    story: [
        { text: "Tell the day you crashed and burned.", tags: ["struggle", "resilience"] },
        { text: "Spill a moment you’d rather forget.", tags: ["regret", "growth"] },
        { text: "Share the fight you didn’t win.", tags: ["effort", "loss"] },
        { text: "Relive the time you bet it all.", tags: ["risk", " stakes"] },
        { text: "Paint the scene where you lost it all and started over.", tags: ["setback", "renewal"] }
    ],
    lesson: [
        { text: "Strip it to a truth they can’t dodge.", tags: ["clarity", "truth"] },
        { text: "Turn their ‘duh’ into a ‘whoa.’", tags: ["insight", "surprise"] },
        { text: "Drop a gem that rewires how they think.", tags: ["wisdom", "shift"] },
        { text: "Show them the lie they’ve been living too long.", tags: ["deception", "awareness"] },
        { text: "Cut through the noise with a single sharp insight.", tags: ["focus", "revelation"] }
    ],
    action: [
        { text: "Give them a 5-minute win they can try.", tags: ["quick", "success"] },
        { text: "Point to a switch they can flip now.", tags: ["change", "immediate"] },
        { text: "Drop a tweak they can test this week.", tags: ["experiment", "progress"] },
        { text: "Show them one move to flip the script.", tags: ["strategy", "turnaround"] },
        { text: "Tell them to ditch one tool today.", tags: ["simplify", "action"] }
    ],
    problem: [
        { text: "Name the ache they can’t shake off.", tags: ["struggle", "emotion"] },
        { text: "Point to a rut they’re stuck in.", tags: ["stagnation", "trap"] },
        { text: "Call out a snag they’ve hit hard.", tags: ["obstacle", "impact"] },
        { text: "Reveal the mess they’re dodging.", tags: ["chaos", "avoidance"] },
        { text: "Highlight a fight they’re losing.", tags: ["effort", "loss"] }
    ],
    agitation: [
        { text: "Twist the knife they’re bleeding from.", tags: ["pain", "intensity"] },
        { text: "Pile on the chaos they can’t stand.", tags: ["chaos", "pressure"] },
        { text: "Show the hell they’re headed for.", tags: ["fear", "future"] },
        { text: "Rub salt in their open wound.", tags: ["pain", "aggravation"] },
        { text: "Crank up the heat they feel.", tags: ["stress", "urgency"] }
    ],
    solution: [
        { text: "Drop a fix that flips the script.", tags: ["turnaround", "solution"] },
        { text: "Hand them a key they can turn.", tags: ["tool", "progress"] },
        { text: "Give a step that’s stupid simple.", tags: ["simplify", "action"] },
        { text: "Reveal a hack they’ll hug tight.", tags: ["trick", "relief"] },
        { text: "Show a path that’s pure gold.", tags: ["success", "direction"] }
    ],
    question: [
        { text: "What’s the one thing they can’t crack?", tags: ["challenge", "mystery"] },
        { text: "Why do they keep tripping here?", tags: ["struggle", "curiosity"] },
        { text: "Ever wonder what’s holding them back?", tags: ["awareness", "reflection"] },
        { text: "How long till they break this?", tags: ["progress", "urgency"] },
        { text: "What if they flipped it now?", tags: ["change", "possibility"] }
    ],
    insight: [
        { text: "Drop a truth that twists their view.", tags: ["truth", "shift"] },
        { text: "Reveal a thread they’ve never pulled.", tags: ["discovery", "depth"] },
        { text: "Show a spark that shifts it all.", tags: ["change", "inspiration"] },
        { text: "Hand them a lens that lights up.", tags: ["clarity", "perspective"] },
        { text: "Cut a gem that cuts through.", tags: ["wisdom", "focus"] }
    ],
    takeaway: [
        { text: "Sum it up in a line that sticks.", tags: ["clarity", "impact"] },
        { text: "Leave them with a spark that burns.", tags: ["inspiration", "energy"] },
        { text: "Drop a gem they’ll carry home.", tags: ["wisdom", "value"] },
        { text: "Hand them a truth that haunts.", tags: ["truth", "emotion"] },
        { text: "Cut a hook that hooks deep.", tags: ["connection", "memory"] }
    ],
    listItem: [
        { text: "Kick it off with a quick win.", tags: ["success", "quick"] },
        { text: "Throw in an unexpected hack.", tags: ["trick", "surprise"] },
        { text: "Add a twist they won’t see.", tags: ["change", "intrigue"] },
        { text: "Drop a tip that’s pure gold.", tags: ["value", "success"] },
        { text: "Mix in a truth that stings.", tags: ["truth", "impact"] }
    ],
    myth: [
        { text: "Pick a belief everyone swears by.", tags: ["deception", "common"] },
        { text: "Target a cliché that’s overdue.", tags: ["stagnation", "challenge"] },
        { text: "Call out a tale they’ve bought.", tags: ["falsehood", "awareness"] },
        { text: "Smash a rule they cling to.", tags: ["change", "resistance"] },
        { text: "Expose a lie they’ve lived.", tags: ["truth", "revelation"] }
    ],
    fact: [
        { text: "Hit them with a truth that’s fresh.", tags: ["truth", "novelty"] },
        { text: "Back it up with a quick hit.", tags: ["data", "speed"] },
        { text: "Drop a stat that slaps hard.", tags: ["impact", "evidence"] },
        { text: "Reveal a find they can’t deny.", tags: ["discovery", "certainty"] },
        { text: "Show a proof that pops off.", tags: ["clarity", "energy"] }
    ],
    you: [
        { text: "You’re tougher than you know—ready to prove it?", tags: ["strength", "encouragement"] },
        { text: "You’ve beaten worse—why stop now?", tags: ["resilience", "past"] },
        { text: "You hold the key—can you turn it?", tags: ["self", "solution"] },
        { text: "Your gut’s screaming—will you listen?", tags: ["instinct", "confidence"] },
        { text: "You’ve got the edge—feel it yet?", tags: ["advantage", "belief"] }
    ]
};

const recentPrompts = {
    hook: [],
    story: [],
    lesson: [],
    action: [],
    problem: [],
    agitation: [],
    solution: [],
    question: [],
    insight: [],
    takeaway: [],
    listItem: [],
    myth: [],
    fact: [],
    you: []
};

function extractKeywords(description) {
    const commonWords = ["the", "a", "an", "and", "or", "but", "to", "in", "on", "at", "is", "are"];
    return description
        .toLowerCase()
        .replace(/[.,!?]/g, "")
        .split(/\s+/)
        .filter(word => word.length > 2 && !commonWords.includes(word))
        .map(word => {
            if (word === "failure") return "struggle";
            if (word === "overcoming") return "resilience";
            if (word === "business") return "work";
            if (word === "success") return "success";
            if (word === "fear") return "emotion";
            return word;
        });
}

function getRandomPrompt(type, description = "") {
    const prompts = creativePrompts[type] || [];
    if (prompts.length === 0) return "Get creative here!";

    const keywords = extractKeywords(description);
    const maxAttempts = 10;
    let attempt = 0;
    let selectedPrompt;

    let matchingPrompts = prompts;
    if (keywords.length > 0) {
        matchingPrompts = prompts.filter(prompt => 
            prompt.tags.some(tag => keywords.includes(tag))
        );
    }
    if (matchingPrompts.length === 0) matchingPrompts = prompts;

    do {
        selectedPrompt = matchingPrompts[Math.floor(Math.random() * matchingPrompts.length)].text;
        attempt++;
        if (attempt >= maxAttempts || !recentPrompts[type].includes(selectedPrompt)) {
            break;
        }
    } while (true);

    if (recentPrompts[type].length >= 10) {
        recentPrompts[type].shift();
    }
    recentPrompts[type].push(selectedPrompt);

    return selectedPrompt;
}

function generateStructure() {
    const description = document.getElementById('description').value.trim();
    const format = document.getElementById('format').value;
    let output = '';

    // Reset recentPrompts for each generation
    for (let key in recentPrompts) {
        recentPrompts[key] = [];
    }

    if (!description) {
        output = 'Please enter a description!';
    } else {
        switch (format) {
            case 'hook-story-lesson-action':
                output = `- Hook: Grab them with a bold opener\n  *${getRandomPrompt('hook', description)}*\n` +
                         `- Story: Share your journey\n  *${getRandomPrompt('story', description)}*\n` +
                         `- Lesson: Reveal the core truth\n  *${getRandomPrompt('lesson', description)}*\n` +
                         `- Actionable: Give advice\n  *${getRandomPrompt('action', description)}*\n` +
                         `- You: Talk directly to your audience\n  *${getRandomPrompt('you', description)}*`;
                break;
            case 'problem-agitation-solution':
                output = `- Problem: Name the struggle\n  *${getRandomPrompt('problem', description)}*\n` +
                         `- Agitation: Turn up the heat\n  *${getRandomPrompt('agitation', description)}*\n` +
                         `- Solution: Deliver the fix\n  *${getRandomPrompt('solution', description)}*`;
                break;
            case 'question-insight-takeaway':
                output = `- Question: Spark their curiosity\n  *${getRandomPrompt('question', description)}*\n` +
                         `- Insight: Offer a fresh angle\n  *${getRandomPrompt('insight', description)}*\n` +
                         `- Takeaway: Leave them with a gem\n  *${getRandomPrompt('takeaway', description)}*`;
                break;
            case 'listicle':
                output = `- Title: Craft a catchy list headline\n  *${getRandomPrompt('listItem', description)}*\n` +
                         `- Item 1: Lead with a strong tip\n  *${getRandomPrompt('listItem', description)}*\n` +
                         `- Item 2: Add a practical idea\n  *${getRandomPrompt('listItem', description)}*\n` +
                         `- Item 3: Mix in a bold move\n  *${getRandomPrompt('listItem', description)}*\n` +
                         `- Item 4: Share a hidden gem\n  *${getRandomPrompt('listItem', description)}*\n` +
                         `- Item 5: End with a bang\n  *${getRandomPrompt('listItem', description)}*`;
                break;
            case 'myth-fact':
                output = `- Myth: Bust a common lie\n  *${getRandomPrompt('myth', description)}*\n` +
                         `- Fact: Drop the real deal\n  *${getRandomPrompt('fact', description)}*`;
                break;
            default:
                output = 'Select a valid format!';
        }
    }

    document.getElementById('output').textContent = output;
}
