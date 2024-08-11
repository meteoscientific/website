---
sidebar_position: 2
---
# Device Profiles

This is a lesson on how to use the device profiles part of the MeteoScientific ChirpStack Console. 

## Getting Started

If you haven't already signed up for a console account [console.meteoscientific.com](https://console.meteoscientific.com) knock that out now.  It's free to sign up, you get a few DC to test things out, and without an account none of the rest of this will make sense.

## What is a Device Profile?

A device profile is a template for what a device is, can, and should do. It's pretty straightforward.  It just makes it easier for you to create groups of devices that all do similar things. These could be parking sensors, traffic counters, or whatever devices you're working with. I'll also discuss the naming convention I use to keep everything organized.

I've already set up a device profile, so we can walk through it together. This is the MakerFab Soil Moisture LWUS 915 one-hour device profile. 

### Naming Convention

Inside the profile, I've got the naming convention: 

- **Maker:** MakerFabs
- **Device:** Soil Moisture LW (LoRaWAN)
- **Region:** US-915
- **Interval:** One-hour

That's just my naming convention. You can use whatever notes will be useful to you or other users in your account. Set your region to whatever region you're in; I'm in the US-915 region here in sunny San Diego, California. 

### Default Settings

Almost all the other settings can be left alone. You can change them if you want, but for now, I'd recommend leaving them as they are. The only other thing to change is the **Expected Uplink Interval.**

#### What is an Uplink?

An uplink is the information coming from the sensor. In LoRaWAN terms, we're always talking about data moving **from** the sensor. An uplink is a packet sent from the sensor to the hotspot, which then forwards it to the LNS (LoRaWAN Network Server) and onto the console where it gets decoded. The decoded data is then forwarded to app, which can show you what's happening or send a notification "Hey, a pipe is leaking!" or trigger an action `Airstrikes on leaking pipe.`

If we wanted to send something back down to the sensor, that would be called a **downlink**. 

Most devices are **Class A** devices, meaning they only occasionally send out an uplink and only listen to hear if you have any instructions after they've sent an uplink.  It's part of what makes 'em low power.  They wake up on a timer, fire off a message, see if you've said anything in the meantime, then go back to low power sleep. For example, this soil moisture sensor sends out an uplink every hour.  

Other devices, called **Class B** and **Class C** devices, can be more active (and more power hungry).  We'll cover them in another lesson.  

Now, even with a Class A device, you might place it in a location where the signal is occasionally be blocked, in which case you may want to adjust the expected uplink interval from your computer rather than wading out into the swamps with your laptop to manually reset. 

On our end, the Console expects a device to send on schedule.  If the device doesn't uplink on time, Console can fire off a notification to us.  This can get a little tiresome; if a device sends an uplink every hour but occasionally fails due to signal interference, you might change the expected uplink interval to 7200 seconds (two hours) to avoid unnecessary warnings.

### Additional Settings

#### Join OTA

Join OTA (Over The Air) is a setting that should be left on. Class B and Class C devices will be discussed in a later video, but for now, just leave these settings as they are.

#### Codec

The codec is the decoder that translates the scrambled data packet into readable information, like temperature or humidity. Almost all devices will come with a codec provided by the manufacturer. You can find and use these codecs, or, if you're more technically inclined, you can customize them.  ChatGPT has made writing codecs MUCH easier.

#### Tags

Tags allow you to categorize devices. For example, you might set up a location tag for "Quadrant 2A." This helps you organize and assign tags to devices within this template.

#### Measurements

In the ChirpStack console, you can configure the decoder to display the values you're seeing, like soil moisture percentage. This won't create graphs or send notifications, but it's a quick way to verify that your decoder and device are working properly.

Once you've configured everything to your liking, hit **Submit** to save the device profile.

## Adding Device Profiles

### Method 1: Using Templates

Let's say you're new and want to add a MakerFab sensor. Instead of manually entering all the details, you can select a **Device Profile Template**. The MeteoScientific console includes a few templates, and more are being added regularly. This means if we have a pre-built template, you can add it easily to Console without having to figure out the codec and other details.

### Method 2: Manual Entry

If you need to manually add a device profile, you can do so by filling in all the necessary details. For example, if you're adding a Senzemo Send Stick, you would:

1. Set the naming convention (e.g., Senzemo Send Stick SMC 30).
2. Set the region (e.g., US-915).
3. Set the uplink interval (e.g., 7200 seconds for a two-hour interval).

You can add notes, like a link to the device manual or information about where the device is located. For the codec, you'll either paste in the manufacturer's codec or customize it as needed. Once everything is set, hit **Submit** to save the profile.

## Conclusion

You've now learned what a device profile is, how it fits into the system, how it gets used, and two ways to add it—either by using a template or manually. 

Rock and roll—have a great day, and I'll see you on the console!
