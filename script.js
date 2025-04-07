const creativePrompts = {
    hook: [
        { text: "Smack them with a wild ‘what if’ they can’t shake!", tags: ["curiosity", "disruption", "bold", "intrigue"] },
        { text: "Tease a secret they’ll beg to know.", tags: ["mystery", "intrigue", "anticipation", "curiosity"] },
        { text: "Hit them with a stat that stops their scroll.", tags: ["data", "impact", "surprise", "truth"] },
        { text: "Call out their biggest fear, no filter.", tags: ["emotion", "bold", "fear", "challenge"] },
        { text: "Shatter their status quo with an inconvenient truth bomb.", tags: ["change", "truth", "disruption", "shock"] }
    ],
    story: [
        { text: "Tell the day you crashed and burned.", tags: ["struggle", "resilience", "failure", "growth"] },
        { text: "Spill a moment you’d rather forget.", tags: ["regret", "growth", "emotion", "past"] },
        { text: "Share the fight you didn’t win.", tags: ["effort", "loss", "struggle", "resilience"] },
        { text: "Relive the time you bet it all.", tags: ["risk", " stakes", "bold", "tension"] },
        { text: "Paint the scene where you lost it all and started over.", tags: ["setback", "renewal", "drama", "resilience"] }
    ],
    lesson: [
        { text: "Strip it to a truth they can’t dodge.", tags: ["clarity", "truth", "impact", "wisdom"] },
        { text: "Turn their ‘duh’ into a ‘whoa.’", tags: ["insight", "surprise", "shift", "revelation"] },
        { text: "Drop a gem that rewires how they think.", tags: ["wisdom", "shift", "inspiration", "depth"] },
        { text: "Show them the lie they’ve been living too long.", tags: ["deception", "awareness", "truth", "change"] },
        { text: "Cut through the noise with a single sharp insight.", tags: ["focus", "revelation", "clarity", "impact"] }
    ],
    action: [
        { text: "Give them a 5-minute win they can try.", tags: ["quick", "success", "action", "progress"] },
        { text: "Point to a switch they can flip now.", tags: ["change", "immediate", "strategy", "simplify"] },
        { text: "Drop a tweak they can test this week.", tags: ["experiment", "progress", "practical", "growth"] },
        { text: "Show them one move to flip the script.", tags: ["strategy", "turnaround", "bold", "success"] },
        { text: "Tell them to ditch one tool today.", tags: ["simplify", "action", "change", "focus"] }
    ],
    problem: [
        { text: "Name the ache they can’t shake off.", tags: ["struggle", "emotion", "pain", "obstacle"] },
        { text: "Point to a rut they’re stuck in.", tags: ["stagnation", "trap", "frustration", "challenge"] },
        { text: "Call out a snag they’ve hit hard.", tags: ["obstacle", "impact", "setback", "difficulty"] },
        { text: "Reveal the mess they’re dodging.", tags: ["chaos", "avoidance", "stress", "problem"] },
        { text: "Highlight a fight they’re losing.", tags: ["effort", "loss", "struggle", "tension"] }
    ],
    agitation: [
        { text: "Twist the knife they’re bleeding from.", tags: ["pain", "intensity", "emotion", "urgency"] },
        { text: "Pile on the chaos they can’t stand.", tags: ["chaos", "pressure", "stress", "overload"] },
        { text: "Show the hell they’re headed for.", tags: ["fear", "future", "danger", "tension"] },
        { text: "Rub salt in their open wound.", tags: ["pain", "aggravation", "intensity", "frustration"] },
        { text: "Crank up the heat they feel.", tags: ["stress", "urgency", "pressure", "discomfort"] }
    ],
    solution: [
        { text: "Drop a fix that flips the script.", tags: ["turnaround", "solution", "success", "change"] },
        { text: "Hand them a key they can turn.", tags: ["tool", "progress", "empowerment", "action"] },
        { text: "Give a step that’s stupid simple.", tags: ["simplify", "action", "ease", "practical"] },
        { text: "Reveal a hack they’ll hug tight.", tags: ["trick", "relief", "clever", "success"] },
        { text: "Show a path that’s pure gold.", tags: ["success", "direction", "value", "clarity"] }
    ],
    question: [
        { text: "What’s the one thing they can’t crack?", tags: ["challenge", "mystery", "curiosity", "obstacle"] },
        { text: "Why do they keep tripping here?", tags: ["struggle", "curiosity", "reflection", "problem"] },
        { text: "Ever wonder what’s holding them back?", tags: ["awareness", "reflection", "depth", "challenge"] },
        { text: "How long till they break this?", tags: ["progress", "urgency", "tension", "possibility"] },
        { text: "What if they flipped it now?", tags: ["change", "possibility", "bold", "curiosity"] }
    ],
    insight: [
        { text: "Drop a truth that twists their view.", tags: ["truth", "shift", "revelation", "impact"] },
        { text: "Reveal a thread they’ve never pulled.", tags: ["discovery", "depth", "mystery", "wisdom"] },
        { text: "Show a spark that shifts it all.", tags: ["change", "inspiration", "clarity", "energy"] },
        { text: "Hand them a lens that lights up.", tags: ["clarity", "perspective", "insight", "focus"] },
        { text: "Cut a gem that cuts through.", tags: ["wisdom", "focus", "truth", "sharpness"] }
    ],
    takeaway: [
        { text: "Sum it up in a line that sticks.", tags: ["clarity", "impact", "memory", "value"] },
        { text: "Leave them with a spark that burns.", tags: ["inspiration", "energy", "emotion", "drive"] },
        { text: "Drop a gem they’ll carry home.", tags: ["wisdom", "value", "depth", "impact"] },
        { text: "Hand them a truth that haunts.", tags: ["truth", "emotion", "reflection", "power"] },
        { text: "Cut a hook that hooks deep.", tags: ["connection", "memory", "impact", "engagement"] }
    ],
    listItem: [
        { text: "Kick it off with a quick win.", tags: ["success", "quick", "action", "momentum"] },
        { text: "Throw in an unexpected hack.", tags: ["trick", "surprise", "clever", "value"] },
        { text: "Add a twist they won’t see.", tags: ["change", "intrigue", "unexpected", "curiosity"] },
        { text: "Drop a tip that’s pure gold.", tags: ["value", "success", "practical", "wisdom"] },
        { text: "Mix in a truth that stings.", tags: ["truth", "impact", "emotion", "reality"] }
    ],
    myth: [
        { text: "Pick a belief everyone swears by.", tags: ["deception", "common", "assumption", "challenge"] },
        { text: "Target a cliché that’s overdue.", tags: ["stagnation", "challenge", "old", "truth"] },
        { text: "Call out a tale they’ve bought.", tags: ["falsehood", "awareness", "deception", "belief"] },
        { text: "Smash a rule they cling to.", tags: ["change", "resistance", "bold", "myth"] },
        { text: "Expose a lie they’ve lived.", tags: ["truth", "revelation", "deception", "shock"] }
    ],
    fact: [
        { text: "Hit them with a truth that’s fresh.", tags: ["truth", "novelty", "impact", "clarity"] },
        { text: "Back it up with a quick hit.", tags: ["data", "speed", "evidence", "sharpness"] },
        { text: "Drop a stat that slaps hard.", tags: ["impact", "evidence", "surprise", "truth"] },
        { text: "Reveal a find they can’t deny.", tags: ["discovery", "certainty", "proof", "clarity"] },
        { text: "Show a proof that pops off.", tags: ["clarity", "energy", "evidence", "impact"] }
    ],
    you: [
        { text: "You’re tougher than you know—ready to prove it?", tags: ["strength", "encouragement", "challenge", "self"] },
        { text: "You’ve beaten worse—why stop now?", tags: ["resilience", "past", "motivation", "progress"] },
        { text: "You hold the key—can you turn it?", tags: ["self", "solution", "empowerment", "action"] },
        { text: "Your gut’s screaming—will you listen?", tags: ["instinct", "confidence", "awareness", "choice"] },
        { text: "You’ve got the edge—feel it yet?", tags: ["advantage", "belief", "strength", "realization"] }
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

const lastUsedPrompts = {
    hook: null,
    story: null,
    lesson: null,
    action: null,
    problem: null,
    agitation: null,
    solution: null,
    question: null,
    insight: null,
    takeaway: null,
    listItem: null,
    myth: null,
    fact: null,
    you: null
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
            if (word === "problem") return "obstacle";
            if (word === "question") return "curiosity";
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
    if (matchingPrompts.length <= 2) matchingPrompts = prompts;

    do {
        selectedPrompt = matchingPrompts[Math.floor(Math.random() * matchingPrompts.length)].text;
        attempt++;
        if (attempt >= maxAttempts || 
            (selectedPrompt !== lastUsedPrompts[type] && !recentPrompts[type].includes(selectedPrompt))) {
            break;
        }
    } while (true);

    if (recentPrompts[type].length >= 10) {
        recentPrompts[type].shift();
    }
    recentPrompts[type].push(selectedPrompt);
    lastUsedPrompts[type] = selectedPrompt;

    return selectedPrompt;
}

function generateStructure() {
    const description = document.getElementById('description').value.trim();
    const format = document.getElementById('format').value;
    let output = '';

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
