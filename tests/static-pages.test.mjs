import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;

const read = (file) => readFileSync(join(root, file), "utf8");
const rootIndex = read("index.html");
const index = read("pages/public/index.html");
const about = read("pages/public/about.html");
const events = read("pages/public/events.html");
const certifications = read("pages/public/certifications.html");
const articles = read("pages/public/articles.html");
const contact = read("pages/public/contact.html");
const login = read("pages/auth/login.html");
const register = read("pages/auth/register.html");
const dashboard = read("pages/user/dashboard.html");
const userEvents = read("pages/user/user-events.html");
const userCertifications = read("pages/user/user-certifications.html");
const userRequirements = read("pages/user/user-requirements.html");
const userCertificates = read("pages/user/user-certificates.html");
const userProfile = read("pages/user/user-profile.html");
const adminDashboard = read("pages/admin/dashboard.html");
const adminUsers = read("pages/admin/users.html");
const adminEvents = read("pages/admin/events.html");
const adminCertifications = read("pages/admin/certifications.html");
const adminRequirements = read("pages/admin/requirements.html");
const adminArticles = read("pages/admin/articles.html");
const css = read("assets/css/styles.css");
const js = read("assets/js/app.js");
const readme = read("README.md");
const architecture = read("docs/ARCHITECTURE.md");
const prd = read("docs/PRD.md");

function countMatches(source, pattern) {
  return [...source.matchAll(pattern)].length;
}

function assertIncludes(source, expected, context) {
  assert.ok(source.includes(expected), `${context}: expected to include "${expected}"`);
}

function assertBefore(source, first, second, context) {
  const firstIndex = source.indexOf(first);
  const secondIndex = source.indexOf(second);
  assert.ok(firstIndex >= 0, `${context}: missing first marker "${first}"`);
  assert.ok(secondIndex >= 0, `${context}: missing second marker "${second}"`);
  assert.ok(firstIndex < secondIndex, `${context}: "${first}" should appear before "${second}"`);
}

function testIndexPage() {
  assertIncludes(rootIndex, "pages/public/index.html", "root index redirects to public home");
  assertIncludes(index, "<title>IAEETA Digital Platform | Home</title>", "index title");
  assertIncludes(index, '<a class="is-active" href="index.html">Home</a>', "index active nav");
  assertIncludes(index, "Membangun Ekosistem Profesional Aviasi Indonesia", "index hero headline");

  assert.equal(countMatches(index, /class="home-stats"/g), 1, "index has one stats strip");
  assertIncludes(index, "Pengguna Aktif", "index statistic users");
  assertIncludes(index, "Seminar dan event", "index statistic events");
  assertIncludes(index, "Program sertifikasi", "index statistic certifications");
  assertIncludes(index, "Kemitraan", "index statistic partners");

  assertIncludes(index, "director-photo", "index director quote photo");
  assertIncludes(index, "Direktur IAEETA", "index director quote attribution");
  assert.equal(countMatches(index, /class="benefit-icon"/g), 4, "index has four benefit cards");
  assert.equal(countMatches(index, /class="faq-list"/g), 1, "index has FAQ list");
  assert.equal(countMatches(index, /<details/g), 5, "index has five FAQ items");
  assert.equal(countMatches(index, /class="logo-mark/g), 6, "index has six partner logo marks");
  assertBefore(index, "partner-section", "faq-section", "FAQ appears after partners");

  assert.ok(!/Membership|Member Portal|Project Overview|Future Development/.test(index), "index should not contain removed PRD/marketing copy");
}

function testAboutPage() {
  assertIncludes(about, "<title>About Us | IAEETA Digital Platform</title>", "about title");
  assertIncludes(about, '<a class="is-active" href="about.html">About Us</a>', "about active nav");
  assertIncludes(about, "Organisasi aviasi profesional untuk pengembangan kompetensi Indonesia", "about hero headline");

  assertIncludes(about, "Mengenal IAEETA", "about profile");
  assertIncludes(about, "Visi", "about vision");
  assertIncludes(about, "Misi", "about mission");
  assertIncludes(about, "Struktur Organisasi", "about org section");
  assertIncludes(about, "Direktur IAEETA", "about org lead");
  assertIncludes(about, "org-president-card", "about has president card");
  assert.equal(countMatches(about, /class="org-division-card"/g), 4, "about has four organization division cards");
  assert.equal(countMatches(about, /<img/g), 7, "about has photos for hero, org, and platform sections");
  assertIncludes(about, "Dr. Arif Wibowo", "about org lead name");
  assertIncludes(about, "Event Planning", "about event subdivision");
  assertIncludes(about, "Webinar & Community", "about webinar subdivision");
  assertIncludes(about, "Certification Verification", "about certification verification subdivision");
  assertIncludes(about, "Training Schedule", "about training subdivision");
  assert.equal(countMatches(about, /class="benefit-icon"/g), 4, "about has four value cards");
  assert.equal(countMatches(about, /class="platform-list"/g), 1, "about has platform list");
  const platformList = about.match(/<div class="platform-list">([\s\S]*?)<\/div>/)?.[1] ?? "";
  assert.equal(countMatches(platformList, /<span>/g), 4, "about has four platform tags");
  ["Company Profile", "Seminar & Event", "Certification", "Article & Publication"].forEach((tag) => {
    assertIncludes(platformList, tag, `about platform tag ${tag}`);
  });
}

function testSharedAssets() {
  assertIncludes(css, ".home-hero", "css home hero styles");
  assertIncludes(css, ".home-stats", "css home stats styles");
  assertIncludes(css, ".faq-section", "css FAQ styles");
  assertIncludes(css, ".page-hero", "css internal page hero styles");
  assertIncludes(css, ".org-section", "css org styles");
  assertIncludes(css, "@media (max-width: 760px)", "css mobile breakpoint");

  assertIncludes(js, '".faq-section"', "js reveals FAQ section");
  assertIncludes(js, '".org-section"', "js reveals org section");
  assertIncludes(js, "IntersectionObserver", "js uses reveal observer");
}

function testDocumentation() {
  assert.ok(existsSync(join(root, "README.md")), "README exists");
  assert.ok(existsSync(join(root, "docs/ARCHITECTURE.md")), "architecture documentation exists");
  assert.ok(existsSync(join(root, "docs/PRD.md")), "PRD documentation exists");
  assertIncludes(readme, "IAEETA Digital Platform", "README project title");
  assertIncludes(readme, "Public / Guest", "README public page grouping");
  assertIncludes(readme, "Registered User", "README user page grouping");
  assertIncludes(architecture, "Application Structure and Software Architecture", "architecture title");
  assertIncludes(architecture, "Current Repository Structure", "architecture repository structure");
  assertIncludes(architecture, "pages/public", "architecture public folder");
  assertIncludes(architecture, "pages/auth", "architecture auth folder");
  assertIncludes(architecture, "pages/user", "architecture user folder");
  assertIncludes(architecture, "pages/admin", "architecture admin folder");
  assertIncludes(architecture, "Recommended Future Structure", "architecture future structure");
  assertIncludes(prd, "Product Requirements Document", "PRD title");
  assertIncludes(prd, "Public / Guest Area", "PRD public scope");
  assertIncludes(prd, "Registered User Area", "PRD user scope");
  assertIncludes(prd, "Admin Area", "PRD admin scope");
  assertIncludes(prd, "Acceptance Criteria", "PRD acceptance criteria");
  assertIncludes(prd, "expired date", "PRD certificate expired date requirement");
  assertIncludes(prd, "certificate status", "PRD certificate status requirement");
}

function testEventsPage() {
  assertIncludes(events, "<title>Events | IAEETA Digital Platform</title>", "events title");
  assertIncludes(events, '<a class="is-active" href="events.html">Events</a>', "events active nav");
  assertIncludes(events, "Agenda event untuk komunitas profesional aviasi", "events hero");
  assert.equal(countMatches(events, /class="event-list-card"/g), 3, "events has three event cards");
  assert.equal(countMatches(events, /href="event-detail.html"/g), 3, "events card links go to detail");
  assertIncludes(events, "Event Registration Flow", "events flow section");
  assert.equal(countMatches(events, /<article><strong>0/g), 4, "events has four flow steps");
}

function testCertificationsPage() {
  assertIncludes(certifications, "<title>Certifications | IAEETA Digital Platform</title>", "certifications title");
  assertIncludes(certifications, '<a class="is-active" href="certifications.html">Certifications</a>', "certifications active nav");
  assertIncludes(certifications, "Program sertifikasi untuk pengembangan kompetensi aviasi", "certifications hero");
  assert.equal(countMatches(certifications, /class="cert-list-card"/g), 4, "certifications has four certification cards");
  assert.equal(countMatches(certifications, /<a href="certification-detail.html">Lihat Detail/g), 4, "certification list cards link to detail");
  assertIncludes(certifications, "Certification Flow", "certifications flow section");
  assert.equal(countMatches(certifications, /<article><strong>0/g), 5, "certifications has five flow steps");
  assertIncludes(certifications, "Jadwal Sertifikasi", "certifications schedule section");
  assert.equal(countMatches(certifications, /class="schedule-card"/g), 4, "certifications has four schedule cards");
  assert.equal(countMatches(certifications, /class="schedule-date"/g), 4, "certifications schedule cards have date badges");
  assert.equal(countMatches(certifications, /class="schedule-card-body"/g), 4, "certifications schedule cards have event-like bodies");
  assert.equal(countMatches(certifications, /class="schedule-cta/g), 4, "certifications schedule cards have CTA links");
  assert.equal(countMatches(certifications, /Daftar Sekarang/g), 4, "all certification schedules link to registration");
  assertIncludes(certifications, "status-open", "certifications has open status");
  assertIncludes(certifications, "status-full", "certifications has full status");
  assertIncludes(certifications, "status-closed", "certifications has closed status");
}

function testArticlesPage() {
  assertIncludes(articles, "<title>Articles | IAEETA Digital Platform</title>", "articles title");
  assertIncludes(articles, '<a class="is-active" href="articles.html">Articles</a>', "articles active nav");
  assertIncludes(articles, "Publikasi, artikel, dan pengumuman IAEETA", "articles hero");
  assert.equal(countMatches(articles, /class="article-list-card/g), 4, "articles has four article cards");
  assert.equal(countMatches(articles, /href="article-detail.html"/g), 4, "articles cards link to detail");
  assertIncludes(articles, "featured-article", "articles has featured article");
}

function testContactPage() {
  assertIncludes(contact, "<title>Contact | IAEETA Digital Platform</title>", "contact title");
  assertIncludes(contact, '<a class="is-active" href="contact.html">Contact</a>', "contact active nav");
  assertIncludes(contact, "Hubungi kami untuk informasi event dan sertifikasi", "contact hero");
  assert.equal(countMatches(contact, /class="contact-card-list"/g), 1, "contact has contact info list");
  assertIncludes(contact, "Form kontak IAEETA", "contact has form aria label");
  assertIncludes(contact, "map-section", "contact has location section");
  assertIncludes(contact, "https://www.google.com/maps", "contact embeds Google Maps");
}

function testAuthPages() {
  assertIncludes(login, "<title>Login | IAEETA Digital Platform</title>", "login title");
  assertIncludes(login, 'aria-label="Form login IAEETA"', "login form label");
  assertIncludes(login, "Masuk ke akun IAEETA", "login headline");
  assertIncludes(login, 'href="forgot-password.html"', "login forgot password link");
  assertIncludes(login, 'href="register.html">Daftar sekarang', "login switch to register");
  assert.equal(countMatches(login, /<input/g), 3, "login has email, password, and remember inputs");

  assertIncludes(register, "<title>Register | IAEETA Digital Platform</title>", "register title");
  assertIncludes(register, 'aria-label="Form daftar akun IAEETA"', "register form label");
  assertIncludes(register, "Daftar akun IAEETA", "register headline");
  assertIncludes(register, "Kategori profesional", "register professional category");
  assertIncludes(register, "Minat layanan", "register service interest");
  assertIncludes(register, 'href="login.html">Login', "register switch to login");
  assert.equal(countMatches(register, /<input/g), 7, "register has account inputs");

  assertIncludes(css, ".auth-page", "css auth page styles");
  assertIncludes(css, ".auth-card", "css auth card styles");
  assertIncludes(css, ".form-grid", "css register form grid styles");
}

function testDashboardPage() {
  assertIncludes(dashboard, "<title>User Dashboard | IAEETA Digital Platform</title>", "dashboard title");
  assertIncludes(dashboard, 'class="dashboard-sidebar"', "dashboard has sidebar");
  assertIncludes(dashboard, "Dashboard Pengguna", "dashboard headline");
  assertIncludes(dashboard, "Event Terdaftar", "dashboard event summary");
  assertIncludes(dashboard, "Sertifikasi Aktif", "dashboard certification summary");
  assertIncludes(dashboard, "Dokumen persyaratan", "dashboard requirement section");
  assertIncludes(dashboard, "Sertifikat tersedia", "dashboard certificate section");
  assertIncludes(dashboard, 'href="user-events.html"', "dashboard links to user events");
  assertIncludes(dashboard, 'href="user-certifications.html"', "dashboard links to user certifications");
  assertIncludes(dashboard, 'href="user-requirements.html"', "dashboard links to requirements");
  assertIncludes(dashboard, 'href="user-certificates.html"', "dashboard links to certificates");
  assertIncludes(dashboard, 'href="user-profile.html"', "dashboard links to profile");
  assert.equal(countMatches(dashboard, /class="dashboard-panel/g), 4, "dashboard has four panels");
  assert.equal(countMatches(dashboard, /class="dashboard-stats"/g), 1, "dashboard has stats strip");
  assertIncludes(css, ".dashboard-sidebar", "css dashboard sidebar styles");
  assertIncludes(css, ".dashboard-grid", "css dashboard grid styles");
}

function testAdminDashboardPage() {
  assertIncludes(adminDashboard, "<title>Admin Dashboard | IAEETA Digital Platform</title>", "admin dashboard title");
  assertIncludes(adminDashboard, 'class="dashboard-sidebar admin-sidebar"', "admin dashboard has admin sidebar");
  assertIncludes(adminDashboard, "Dashboard Admin", "admin dashboard headline");
  assertIncludes(adminDashboard, "Operational Command Center", "admin dashboard hero");
  assertIncludes(adminDashboard, "Requirement Review", "admin dashboard requirement review");
  assertIncludes(adminDashboard, "Certification Pipeline", "admin dashboard certification pipeline");
  assertIncludes(adminDashboard, "Event Management", "admin dashboard event management");
  assertIncludes(adminDashboard, "Article & Publication", "admin dashboard article CMS");
  assertIncludes(adminDashboard, "Pesan masuk", "admin dashboard contact messages");
  assertIncludes(adminDashboard, 'href="users.html"', "admin dashboard links to users page");
  assertIncludes(adminDashboard, 'href="events.html"', "admin dashboard links to events page");
  assertIncludes(adminDashboard, 'href="certifications.html"', "admin dashboard links to certifications page");
  assertIncludes(adminDashboard, 'href="requirements.html"', "admin dashboard links to requirements page");
  assertIncludes(adminDashboard, 'href="articles.html"', "admin dashboard links to articles page");
  assert.ok(!adminDashboard.includes('href="certificates.html"'), "admin dashboard should not link to removed certificates admin module");
  assert.ok(!adminDashboard.includes("Certificate Expiry Monitor"), "admin dashboard should not show removed certificates panel");
  assert.equal(countMatches(adminDashboard, /admin-panel/g), 5, "admin dashboard has five admin panels");
  assert.equal(countMatches(adminDashboard, /class="admin-table-row/g), 4, "admin dashboard has requirement table rows");
  assertIncludes(css, ".admin-sidebar", "css admin sidebar styles");
  assertIncludes(css, ".admin-grid", "css admin grid styles");
  assertIncludes(css, ".admin-table", "css admin table styles");
}

function testAdminModulePages() {
  assertIncludes(adminUsers, "<title>Admin Users | IAEETA Digital Platform</title>", "admin users title");
  assertIncludes(adminUsers, "Users Management", "admin users headline");
  assertIncludes(adminUsers, 'class="is-active" href="users.html"', "admin users active nav");
  assertIncludes(adminUsers, "Daftar pengguna", "admin users table");

  assertIncludes(adminEvents, "<title>Admin Events | IAEETA Digital Platform</title>", "admin events title");
  assertIncludes(adminEvents, "Events Management", "admin events headline");
  assertIncludes(adminEvents, 'class="is-active" href="events.html"', "admin events active nav");
  assertIncludes(adminEvents, "Daftar event", "admin events table");

  assertIncludes(adminCertifications, "<title>Admin Certifications | IAEETA Digital Platform</title>", "admin certifications title");
  assertIncludes(adminCertifications, "Certifications Management", "admin certifications headline");
  assertIncludes(adminCertifications, 'class="is-active" href="certifications.html"', "admin certifications active nav");
  assertIncludes(adminCertifications, "Certification Pipeline", "admin certifications pipeline");

  assertIncludes(adminRequirements, "<title>Admin Requirements | IAEETA Digital Platform</title>", "admin requirements title");
  assertIncludes(adminRequirements, "Requirements Review", "admin requirements headline");
  assertIncludes(adminRequirements, 'class="is-active" href="requirements.html"', "admin requirements active nav");
  assertIncludes(adminRequirements, "Antrean verifikasi", "admin requirements queue");

  assertIncludes(adminArticles, "<title>Admin Articles | IAEETA Digital Platform</title>", "admin articles title");
  assertIncludes(adminArticles, "Articles & Publications", "admin articles headline");
  assertIncludes(adminArticles, 'class="is-active" href="articles.html"', "admin articles active nav");
  assertIncludes(adminArticles, "Daftar artikel", "admin articles table");

  assertIncludes(css, ".admin-actions", "css admin actions styles");
  assert.ok(!css.includes(".admin-certificate-summary"), "css should not include removed admin certificates styles");
}

function testUserAreaPages() {
  assertIncludes(userEvents, "<title>My Events | IAEETA User Dashboard</title>", "user events title");
  assertIncludes(userEvents, "Event Saya", "user events headline");
  assertIncludes(userEvents, 'class="is-active" href="user-events.html"', "user events active nav");
  assert.equal(countMatches(userEvents, /class="user-record-card"/g), 3, "user events has three records");

  assertIncludes(userCertifications, "<title>My Certifications | IAEETA User Dashboard</title>", "user certifications title");
  assertIncludes(userCertifications, "Sertifikasi Saya", "user certifications headline");
  assertIncludes(userCertifications, 'class="is-active" href="user-certifications.html"', "user certifications active nav");
  assert.equal(countMatches(userCertifications, /class="user-record-card certification-record"/g), 2, "user certifications has two records");

  assertIncludes(userRequirements, "<title>Requirements | IAEETA User Dashboard</title>", "user requirements title");
  assertIncludes(userRequirements, "Dokumen Persyaratan", "user requirements headline");
  assertIncludes(userRequirements, 'aria-label="Form upload dokumen persyaratan"', "user requirements upload form");
  assert.equal(countMatches(userRequirements, /status-badge/g), 5, "user requirements has five document statuses");

  assertIncludes(userCertificates, "<title>Certificates | IAEETA User Dashboard</title>", "user certificates title");
  assertIncludes(userCertificates, "Sertifikat Digital", "user certificates headline");
  assertIncludes(userCertificates, "certificate-library", "user certificates library");
  assert.equal(countMatches(userCertificates, /class="certificate-card"/g), 3, "user certificates has three certificate cards");
  assert.equal(countMatches(userCertificates, /Certificate Number/g), 3, "user certificates show certificate numbers");
  assert.equal(countMatches(userCertificates, /Issue Date/g), 3, "user certificates show issue dates");
  assert.equal(countMatches(userCertificates, /Expired Date/g), 3, "user certificates show expired dates");
  assert.equal(countMatches(userCertificates, /Certificate Status/g), 3, "user certificates show certificate statuses");
  assertIncludes(userCertificates, "certificate-status is-active", "user certificates has active status");
  assertIncludes(userCertificates, "certificate-status is-expiring", "user certificates has expiring status");

  assertIncludes(userProfile, "<title>Profile | IAEETA User Dashboard</title>", "user profile title");
  assertIncludes(userProfile, "Profil Pengguna", "user profile headline");
  assertIncludes(userProfile, 'aria-label="Form profil pengguna"', "user profile form");
  assert.equal(countMatches(userProfile, /<input/g), 5, "user profile has five inputs");

  assertIncludes(css, ".user-page-hero", "css user page hero styles");
  assertIncludes(css, ".user-record-card", "css user record styles");
  assertIncludes(css, ".profile-layout", "css profile layout styles");
  assertIncludes(css, ".certificate-meta", "css certificate metadata styles");
  assertIncludes(css, ".certificate-status", "css certificate status styles");
}

testIndexPage();
testAboutPage();
testEventsPage();
testCertificationsPage();
testArticlesPage();
testContactPage();
testAuthPages();
testDashboardPage();
testAdminDashboardPage();
testAdminModulePages();
testUserAreaPages();
testSharedAssets();
testDocumentation();

console.log("Static page tests passed");
