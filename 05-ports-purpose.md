# Ports & Purpose

## Switch Port Details

### Port Label

This is where you can find which ports are used for which purpose on each switch. This is also where you place the sticker that matches the switch upon the last update of the switch config prior to the event.

> **IMPORTANT**: Do NOT plug in any cables into the switch unless you are 100% sure that is the correct port. If you don't know, please ask a member of the tech team for help.

---

## Access Points

### OpenWrt One

```
Port Layout:
[1] Ethernet (Internet)
[2] Ethernet (2)
[3] Ethernet (3)
[4] Ethernet (4)
[5] Power
```

Plug Ethernet into "Internet" port (port 1).

### OLD STYLES

```
[1] "Yellow" port - Ethernet
[2] Power port
```

Plug the Ethernet cable into the "Yellow" port.

Plug the AC Power Cord into the power port.

#### Using POE (Power Over Ethernet)

1. Plug the male ethernet end of the POE into the "Yellow" port (1)
2. Plug the male power cord into the female power port (2)
3. Plug the Ethernet cord from wall or switch into the POE (3)

### OTHER AP STYLES

#### Linksys/Belkin

Plug Ethernet into "Internet" port (port 1).

---

## Raspberry Pi (Signage)

```
[1] Ethernet port
[2] USB-C power (if power is needed)
```

All Pi's we use for the show are powered by POE (Power Over Ethernet).

---

## Video Box

*(Get pictures at show - 2025)*

---

## Audio Box

*(Get pictures at show - 2025)*

---

## Quick Reference Table

| Device | Connection Type | Port | Notes |
|--------|----------------|------|-------|
| OpenWrt One | Ethernet | Internet | Primary port |
| OpenWrt One | Ethernet | 1-4 | Additional ports |
| Old AP Style | Ethernet | Yellow | POE variant uses this |
| Old AP Style | Power | Power | AC adapter |
| Linksys/Belkin | Ethernet | Internet | Primary port |
| Raspberry Pi | Ethernet | eth0 | POE powered |
| Raspberry Pi | Power | USB-C | Alternative power |

---

## Port Label Sticker

Port label stickers are generated upon release of the most recent version of the configuration. Get them from GitHub releases:

https://github.com/socallinuxexpo/scale-network/releases
