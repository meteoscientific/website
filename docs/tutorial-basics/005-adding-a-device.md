---
sidebar_position: 4
---

# Add A Device

### Step 1: Prepare the ChirpStack Console

Here we are in our ChirpStack console, currently in the dashboard with nothing going on. Before we get started, you’ll need three things. I’m assuming you already have a device profile and an application set up, in this case, a soil moisture sensor. However, you’ll also need three other important pieces of information that come with every sensor.

### The Three Key Identifiers

When you get a sensor, every sensor *should* come with three long and complicated numbers:
```
- DevEUI (Device EUI)
- AppEUI (Application EUI)
- AppKey (Application Key)
```

> **Note:** EUI stands for Extended Unique Identifier. It’s not something you hear often, but now you know!

These three identifiers are necessary to add the device to your console and ensure it’s recognized properly.

### Step 2: Add the Device to the ChirpStack Console

Let's move forward with adding the device:

1. **Go to Applications:** 
   - Navigate to your application (we’ve set this up in a previous video).
   - Click on **Add Device**.

2. **Naming Convention:**
   - Use a naming convention that makes sense to you. For example, you might use the name of the device, the last four digits of the DevEUI, and the position of the device.

3. **Fill in Device Details:**
   - Enter any additional details that are important to you, such as a description or location (e.g., “Avocado Tree in the Backyard”). 
   - Set up the date and any other relevant notes.

4. **Input the DevEUI:**
   - Typically, you would copy and paste the DevEUI. Don’t bother typing it manually; it’s a big hassle.
   - Reputable manufacturers will provide the DevEUI, AppEUI, and AppKey.

5. **Generate EUI and Keys:**
   - ChirpStack allows you to generate these identifiers if needed.
   - Copy and store them in a safe place, like a Google Sheet.

6. **Configure the Device Profile:**
   - If required, add a variable called `app_eui` with the correct value (e.g., 16 zeros in ChirpStack for LoRaWAN).

7. **Submit the Device:**
   - Once all details are filled in, submit the device.

8. **Application Key:**
   - Most devices come with an application key. Add this key to the appropriate field.

9. **Finalize Setup:**
   - Make sure the console is ready before powering on the device.

### Step 3: Power On and Monitor the Device

Once you’ve set everything up in the console:

1. **Power on the Device:**
   - Wait for the console to recognize the device.

2. **Check the Dashboard:**
   - The console will display various metrics such as received packets (RSSI) and signal-to-noise ratio (SNR). These metrics let you know how well the device is communicating.

3. **Explore Configuration Tabs:**
   - Go through the various tabs such as **Tags and Variables**, **OTA Keys**, **Activation**, **Queue**, **Events**, and **LoRaWAN Frames**.

### Understanding Events and Frames

- **Events:** Contain information from the sensor (e.g., battery status).
- **Frames:** Include both the sensor events and additional information from the gateway.

### Now...wait.  

After a few minutes, you should see events and frames start to populate. You’ll see the status, battery level, and other details. The console will show you when the sensor requests to join and when it’s accepted.

That’s how you add a device to the MeteoScientific ChirpStack console. 
