
# How to Create Your Own Azure OpenAI Platform

Azure OpenAI is a service that allows you to access the powerful capabilities of OpenAI, such as GPT-3, on the Azure cloud. With Azure OpenAI, you can build and deploy applications that use natural language processing, computer vision, and other AI domains. You can also create custom models and fine-tune them for your specific needs and preferences.

In this blog post, I will show you how to create your own Azure OpenAI platform using the chatgpt-aoai GitHub repository¹. This repository contains a sample chat application that uses GPT-3 to generate responses based on user input. You can use this application as a starting point to create your own chatbot or other conversational AI system.

## Prerequisites

To follow this tutorial, you will need:

- An Azure subscription - Create one for free.
- Access granted to Azure OpenAI in the desired Azure subscription. Currently, access to this service is granted only by application. You can apply for access to Azure OpenAI by completing the form at [this link](^2^). If you need assistance, open an issue on [this repository](^1^) to contact Microsoft.
- An Azure OpenAI resource with a model deployed. For more information about model deployment, see the [resource deployment guide](^3^).
- A GitHub account and Git installed on your machine.
- Node.js and npm installed on your machine.

## Step 1: Clone the chatgpt-aoai repository

The first step is to clone the chatgpt-aoai repository from GitHub to your local machine. You can do this by opening a terminal and running the following command:

```
git clone https://github.com/karleeov/chatgpt-aoai.git
```

This will create a folder called chatgpt-aoai in your current directory. You can change into this folder by running:

```
cd chatgpt-aoai
```

## Step 2: Install the dependencies

The next step is to install the dependencies for the chat application. You can do this by running:

```
npm install
```

This will install all the packages listed in the package.json file.

## Step 3: Configure the environment variables

The chat application uses some environment variables to store information such as your Azure OpenAI endpoint, key, and model name. You need to create a file called .env in the root folder of the chatgpt-aoai repository and add the following variables:

```
OPENAI_ENDPOINT=https://oai.azure.com
OPENAI_KEY=sk-your-key-here
OPENAI_MODEL=gpt-35-turbo
```

You need to replace sk-your-key-here with your actual Azure OpenAI key, which you can find in the Azure portal under your resource's Keys and Endpoint section. You also need to replace gpt-35-turbo with the name of the model that you deployed in your resource.

## Step 4: Run the chat application

The final step is to run the chat application and test it out. You can do this by running:

```
npm start
```

This will start a local server on port 3000. You can open your browser and go to http://localhost:3000 to see the chat interface. You can type a message in the input box and press Enter or click Send to send it to GPT-3. You will see GPT-3's response in the chat window.

You can also use the settings icon on the top right corner of the chat window to adjust some parameters for GPT-3, such as temperature, top-p, frequency penalty, and presence penalty. These parameters affect how GPT-3 generates text and you can experiment with different values to see how they affect the results.

## Conclusion

In this blog post, I showed you how to create your own Azure OpenAI platform using the chatgpt-aoai GitHub repository. You learned how to clone the repository, install the dependencies, configure the environment variables, and run the chat application. You also learned how to interact with GPT-4 and adjust some parameters for text generation.

I hope you enjoyed this tutorial and found it useful. If you want to learn more about Azure OpenAI and how to use it for various AI scenarios. contact kingovlee@gmail.com
