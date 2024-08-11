---
title: FAQ
description: Frequently Asked Questions about MeteoScientific.
---
## What is the difference between an App and Console?

In some of the videos on YouTube, you'll see me referring to the **App*.  When I first started MetSci, I also ran a separate application where you could see the output from your sensors.  I've since shut that down; there are better options on the market.

*Console* is the thing that allows a sensor to connect to the network, then routes the information that comes from the sensor to the right “integration”, which is an app (like Datacake or others).  

## I’m not really into technology but I want to learn this, is it hard?

It’s like learning a trade; at first everything seems overwhelming or maybe a little confusing, but you’ll get the hang of it. If you’re willing to put in about 3 hours of work watching videos and following along with tutorials, you’ll be ahead of all the people who are too scared to start. We think that understanding and using this technology opens up a world of opportunity to you. The real question is: Do you want to explore a new world?

## How reliable Is LoRaWAN?  
LoRaWAN as a technology is pretty reliable.  It's not bombproof, but it's "robust".  Most of your problems will be in setting the thing up, and then remembering to replace the batteries, which is usually such a long time frame that you can forget you even had the sensor if you're not using it all the time.

## How reliable is MetSci?
We're pretty reliable, but this is mostly a "self-serve" operation. I don't have any plans to stop offering this as a service, but if you're going to build a fleet of 10,000 sensors there are better options.  

If you're more of a DIY muck-about-er and you need more than a 1-day demo account [which Helium offers](https://console.helium.com/), this is a good place for you.

MetSci is much more of a side-project than it is my full time job, so you won't get immediate 24/7 responses to your queries or requests.  Most of the time it'll be a day or three before I get back to you.  If you want full-time badass hardcore Console action, you should talk to [Disk91](https://www.disk91.com/2024/news/lpwan/evolution-of-usage-on-the-helium-iot-network/).  It won't be cheap and it ain't permissionless, but it'll be excellent.


## How do I use Console?

We’ve got a bunch of videos over on the [MetSci YouTube channel](https://www.youtube.com/@meteoscientific) detailing how to use Console, you can find them here. If you just want to sign up and blunder around a bit (some people learn best by doing), you can sign up here.

## What is LoRaWAN?

LoRaWAN stands for Long Range Wide Area Network. It’s a type of wireless protocol (radio frequency along with rules for how much and how often data can be sent) that allows you to send small packets of data long distances and through obstacles using a very low amount of power. LoRaWAN is excellent for sending stuff like a temperature reading every 10 minutes (or 24 hours). That’s a tiny amount of information being sent out occasionally. LoRaWAN is NOT good for video, or even phone or text messages; that’s just too much information.

## I found a bug, who should I tell?
Please submit a PR through the MetSci Github.  Yes, I know that's a PITA if you haven't done one before.  Sorry, that's the best way to keep these out in the open and get multiple eyes on 'em.