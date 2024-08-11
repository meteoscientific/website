---
sidebar_position: 3
---

# Working With REST-API

Welcome to the ChirpStack REST API setup guide! This tutorial is designed for those who want to automate their actions on ChirpStack using the REST API. We’ll walk you through the necessary steps to get started, focusing on the `console.meteoscientific.com` server.

> Note: This is GPT-generated guidance.  I've had so many requests for help with this that I thought I'd spin up a basic how-to, but this is well beyond what I know how to do.  It'll be mostly right, but may lead you wrong. 

## Prerequisites

Before we begin, make sure you have the following:

- **cURL**: To test the API endpoints. You can download it [here](https://curl.se/download.html).
- **API Key**: You need an API key from your MetSci tenant account.

## Step 1: Accessing the REST API Documentation

ChirpStack provides a comprehensive REST API that you can interact with using HTTP requests. The REST API documentation for your server is available at the following URL:

- [ChirpStack REST API Documentation](https://console.meteoscientific.com/rest-api/)

This documentation includes detailed descriptions of available endpoints, parameters, and responses. You can also test API calls directly from this interface.

## Step 2: Obtaining an API Key

To interact with the ChirpStack REST API, you’ll need an API key. Here’s how to get it:

1. Log in to your ChirpStack tenant account at `https://console.meteoscientific.com`.
2. Navigate to **Your Organization** > **API Keys**.
3. Click **Create** to generate a new API key.
4. Copy the generated API key and save it securely. You will need this for authentication.

## Step 3: Authenticating with the REST API

### 3.1 Setting Up Authorization

When making API requests, you need to include your API key in the `Authorization` header. The API key must be prefixed with `Bearer `.

- **Authorization Header Format**:
  ```http
  Authorization: Bearer YOUR_API_KEY
  ```

- **Example with cURL**:
  ```bash
  curl -X GET "https://console.meteoscientific.com/api/applications" -H "Authorization: Bearer YOUR_API_KEY"
  ```

### 3.2 Setting Up User-Agent

It’s recommended to include a `User-Agent` header in your requests to identify your application. This is useful for tracking and debugging purposes.

- **User-Agent Header Format**:
  ```http
  User-Agent: your-application-name
  ```

- **Example with cURL**:
  ```bash
  curl -X GET "https://console.meteoscientific.com/api/applications" -H "Authorization: Bearer YOUR_API_KEY" -H "User-Agent: my-app/1.0"
  ```

## Step 4: Testing the API with the Documentation Portal

### 4.1 Authorizing in the Documentation Portal

1. Visit the REST API documentation at `https://console.meteoscientific.com/rest-api/`.
2. Click the **Authorize** button at the top of the page.
3. In the popup, enter `Bearer YOUR_API_KEY` in the input field.
4. Click **Authorize** to apply the API key to all your API requests made from the documentation page.

### 4.2 Using the "Try it out" Feature

Once authorized, you can use the **Try it out** buttons within the documentation to test API endpoints:

1. Navigate to the endpoint you want to test.
2. Click the **Try it out** button.
3. Fill in the required parameters and click **Execute**.
4. The documentation will generate the cURL command and display the response.

## Step 5: Making API Calls

Here are a few examples of common API calls you might want to make:

### 5.1 Listing Applications

This API call retrieves a list of applications associated with your tenant account.

- **cURL Command**:
  ```bash
  curl -X GET "https://console.meteoscientific.com/api/applications" -H "Authorization: Bearer YOUR_API_KEY" -H "User-Agent: my-app/1.0"
  ```

### 5.2 Creating a New Application

This API call creates a new application within your tenant.

- **cURL Command**:
  ```bash
  curl -X POST "https://console.meteoscientific.com/api/applications" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -H "User-Agent: my-app/1.0" \
  -d '{
    "application": {
      "name": "new-application",
      "description": "My new application",
      "organizationID": "1",
      "serviceProfileID": "your-service-profile-id"
    }
  }'
  ```

### 5.3 Deleting an Application

This API call deletes an existing application from your tenant.

- **cURL Command**:
  ```bash
  curl -X DELETE "https://console.meteoscientific.com/api/applications/{applicationID}" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "User-Agent: my-app/1.0"
  ```

### 5.4 Listing Devices in an Application

This API call retrieves a list of devices associated with a specific application.

- **cURL Command**:
  ```bash
  curl -X GET "https://console.meteoscientific.com/api/devices?applicationID={applicationID}" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "User-Agent: my-app/1.0"
  ```

## Step 6: Error Handling and Troubleshooting

When working with the REST API, you may encounter some common issues. Here are a few tips:

### 6.1 Common Errors

- **401 Unauthorized**: This indicates that your API key is incorrect or expired. Double-check that the key is valid and properly formatted as `Bearer YOUR_API_KEY`.
- **403 Forbidden**: This indicates that your API key does not have the necessary permissions for the action you’re attempting. Ensure that your API key has the appropriate scope.
- **404 Not Found**: This typically occurs if the resource you're trying to access doesn't exist or if you've entered an incorrect URL.

### 6.2 Debugging Requests

- **Use cURL’s verbose mode**: Adding the `-v` flag to your cURL command will give you more insight into what’s happening with your request.
  ```bash
  curl -v -X GET "https://console.meteoscientific.com/api/applications" -H "Authorization: Bearer YOUR_API_KEY"
  ```

- **Check the API documentation**: If you're unsure about the structure of a request or response, refer to the [ChirpStack REST API documentation](https://www.chirpstack.io/docs/chirpstack/api/rest.html).

## Conclusion

This guide has provided a step-by-step overview of how to interact with the ChirpStack REST API on the `console.meteoscientific.com` server. By following these instructions, you should be able to automate tasks within your ChirpStack tenant and develop integrations with ease.

Happy coding!
```

### Key Adjustments for Tenant Users:

1. **API Key Authentication**: The instructions focus on obtaining and using the API key for authorization.
2. **Interactive Documentation**: Emphasis is placed on using the "Try it out" feature within the documentation portal to quickly test API requests.
3. **Practical Examples**: Sample cURL commands are provided for common tasks, with instructions to customize them for specific use cases.
4. **Troubleshooting**: Common issues and solutions are highlighted to assist users in debugging their API interactions.

This markdown document should help tenant users effectively interact with the ChirpStack REST API on `console.meteoscientific.com`.