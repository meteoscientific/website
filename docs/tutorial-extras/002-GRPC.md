---
sidebar_position: 2
---

# Setting Up GRPC

I've gotten a bunch of requests to use GRPC.  It's definitely beyond the scope of both my expertise (minimal) and scope at MetSci to walk you through it.  As you'll see in the documentation, it's not well documented and you should expect things to break.  

> Note: This is GPT-generated guidance.  I've had so many requests for help with this that I thought I'd spin up a basic how-to, but this is well beyond what I know how to do.  It'll be mostly right, but may lead you wrong. 

## ChirpStack gRPC API Access Guide (Tenant Account)

Welcome to the ChirpStack gRPC API setup guide for tenant users! This tutorial is designed for those who have access to a ChirpStack instance through a tenant account and want to interface with the ChirpStack Application Server using gRPC. We’ll guide you through the necessary steps to get started with gRPC, focusing on the `console.meteoscientific.com` server.

## Prerequisites

Before we begin, make sure you have the following installed on your system:

- **gRPC**: A high-performance RPC framework. You can find installation instructions [here](https://grpc.io/docs/languages/).
- **Protobuf Compiler (protoc)**: Required to compile the `.proto` files. Installation instructions are [here](https://grpc.io/docs/protoc-installation/).
- **cURL**: To test the API endpoints. You can download it [here](https://curl.se/download.html).
- **Python/Node.js/Go**: Depending on your preferred programming language. Ensure the corresponding gRPC libraries are installed.

## Step 1: Setting Up Your Environment

Since you only have a tenant account, you won’t be able to clone the ChirpStack API repository directly from the server. However, you can still generate the necessary gRPC client code by obtaining the `.proto` files from the ChirpStack GitHub repository.

1. **Download the ChirpStack API `.proto` Files:**

   Download the necessary `.proto` files from the [ChirpStack GitHub repository](https://github.com/brocaar/chirpstack-api). You can either download the repository as a ZIP file or clone it to your local machine:

   ```bash
   git clone https://github.com/brocaar/chirpstack-api
   cd chirpstack-api
   ```

2. **Generate gRPC Code:**

   Depending on your language of choice, compile the `.proto` files located in the `proto/` directory.

   - **For Python:**
     ```bash
     python -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ./proto/*.proto
     ```

   - **For Go:**
     ```bash
     protoc --go_out=plugins=grpc:. ./proto/*.proto
     ```

   - **For Node.js:**
     ```bash
     grpc_tools_node_protoc --js_out=import_style=commonjs,binary:. --grpc_out=grpc_js:. ./proto/*.proto
     ```

## Step 2: Connecting to ChirpStack

You will connect to the `console.meteoscientific.com` server using the gRPC API.

### 2.1 Obtaining the API Token

As a tenant user, you’ll still need an API token to authenticate your gRPC requests. Follow these steps:

1. Log in to your ChirpStack tenant account at `https://console.meteoscientific.com`.
2. Navigate to **Your Organization** > **API Keys**.
3. Click **Create** to generate a new API key.
4. Copy the generated API key and save it securely.

### 2.2 Making Your First gRPC Call

With the API key, you can now make your first gRPC call. Remember, your API token will limit your access to the resources associated with your tenant account.

- **Python Example:**

  ```python
  import grpc
  import chirpstack_api.as_pb.external.api.application_pb2_grpc as api_grpc
  import chirpstack_api.as_pb.external.api.application_pb2 as api
  
  # Establish the channel
  channel = grpc.insecure_channel('console.meteoscientific.com:8080')
  
  # Create the stub
  stub = api_grpc.ApplicationServiceStub(channel)
  
  # Prepare your request with the API token
  request = api.ListApplicationsRequest()
  metadata = [('authorization', 'Bearer YOUR_API_TOKEN')]
  
  # Make the request
  response = stub.List(request, metadata=metadata)
  
  # Print the response
  print(response)
  ```

- **Go Example:**

  ```go
  package main
  
  import (
      "context"
      "log"
  
      "google.golang.org/grpc"
      "google.golang.org/grpc/metadata"
      pb "github.com/brocaar/chirpstack-api/go/v3/as/external/api"
  )
  
  func main() {
      conn, err := grpc.Dial("console.meteoscientific.com:8080", grpc.WithInsecure())
      if err != nil {
          log.Fatalf("did not connect: %v", err)
      }
      defer conn.Close()
  
      client := pb.NewApplicationServiceClient(conn)
  
      md := metadata.New(map[string]string{"authorization": "Bearer YOUR_API_TOKEN"})
      ctx := metadata.NewOutgoingContext(context.Background(), md)
  
      req := &pb.ListApplicationsRequest{}
      res, err := client.List(ctx, req)
      if err != nil {
          log.Fatalf("could not list applications: %v", err)
      }
  
      log.Printf("Applications: %v", res)
  }
  ```

- **Node.js Example:**

  ```javascript
  const grpc = require('@grpc/grpc-js');
  const protoLoader = require('@grpc/proto-loader');
  
  const packageDefinition = protoLoader.loadSync(
      './proto/chirpstack-api/as/external/api/application.proto',
      {
          keepCase: true,
          longs: String,
          enums: String,
          defaults: true,
          oneofs: true
      }
  );
  
  const chirpstack = grpc.loadPackageDefinition(packageDefinition).api;
  
  const client = new chirpstack.ApplicationService(
      'console.meteoscientific.com:8080',
      grpc.credentials.createInsecure()
  );
  
  const metadata = new grpc.Metadata();
  metadata.add('authorization', 'Bearer YOUR_API_TOKEN');
  
  client.ListApplications({}, metadata, (err, response) => {
      if (err) {
          console.error(err);
      } else {
          console.log(response);
      }
  });
  ```

## Step 3: Exploring Further

With your tenant account, you’ll be limited to managing and accessing the resources associated with your tenant. Explore the API methods available to you by referencing the [ChirpStack API documentation](https://www.chirpstack.io/application-server/api/).

## Troubleshooting

### Common Issues

- **Invalid Token**: Ensure your API token is correct and hasn’t expired.
- **Insufficient Permissions**: Remember that as a tenant user, your permissions are limited to your tenant’s resources.
- **Connection Issues**: Verify that `console.meteoscientific.com` is reachable from your network.
- **SSL/TLS Issues**: If you need to connect securely, consider using `grpc.WithTransportCredentials` instead of `grpc.WithInsecure()`.

## Conclusion

This guide has walked you through the basic setup of using gRPC with ChirpStack on the `console.meteoscientific.com` server using a tenant account. While your access might be limited compared to an administrative user, you can still interact programmatically with your tenant’s resources. Happy coding!