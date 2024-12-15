import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '', // Read the API key from the environment variable
  dangerouslyAllowBrowser: true
});

type Package = {
  name: string;
  description: string;
  category: string;
};

export async function getRecommendations(projectDescription: string): Promise<Package[]> {

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Updated model
      messages: [
        { 
          role: "system", 
          content: "You are a Laravel expert who recommends packages based on project descriptions. Provide 3-5 relevant package recommendations."
        },
        { role: "user", content: projectDescription }
      ],
      functions: [
        {
          name: "get_laravel_package_recommendations",
          description: "Get Laravel package recommendations based on project description",
          parameters: {
            type: "object",
            properties: {
              packages: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                      description: "Name of the Laravel package"
                    },
                    description: {
                      type: "string",
                      description: "Brief description of the package"
                    },
                    category: {
                      type: "string",
                      description: "Category of the package (e.g., Authentication, Testing, Database)"
                    }
                  },
                  required: ["name", "description", "category"]
                }
              }
            },
            required: ["packages"]
          }
        }
      ],
      function_call: { name: "get_laravel_package_recommendations" }
    });

    console.log("API Response:", JSON.stringify(response, null, 2));

    const functionCall = response.choices[0]?.message?.function_call;
    if (functionCall && functionCall.name === "get_laravel_package_recommendations" && functionCall.arguments) {
      try {
        const args = JSON.parse(functionCall.arguments);
        if (Array.isArray(args.packages) && args.packages.length > 0) {
          return args.packages;
        } else {
          console.error("No recommendations found");
          throw new Error("No recommendations found");
        }
      } catch (parseError) {
        console.error("Error parsing function arguments:", parseError);
        throw new Error(`Error parsing function arguments: ${parseError.message}`);
      }
    } else {
      console.error("Unexpected response structure:", response);
      throw new Error("Unexpected response format from GPT API");
    }
  } catch (error) {
    console.error("Detailed error:", error);
    if (error.response) {
      console.error(error.response.status);
      console.error(error.response.data);
    }
    throw new Error(`Error in getRecommendations: ${error.message || 'Unknown error'}`);
  }
}

