---
sidebar_position: 7
---
# Setting Up Metrics & Decoders

In this guide, we'll walk through how to work with decoders and measurements in ChirpStack using a MileSight AM319 device. This process involves configuring device profiles, creating or modifying codecs, and ensuring your device metrics are displayed correctly.

## Prerequisites

Before starting, ensure you have:
- A MileSight AM319 device added to your ChirpStack.
- Basic understanding of ChirpStack console navigation.
> Note: You can use any device you'd like, the AM319 is just the demo I have handy for this.

## Step 1: Adding the Device

First, add the AM319 device to your ChirpStack application. The AM319 is part of the MileSight AM300 series. You can find the relevant documentation on MileSight's website.

### Viewing Device Metrics

Once the device is added and running, navigate to the application and select your device. In the device view, you can access **Device Metrics**. This is useful for testing, as it allows you to see various measurements like CO2, humidity, Lux, ozone, and particulate matter (PM) directly within ChirpStack without needing to set up an integration.

## Step 2: Configuring Device Profiles

To display device metrics properly, you'll need to configure the device profile:

1. **Navigate to Device Profiles**: Select the device profile for the AM319.
2. **Add or Modify Codec**: 
   - MileSight provides a codec for their devices. If the provided codec doesn't work, you can modify it using ChatGPT or write your own. For this example, I used ChatGPT to troubleshoot and correct issues with the default codec.

### Using ChatGPT to Modify Codec

If you encounter errors with the provided codec, you can use ChatGPT to assist in debugging. Here's a summary of how I did it:

1. **Provide the Error and Decoder**: Explain the issue to ChatGPT, providing as much detail as possible, including the error messages and the decoder code.
2. **Iterate and Test**: Work through the corrections suggested by ChatGPT, testing the output after each adjustment.
3. **Cross-Reference with Documentation**: Ensure that the channels and types in the decoder align with the device's documentation. For example, some channels may not exist for your specific device model, which could cause errors.

## Step 3: Displaying Device Measurements

After configuring the codec, you need to ensure that the measurements are displayed:

1. **Trigger Uplink Events**: Go to your device's **Events** section and look for recent uplinks. You'll find objects like `O3` (Ozone), `CO2` (Carbon Dioxide), and more. Note these names.
2. **Update Measurements in Device Profile**: 
   - Go back to **Device Profiles** and navigate to **Measurements**.
   - Add each measurement, specifying the correct name and type (e.g., `gauge` for continuous values, `string` for true/false values like occupancy status).
   - Example: CO2 is a gauge, and occupancy status (PIR) is a string.

3. **Submit Changes**: Save your changes and wait for the next uplink to verify that your measurements are being recorded and displayed correctly.

### Notes on Measurements

- Some measurements, like PM 2.5, only upload data when certain thresholds are exceeded. Ensure you're aware of these conditions when testing.

## Step 4: Testing and Debugging

To expedite testing, you may want to adjust the uplink interval on your device so that it sends data more frequently. This allows for quicker debugging and verification of your setup.

## Configured, Congrats!

Following these steps, you should now have your MileSight AM319 device correctly configured within ChirpStack, with device metrics and measurements properly displayed. This guide also provides a basic workflow for troubleshooting and modifying device codecs using tools like ChatGPT.

For any questions or further assistance, feel free to reach out or consult the relevant documentation.

