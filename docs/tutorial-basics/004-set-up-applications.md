---
sidebar_position: 4
---
# Applications 

## Introduction to Applications

When you're in your [Console](https://console.meteoscientific.com/front/login) and first sign in, go down to **Applications** on the left-hand side. I've already set up a couple of applications, but before we jump into those, let's take a look at what an application actually is.

### What is an Application?

It's really simple:  An **application** is just a group of devices that are similar. For example, it could be a group of weather stations, trash can fill level sensors, traffic counters, or parking sensors at a specific garage.

The really important thing with applications, especially at the beginning, is to think about and organize your **naming convention**. 

I use a naming convention that includes the client group, device type, etc. For example, it might be something like "Acme Parking Occupancy Sensor Franklin Garage Daily." These names make sense to me, but they may not make sense to you, and that's totally fine. If you're not the only user on the account, you might want to add a brief description to explain the naming convention.

### Creating a New Application

Let's go ahead and add a new application. Using the example I just gave, you might name it "Acme Occupancy Franklin Daily." You can also add a description, like:

```This is the Acme account using parking sensors to measure occupancy at the Franklin garage.```

Once you've filled in the details, hit Submit, and the new application will be created. 

You can see it listed in the Applications section. If you need to make changes, just click on the application again, and go over to Application Configuration. For example, if you made a typo like "garag" instead of "garage," just correct it and hit the Submit button to save the changes.

### Adding Devices
Next, let's talk about adding devices. Right now, I don't have any devices in this application, but I will show you how to add one in the next lesson. It's a pretty simple process, but for now, let's stick with the basics of applications.

### Multicast Groups
The next tab you'll see is Multicast Groups. A multicast group is a way to send the same downlink to every device in an application. For instance, if you want to tell all the parking sensors to report every five minutes instead of every ten minutes, you would send a downlink using a multicast group.

### Integrations
Finally, let's discuss Integrations. What we're mostly going to be doing is using HTTP integrations. To give you a quick preview of what that might look like, I'll show you an example over at app.meteoscientific.com. You can sign up for this as well if you want to.

At the time this was written on June 8th, 2023, there wasn't much available, but you can still see how I have a bunch of different regions set up. Think of each region as an application. For example, all the soil moisture sensors in Region Three might have a different setting than those in Region Four—perhaps we're growing roses in Region Three and oak trees in Region Four, so we need different uplink intervals. You can set up these applications in whatever way suits your needs.
