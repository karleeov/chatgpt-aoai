import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import { OpenAIClient, AzureKeyCredential } from "@azure/openai";

import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";

const endpoint = process.env.IMAGE_OPENAI_ENDPOINT;
const azureApiKey = process.env.IMAGE_OPENAI_API_KEY;
if (!endpoint || !azureApiKey) {
  console.error("Missing required environment variables.");
  process.exit(1);
}


const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
const deploymentId = "chat";

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // if (!configuration.apiKey) {
    //   return new NextResponse("OpenAI API Key not configured.", {
    //     status: 500,
    //   });
    // }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("Resolution is required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse(
        "Free trial has expired. Please upgrade to pro.",
        { status: 403 }
      );
    }

    // const response = await openai.createImage({
    //   prompt,
    //   n: parseInt(amount, 10),
    //   size: resolution,
    // });

    const response = await fetch(
      "https://cog-c2bp42wxw3ed4.openai.azure.com/openai/images/generations:submit?api-version=2023-06-01-preview",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "55d1707d9cf44c8e81a4e6f7a16fe31f",
        },
        body: JSON.stringify({
          prompt: prompt,
          n: parseInt(amount, 10),
          size: resolution,
        }),
      }
    );

    const imageStatus = await response.json();
    if (response.status > 299 || !response.ok) {
      throw Error(imageStatus.error || "Unknown error");
    }

    const parsedImageStatus = JSON.parse(JSON.stringify(imageStatus)).id;

    const imageResponse = await fetch(
      `https://cog-c2bp42wxw3ed4.openai.azure.com/openai/operations/images/${parsedImageStatus}?api-version=2023-06-01-preview`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "api-key": "55d1707d9cf44c8e81a4e6f7a16fe31f",
        },
      }
    );

    const imageInfo = await imageResponse.json();
    if (imageResponse.status > 299 || !imageResponse.ok) {
      throw Error(imageInfo.error || "Unknown error");
    }

    if (!isPro) {
      await incrementApiLimit();
    }

    return NextResponse.json(imageInfo.result.data);

    // return NextResponse.json(response.result?.data.values);
  } catch (error) {
    console.log("[IMAGE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
