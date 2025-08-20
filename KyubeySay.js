

function KyubeySay() {
    const replies = [
        "Is that the Wish that will make your soul gem shine?",
        "Your wish has overcome entropy! Become a Magical Girl!",
        "Are you... sure... this is the wish you desire?",
        "I just don't understand...",
        "Your potential is too low for that wish. Perhaps think a little smaller?",
        "The contract is complete. Go unleash your magical power!",
        "Your wish has failed to overcome entropy. How sad.",
        "Your wish sucks. Pick another one.",
    ]

    const randomIndex = Math.floor(Math.random() * replies.length);
    return replies[randomIndex];
}

module.exports = { KyubeySay };