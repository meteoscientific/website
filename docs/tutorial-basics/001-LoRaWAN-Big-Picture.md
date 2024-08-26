---
sidebar_position: 1
---

# LoRaWAN - The Big Picture

# Lesson Overview: Understanding the Helium Network

Let's start with a map of the territory. You're going to hear some terms for the first time. If you don't understand them at first, don't worry about it—we're just getting some reps in so that you have a chance to hear all these terms multiple times.

## Introduction to the Helium Network

Let's start at the very beginning. We are going to use what's called the **Helium Network**. The Helium Network is a global **LoRaWAN**, which stands for Long Range Wide Area Network. It's a wireless or radio network.

## How It Works

The way that the whole thing works is that there are sensors that you **deploy**, or put out in the wild.  Let's use the example of a soil moisture sensor. That sensor picks up data, like how moist the soil is. It then takes that data and puts it into what's called a packet. This packet is sent wirelessly over the radio waves to a local **Hotspot**. There are hotspots all over the place; in fact, in the developed world, there's probably nowhere that is not covered by a hotspot as far as radio coverage.

The sensor sends the packet up to the hotspot. The hotspot receives the packet and sends it on to what's called an **LNS**, or a LoRaWAN Network Server. 

Once it gets to the LNS, that packet gets decoded. When it goes over the air, it's sent in really short form and might look like something random, such as `l7294 = 4B`. Whatever it is, it needs to be decoded. It'll get decoded to something like "the soil moisture is 72%," "the temperature is 82 degrees," or "the relative humidity is XYZ."

Once that packet is decoded in the LNS via a **Console** (one of which is run by MeteoScientific), it is then sent to an **app**, where you or your customers get to see it. That will be a graph of the temperature over time, a graph of the soil moisture over time, or an indication of whether or not a rat is in a trap or a porta potty is full—however you're using sensors and devices in your business.

## Summary

And that's it—that's the 30,000-foot view of the network that we're going to be using, and that's all you need to start using it.

## Next Steps

The first two things I'd like you to do from here are:

1. Open up a [Console Account with MeteoScientific](https://console.meteoscientific.com/front/login).  It's free to open and poke around, and if you want to test out some sensors $10 will go a long way, but more on that later.  

2. Rock and roll!

