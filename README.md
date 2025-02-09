# Chatbot Application

## Overview
This chatbot application is a simple, interactive interface built using **React** and **AWS**. The chatbot communicates with an AWS Lambda function, which uses **OpenAI’s GPT model** to generate responses. The chat history is stored in **AWS DynamoDB** for future reference.

## Features
- **User Interaction**: Allows users to input messages and receive responses from the AI bot in real-time.
- **AI-Powered Responses**: Uses **OpenAI’s GPT-4** model to generate natural language responses.
- **Persistent Chat History**: All chat messages (user and bot) are stored in **AWS DynamoDB** for each user session.
- **Simple UI**: Clean and responsive interface built with **React**.

## Architecture
1. **Frontend**: 
   - Built using **React** to create a simple and interactive UI.
   - Users send messages via HTTP requests to the **API Gateway**.

2. **API Gateway**:
   - Acts as a bridge between the frontend and the backend.
   - Routes requests to the **Lambda function**.

3. **Lambda**:
   - Handles incoming requests from the frontend.
   - Uses **OpenAI GPT-4** to generate a response.
   - Stores the conversation in **AWS DynamoDB**.

4. **DynamoDB**:
   - Stores the **user messages** and **bot responses** along with a **session ID** for tracking user history.
