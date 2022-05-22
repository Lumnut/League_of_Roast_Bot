const roastsArray = [
  `Light travels faster than sound, which is why you seemed bright until you spoke.`,
  `Your face makes onions cry.`,
  `Don’t be ashamed of who you are. That’s your parents’ job.`,
  `Don’t worry — the first 40 years of childhood are always the hardest.`,
  `OH MY GOD! IT SPEAKS!`,
  `You have miles to go before you reach mediocre.`,
  `Your secrets are always safe with me. I never even listen when you tell me them.`,
  `It’s impossible to underestimate you.`,
  `I’m not insulting you; I’m describing you.`,
  `I thought of you today. It reminded me to take out the trash.`,
  `“Don’t get bitter, just get better.” — Alyssa Edwards, RuPaul’s Drag Race`,
  `You just might be why the middle finger was invented in the first place.`,
  `I was today years old when I realized I didn’t like you.`,
  `Honsestly, I think you've been roasted enough.`,
  `You must have been born on a highway, because that's where most accidents happen.`,
  `You're a failed abortion whose birth certificate is an apology from the condom factory.`,
  `Out of 100,000 sperm, you were the fastest?`,
  `You can take that mask off, Halloween isn't until October`,
  `Do you still love nature....despite what it did to you?`,
  `Here's 20 cents, call all your friends and give me back the change.`,
  `If I gave you a penny for your thoughts, I'd get change.`,
  `If I said anything to offend you it was purely intentional.`,
  `I'm not offended by what you say. I'm just glad that you're stringing words into sentences now.`,
  `If you had one more brain cell, it would be lonely.`,
  `I'd like to help you out. Which way did you come in?`,
  `I refuse to have a battle of wits with an unarmed person.`,
  `Anybody who told you to just be yourself couldn't have given you worse advice.`,
  `I’d explain the roast to you, but I don’t have any crayons with me.`,
  `Calling you an idiot would be an insult to all the stupid people.`,
]


const generateRoast = (username) => {
  const randomNumber = Math.floor(Math.random() * roastsArray.length)
  const roast = roastsArray[randomNumber]

  return `oh ${username}, ${roast}`
}


export { generateRoast };
