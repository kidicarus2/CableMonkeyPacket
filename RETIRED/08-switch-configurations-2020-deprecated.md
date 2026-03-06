# SCaLE Switch Configurations (2020 - Deprecated)

> **Note**: This document contains legacy switch configurations from 2020 and is kept for historical reference. Current configurations should be generated from the repository.

---

## Switch Port Assignments

### Booth (Expo Hall Switch)

| Ports | Usage |
|-------|-------|
| Ge0/0/0 - Ge0/0/1 | Trunk Uplink to Catwalk |
| Ge0/0/2 - Ge0/0/7 | Reserved |
| Ge0/0/8 - Ge0/0/17 | Trunk AP's |
| Ge0/0/18 - Ge0/0/47 | Disabled |

---

### Catwalk

| Ports | Usage |
|-------|-------|
| Ge0/0/0 | Trunk Link to EX Router |
| Ge0/0/1 | Trunk Downlink to Ballroom F |
| Ge0/0/2 | Trunk Downlink to Ballroom G |
| Ge0/0/3 | Trunk Downlink to Ballroom H |
| Ge0/0/4 - Ge0/0/29 | Trunk Downlinks to Booths |
| Ge0/0/30 - Ge0/0/47 | Disabled |

---

### cfAV (Conference AV)

| Ports | Usage |
|-------|-------|
| Ge0/0/0 | Trunk Uplink |
| Ge0/0/1 | Trunk Downlink |
| Ge0/0/2 - Ge0/0/7 | Trunk AP's |
| Ge0/0/8 - Ge0/0/11 | Digital Signage |
| Ge0/0/12 - Ge0/0/47 | AV VLAN |

---

### cfCTF (Conference CTF)

| Ports | Usage |
|-------|-------|
| Ge0/0/0 - Ge0/0/47 | CTF VLAN |

---

### cfIDF (Conference IDF)

| Ports | Usage |
|-------|-------|
| Ge0/0/0 - Ge0/0/1 | Trunk Link to CF Router |
| Ge0/0/2 - Ge0/0/17 | Trunk |
| Ge0/0/18 - Ge0/0/21 | CTF VLAN |
| Ge0/0/22 - Ge0/0/47 | Disabled |

---

### cfRoom (Conference Room)

| Ports | Usage |
|-------|-------|
| Ge0/0/0 | Trunk Uplink |
| Ge0/0/1 | Trunk Downlink |
| Ge0/0/2 - Ge0/0/7 | Reserved |
| Ge0/0/8 - Ge0/0/17 | Trunk AP's |
| Ge0/0/18 - Ge0/0/21 | Digital Signage VLAN |
| Ge0/0/22 - Ge0/0/27 | AV VLAN |
| Ge0/0/28 - Ge0/0/29 | Speaker VLAN |
| Ge0/0/30 | N6S Station |
| Ge0/0/31 | HAM Link to N6S to Expo |

---

### exIDF (Expo IDF)

| Ports | Usage |
|-------|-------|
| Ge0/0/0 | Trunk Link to EX Router |
| Ge0/0/1 | Trunk Downlink to Ballroom F |
| Ge0/0/2 | Trunk Downlink to Ballroom G |
| Ge0/0/3 | Trunk Downlink to Ballroom H |
| Ge0/0/4 - Ge0/0/7 | Trunk Unassigned |
| Ge0/0/8 - Ge0/0/17 | Trunk AP's |
| Ge0/0/18 - Ge0/0/21 | Digital Signage VLAN |
| Ge0/1/0 | Fiber Uplink to exMDF switch |

---

### exRoom (Expo Room)

| Ports | Usage |
|-------|-------|
| Ge0/0/0 | Trunk Uplink |
| Ge0/0/1 | Trunk Uplink |
| Ge0/0/2 - Ge0/0/7 | Reserved |
| Ge0/0/8 - Ge0/0/17 | Trunk AP's |
| Ge0/0/18 - Ge0/0/21 | Digital Signage VLAN |
| Ge0/0/22 - Ge0/0/27 | AV VLAN |
| Ge0/0/28 - Ge0/0/29 | Speaker VLAN |
| Ge0/0/30 - Ge0/0/47 | Disabled |

---

### Registration

| Ports | Usage |
|-------|-------|
| Ge0/0/0 - Ge0/0/1 | Trunk Uplink |
| Ge0/0/2 - Ge0/0/7 | Reserved |
| Ge0/0/8 - Ge0/0/15 | Trunk AP's |
| Ge0/0/16 - Ge0/0/17 | Digital Signage VLAN |
| Ge0/0/18 - Ge0/0/19 | Reserved |
| Ge0/0/20 - Ge0/0/39 | Registration VLAN |
| Ge0/0/40 - Ge0/0/46 | Reserved |
| Ge0/0/47 | Expo Infrastructure VLAN |

---

## VLAN Summary

| VLAN ID | Name | Description |
|---------|------|-------------|
| 1 | Default | Expo Infrastructure |
| - | CTF VLAN | Capture The Flag area |
| - | AV VLAN | Audio/Visual equipment |
| - | Speaker VLAN | Speaker network |
| - | Registration VLAN | Registration desk |
| - | Digital Signage | Signage network |

---

## Notes

- This configuration is from 2020 (Pasadena venue)
- Current configurations should be generated using the switch-configuration Makefile
- See current documentation in `switch-configuration/README.md`

---

*Deprecated: 2020*
