# প্রতিটা নতুন চ্যাটে আবার একই কথা বুঝিয়ে বলতে হয়—আপনি কে, কী নিয়ে কাজ করছেন, কীভাবে উত্তর চান, কোন টোনে লিখতে হবে।

সমস্যাটা সবসময় Claude-এর নয়। অনেক সময় আমরা **Projects, Skills এবং Memory** ঠিকভাবে ব্যবহারই করি না।

তাই Claude থেকে আরও consistent, structured এবং efficient output পেতে এই ২৫টি সেটিংস ও অভ্যাস জেনে রাখুন।

[→ Part 2 দেখুন: **Database Team AI Ecosystem & Utilization Framework** — `Page2.md`](Page2.md)

---

## প্রথম অংশ: Setup ঠিক করুন

### ১. Local file নিয়ে কাজ করতে হলে Claude Desktop ব্যবহার করুন

আপনার কম্পিউটারের local files নিয়ে সরাসরি কাজ করতে চাইলে Claude Desktop গুরুত্বপূর্ণ। Desktop-এর মাধ্যমে Claude অনুমোদিত local folders ও files access করতে পারে।

তবে Cowork এখন web ও mobile-এও পাওয়া যায়; local file access-এর ক্ষেত্রে Desktop app-এর প্রয়োজন হতে পারে।

### ২. ছোট প্রশ্নের জন্য Chat, বড় কাজের জন্য Cowork

সাধারণ প্রশ্নের জন্য **Chat** যথেষ্ট।

কিন্তু research, data analysis, document creation, file organization বা অন্য কোনো multi-step কাজ হলে **Cowork** ব্যবহার করুন।

Message box-এর নিচে **Cowork** নির্বাচন করে কাজের desired outcome বলুন। Cowork একাধিক ধাপে কাজ execute করতে পারে।

### ৩. কাজ দিয়ে চলে যেতে পারেন

Cowork-এর remote sessions আপনার কম্পিউটার বন্ধ বা আপনি দূরে থাকলেও চলতে পারে।

তবে যদি কাজটি আপনার **local files বা local computer access**-এর ওপর নির্ভর করে, Desktop app-এর connection প্রয়োজন হতে পারে।

### ৪. বারবার ব্যবহার করা files Project-এ রাখুন

একই documentation, dataset, research papers বা reference files বারবার upload করার দরকার নেই।

যে কাজগুলো একই context-এর মধ্যে করেন, সেগুলো একটি Project-এ রাখুন। Project-এর knowledge সেই Project-এর chats-এ context হিসেবে ব্যবহার করা যায়।

### ৫. Project Instructions একবার ঠিকভাবে লিখুন

আপনার:

- কাজের context
- preferred tone
- output format
- terminology
- formatting rules
- কী করতে হবে
- কী করা যাবে না

—সব Project Instructions-এ লিখে রাখুন।

তাহলে প্রতিটি নতুন chat-এ একই নির্দেশনা বারবার দিতে হবে না।

### ৬. একই কাজ বারবার করলে Skill বানান

একই workflow বা instruction বারবার দিতে হলে সেটাকে **Skill** বানানোর কথা ভাবুন।

Claude-এর Skills specialized, repeatable workflow-এর জন্য তৈরি। বর্তমানে Skills **Free, Pro, Max, Team এবং Enterprise**—সব plan-এই available; Code execution enabled থাকতে হয়।

### ৭. প্রয়োজনীয় Apps ও Connectors-ই connect করুন

যে external app বা service সত্যিই দরকার, শুধু সেটাই connect করুন।

অপ্রয়োজনীয় access দিলে শুধু complexity বাড়ে না—agentic কাজের ক্ষেত্রে ভুল action-এর সম্ভাব্য impact-ও বাড়তে পারে। তাই permissions দেওয়ার আগে Claude কী access পাবে সেটা বুঝে নিন।

---

# দ্বিতীয় অংশ: কাজের গতি বাড়ান

### ৮. Work, Client এবং Personal কাজ আলাদা Project-এ রাখুন

একটি Project-এ সবকিছু রাখবেন না।

Research এক জায়গায়, client work অন্য জায়গায়, personal work আলাদা জায়গায় রাখুন।

Project-এর context ও memory আলাদা থাকায় relevant information বেশি focused থাকে।

### ৯. Chat এলোমেলো হলে নতুন chat শুরু করুন

একটি conversation-এ অনেক ভুল direction, correction এবং unrelated discussion জমে গেলে নতুন chat শুরু করা অনেক সময় বেশি কার্যকর।

প্রয়োজনে আগের chat-এর final context বা গুরুত্বপূর্ণ সিদ্ধান্ত নতুন chat-এ দিন।

### ১০. উত্তর পছন্দ না হলে message edit করুন

একই prompt আবার নতুন করে লিখে শুরু করার বদলে আগের message edit করে নতুন direction দিতে পারেন।

এতে conversation-এর অপ্রয়োজনীয় অংশ না টেনে desired direction-এ যাওয়া সহজ হয়।

### ১১. Model selector ব্যবহার করুন

Message box-এর আশেপাশে থাকা model selector থেকে available model পরিবর্তন করা যায়।

Claude-এর বর্তমান interface-এ model-এর পাশাপাশি **effort** এবং **extended thinking**-এর মতো reasoning options-ও পাওয়া যেতে পারে।

### ১২. কঠিন কাজে effort বাড়ান

Routine task হলে কম effort যথেষ্ট হতে পারে।

কিন্তু complex reasoning, debugging, planning বা difficult analysis-এর ক্ষেত্রে higher effort ব্যবহার করা যেতে পারে।

মনে রাখবেন—higher effort সাধারণত বেশি compute/token ব্যবহার করে।

### ১৩. Complex reasoning-এ Extended Thinking ব্যবহার করুন

Math, logic, debugging, optimization বা complex planning-এর মতো কাজে **Extended Thinking** কাজে লাগতে পারে।

তবে প্রতিটি ছোট প্রশ্নে এটি চালু রাখার প্রয়োজন নেই।

### ১৪. শুধু Steps নয়, Outcome বলুন

প্রতিটি ছোট step আলাদা করে বলে দেওয়ার প্রয়োজন নেই।

বরং বলুন:

> “আমি এই result চাই, context এটা, এবং এই constraints মেনে কাজ করো।”
> 

তারপর Claude-কে approach তৈরি করতে দিন।

### ১৫. কথা বলে Brief দিন

দীর্ঘ explanation টাইপ করার চেয়ে voice-এ পুরো context বলা অনেক সময় সহজ।

বিশেষ করে research idea, project requirements বা brainstorming-এর ক্ষেত্রে বিস্তারিত brief দিলে Claude-এর কাজের context ভালো হয়।

### ১৬. Usage ও Context দুটোই manage করুন

লম্বা conversation, বড় attachment এবং একসঙ্গে অনেক tools/connectors ব্যবহার করলে usage ও context দ্রুত বাড়তে পারে।

Routine কাজের জন্য Chat ব্যবহার করুন, আর complex multi-step কাজের জন্য Cowork ব্যবহার করুন। অপ্রয়োজনীয় tools ও extended thinking বন্ধ রাখুন।

---

# তৃতীয় অংশ: Security ও Privacy

### ১৭. Password, API Key, NID বা Bank Details paste করবেন না

প্রয়োজন হলে:

`YOUR_API_KEY`

`YOUR_NID`

`ACCOUNT_NUMBER`

এর মতো placeholder ব্যবহার করুন।

তারপর final জায়গায় নিজে sensitive information বসান।

### ১৮. Sensitive conversation-এর জন্য Incognito Chat ব্যবহার করুন

Claude-এর **Incognito Chat** temporary conversation হিসেবে কাজ করে।

এগুলো regular chat history-তে save হয় না এবং Claude-এর future memory-তেও যোগ হয় না। তবে এগুলো সম্পূর্ণ “কোনোভাবেই সংরক্ষিত হয় না” এমন নয়—Anthropic-এর বর্তমান policy অনুযায়ী default retention 30 দিন হতে পারে, এবং organization-এর retention policy প্রযোজ্য হতে পারে।

### ১৯. Memory-তে কী জমা আছে দেখে নিন

Settings → Memory-তে গিয়ে Claude আপনার সম্পর্কে কী মনে রেখেছে তা review করুন।

ভুল বা outdated information থাকলে edit বা delete করুন। চাইলে memory pause বা reset-ও করতে পারেন।

### ২০. বেশি তথ্য মানেই ভালো উত্তর নয়

১০টি file upload করার আগে নিজেকে জিজ্ঞেস করুন:

**“এই কাজের জন্য আসলে কোন files দরকার?”**

অপ্রয়োজনীয় information বাদ দিলে Claude-এর জন্য relevant context খুঁজে পাওয়া সহজ হয়।

---

# চতুর্থ অংশ: নিজের বিচারবুদ্ধি ব্যবহার করুন

### ২১. Confident answer মানেই correct answer নয়

বিশেষ করে:

- সংখ্যা
- তারিখ
- statistics
- citations
- URLs
- legal বা financial information

নিজে cross-check করুন।

### ২২. Claude-কে আপনার ধারণার বিপক্ষে argument দিতে বলুন

শুধু “আমি ঠিক কি না?” জিজ্ঞেস করবেন না।

বরং বলুন:

> **“আমার এই ধারণার বিরুদ্ধে সবচেয়ে শক্তিশালী যুক্তিগুলো দাও।”**
> 

এতে confirmation bias কমাতে সাহায্য করবে।

### ২৩. নিজের কাজ নিজেকেই audit করতে দিন

লেখা বা analysis শেষ হওয়ার পর বলুন:

> **“এই লেখায় factual error, contradiction, weak assumption এবং unsupported claim আলাদা করে বের করো।”**
> 

একই output-এর দ্বিতীয়-pass review অনেক ভুল ধরতে পারে।

### ২৪. AI output-কে Draft হিসেবে দেখুন

Claude-এর output সরাসরি final ধরে নেবেন না।

বিশেষ করে যে বিষয় আপনি নিজে পুরোপুরি বোঝেন না, সেটি publish বা submit করার আগে verify করুন।

---

# পঞ্চম অংশ: যেগুলো অনেকেই ব্যবহার করেন না

### ২৫. Research + Critical Thinking ব্যবহার করুন

গভীর research-এর জন্য Claude-এর **Research** feature ব্যবহার করতে পারেন।

Research সাধারণ web search-এর মতো শুধু একটি-দুটি search করে থেমে যায় না; এটি একাধিক search চালিয়ে বিভিন্ন source ও angle থেকে information সংগ্রহ করে এবং citations-সহ report তৈরি করতে পারে।

তবে বর্তমানে Research **paid Claude plans—Pro, Max, Team এবং Enterprise**-এর জন্য available এবং Web Search enabled থাকতে হয়।

আর বড় কাজ শুরু করার আগে এই তিনটি prompt ব্যবহার করে দেখুন:

> **“শুরু করার আগে এমন ৩টি প্রশ্ন করো, যেগুলোর উত্তর না জানলে কাজটি ভুল হতে পারে।”**
> 

তারপর:

> **“৩টি সত্যিকারের আলাদা approach দাও এবং প্রত্যেকটির trade-off ব্যাখ্যা করো।”**
> 

শেষে:

> **“এখন সবচেয়ে শক্তিশালী approach নির্বাচন করে কেন সেটি বেছে নিলে তা ব্যাখ্যা করো।”**
> 

---

# কয়েকটি Pro Tip

- Project Instructions-এ শুধু **“কী করবে”** নয়, **“কী করবে না”**ও লিখুন।
- একই prompt বা workflow বারবার ব্যবহার করলে সেটাকে **Skill** বানানোর কথা ভাবুন।
- Output format পছন্দ হলে সেই preference স্থায়ীভাবে relevant instructions বা style-এ রাখুন।
- বাংলায় লিখতে চাইলে বলে দিন: **“Technical terms English-এ রাখবে, explanation Bangla-তে দেবে।”**
- Client বা confidential document নিয়ে কাজ করলে প্রয়োজন অনুযায়ী Incognito ব্যবহার করুন এবং কোন data retention policy প্রযোজ্য তা বুঝে নিন।

---

# ৫ মিনিটের Quick Start

### প্রথম মিনিট

**Settings → Capabilities** দেখে Code execution ও file creation enabled আছে কি না নিশ্চিত করুন।

### দ্বিতীয় মিনিট

আপনার সবচেয়ে বেশি করা কাজের জন্য একটি **Project** তৈরি করুন।

### তৃতীয় মিনিট

Project Instructions-এ আপনার:

- role
- context
- tone
- formatting
- workflow
- do/don’t rules

লিখে দিন।

### চতুর্থ মিনিট

**Settings → Memory** গিয়ে Claude কী মনে রেখেছে তা review করুন।

### পঞ্চম মিনিট

একটি কঠিন প্রশ্ন নিয়ে **higher effort / Extended Thinking** ব্যবহার করে দেখুন।

তারপর একই প্রশ্ন normal setting-এ চালিয়ে পার্থক্যটা নিজেই দেখুন।

---

## শেষ কথা

এই তালিকার সবচেয়ে গুরুত্বপূর্ণ বিষয়গুলো আসলে কোনো “secret trick” নয়।

**Projects আপনাকে context ধরে রাখতে সাহায্য করে।Skills repeatable workflow শেখায়।Memory relevant personal context ধরে রাখে।Cowork complex কাজ execute করতে পারে।Research গভীর information gathering করতে সাহায্য করে।**

আর সবচেয়ে গুরুত্বপূর্ণ জিনিস হলো—**AI-কে শুধু প্রশ্ন করার বদলে workflow হিসেবে ব্যবহার করা।**

তাহলেই Claude শুধু “উত্তর দেওয়ার tool” না হয়ে আপনার কাজের একটি structured collaborator হয়ে উঠতে পারে।

[→ Part 2: **Database Team AI Ecosystem & Utilization Framework** — `Page2.md`](Page2.md)