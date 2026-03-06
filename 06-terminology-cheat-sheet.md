# Terminology Cheat Sheet

## SCaLE Tech Team - Key Terms

### Version Control

#### GIT
A distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.

#### GitHub
Our primary remote source control system that hosts several git repositories.

#### Shell Script
A shell script is a computer program designed to be run by the Unix shell, a command-line interpreter. The various dialects of shell scripts are considered to be scripting languages. Typical operations performed by shell scripts include file manipulation, program execution, and printing text.

---

### Network Infrastructure

#### MDF (Main Distribution Frame)
A centralized location where the primary networking equipment (such as routers, switches, and servers) connects to the external network, often the primary point for the internet connection. It serves as the central hub that connects to various IDFs throughout the venue.

#### IDF (Intermediate Distribution Frame)
A secondary network distribution point that connects to the MDF. IDFs are used in large venues to extend the network from the MDF to different areas via Ethernet or fiber, typically housing switches that connect to access points or wired devices.

#### NOC (Network Operations Center)
A centralized space where the network and IT infrastructure are monitored and managed in real time. The NOC ensures smooth operations, troubleshooting issues, monitoring network performance, and ensuring uptime during the conference.

---

### Hardware

#### Switch
A device that connects multiple devices within a wired network. It uses Ethernet cables to connect computers, servers, and other devices and forwards data only to the devices that need it. In a conference setting, switches distribute network traffic to access points or wired devices.

#### Servers
Powerful computers that run our core services across the conference. These services include: DHCP, DNS, Signs, Logging, and Monitoring.

#### Access Point (AP)
A device that allows wireless devices to connect to a wired network using Wi-Fi. APs create wireless local area networks (WLANs) and are strategically placed to ensure coverage throughout the venue.

**CURRENT**: OpenWRT

#### Pi (Digital Sign)
Refers to a Raspberry Pi, a small, affordable, single-board computer often used to control digital signage. For example, Raspberry Pis can be used to display schedules, announcements, or directions on screens throughout the venue during the conference.

---

### Cables & Connectors

#### Ethernet Cable
A physical cable used to connect devices to a wired network. Common types include Cat5e, Cat6, and Cat6a, which differ in their maximum data transfer speeds and distances. Ethernet cables are used for both the backhaul and to connect wired devices to the network.

#### Fiber Cable
Fiber optic cables used to connect high speed and long runs on our network. Typically used to connect multiple buildings.

#### RJ45 (Network Jack)
A standardized physical connector commonly used for Ethernet networking. It's the plug on the end of an Ethernet cable, designed to fit into an Ethernet port, such as those on a computer, switch, or access point.

#### POE - Power Over Ethernet
A technology that allows Ethernet cables to carry electrical power, enabling access points to be powered without needing additional power outlets.

---

### USB Connectors

| Type | Description |
|------|-------------|
| USB-A | The standard rectangular connector used in most devices |
| USB-B | Larger, square connector, often used in printers or older devices |
| USB-C | A newer, smaller, reversible connector with faster data transfer rates, used in many modern devices |
| Micro-USB | A smaller connector used in many older mobile devices and accessories |
| Mini-USB | An older, smaller connector that was commonly used in early digital cameras and other small devices |

---

### Video Connectors

#### HDMI (High-Definition Multimedia Interface)
A cable and port used for transmitting high-definition video and audio between devices like laptops, projectors, and monitors.

| Type | Description |
|------|-------------|
| Standard HDMI (Type A) | The most common size used in TVs, monitors, and projectors |
| Mini HDMI (Type C) | A smaller version used in some portable devices like cameras and tablets |
| Micro HDMI (Type D) | An even smaller version for very compact devices |

#### DisplayPort
A comparable open-source alternative, managed by the VESA (Video Electronics Standards Association), is an open standard for transmitting video and audio, and it does not require the same licensing fees as HDMI. DisplayPort is widely used in computer monitors and some laptops and offers many of the same features as HDMI including support for high resolutions and multi-channel audio.

---

### Power

#### AC Power Adapter - Wall Wart
A wall wart is a slang term for an external AC power adapter that plugs directly into a wall outlet. It converts high-voltage AC power from the outlet into lower-voltage DC power, which is used to power various electronic devices, such as routers, modems, and other small appliances.

---

### Tools

| Tool | Purpose |
|------|---------|
| Cable Tester | To ensure Ethernet cables are properly wired and functioning before deployment |
| Punch Down Tool | For terminating wires into network jacks or patch panels |
| Crimping Tool | Used for attaching connectors (like RJ45) to the ends of Ethernet cables |

---

### Wireless Terms

#### SSID (Service Set Identifier)
The name of a Wi-Fi network. It's broadcast by the access points to allow devices to find and connect to the wireless network.

#### Frequency Band
The range of radio frequencies used to transmit data over wireless networks. Wi-Fi typically uses 2.4 GHz and 5 GHz bands. The 5 GHz band allows faster data rates, but its range is shorter than 2.4 GHz.

#### Channel
A specific frequency within a Wi-Fi band used to avoid interference between multiple access points. Channels must be properly configured to prevent overlap, which can degrade performance.

---

### Network Performance

#### Bandwidth
The amount of data that can be transmitted over a network connection in a given time, measured in bits per second (bps). Higher bandwidth enables more data to be transmitted, improving speed and performance.

#### Latency
The time it takes for data to travel from the sender to the receiver, measured in milliseconds (ms). Lower latency is critical for real-time applications like video streaming or voice calls.

#### Throughput
The actual amount of data successfully transferred over a network in a given period, typically measured in megabits per second (Mbps). It reflects the real-world performance of the network.

---

### Network Concepts

#### Mesh Network
A network topology where multiple access points are wirelessly connected to each other, extending coverage without needing additional cabling. This can be useful in large venues.

#### Backhaul
The communication path that connects the access points to the central network infrastructure, typically using wired connections (Ethernet or fiber) or wireless links (microwave or radio).

#### Rogue Access Point
An unauthorized or malicious access point that can compromise network security or cause interference, often inadvertently created by attendees connecting their own routers.

#### Network Congestion
Occurs when the demand for bandwidth exceeds the available capacity, causing slower speeds and delays. Proper planning and management of traffic can minimize congestion.

---

### Security

#### WPA2/WPA3 (Wi-Fi Protected Access)
Security protocols used to protect wireless networks. WPA2 is widely used, but WPA3 offers improved encryption and protection against brute-force attacks.

#### Firewall
A security system that monitors and controls incoming and outgoing network traffic based on predefined rules. It helps prevent unauthorized access and protects against malicious activity.

#### AP Isolation
A security feature that prevents devices connected to the same access point from communicating directly with each other. This is often used to protect users from potential threats in public Wi-Fi environments.

---

### Network Services

#### DHCP (Dynamic Host Configuration Protocol)
A protocol that automatically assigns IP addresses to devices connected to the network, making it easier for attendees to connect without manual configuration.

#### VLAN (Virtual Local Area Network)
A technology used to segment network traffic into different logical networks, enhancing security and performance. For example, separating attendee traffic from staff or vendor traffic.

#### QoS (Quality of Service)
A set of technologies that prioritize certain types of traffic, such as giving priority to voice or video traffic over general browsing, ensuring critical services remain responsive.

---

### Planning & Analysis

#### Heatmap
A graphical representation of wireless signal strength throughout a physical area. Heatmaps are used to plan access point placement and ensure optimal coverage across the venue.

#### Captive Portal
A web page that users must interact with before gaining access to the internet. Often used for authentication, payment, or terms acceptance in public Wi-Fi networks.

#### Wi-Fi Analyzer
A tool used to detect, measure, and monitor the performance of wireless networks, identifying signal strength, interference, and channel usage.

---

### Wi-Fi Standards

#### 802.11ac / 802.11ax (Wi-Fi 5 / Wi-Fi 6)
Wi-Fi standards that define the speed, capacity, and features of wireless networks. Wi-Fi 6 (802.11ax) offers improved speed, capacity, and efficiency over older standards, making it more suitable for high-density environments like conferences.

---

### Additional Terms

#### RF Interference
Disruption caused by other wireless devices (such as microwaves, Bluetooth, or other Wi-Fi networks) that can degrade wireless performance. Identifying and mitigating RF interference is key to stable performance.

#### Load Balancing
Distributing the network traffic evenly across access points to ensure no single point is overwhelmed, which helps maintain performance, especially in crowded environments.

#### Gaffers Tape
A strong, cloth-backed tape commonly used in the event industry to secure cables and equipment to floors or other surfaces without leaving sticky residue. It is ideal for managing cables to prevent tripping hazards during the conference.
