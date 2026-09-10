const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has
and suggests a recipe they could make with some or all of those ingredients.

You don't need to use every ingredient they mention in your recipe.

The recipe can include additional ingredients they didn't mention,
but try not to include too many extra ingredients.

Format your response in markdown to make it easier to render to a web page.
`

export async function getRecipeFromAI(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    const request = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gemma3:1b",

            stream: false,

            messages: [
                {
                    role: "system",
                    content: SYSTEM_PROMPT
                },
                {
                    role: "user",
                    content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`
                }
            ],

            options: {
                num_predict: 1024
            }
        })
    })

    const response = await request.json()

    if (!request.ok) {
        throw new Error(response.error || "The local model could not generate a recipe.")
    }

    if (!response.message?.content) {
        throw new Error("The local model returned an empty response.")
    }

    return response.message.content
}
