import "../styles/legal.scss";

export default function Privacy() {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <a href="/" className="legal-back">← Back to Content Intelligence</a>

        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: May 3, 2026</p>

        <section>
          <h2>1. Who We Are</h2>
          <p>Content Intelligence App is operated by Andrés Pérez Díaz, a Colombian citizen. We are committed to protecting your personal information and being transparent about how we use it.</p>
          <p>Contact: <a href="mailto:andres@content-intel.app">andres@content-intel.app</a></p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <h3>Information you provide directly:</h3>
          <ul>
            <li><strong>Email address</strong> — used for account creation and communications</li>
            <li><strong>Password</strong> — stored securely and encrypted by our authentication provider</li>
            <li><strong>Content data</strong> — ideas, topics, content records, and descriptions you create in the App</li>
            <li><strong>Profile information</strong> — optional fields provided during onboarding</li>
          </ul>
          <h3>Information collected automatically:</h3>
          <ul>
            <li><strong>Usage data</strong> — which features you use, how often you generate briefs or reports, download events</li>
            <li><strong>Session data</strong> — login timestamps and session information</li>
          </ul>
          <h3>Information we do not collect:</h3>
          <ul>
            <li>Payment or financial information (the Service is currently free)</li>
            <li>Precise location data</li>
            <li>Device identifiers or advertising IDs</li>
            <li>Data from minors (the Service is restricted to users 18 and older)</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and improve the Service</li>
            <li>Generate AI-powered creative briefs and reports personalized to your content patterns</li>
            <li>Send account-related communications</li>
            <li>Analyze aggregated, anonymized usage trends to improve the platform</li>
            <li>Maintain the security and integrity of the Service</li>
          </ul>
          <p>We do not use your information to:</p>
          <ul>
            <li>Sell or share with third-party advertisers</li>
            <li>Train AI models</li>
            <li>Create individual profiles for advertising purposes</li>
          </ul>
        </section>

        <section>
          <h2>4. Third-Party Services</h2>
          <p>We use the following trusted third-party services:</p>
          <ul>
            <li><strong>Supabase</strong> — Database, authentication, and backend infrastructure</li>
            <li><strong>Anthropic (Claude API)</strong> — AI-powered brief and report generation</li>
            <li><strong>Resend</strong> — Transactional email delivery</li>
          </ul>
          <p>Your data is not shared with any other third parties.</p>
        </section>

        <section>
          <h2>5. AI Processing</h2>
          <p>When you generate a brief or creative report, your content patterns are sent to Anthropic's Claude API to generate a personalized response. This data is processed in real time and is not retained by Anthropic for training purposes under their standard API terms.</p>
        </section>

        <section>
          <h2>6. Data Storage and Security</h2>
          <p>Your data is stored in Supabase's infrastructure with Row Level Security (RLS), encrypted connections (HTTPS/TLS), and hashed passwords. We implement reasonable security measures but cannot guarantee absolute security.</p>
        </section>

        <section>
          <h2>7. Data Retention</h2>
          <p>We retain your data for as long as your account is active. If you delete your account, your personal profile and content data will be deleted within 30 days. Anonymized, aggregated data may be retained for platform analytics.</p>
        </section>

        <section>
          <h2>8. Your Rights</h2>
          <p>Under Colombian data protection law (Ley 1581 de 2012), you have the right to access, correct, delete, and export your personal data, and to object to specific uses. Contact us at <a href="mailto:andres@content-intel.app">andres@content-intel.app</a> and we will respond within 15 business days.</p>
        </section>

        <section>
          <h2>9. Cookies</h2>
          <p>The App uses only essential session cookies necessary for authentication. We do not use advertising cookies, tracking pixels, or third-party analytics cookies.</p>
        </section>

        <section>
          <h2>10. Children's Privacy</h2>
          <p>This Service is not directed to individuals under 18 years of age. We do not knowingly collect personal information from minors.</p>
        </section>

        <section>
          <h2>11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify registered users by email of any significant changes.</p>
        </section>

        <section>
          <h2>12. Contact</h2>
          <p><strong>Andrés Pérez Díaz</strong><br />
          <a href="mailto:andres@content-intel.app">andres@content-intel.app</a><br />
          Colombia</p>
        </section>
      </div>
    </div>
  );
}
