---
sidebar_position: 4
---

# Working With Datacake

> I am trying to configure downlinks from Datacake to the console and am getting errors. Can you confirm that I should be using the V4 gRPC API, the URL and Port I should be using, and if TLS should be enabled?

To connect your sensor from the MeteoScientific LNS console to Datacake using the V4 gRPC API, you'll need to configure the appropriate URL and port.

For the MeteoScientific console, which can be accessed at [https://console.meteoscientific.com/](https://console.meteoscientific.com/), you'll want to use the following connection details:

- **gRPC URL:** The standard format for gRPC connections should be `https://console.meteoscientific.com:443`.
- **Port:** The default port for gRPC over HTTPS is `443`.

### Example Configuration in Datacake:

- **Server Address:** `console.meteoscientific.com`
- **Port:** `443`
- **Protocol:** Ensure that you're using HTTPS for the gRPC connection.

### Steps to Integrate:

1. Navigate to the Datacake console and open the LNS configuration section.
2. Enter the MeteoScientific gRPC URL (`https://console.meteoscientific.com:443`).
3. Follow the usual steps in Datacake to map your sensor data and set up any required data decoders.

This setup will allow your MeteoScientific-connected sensors to send data to Datacake, where you can visualize and manage the data using Datacake's tools.

For further details on configuring LNS with Datacake, you can refer to their [official documentation](https://docs.datacake.de/lorawan/lns).
