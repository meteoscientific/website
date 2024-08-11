---
sidebar_position: 5
---
# Class C Devices

## Introduction

Welcome! In this guide, we’ll walk you through the process of onboarding a Class C device onto the Helium Network and into the MeteoScientific ChirpStack console. We’ll also cover the basics of using a Class C device.


## What is a Class C Device?

A Class C device is designed for **c**ontinuous listening. It remains in a listening state, ready to receive signals from the Helium Network. In this guide, we will use the **Kuando Busy Light** as our Class C device. This device can change colors based on the signals it receives from the network.

## Step 1: Setting Up the Class C Device

### Plugging in the Device

1. **Plug in the Device:** Connect your Busy Light to a power source using a USB cable. Ensure it remains powered continuously, as Class C devices require constant power.
2. **Initial Indicators:** Upon plugging in, the Busy Light will flash blue and then turn soft yellow. Once it connects to the network, it will turn green, indicating it’s ready to go.

## Step 2: Accessing the ChirpStack Console

1. **Log into ChirpStack:** Visit [console.meteoscientific.com](https://console.meteoscientific.com) and log in with your MeteoScientific account. If you don’t have an account, you can sign up and receive 400 free DC for testing and onboarding devices.

## Step 3: Adding a Device Profile

1. **Navigate to Device Profiles:** Go to the "Device Profiles" section.
2. **Add Device Profile:** Click on "Add Device Profile" and select the template for the **Quando Busy Light**.
3. **Set Firmware Version:** Choose the appropriate firmware version (e.g., `us915`).
4. **Review Information:** Ensure the device name, description, and FPort (set to 15) are correct.
5. **Submit:** Click "Submit" to save the device profile.

## Step 4: Creating an Application

1. **Add an Application:** Navigate to the "Applications" section and click on "Add Application."
2. **Name the Application:** For example, you can name it `Busy Light Office`.
3. **Submit:** Save the application.

## Step 5: Onboarding the Device

1. **Add a Device:** In your newly created application, click on "Add Device."
2. **Enter Device Information:** Input the `DevEUI` and other necessary details. You can use a Google Sheet to manage your device credentials if needed.
3. **Set Application Key:** Input the `AppKey` and submit.

## Step 6: Connecting the Device

1. **Power the Device:** Ensure the Busy Light is connected and powered.
2. **Monitor Connection:** Once connected, the device will appear as online in the ChirpStack console.

## Step 7: Changing Device Colors

### Manual Method

1. **Access Configuration:** In the console, go to the device’s configuration section.
2. **Set FPort:** Ensure the FPort is set to `15`.
3. **Enter Hex Code:** Input the Hex code corresponding to the color you want. For example, to turn the light red, enter the code for red.
4. **Enqueue Command:** Click "Enqueue" to send the command. The Busy Light should change to the desired color.

### Automating Color Changes

Automation options, such as changing colors based on sensor data or other triggers, will be covered in another guide.

## Conclusion

Congratulations! You have successfully onboarded and configured your Class C device on the Helium Network using the MeteoScientific ChirpStack console. The process is straightforward, and with the device now online, you can explore additional configurations and automation.

---
