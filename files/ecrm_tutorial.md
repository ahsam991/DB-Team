# ECRM Tutorial — Business ও Logic Documentation

> **ECRM (Enterprise Consumer Relationship Management)** — BAT Bangladesh (BATB) এর consumer engagement platform। এই ডকুমেন্টে ECRM-এর **business logic ও operational flow** গভীরভাবে ব্যাখ্যা করা হয়েছে — database/SQL details নয়।

---

## 📌 Table of Contents

1. [ECRM এক নজরে](#1-ecrm-এক-নজরে)
2. [কেন এই Business Exists](#2-কেন-এই-business-exists)
3. [কিভাবে Business চলে](#3-কিভাবে-business-চলে)
4. [Objectives ও Market/Product Analysis](#4-objectives-ও-marketproduct-analysis)
5. [Core Concepts — গভীর ব্যাখ্যা](#5-core-concepts--গভীর-ব্যাখ্যা)
6. [JML Process (Joiner-Mover-Leaver)](#6-jml-process-joiner-mover-leaver)
7. [Report Manager — ৫ ধরনের Report](#7-report-manager--৫-ধরনের-report)
8. [User Roles ও Access](#8-user-roles-ও-access)
9. [Agencies ও Coverage](#9-agencies-ও-coverage)
10. [Architecture — Business View](#10-architecture--business-view)
11. [Campaign Flow Logic](#11-campaign-flow-logic)
12. [৩০টি Flow Blocks — গভীর ব্যাখ্যা](#12-৩০টি-flow-blocks--গভীর-ব্যাখ্যা)
13. [৪টি Operational Reports — Business Logic](#13-৪টি-operational-reports--business-logic)
14. [Analytics Tasks (Campaign 161)](#14-analytics-tasks-campaign-161)
15. [AI Audio Verification (aai_ System)](#15-ai-audio-verification-aai_-system)
16. [Training/Practice Center](#16-trainingpractice-center)
17. [Portal Sections Map](#17-portal-sections-map)
18. [Team Credits](#18-team-credits)

---

## 1. ECRM এক নজরে

**ECRM** হলো একটি **Enterprise Consumer Relationship Management** platform — যা British American Tobacco Bangladesh (BATB)-এর জন্য তৈরি। এটি **field-force driven** একটি system, যেখানে:

- **RAs (Retail Agents)** / **BRs (Brand Representatives)** / **FF (Field Force)** মোবাইল app দিয়ে out-এ গিয়ে consumer-এর সাথে কথা বলে।
- প্রতিটি interaction-এ **survey** চলে — যা থেকে consumer-এর behavior, brand preference, demographics সংগ্রহ হয়।
- Collected data দিয়ে **future campaigns** design হয়, product analysis হয়, আর PTR (reward/gift) বিতরণ হয়।

**Platform-এর মূল ভিত্তি:**
| দিক | বিবরণ |
|-----|--------|
| User Type | Field force (mobile) + Management (web) |
| Engagement | Outlet-visit + one-on-one consumer conversation |
| Data Collection | Survey-based (dropdown, multipleChoice, contactNo ইত্যাদি) |
| Verification | OTP, audio recording, AI audio verification |
| Reporting | Daily, Live Observation, Call Checkback, Call Center |
| Deployment | PostgreSQL (AWS RDS) + BigQuery analytics |

> **মূল কথা:** ECRM শুধু একটা survey tool না — এটি BATB-এর সম্পূর্ণ **consumer engagement pipeline** — acquisition থেকে verification পর্যন্ত।

---

## 2. কেন এই Business Exists

ECRM-এর অস্তিত্বের পেছনে একটা **legal constraint** আছে — এটাই পুরো business model-কে define করে:

### 🚫 The Core Problem
**Smoking advertisements** public media (TV, billboard, newspaper) তে **আইনত নিষিদ্ধ**। Tobacco brand-এর advertising restriction এর কারণে traditional marketing channel-গুলো ব্যবহার করা যায় না।

### ✅ The Only Legal Solution
- Public advertising নিষিদ্ধ → **direct person-to-person consumer reach** mandatory।
- Smoker-দের কাছে পৌঁছানোর একমাত্র কার্যকর উপায় হলো **outlet visit** — যেখানে retailer-এর মাধ্যমে consumer-এর সাথে সরাসরি contact হয়।
- তাই **outlet-কেন্দ্রিক field force model** — পুরো ECRM-এর backbone।

> **Deep Thinking:** এই restriction-টাই decide করে — কেন platform mobile-first, কেন outlet = terminal point, কেন প্রতিটা interaction record করতে হয় (compliance), আর কেন audio/AI verification দরকার। Advertising না থাকায়, **বিশ্বাস ও verification**-ই BATB-এর brand reach-এর ভিত্তি।

---

## 3. কিভাবে Business চলে

একটা campaign-এর complete lifecycle:

```
1. Campaign Design
   ├─ Business Team survey questions তৈরি করে
   └─ Campaign components configure হয় (flow blocks)

2. Field Execution
   ├─ RA/BR outlet-এ যায়
   ├─ consumer (≥18) এর সাথে এক-এক interaction
   ├─ audio_start → recording শুরু
   ├─ survey questions → data collect
   └─ OTP verify + PTR/reward distribution

3. Monitoring
   ├─ Supervisor live observation (প্রক্রিয়া মানছে কিনা)
   ├─ Call checkback (consumer verify করে)
   └─ AI audio verification

4. Data & Insights
   ├─ Data BigQuery-তে replicate হয়
   ├─ Reports generate হয় (daily, call center, ইত্যাদি)
   └─ Analysis → future campaign design
```

### 🔄 The Feedback Loop (কেন data গুরুত্বপূর্ণ)
ECRM-এর সবচেয়ে গুরুত্বপূর্ণ business insight হলো **closing the loop**:
- Survey data → consumer behavior বোঝা
- Consumer behavior → পরবর্তী campaign-এর design
- Campaign → নতুন data → নতুন insight

প্রতিটা campaign আগের campaign-এর **data-driven learning** ব্যবহার করে আরও target-ভিত্তিক হয়।

---

## 4. Objectives ও Market/Product Analysis

### 🎯 ECRM-এর Objectives
- Consumer ও product-related data সংগ্রহ
- Survey = primary engagement ও insight tool
- Historical data collection ও analysis
- Competitor ও internal product analysis
- Requirement-based, campaign-wise marketing flow design

### 🏆 Competitor Analysis
- Competitor product offerings, promotions, campaign trends ট্র্যাক করে
- Market positioning, gaps, opportunities identify করে
- SOB (non-BATB) products-এর উপর focus

### 📦 Own Product Analysis
- নিজের product-এর sales trends
- Customer engagement level
- Survey feedback
- Product lifecycle stage (launch → growth → maturity)

### ✨ New Product Promotion
- Target audience identify
- Pre-launch validation (survey দিয়ে)
- Pilot campaigns
- Post-launch performance tracking

### 📈 Expected Benefits
- ভালো customer understanding
- Traditional ads-এর উপর dependency কমে
- Data-driven decisions
- Better product-market fit
- Higher ROI

---

## 5. Core Concepts — গভীর ব্যাখ্যা

### 👥 User vs Consumer

| | User | Consumer |
|---|------|----------|
| **কে?** | যে eCRM app ব্যবহার করে | যার data survey দিয়ে collect হয় |
| **ভূমিকা** | Survey চালায়, campaign manage করে | উত্তর দেয়, data provider |
| **Example** | RA, AC, SUP | দোকানে আসা smoker (≥18) |

> **Deep Thinking:** এই পার্থক্য critical — কারণ whole system two-sided: **user** হলো collector (field force), **consumer** হলো source (data)। Report-গুলো এই দুই side-কে আলাদা করে track করে।

### 🏷️ Product Classifications — Franchise vs SOB

| Type | অর্থ | Example |
|------|------|---------|
| **Franchise** | Core BATB brands | BATB-এর নিজস্ব ব্র্যান্ড |
| **SOB** (Secondary Own Brand / competitor) | Non-BATB products | Competitor বা external products |

> **Why এই পার্থক্য:** Competitor analysis করতে SOB tracking দরকার — "আমাদের brand কতটা market-এ, competitor কতটা" বুঝতে।

### 🏬 Outlet = POS = Retailer
- **Outlet, Retailer, এবং POS (Point of Sale)** — সব একই entity।
- **Terminal point for contact** — সব consumer/retailer contact এখানেই হয়।
- Campaign terminal point সাধারণত POI (Point of Interest); কখনো Cluster।
- প্রতিটা outlet একটা cluster-এর সাথে assigned।

> **Deep Thinking:** Outlet-কেন্দ্রিক model কেন? কারণ outlet-ই সেই physical place যেখানে target consumer (smoker) কে পাওয়া যায়। পুরো hierarchy শেষ পর্যন্ত outlet-এ converge হয়।

### 🎁 PTR — Purchase Through Retail
- **PTR = Reward = Gift**
- Campaign চলাকালীন consumer-কে দেওয়া reward/gift
- Example: Lighter, Body Spray, promotional items
- Materials table-এ store হয়, contacts-এর সাথে link
- Promotional Material Templates define করে

> **Deep Thinking:** PTR-ই field force-এর "currency" — RA-রা এই gift দিয়ে consumer-কে engage করে। তাই PTR tracking report-গুলো business-এর জন্য vital (কোন gift কতটা effective)।

### 🏷️ Brand Definitions — Primary / Secondary / Previous

| Brand Type | অর্থ |
|-----------|------|
| **Primary Brand** | Consumer সাধারণত যে brand smoke করে |
| **Secondary Brand** | Primary unavailable হলে যে brand smoke করে |
| **Previous Brand** | আগে যে brand smoke করত (NULL before Q1 2025) |

> **Deep Thinking:** এই তিনটা brand level capture করে consumer-এর **brand loyalty** ও **switching behavior**। Primary→Secondary→Previous — এই progression analysis করলে বোঝা যায় কে কীভাবে brand switch করে — যা competitor strategy-তে গুরুত্বপূর্ণ।

---

## 6. JML Process (Joiner-Mover-Leaver)

**JML** = **Joiner → Mover → Leaver** — user lifecycle management process।

### 🔄 The Three Stages

```
Joiner              Mover               Leaver
(New account)   →   (Role change)   →   (Deactivation)
    │                   │                   │
    └───────────────────┴───────────────────┘
                    Audit Log
               (সব action logged)
```

| Stage | অর্থ | Business Why |
|-------|------|--------------|
| **Joiner** | নতুন user account তৈরি | Field force বাড়ছে, নতুন member যোগ |
| **Mover** | Role/access পরিবর্তন | Promotion, transfer, area change |
| **Leaver** | Deactivation (exit) | Employee ছেড়ে গেলে access বন্ধ |

### 🛡️ Why JML গুরুত্বপূর্ণ
- **Applies to all management users** (AC, SUP, RA)
- **All actions require approval**
- **Everything is logged** — full audit trail
- নিরাপত্তা নিশ্চিত করে — যারা больше কাজ করে না তারা system access পায় না
- Compliance ও accountability

> **Deep Thinking:** JML-ই নিশ্চিত করে যে platform-এ **কখনো unauthorized access** না থাকে। Tobacco industry-তে regulatory scrutiny অনেক বেশি, তাই user lifecycle management-এ strict control + audit অপরিহার্য।

---

## 7. Report Manager — ৫ ধরনের Report

| Report | Business Purpose |
|--------|-----------------|
| **📄 Daily Raw** | প্রতিদিন campaign-এর raw data — daily operations দেখতে |
| **📞 Call Checkback** | Follow-up call — consumer সত্যিই contact হয়েছে কিনা verify (quality check) |
| **👁️ Live Observation** | Supervisor RA-কে live check করে — process compliance নিশ্চিত |
| **📞 Call Center** | Second contact — follow-up announcement বা gift delivery |
| **📅 Dynamic Report** | Configurable parameters + custom date range — flexible ad-hoc analysis |

> **Deep Thinking:** প্রতিটা report একটা আলাদা **verification layer**:
> - **Daily Raw** = "কী হলো" (ground truth)
> - **Call Checkback** = "সত্যি হলো কিনা" (consumer verify)
> - **Live Observation** = "ঠিকভাবে হলো কিনা" (process verify)
> - **Call Center** = "repeat communication" (অতিরিক্ত engagement)
> - **Dynamic** = "কী pattern আছে" (analysis)

---

## 8. User Roles ও Access

| Role | Full Name | Access |
|------|-----------|--------|
| **DC** | District Coordinator | Web |
| **AC** | Area Coordinator | Web |
| **SUP** | Supervisor (issues handle, RA assign করে) | Mobile + Web |
| **RA / BR / FF** | Brand Rep / Field Force | Mobile |

### 🎯 Role-by-Role Business Logic

- **RA/BR/FF (mobile)** — field-এ যায়, outlet visit করে, survey চালায়। **সম্পূর্ণ execution এদের হাতে।**
- **SUP (mobile + web)** — RA-দের assign করে, সমস্যা সমাধান করে, observation করে। **তত্ত্বাবধান।**
- **AC/DC (web)** — area/district level management, planning, monitoring। **কৌশলগত স্তর।**

> **Deep Thinking:** Access split দেখে বোঝা যায় — **যারা field-এ (execution)**, তারা mobile পায়; **যারা office-এ (management)**, তারা web পায়। Mobile field force-এর জন্য (আউটডোর, offline-friendly), web management-এর জন্য (বড় screen, dashboard)। SUP-এর উভয়ই — কারণ সে field-ও দেখে, report-ও দেখে।

---

## 9. Agencies ও Coverage

| Agency | Coverage (Region) |
|--------|-------------------|
| **v2 tech** | Internal team (V2 Technology) |
| **ATMSL** | Sylhet, Dhaka South |
| **IMSL** | Dhaka North, Chittagong |
| **IMSR** | Rajshahi, Barishal, Khulna |

> **Deep Thinking:** Bangladesh জুড়ে field force manage করার জন্য BATB **multiple agencies** ব্যবহার করে — প্রতিটা agency নির্দিষ্ট region-এর responsibility নেয়। এতে national coverage নিশ্চিত হয়, আর প্রতিটা agency-র নিজস্ব management structure থাকে। **v2 tech** হলো internal team — যারা platform তৈরি ও maintain করে।

---

## 10. Architecture — Business View

```
Mobile App (Field Force)
      │
      ▼
Operational Database (RDS) ──────► BigQuery (Analytics)
   ├─ Campaign execution              ├─ Dashboards
   ├─ Raw survey logging              ├─ Reporting
   ├─ Day-to-day interactions         └─ High-performance queries
   └─ Core app logic
```

| Component | Business Role |
|-----------|---------------|
| **Operational DB (RDS)** | Day-to-day operations — transaction, campaign execution, raw data capture |
| **BigQuery (Analytics)** | Scalable dashboards, reporting — production-এ impact ছাড়াই query |

> **Deep Thinking:** কেন দুটো আলাদা? **Operational DB** দিয়ে user transaction চলে (fast, transactional)। **Analytics** দিয়ে heavy reporting (scalable, read-heavy)। এদের আলাদা রাখলে — production performance খারাপ হয় না, আর analytics-এ unlimited query চালানো যায়। **Replica** ব্যবহার হয় যাতে reporting query production-এ load না ফেলে।

---

## 11. Campaign Flow Logic

ECRM-এর campaign engine প্রতিটা consumer interaction একটা **flow** — যা sequential blocks দিয়ে তৈরি।

### 🧩 Step-by-step Logic

```
[1] Initial Setup
    audio_start → compliance log
         │
         ▼
[2] Consumer Input
    dropdown / radio / contactNo
    → target demographics capture
         │
         ▼
[3] Validation
    age check, OTP verify
    → invalid flow block
         │
         ▼
[4] Execution
    successful target → PTR/reward
    final outcome components
```

| Step | Blocks | Business Meaning |
|------|--------|------------------|
| **Initial Setup** | `audio_start` | Interaction শুরুই recording দিয়ে — compliance প্রমাণ |
| **Consumer Input** | `dropdown`, `radio`, `contactNo` | Target demographics capture |
| **Validation** | age check, OTP | Invalid/fake entries block |
| **Execution** | final outcome | Success-এ reward/PTR |

> **Deep Thinking:** এই ৪-ধাপ pattern-টাই প্রতিটা campaign-এর backbone — **capture → validate → reward**। এই structure নিশ্চিত করে — (১) শুধু valid, 18+ consumer data হয়, (২) প্রতিটা interaction প্রমাণযোগ্য, (৩) সঠিক target-কেই reward দেওয়া হয়।

### 🎯 Who Uses Campaign Flow
- **Business Teams** — campaign তৈরি
- **Campaign Managers** — survey design
- **Supervisors** — consumer engagement flow config
- **Technical Teams** — PTR execution, AV engagement, reporting workflow

---

## 12. ৩০টি Flow Blocks — গভীর ব্যাখ্যা

ECRM campaign engine-এ **৩০টি flow block** — প্রতিটা একটা নির্দিষ্ট business operation-এর জন্য।

### 🎙️ Audio Blocks (Compliance & QA)

| Block | Business Purpose | Operational Usage |
|-------|-----------------|-------------------|
| **audio_start** | Interaction শুরুতে অটো audio recording | Compliance monitoring, QA, supervisor validation, RA behavior analysis, campaign auditing |
| **audio_end** | Interaction শেষে recording বন্ধ | Audio verification workflow finalize, complete recording store for audit & QA |

> **Deep Thinking:** Tobacco industry-তে **"কি বলা হয়েছে" প্রমাণ করা** গুরুত্বপূর্ণ (regulatory)। audio_start→audio_end পুরো conversation record করে — dispute-তে প্রমাণ, আর AI দিয়ে verify করা যায় RA ঠিকমতো message দিয়েছে কিনা।

### 📥 Input Blocks (Data Collection)

| Block | Business Purpose | Operational Usage |
|-------|-----------------|-------------------|
| **dropdown** | Predefined list থেকে single select | Territory, Profession, Retail Type, Consumer Category select — data consistency |
| **multipleChoice** | Predefined options থেকে single answer | Main survey interaction block — consumer feedback, brand preference |
| **checkbox** | Multiple option একসাথে select | Multiple product selection, campaign preference, behavior analysis |
| **contactNo** | Consumer mobile number capture ও validate | Call center engagement, PTR follow-up, repeat communication |
| **date** | Date-based input (যেমন DOB) | **Legal age validation (18+)**, campaign eligibility, segmentation |
| **textInput** | Free-text input | Consumer name, address, remarks, supervisor comment |
| **product** | BATB বা competitor brand select | Primary/secondary/previous brand, competitor analysis, PTR targeting |

> **Deep Thinking:** প্রতিটা input block-এর একটা **standardization goal** আছে — free text-এ inconsistent data আসে, তাই dropdown/checkbox দিয়ে predefined value enforce করা হয়। আর **date block** critical — কারণ **18+ requirement** legal, তাই age validation-ই eligibility।

### ✅ Validation & Compliance Blocks

| Block | Business Purpose | Operational Usage |
|-------|-----------------|-------------------|
| **validations** | Input validation rules | Regex, min/max value, age validation, mandatory field |
| **otp** | OTP-based verification | Consumer authenticity verify, fake survey prevention |
| **lookup** | Hidden/visible validation lookup | Duplicate checking, eligibility validation, campaign condition checking |
| **terms** | Terms & conditions + acknowledgment | Compliance, legal acknowledgment, consent management |
| **required** | Blocks mandatory mark | Incomplete submission prevent, mandatory data collection |

> **Deep Thinking:** এই blocks-গুলোই **data quality ও legitimacy** নিশ্চিত করে। OTP = consumer আসল কিনা, lookup = duplicate কিনা, terms = legal consent আছে কিনা। এগুলো ছাড়া survey data-র উপর trust থাকত না — এবং data untrustworthy হলে পুরো campaign analysis ভুল হতো।

### 🖼️ Media & Engagement Blocks

| Block | Business Purpose | Operational Usage |
|-------|-----------------|-------------------|
| **camera** | Mobile camera দিয়ে photo | Outlet image, PTR proof, consumer interaction proof |
| **image** | Static image display | Product branding, instructional image, campaign awareness |
| **video** | AV/video play | Campaign engagement, promotional AV, awareness, consumer education |
| **interactive_gallery** | Interactive image gallery | Product awareness, AV engagement, promotion |
| **interactive_av** | Initial AV + selectable AV options | Interactive consumer engagement, promotional experience |
| **uiux_video** | UI/UX-focused AV | Brand engagement, promotional storytelling |
| **emoji_rating** | Emoji reaction feedback | Quick sentiment, campaign satisfaction, AV engagement scoring |
| **star_rating** | Star-based scoring | Consumer satisfaction, engagement quality analysis |
| **game** | 3rd-party APK/game | Engagement campaigns, entertainment promotion, gamification |

> **Deep Thinking:** Media blocks campaign-কে **interactive ও engaging** করে তোলে। Brand ads legal না, তাই **AV, game, gallery** দিয়ে attention capture করা হয়। camera দিয়ে **proof** collect হয় (PTR দেওয়া হয়েছে কিনা)। emoji/star rating দিয়ে **instant sentiment** পাওয়া যায়।

### 🧭 Navigation & Logic Blocks

| Block | Business Purpose | Operational Usage |
|-------|-----------------|-------------------|
| **jumping_logic** | Conditional navigation | Dynamic survey flow, campaign branching, personalized journey |
| **referTo** | Next block/group path define | Dynamic routing, survey branch navigation |
| **skip** | Skip navigation | Irrelevant blocks skip — based on previous answers, interaction optimize |
| **options** | Selectable values store | Survey answers standardize, reporting consistency |

> **Deep Thinking:** এই blocks-গুলো **personalization** তৈরি করে। Jumping/skip logic দিয়ে — একজন consumer যার আগের answer বলে দিয়েছে তার পরবর্তী প্রশ্নগুলো context-based হয়। এতে interaction ছোট ও relevant থাকে — user experience ভালো।

### 🎁 Outcome Blocks

| Block | Business Purpose | Operational Usage |
|-------|-----------------|-------------------|
| **giveable** | PTR/reward/gift allocation | Campaign gift distribution, PTR rewards, incentive tracking |

> **Deep Thinking:** giveable-ই campaign-এর **"happy ending"** — success consumer reward পায়। এটাই field force-কে motivation দেয়, আর consumer-কে engagement-এ রাখে। PTR distribution track করলে business জানতে পারে কোন gift effective।

### 📢 Messaging Blocks

| Block | Business Purpose | Operational Usage |
|-------|-----------------|-------------------|
| **popup_message** | Info/warning popup | Campaign instruction, compliance warning, PTR eligibility notice |

---

## 13. ৪টি Operational Reports — Business Logic

ECRM-তে **৪টি production report** — প্রতিটা একটা আলাদা business monitoring layer।

### 📋 ১. Daily Contact Survey Report
**কী করে:** প্রতিটা contact-এর সম্পূর্ণ record — contact metadata, location hierarchy, consumer profile, brand info, timing, survey answers।

**Business Logic:**
- One row = one unique contact event
- Survey answers row-wise → pivoted (Bengali)
- Contact + location + consumer + brand সব একসাথে

**Business Why:** **"কী হয়েছে"** — প্রতিদিন কত contact, কোথায়, কোন consumer, কোন brand — ground truth report।

### 👁️ ২. Live Observation Report (Joint Call)
**কী করে:** Supervisor একসাথে (jointly) BR-এর consumer contact observation করে — ১৬টা checklist item evaluate করে।

**Checklist Items (process compliance):**
- Correct cluster-এ আছে কিনা
- Correct attire
- Shop permission
- Device compliance
- Full campaign messaging

**Business Logic:**
- Supervisor = `user_id`, BR/FF = `ff_id` (two sides of the observation)
- Apsis_data দিয়ে cross-schema join (name-based)

**Business Why:** **"কিভাবে হলো"** — RA-রা process ঠিকমতো follow করছে কিনা। Process ঠিক না থাকলে data-র quality নিয়ে সন্দেহ।

### 📞 ৩. Call Checkback Report
**কী করে:** Post-contact quality audit — supervisor consumer-কে call করে verify করে BR-র performance। ১৭টা verification question।

**Business Logic:**
- Original BR contact-এর সাথে **4-key composite match** (phone + BR ID + campaign ID + date)
- ID-based cross-schema join (name-match-এর চেয়ে reliable)

**Business Why:** **"সত্যিই হলো কিনা"** — consumer-কে সরাসরি জিজ্ঞেস করে BR সত্যিই contact করেছে কিনা। Fabrication detect করে, data-র trust নিশ্চিত করে।

### ☎️ ৪. Call Center Report
**কী করে:** Outbound call center dialer contacts track করে।

**Business Logic:**
- Cluster-এ anchored (type=7) — outlet নয়
- 3-step chain: contact → assignment → dialer list
- Agency region নাম থেকে CASE expression দিয়ে derived
- English-language survey
- Contact status logic (Successful / Completed / Pending)

**Business Why:** **"দ্বিতীয় যোগাযোগ"** — call center-এর মাধ্যমে follow-up announcement, gift delivery, repeat engagement। Field visit-এর বাইরে আরেকটা channel।

### 📊 Comparison Table

| Aspect | Daily Contact | Live Observation | Call Checkback | Call Center |
|--------|--------------|------------------|----------------|-------------|
| **Primary Question** | কী হলো | কিভাবে হলো | সত্যিই হলো কিনা | দ্বিতীয় engagement |
| **Location Anchor** | Outlet (8) | Outlet (8) | Outlet (8) | Cluster (7) |
| **Supervisor** | Not present | `user_id` | `user_id` | Not present |
| **Cross-Schema** | No | Yes (name) | Yes (ID) | No |
| **Consumer Profile** | Full (name, age, address) | Not captured | Not captured | Phone only |
| **Agency Field** | Not present | Not present | Not present | Derived (CASE) |
| **Survey Language** | Bengali | Bengali | Bengali | English |

---

## 14. Analytics Tasks (Campaign 161)

Campaign 161-এর জন্য **৫টা analytics challenge** — যারা এই tasks দিয়ে data analysis skill শেখে:

| # | Task | Business Logic |
|---|------|----------------|
| 1 | **Find Count of Consumer** | মোট কত unique consumer — **fresh vs not-fresh** split (JSONB data) |
| 2 | **RA Wise Contact Duration & Interval** | প্রতিটা RA কতক্ষণ contact করল, এক contact থেকে পরের contact-এর interval কত (LEAD window) |
| 3 | **Find Total Campaign Duration** | Campaign প্রথম contact থেকে শেষ contact পর্যন্ত কতদিন চলল |
| 4 | **Date Wise PTR Achievement** | প্রতিদিন কত PTR (gift) বিতরণ — gift material অনুযায়ী split |
| 5 | **Outlet Wise PTR Count** | কোন outlet-এ কত PTR — high/low performing outlet identify |

> **Deep Thinking:** এই tasksগুলোই শেখায় — **business question → SQL logic**। প্রতিটা task একটা real business need:
> - Fresh consumer = কত নতুন consumer (growth)
> - Contact duration/interval = RA productivity
> - PTR achievement = campaign effectiveness
> - Outlet-wise = কোন outlet-এ focus দিতে হবে

---

## 15. AI Audio Verification (aai_ System)

**aai_** prefix-এর system হলো ECRM-এর **AI-powered QA layer** — audio recording-এর মাধ্যমে RA-দের verify করা।

### 🔄 The Verification Pipeline

```
[1] audio capture (field-এ)
    → aai_audios
         │
         ▼
[2] AI analysis
    → voice quality, noise, phrase detection
         │
         ▼
[3] Auditor assignment
    → aai_audio_assign_maps (level-based)
         │
         ▼
[4] Human/AI verification
    → aai_verified_audios (quality score)
```

| Component | Business Role |
|-----------|---------------|
| **aai_audios** | Captured audio recording |
| **aai_projects** | Verification project (campaign-based, detect phrase, noise reduction) |
| **aai_audio_assign_maps** | Auditor-কে audio assign (level-based) |
| **aai_verified_audios** | Verification result — quality score, phrase score |
| **aai_questions** | Verification question set |

> **Deep Thinking:** This is the **final trust layer**। Field-এ হাজারো RA audio record করে — AI দিয়ে analyze করলে বোঝা যায় RA ঠিকঠাক campaign message দিয়েছে কিনা, correct phrase বলেছে কিনা, noise ঠিক আছে কিনা। এটা **scale-এ QA** — যেখানে manually সব audio review সম্ভব না, AI প্রথম ফিল্টার।

---

## 16. Training/Practice Center

Portal-এ **Practice Tasks** section — নতুনদের জন্য learning material repository:

| Task | Topic |
|------|-------|
| Task 1 | Data Entry & Campaign Setup |
| Task 2 | Call Center SQL Reporting |

প্রতিটা task-এর সাথে:
- **Practice Questions** — PDF / assignment details
- **Reference Guides** — Excel template, training material, schema dictionary
- **Supporting Resources** — video tutorial, PostgreSQL cheat sheet

এছাড়া **PostgreSQL Assessment quiz** আছে (public/quiz.html) — যা PostgreSQL knowledge test করে (ACID, joins, indexes, window functions ইত্যাদি)।

---

## 17. Portal Sections Map

Portal-টি (public/index.html) **৯টা section** নিয়ে:

| Section | Content |
|---------|---------|
| **Business Explain** | ECRM-এর business logic, hierarchy, flow |
| **Campaign Flow Components** | ৩০টা flow blocks |
| **SQL Reports** | ৪টা production report + comparison |
| **Tasks & Questions** | Authenticated task board |
| **ER Diagram** | Interactive relationship graph |
| **Schema Viewer** | Relationship explorer |
| **DB Explorer** | 135+ tables dictionary |
| **Tutorial** | Google Drive resources |
| **Practice** | Training materials |

**Platform facts:** PostgreSQL · ecrm_prod · AWS RDS ap-southeast-1 · 135 Tables · 4 Reports · 30 Campaign Blocks

---

## 18. Team Credits

| Member | Role |
|--------|------|
| **MD AHSAMUL HAQUE** | Junior DB Engineer Intern · Author |
| **Rahat Maksud Pranto** | Junior Data Analyst · Supervisor |
| **Sohanur Rahman** | Senior Data Analyst · Manager |

**Organization:** V2 Technology Ltd.
**Client:** BAT Bangladesh (BATB)
**Confidential — Internal Use Only**

---

*Document created: 2026-08-15 · Based on ECRM-tutorial project business & logic documentation*