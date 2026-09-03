import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CirclePlay,
  Handshake,
  MessageCircle,
  Plane,
  ReceiptText,
  Scale,
  Sparkles,
  Users,
} from "lucide-react";

const specialists = [
  { icon: Scale, title: "Legal helpdesk", heading: "Legal clarity for your next move.", range: "€200–400 / hour", copy: "Bring contracts, setup and venture questions to a lawyer who understands early-stage companies." },
  { icon: ReceiptText, title: "Tax helpdesk", heading: "Tax, without the guesswork.", range: "€150–250 / hour", copy: "Get clear on German taxes, invoices and the decisions that shape your first year." },
  { icon: Sparkles, title: "Grant helpdesk", heading: "Find the funding route.", range: "€100–200 / hour", copy: "Understand relevant grants and how to make your next application stronger." },
  { icon: Plane, title: "Visa helpdesk", heading: "Build in Germany with clarity.", range: "€100–300 / hour", copy: "Get practical guidance on the visa questions around moving and building here." },
];

const partners = [
  { image: "/assets/the-delta-black.png", name: "The Delta", role: "Venue Partner", detail: "Berlin’s launchpad for the next wave of generational companies.", href: "https://www.linkedin.com/company/thedeltaecosystem/" },
  { image: "/assets/laura-poster.png", name: "Laura Soto", role: "Grant Helpdesk", detail: "Co-Founder @ SpeechyLift · EXIST Scholarship Holder", href: "https://www.linkedin.com/in/lauracamilasoto/" },
  { image: "/assets/ingo-schneider.png", name: "Dr. Ingo Schneider", role: "Legal Helpdesk", detail: "Venture and Business Lawyer · Tech M&A @ ICADIA", href: "https://www.linkedin.com/in/ingo-lawyer-vcandtech/" },
  { image: "/assets/christoph-bowing.png", name: "Christoph Böwing", role: "Tax Helpdesk", detail: "Business Consultant: German Taxes" },
];

const dealPages = [
  [
    { name: "Notion", offer: "3 months free on Business with Unlimited AI", note: "Save up to $6,000", logo: "Notion-logo.svg.png" },
    { name: "Slack", offer: "25% off new plan purchases", note: "Save up to $9,000", logo: "Slack_icon_2019.svg.png" },
    { name: "Google Workspace", offer: "20% off Standard plans for 1 year", note: "Save up to $3,460", logo: "google.webp" },
    { name: "Webflow", offer: "40% off annual plans", note: "Save up to $120", logo: "webflow logo.svg" },
    { name: "Google Cloud", offer: "$2,000 in credits for 1 year if you never raised funds // $350,000 for 2 years if you did", note: "Save up to $350,000", logo: "Google_Cloud_icon_(2026).svg.webp" },
    { name: "AWS Activate", offer: "Up to $100,000 in credits or 20–50% off monthly spend", note: "Save up to $300,000", logo: "Amazon_Web_Services_Logo.svg.webp" },
    { name: "Microsoft Azure", offer: "$5,000 in credits for 6 months if unfunded // up to $150,000 for 2 years if funded", note: "Save up to $150,000", logo: "Microsoft_Azure.svg.webp" },
    { name: "GoDaddy", offer: "First-year .com domain purchase for $11.99", note: "Save up to $1,000", logo: "godaddy.png" },
  ],
  [
    { name: "Airtable", offer: "$1,000 in credits for 1 year", note: "Save up to $1,000", logo: "airtable.png" },
    { name: "Asana", offer: "75% off annual Starter and Advanced plans for 1 year", note: "Save up to $22,491", logo: "asana.svg" },
    { name: "Miro", offer: "$1,000 in credits with lifetime validity", note: "Save up to $1,000", logo: "miro.png" },
    { name: "HubSpot", offer: "90% off Professional and Enterprise plans for 1 year", note: "Save up to $7,000", logo: "hubspot.webp" },
    { name: "Framer", offer: "1 year free on the Pro plan", note: "Save up to $360", logo: "framer.png" },
    { name: "GitLab", offer: "12 months free on the Ultimate license", note: "Save up to $10,440", logo: "gitlab.png" },
    { name: "Loom", offer: "Free forever for up to 10 users", note: "Save up to $750", logo: "loom.png" },
  ],
];

const faqs = [
  { question: "How do the startup deals work?", answer: "Members receive access to a growing platform of 2,000+ offers. Deals are discussed and closed with vendors for the community, and refreshed on an ongoing basis as new opportunities become available." },
  { question: "Is there an online community?", answer: "Yes. Members get access to an exclusive chat platform for people who are serious about building. AFM experts are part of the community too, so useful questions can lead to useful conversations." },
  { question: "What kind of events are included?", answer: "AFM brings together a mix of in-person sessions in Berlin and virtual events. Virtual events are paid for non-members and included with the membership." },
  { question: "Who is AFM for?", answer: "People moving into solopreneurship or starting a company, whether they are exploring an idea or ready to build. We are launching Germany-wide with Berlin as our first focus." },
  { question: "Where is AFM going?", answer: "Our aim is to build Europe’s largest community for aspiring founders: a practical ecosystem that helps more people take their first steps with confidence." },
];

function DealLogo({ deal }: { deal: (typeof dealPages)[number][number] }) {
  if (deal.logo) return <img src={`/assets/deal-logos/${deal.logo}`} alt="" />;
  return <span className="deal-fallback" aria-hidden="true">{deal.name.slice(0, 1)}</span>;
}

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Aspiring Founders Meetup home"><img src="/assets/afm-logo.png" alt="Aspiring Founders Meetup" /><span>Aspiring Founders Meetup</span></a>
          <div className="nav-links"><a href="#membership">Membership</a><a href="#events">Events</a><a href="#people">People</a></div>
          <a className="nav-cta" href="https://tally.so/r/xXW8B5" target="_blank" rel="noreferrer">Join waitlist <Users size={15} /></a>
        </nav>
        <div className="hero-a" aria-hidden="true">A</div>
        <div className="hero-content shell" id="top">
          <p className="eyebrow"><span>Berlin</span> For people making the move</p>
          <h1>The beginning<br />deserves a <em>room.</em></h1>
          <p className="hero-copy">Building something, or ready to? AFM gives aspiring founders a focused circle: the right people, practical tools and the momentum to turn an early idea into real work.</p>
          <div className="hero-actions"><a className="button button-purple" href="https://tally.so/r/xXW8B5" target="_blank" rel="noreferrer">Join waitlist <Users size={18} /></a><a className="button button-hero-outline" href="#membership">Learn more <BookOpen size={18} /></a></div>
        </div>
        <div className="hero-footer shell"><span>For the curious, the newly committed, and the people ready to begin.</span><span>Events · experts · useful introductions</span></div>
      </section>

      <section className="intro shell section-grid">
        <div><p className="eyebrow">A founder&apos;s first circle</p><h2>Not another feed of advice. A place to move forward.</h2></div>
        <div className="intro-copy"><p>AFM is built around the practical questions that come before momentum: What should I build? Who can help? Which tools are worth it? Where do I find people who understand the leap?</p><p>We are creating an ecosystem for people serious about building: cut the noise, focus on the work, accelerate growth with the right tools, and learn from the best. 🌱</p></div>
      </section>

      <section className="membership-showcase shell" id="membership">
        <div className="membership-showcase-heading"><p className="eyebrow">One membership. A stronger first year.</p><h2>A clearer way to build your first year.</h2><p>Expert guidance, useful access and a serious community, brought together in one practical starting point.</p></div>
        <div className="membership-card-grid">
          <article className="membership-core" id="waitlist"><p className="eyebrow inverse"><span>Coming soon</span> Founding cohort</p><h3>Aspiring Founder<br />Membership</h3><div className="membership-price"><strong>€40</strong><span>per month<br />paid yearly</span></div><p>One membership for the people, tools and practical support that help an early idea go further.</p><a className="button button-light" href="https://tally.so/r/xXW8B5" target="_blank" rel="noreferrer">Join waitlist <Users size={18} /></a></article>
          <div className="membership-benefit-column">
            <article className="membership-deals"><div className="deal-rail" aria-hidden="true">{["1Password.png", "Amazon_Web_Services_Logo.svg.webp", "Google_Cloud_icon_(2026).svg.webp", "Microsoft_Azure.svg.webp", "Notion-logo.svg.png", "Slack_icon_2019.svg.png", "airtable.png", "apollo.png", "asana.svg", "canva.svg", "chatgpt.png", "drive.png", "finom.png", "framer.png", "github.png", "gitlab.png", "glean.png", "godaddy.png", "google.webp", "hubspot.webp", "linkedin.png", "loom.png", "mailchimp.webp", "miro.png", "ms-copilot.png", "n8n-color.png", "qonto.webp", "riverside.jpeg", "webflow logo.svg", "zapier.png", "zoho.png", "zoom.webp"].map((logo, index) => <img key={`${logo}-${index}`} src={`/assets/deal-logos/${logo}`} alt="" />)}</div><div className="deals-card-copy"><Sparkles size={22} /><p className="eyebrow">Your practical edge</p><h3>2,000+ startup deals.</h3><p>From free access to up to 90% off selected tools, cloud credits and software built for the work ahead.</p></div></article>
            <div className="specialist-row">{specialists.map((specialist) => { const Icon = specialist.icon; return <article className="specialist-card" key={specialist.title}><Icon size={20} /><p className="eyebrow">{specialist.title}</p><h3>{specialist.heading}</h3><p>{specialist.copy}</p><strong>Save what can cost {specialist.range}</strong></article>; })}</div>
            <div className="membership-value-row"><article className="membership-small-card community-card"><Users size={22} /><p className="eyebrow">The community</p><h3>Build alongside people who mean it.</h3><p>An exclusive space to share progress, questions and useful introductions.</p></article><article className="membership-small-card events-card"><CalendarDays size={22} /><p className="eyebrow">Events included</p><h3>Meet the work in the room.</h3><p>Free access to AFM paid events, workshops and founder sessions.</p></article></div>
          </div>
        </div>
      </section>

      <section className="deals-section shell">
        <div className="section-heading"><div><p className="eyebrow">The practical layer</p><h2>Build with more<br />room to try.</h2></div><p>Founder software, services and credits that make a difference in the early stage. Deals are refreshed continuously as new partners come on board.</p></div>
        <div className="deal-pager">
          <input type="radio" name="deal-page" id="deal-page-one" defaultChecked />
          <input type="radio" name="deal-page" id="deal-page-two" />
          <div className="deal-pages">{dealPages.map((page, pageIndex) => <div className="deal-page" key={pageIndex}>{page.map((deal) => <article className="deal-card" key={deal.name}><div className="deal-top"><span className="deal-mark"><DealLogo deal={deal} /></span><h3>{deal.name}</h3></div><p>{deal.offer}</p><strong>{deal.note}</strong></article>)}{pageIndex === 1 && <article className="deal-card deal-more"><Sparkles size={25} /><h3>2,000+ more ways to get moving.</h3><p>Software, cloud, payments, productivity and the tools around the work.</p></article>}</div>)}</div>
          <div className="deal-dots" aria-label="Deal pages"><label htmlFor="deal-page-one">1</label><label htmlFor="deal-page-two">2</label></div>
        </div>
      </section>

      <section className="events-section shell" id="events">
        <div className="events-copy"><p className="eyebrow">In the room</p><h2>Events that keep the work moving.</h2><p>Masterclasses, founder stories and practical sessions, usually two to three each month. Membership includes free access to AFM&apos;s paid events, typically valued at €50 each.</p><div className="event-value"><CirclePlay size={21} /><span>Up to <strong>€1,200</strong> in annual event value at two events each month.</span></div><a className="button button-dark" href="https://luma.com/aspiring" target="_blank" rel="noreferrer">See all upcoming events <CirclePlay size={18} /></a></div>
        <div className="luma-wrap"><div className="luma-caption"><span className="live-dot" /> Live calendar</div><iframe className="luma-frame" title="Upcoming Aspiring Founders Meetup events" src="https://luma.com/embed/calendar/cal-SHvMoUk6rRHhfNL/events" width="600" height="450" frameBorder="0" allowFullScreen aria-hidden="false" tabIndex={0} /></div>
      </section>

      <section className="faq-section shell"><div className="faq-heading"><p className="eyebrow">Good questions</p><h2>Everything you need to know before joining.</h2></div><div className="faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div></section>

      <section className="people-wrap" id="people"><div className="people-section shell"><div className="section-heading people-heading"><div><p className="eyebrow">The people around AFM</p><h2>Built in public.<br />Built together.</h2></div><p>AFM began as a community around a simple conviction: more people should have a real way into entrepreneurship.</p></div><div className="team-grid"><a className="person-card person-yashvir" href="https://www.linkedin.com/in/yashvirchawla/" target="_blank" rel="noreferrer"><img src="/assets/yashvir-circle.png" alt="Yashvir Chawla" /><div><p>Founder</p><h3>Yashvir<br />Chawla</h3></div><ArrowUpRight size={18} /></a><a className="person-card person-udey" href="https://www.linkedin.com/in/udeysingh/" target="_blank" rel="noreferrer"><img src="/assets/udey-circle.png" alt="Udey Singh Thakur" /><div><p>Growth Advisor</p><h3>Udey Singh<br />Thakur</h3></div><ArrowUpRight size={18} /></a></div><div className="partner-intro"><Handshake size={21} /><p className="eyebrow">The AFM network</p><span>Experts and spaces that help founders find their footing.</span></div><div className="partner-grid">{partners.map((partner) => { const content = <><div className="partner-image"><img src={partner.image} alt={partner.name} /></div><div><p>{partner.role}</p><h3>{partner.name}</h3>{partner.detail && <span>{partner.detail}</span>}</div>{partner.href && <ArrowUpRight size={18} />}</>; return partner.href ? <a className="partner-card" href={partner.href} target="_blank" rel="noreferrer" key={partner.name}>{content}</a> : <article className="partner-card" key={partner.name}>{content}</article>; })}</div></div></section>

      <section className="contact-wrap"><div className="contact-section shell"><div className="contact-content"><Users size={28} /><p className="eyebrow inverse">Your next room</p><h2>You don&apos;t have to figure it all out alone.</h2><p>Join the waitlist or bring your questions to open office hours with other aspiring founders.</p><div className="contact-actions"><a className="button button-light" href="https://tally.so/r/xXW8B5" target="_blank" rel="noreferrer">Join waitlist <Users size={18} /></a><a className="button button-ghost" href="https://cal.com/udey-singh-thakur/afm-membership-office-hours" target="_blank" rel="noreferrer">Get in touch <MessageCircle size={18} /></a></div></div></div></section>
      <footer className="footer shell"><a className="brand footer-brand" href="#top"><img src="/assets/afm-logo.png" alt="" /><span>Aspiring Founders Meetup</span></a><span>Berlin · Germany</span><a href="https://www.linkedin.com/company/aspiring-founders-meetup/" target="_blank" rel="noreferrer">Follow AFM on LinkedIn <ArrowUpRight size={14} /></a><a href="https://www.employed.world/" target="_blank" rel="noreferrer">A community initiative from employed.world <ArrowUpRight size={14} /></a></footer>
    </main>
  );
}
