---
sidebar_position: 2
---

# How to Use the LoRaWAN Console

This lesson will walk you through the process of using the **MeteoScientific (MetSci) Console**. You can follow along by visiting [console.meteoscientific.com](https://console.meteoscientific.com). This guide will give you an overview of the console and how data flows within the LoRaWAN network.

## Understanding Data Flow

Before diving into the console, let's break down the flow of data in the system:

1. **Sensors**: It all starts with a sensor. For example, a sensor detects a leaky pipe and sends a coded packet through the airwaves.
2. **Hotspots**: The packet is received by a hotspot, which then forwards it to the MetSci console through the Internet.
3. **LoRaWAN Network Server**: The packet passes through a LoRaWAN Network Server (LNS), which decodes the data.
4. **Console Decoding**: The MetSci console interprets the decoded data, determining if a pipe is leaking, the current temperature, wind speed, etc.
5. **Applications**: Finally, the decoded data is sent to an application (e.g., the MetSci app), or it can be integrated with other systems.

Today, we'll be focusing on the **MetSci Console**. 

## Getting Started with the MetSci Console

1. **Sign In**: Head over to [console.meteoscientific.com](https://console.meteoscientific.com) and sign up for an account. 
2. **Dashboard Overview**: After signing in, you'll land on the dashboard, where you'll see four cards: 
   - **Active Devices**: This is the most important card. Here, you can view devices you’ve set up.
   - **Active Gateways**: You can safely ignore this for now; all Helium's gateways are your active gateways.
   - **Device Data Rate Usage**: This is more technical, and we'll cover it in a separate video.
   - **Gateway Map**: This doesn't show in Console.  You'll need to use the [Helium Explorer](https://explorer.helium.com) to view all gateways.

## Tenant Details

Every console account starts with **400 free data credits**. Here are a few things to know about data credits:
- **Cost of Data Credits**: Each data credit (DC) costs $0.0001. The minimum purchase amount is **50,000 DC**, which costs $5.
- **Usage**: For a minimal sensor, you could run a device sending 1 DC every hour for a year using just under 9,000 DC.
- **Managing Duplicates**: If you want redunancy, you can get duplicate packets from multiple hotspots. For now, iff you see a setting called **Current Value**, set it to 1 to avoid unnecessary duplicates.

## Adding Users and API Keys

The console allows you to add Users, such as a business partner or admin, by navigating to **Users** and entering their email information.

Additionally, you can generate **API Keys** to connect your console to other software systems.  We'll cover that more in depth later. 

## Device Profiles and Applications

One key area where new users get tripped up is understanding **Device Profiles** and **Applications**. 

Here's a quick breakdown:
- **Device Profiles**: Think of this as an application template. It holds settings that apply to a group of devices.
- **Applications**: An application is a collection of devices, such as parking sensors or trash can level sensors.
- **Tags**: You can use tags to organize devices, such as grouping parking sensors by levels in a parking structure.

## Additional Features

- **Purchase Data Credits**: You can purchase additional data credits directly through the console.
- **Service Requests**: If you encounter any issues, you can submit a service request here, although it's far more helpful to the public if you submit over on the [Github Issues](https://github.com/meteoscientific/website/issues) page.
- **Migrating from Legacy**: If you're transitioning from the original Helium Console (almost no one is as of August 2024), there's an option to migrate your data.
- **User Profile**: You can update your profile details at any time, including your name, address, and company info.

## Conclusion

That wraps up this overview of the MetSci Console! We’ll dive deeper into specific features in the following lessons. If you haven't signed up for a console account yet, head over to [console.meteoscientific.com](https://console.meteoscientific.com), sign up, and poke around.

