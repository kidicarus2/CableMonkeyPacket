# SCaLE 23x - Show Setup Plan

## Tech Team Mission

Providing the best, open network possible for attendees, speakers, and sponsors.

## Prime Directives for 23x

1. WiFi doesn't suck
2. Cabling looks good

## Room Layouts for 23x

https://docs.google.com/spreadsheets/d/1X_xR7MbCXd2M-XjZxDOQSh6LIHLpzBIwpy_qBeCaeQ0/edit?gid=0#gid=0

## Pre Show

- [ ] IPv6 Prefix from HE - Owen confirmed we are keeping our existing IPv6 prefix (YES)
- [ ] Identify all rooms layouts drop dead date for deployment
- [ ] Create maps showing desired AP locations in rooms (need to confirm room layouts)
- [ ] Pre-ordered wired connections for expo vendors if needed
- [ ] Order Rental Truck from Galpin
- [ ] Send PO approval doc to Galpin confirming order
- [ ] Confirm game night location (on-site or off)
- [ ] Confirm order and delivery of radios and repeater for Volunteer Staff
- [ ] Confirm who orders TVs and where are their locations
- [ ] Confirm walkie talkie order
- [ ] Optimal config all deployed on 1 building?
- [ ] Complete wire layout plan/map
- [ ] Add 15ft to all AV cable length plan
- [ ] TV placement for conference (send to Michael Proctor)
- [ ] Order Small tables w/table cloths to cover switches (as needed)

### Ballrooms
- B, C, D/E (2x), F, H

### Conference Rooms
- 101, 105, 106, 107, 207, 208, 209, 211

### Inventory
- [ ] Inventory APs in use and facts/ap/apuse.csv
- [ ] Inventory RPis in facts/pi/pilist.csv
- [ ] Email to tech maillist asking for help at Storage on Monday @ 8am (Steve)
- [ ] Confirm wall fixes from PCC (if any)
- [ ] Is parking included for volunteers with rooms (check with Ilan) - No parking is not covered
- [ ] Add all known tech volunteers to the SCALE registration spreadsheet for volunteer passes
- [ ] Add github token to each nixos machine to ensure that github rate limits don't affect ability to read from github for flake inputs.

---

## Sunday 3/1

**Start Time**: 7pm

### Goals

- [ ] Confirm full access to storage (codes and keys)
- [ ] Core network hardware available for deployment Monday morning
- [ ] Initial setup team account for

### Schedule

| Time | Task | Who |
|------|------|-----|
| 7:00pm | Pick up NOC tool box, Routers, and certain switches from storage (IDFs, NOC) | Rob/Owen |
| 9:00pm | Public Storage closes | - |

---

## Monday 3/2

**Start Time**: 10am (7am for Storage)
**Encore**: 1 team member 12pm-10pm

### Goals

- [ ] NOC has internet access
- [ ] All wallports toned and updated in spreadsheet
- [ ] NOC setup for tech team
- [ ] Deploy Walkie Talkie repeater (Czar)
- [ ] APs flashed
- [ ] Switches flashed

### Schedule

| Time | Task | Who |
|------|------|-----|
| 6:00am | Public Storage Opens | - |
| 7:00am | Pickup truck from Galpin in Hollywood | David (Res #: 816151) |
| 7:00am | Pick walkie talkie order from front desk | Rob (Fedex #: 510907267878) |
| 8:00am | Load carts from storage | David/Steve + 3 volunteers |
| 9:00am | Unload carts at conference center | David/Steve + 3 volunteers |
| 9:00am | Return trailer/truck | David |
| 10:00am | Breakfast | - |
| 12:00pm | Make contact with conference tech liaison | Leon (2025) |
| 12:00pm | NOC, AV NOC, IDFs switches flashed with configs | Rob/Owen |
| 12:00pm | Move IPv6 Prefix from HE to PCC | Owen |
| 12:00pm | Deploy network routers | Rob/Owen |
| 12:00pm | Start setting up Core servers | Kyle |
| 12:00pm | Setup Massflash station | Rob |
| 12:00pm | Deploy walkie talkie repeater on roof | - |
| 12:00pm | Appoint a Walkie Talkie Czar | - |
| 12:00pm | Fill out walkie talkie tracking paperwork | - |
| 12:00pm | Set up Printer & Print cable deploy info | Steve/Steven |
| 12:00pm | Tone Network jacks, update NETWORK JACK SHEETS | - |
| 12:00pm | Flash APs via Massflash | Rob/Kyle |
| 12:00pm | Flash Switches | Owen |
| 12:00pm | Sign server updates | Kyle |
| 12:00pm | Test for PMTU | - |

---

## Tuesday 3/3

**Start Time**: 9am
**Encore**: 2 team members (1: 9am-7pm, 1: 12pm-10pm)

### Goals

- [ ] All ports patched in both buildings
- [ ] WiFi completely up in Conference building
- [ ] Network monitored and operational (Erik)
- [ ] Sign and Reg Pis Flashed
- [ ] Deploy Meshtastic repeater (Ghriz)
- [ ] Deploy Carts to individual locations in buildings
- [ ] Deploy bins to each room
- [ ] Stretch Goal: Catwalk Switch operational and catwalk drops connected and ready to throw down to show floor

### Schedule

| Time | Task |
|------|------|
| 9:00am | Add AP's to Room Bins |
| 9:00am | Add and Remove Ethernet cables for each room bin (Pick & Pull List) |
| 9:00am | Build Room 211 workshop bin - Needs: 6 dumb switches, various sizes of ethernet 7ft, 10ft, 15ft |
| 9:00am | Patch data jack ports using "PATCH LIST" |
| 9:00am | CONF IDF (mandatory) |
| 9:00am | BALL C IDF (can move to Wed) |
| 9:00am | BALL F IDF (can move to Wed) |
| 9:00am | CATWALK IDF (can move to Wed) |
| 9:00am | Deploy Carts to respective locations |
| 9:00am | Deploy Bins to respective rooms |
| 9:00am | Room deployment (Conference Building) |
| 9:00am | Switches up and running |
| 9:00am | Deploy 2 cables to podium (mark with Orange Tape) |
| 9:00am | Deploy 1 cable to AV audio equipment (mark with Green Tape) |
| 9:00am | Deploy cable to camera location (mark with Green Tape) |
| 9:00am | Deploy APs (with cables) |
| 5:00pm | SCaLE AV is planning on moving their stuff from storage to the AV NOC |

---

## Wednesday 3/4

**Start Time**: 9am
**Encore**: 1 team member 9am-7pm

### Goals

- [ ] WiFi in Expo Building is completely deployed
- [ ] Scale Signs deployed on all TVs
- [ ] Registration is completely deployed
- [ ] Misc: BYO AV Setups operational
- [ ] Stretch Goal: WiFi Survey especially in the common areas (downstairs conf center in particular)

### Schedule

| Time | Task |
|------|------|
| 9:00am | Cable Team Briefing (Steven) |
| 9:00am | Cable Wrap Demo (Steven) |
| 9:00am | Clearly mark AV Wires (Green tape). Speaker Wires (orange tape) |
| 9:00am | Start deploying Expo Building Ballrooms: |
| - | AP deployment |
| - | AP distance location |
| - | AV computer cable |
| - | AV camera cable |
| - | AV mixer cable |
| - | Speaker network cable |
| - | Tape down cables across any walkways |
| 12:00pm | SCaLE AV Team to setup equipment for SCaLE |
| 12:00pm | PCC TV delivery |
| 12:00pm | Deploy sign RPis |
| 12:00pm | Expo Booth Setup |
| 12:00pm | Deploy expo hall switches |
| 12:00pm | Deploy expo hall APs |
| 12:00pm | Expo hall AP distance location |
| 12:00pm | Reg Setup |
| 12:00pm | Reposition Reg switch |
| 12:00pm | Cable Reg AP across from reg switch |
| 12:00pm | PI kiosk stations |
| 12:00pm | AP distance location |
| 5:00pm | Scale Registration Opens |
| 5:00pm | Check what is and isn't up before Thursday |

### Post-Setup Tasks

- [ ] Switches completely deploy
- [ ] Wifi everywhere
- [ ] AV needs met
- [ ] Monitoring
- [ ] Registration
- [ ] Signs

### BYO AV Setups (Conferences with their own AV)

| Room | Organization | Notes |
|------|--------------|-------|
| Ballroom F | Kwaai | Drop for Speakers VLAN for 3rd party AV - layout supporting 4 person panel, table with person behind it, and three tripods |
| Conf 101, 104 | Planet Nix | Drop for 3rd party AV - Still need to check with organizers on needs |

### Cleanup for Start of Show

- [ ] Move carts CART (5, 4, 6) to expo hall behind curtains
- [ ] CART (2) to conf. Halls downstairs walkway
- [ ] CART (1, 3) in NOC
- [ ] Check for stray bins

---

## Thursday 3/5

**Start Time**: 8am
**Encore**: 1 team member 8am-6pm

### Goals

- [ ] WiFi in Expo Hall deployed
- [ ] Conference building ready for co-located events
- [ ] WiFi Survey especially in all common areas
- [ ] Stretch Goal: start prepping for game night (on site)
- [ ] Stretch goal: Attend some talks

### Schedule

| Time | Task |
|------|------|
| 9:00am | Nix Planet Starts |
| 10:00am | All other of Co-located events start |
| 10:00am | Conf open (ballrooms and conf upstairs) |
| 10:00am | pre-ordered wired connections for vendors deployed |
| 10:00am | WiFi Survey especially in the common areas |
| 10:00am | Game night setup (ball I/J and game APs) |
| 10:00am | Identify game night connectivity |
| 10:00am | Wall ports for ballrooms I, J |
| 10:00am | APs in ballrooms I, J |
| 10:00am | AP distance location |
| 10:00am | Wall ports in game night area |
| 10:00am | APs along walls |
| 10:00am | AP distance location |
| 10:00am | Find locations for APs in game area, not against wall |
| 10:00am | Prep Room 211: |
| - | Deploy bin and hardware for Room 211 |
| - | Confirm speaker drop in Room 211 is working |
| 2:00pm-5:00pm | Room 211 - Workshop: Self-hosting a Secure Home Lab - Provide support since we provided some hardware |
| 5:00pm | Cable Monkey Welcome Committee - welcome vendors and ask if they need any ethernet cables |
| 5:00pm | Pre-ordered wire drops/connections for vendors deployed |
| 5:00pm | AWS has requested (2) drops: |
| - | One at the rear of Booth 212 |
| - | One at the rear of Booth 216 |
| - | Booth 304 - Flox |
| - | Booth 100 - AREDN |
| - | Booth 201- CodeRabbit |
| 6:00pm | Reconfigure APs for room reconfigurations: |
| - | Migrate APs in Ballroom A, B, C, G |
| - | Migrate APs in Conf 103, 107, 211 |

---

## Friday 3/6

**Start Time**: 8am
**Encore**: 1 team member 8am-6pm

### Goals

- [ ] Expo Hall ready for attendees
- [ ] Attend some talks

### Schedule

| Time | Task |
|------|------|
| 2:00pm | Expo Hall opens |
| 6:00pm | Reconfigure APs for room reconfigurations: |
| - | Migrate APs in Conf 207, 208 |

---

## Saturday 3/7

**Start Time**: 8am
**Encore**: 1 team member 8am-6pm

### Goals

- [ ] Game night AP & Network deployed
- [ ] Truck picked up from rental company

### Schedule

| Time | Task | Who |
|------|------|-----|
| 9:00am | - | - |
| 12:00pm | Pickup Truck from Galpin Hollywood | Steven (Res #: 8161525) |
| 5:00pm | Game Night Starts | - |

---

## Sunday 3/8

**Start Time**: 8am
**Encore**: 1 team member 8am-6pm, 1 team member 10am - 8pm

### Goals

- [ ] No interruptions to speakers during teardown
- [ ] Carts and equipment are returned to storage
- [ ] Tech Team is able to make Scale Team dinner @ 7pm
- [ ] Truck returned to Galpin before midnight

### Schedule

| Time | Task | Who |
|------|------|-----|
| 1:00pm | Confirm time and location of department heads meeting | Rob |
| 1:00pm | Plan early breakdown of this room | - |
| 1:00pm | Cable wrap review and competition | Steven |
| 2:00pm | Expo hall is open until 2pm | - |
| 2:00pm | **EXPO HALL ONLY - Cable teardown for starts promptly at 2pm**: |
| - | Collect all APs | - |
| - | Collect all Switches and power cords | - |
| - | Collect all downstairs cables | - |
| - | Collect all drop cables and Catwalk IDF switch | - |
| 2:30pm | Deploy carts around show | - |
| 2:30pm | Tear down the room where the chair meeting will occur (Place everything just outside the door) | - |
| 2:30pm | **Tear Down Rooms**: |
| - | Registration (may be able to start early afternoon) | - |
| - | Same crew for Expo should start on this as soon as they finish | - |
| - | Expo or 3 PM whichever is later | - |
| - | Ballrooms/ballhall | - |
| - | Ball F | - |
| - | Ball C | - |
| - | Ball I/J | - |
| 3:00pm | End of the last session except for the keynote | - |
| 3:00pm | **Tear Down Rooms**: |
| - | Lower conf (100 rooms) | - |
| - | Upper conf (200 rooms) | - |
| - | Ballrooms | - |
| - | Ball A | - |
| - | Ball B | - |
| - | Ball G | - |
| - | Ball H | - |
| - | Pis, APs get returned to the noc via clear bin, all other wires/power strips, wall warts go into room bins (we need to wait for AV to say they are finished) | - |
| - | Carts go by the rooms to pick up bins and switches | - |
| 4:00pm | Keynote ends | - |
| 4:00pm | Rob and Owen go to IDFs and restore PCC IDFs/MDFs and pull IDF/MDF switches and routers return to NOC and load onto carts | Rob/Owen |
| 4:00pm | Pack up NOC | - |
| 4:00pm | Inventory APs for total accounted for | - |
| 4:00pm | Inventory Pis for total accounted for | - |
| 4:00pm | Load carts in trailer outside conference building, take to storage | - |
| 4:00pm | **Tear Down Rooms**: |
| - | Ball D/E | - |
| - | Ball Room Hallways | - |
| - | Collect Walkie Talkies (Walkie Czar) | - |
| - | Remove Walkie Repeater(s) | - |
| - | Remove Meshtastic Repeater | - |
| 6:00pm | Return carts to storage | Steven + 3 volunteers |
| 7:00pm | Make SCALE Team Dinner | - |
| 9:00pm | Public Storage closes | - |
| 11:30pm | Return truck to Galpin in Hollywood | Steven |

---

## POST 23x

- [ ] Submit expense reports to expense report software (individuals)
- [ ] Schedule post mortem
