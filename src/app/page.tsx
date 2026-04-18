import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-24 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 z-10">
            <span className="text-tertiary font-label text-sm uppercase tracking-[0.2em] mb-4 block">
              SDET &amp; DevOps Enthusiast
            </span>
            <h1 className="font-headline text-6xl md:text-[120px] leading-[0.9] font-black tracking-[-0.05em] text-foreground mb-8">
              ENGINEERING <br />
              <span className="text-primary italic">QUALITY</span> CODE.
            </h1>
            <p className="max-w-xl text-muted text-lg leading-relaxed mb-12">
              Merging test automation expertise with DevOps practices to build
              reliable, scalable software systems. When not coding, exploring the
              world and diving into books.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/resume"
                className="bg-primary-container text-on-primary-container px-8 py-4 rounded-md font-label uppercase tracking-widest text-sm font-bold hover:bg-primary transition-colors"
              >
                View Resume
              </Link>
              <Link
                href="/blogs"
                className="border border-outline-variant/30 text-foreground px-8 py-4 rounded-md font-label uppercase tracking-widest text-sm font-bold hover:bg-surface-container-high transition-colors"
              >
                Read Blogs
              </Link>
            </div>
          </div>
          <div className="md:col-span-4 relative h-[600px] hidden md:block">
            <div className="absolute inset-0 bg-surface-container-low rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img
                className="w-full h-full object-cover"
                alt="Gaurav Goyal"
                src="/gaurav.jpg"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-primary-container p-8 rounded-xl shadow-2xl">
              <span className="font-headline text-3xl font-bold text-on-primary-container tracking-tight">
                Gaurav Goyal
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10" />
      </section>

      {/* About Section */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <h2 className="font-headline text-4xl font-bold text-foreground mb-6">
              Building <span className="text-primary">Reliable</span> Software
              Systems.
            </h2>
            <div className="w-24 h-1 bg-primary mb-12" />
          </div>
          <div className="md:col-span-7 space-y-8">
            <p className="text-xl text-foreground leading-relaxed">
              I believe that every test should serve a purpose. My approach is
              rooted in the philosophy of quality engineering — where automation
              isn&apos;t just about speed, it&apos;s about confidence.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Passionate about test automation, CI/CD pipelines, and DevOps
              practices. When I&apos;m not writing tests or building pipelines,
              you&apos;ll find me traveling the world or buried in a good book.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="text-primary font-headline text-sm uppercase tracking-widest mb-2">
                  Testing
                </h4>
                <p className="text-muted text-sm">
                  API testing, E2E automation, and service-level integration.
                </p>
              </div>
              <div>
                <h4 className="text-primary font-headline text-sm uppercase tracking-widest mb-2">
                  DevOps
                </h4>
                <p className="text-muted text-sm">
                  CI/CD pipelines, containerization, and infrastructure as code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-24">
            <span className="text-tertiary font-label text-sm uppercase tracking-[0.2em] mb-4 block">
              Professional Narrative
            </span>
            <h2 className="font-headline text-5xl font-bold text-foreground">
              Experience.
            </h2>
          </div>
          <div className="relative space-y-0">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-surface-container-highest -translate-x-1/2" />

            {/* SDET Team Lead / DevOps Engineer */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 pb-24 group">
              <div className="md:text-right md:pr-16 flex flex-col md:items-end order-2 md:order-1">
                <h3 className="text-2xl font-headline font-bold text-foreground">
                  SDET Team Lead / DevOps Engineer
                </h3>
                <span className="text-primary font-label text-sm uppercase tracking-widest mb-4">
                  Safe Security &bull; Sep 2025 — Present
                </span>
                <p className="text-muted max-w-md md:ml-auto">
                  Leading a team of 4 SDETs, architecting AI testing frameworks,
                  and owning CI/CD infrastructure across Jenkins and GitHub
                  Actions.
                </p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-2 z-10 shadow-[0_0_15px_rgba(205,189,255,0.5)]" />
              <div className="md:pl-16 order-1 md:order-2 flex items-center">
                <div className="w-16 h-16 bg-surface-container-high rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    shield_person
                  </span>
                </div>
              </div>
            </div>

            {/* SDET-2 / DevOps Engineer */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 pb-24 group">
              <div className="md:text-right md:pr-16 hidden md:flex flex-col md:items-end order-2 md:order-1">
                <div className="w-16 h-16 bg-surface-container-high rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    rocket_launch
                  </span>
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-2 z-10 shadow-[0_0_15px_rgba(205,189,255,0.5)]" />
              <div className="md:pl-16 order-2 md:order-2">
                <h3 className="text-2xl font-headline font-bold text-foreground">
                  SDET-2 / DevOps Engineer
                </h3>
                <span className="text-primary font-label text-sm uppercase tracking-widest mb-4">
                  Safe Security &bull; Aug 2023 — Sep 2025
                </span>
                <p className="text-muted max-w-md">
                  Migrated infrastructure to OpenTofu, moved 15+ services to
                  microservices, and cut CI build times from 8 hours to 3 hours.
                </p>
              </div>
            </div>

            {/* SDET-1 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 pb-24 group">
              <div className="md:text-right md:pr-16 flex flex-col md:items-end order-2 md:order-1">
                <h3 className="text-2xl font-headline font-bold text-foreground">
                  SDET-1
                </h3>
                <span className="text-primary font-label text-sm uppercase tracking-widest mb-4">
                  Safe Security &bull; Oct 2021 — Aug 2023
                </span>
                <p className="text-muted max-w-md md:ml-auto">
                  Built integration testing frameworks with WireMock, set up
                  mobile automation via BrowserStack, and dramatically reduced
                  test flakiness.
                </p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-2 z-10 shadow-[0_0_15px_rgba(205,189,255,0.5)]" />
              <div className="md:pl-16 order-1 md:order-2 flex items-center">
                <div className="w-16 h-16 bg-surface-container-high rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    code
                  </span>
                </div>
              </div>
            </div>

            {/* Intern */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 group">
              <div className="md:text-right md:pr-16 hidden md:flex flex-col md:items-end order-2 md:order-1">
                <div className="w-16 h-16 bg-surface-container-high rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    school
                  </span>
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-2 z-10 shadow-[0_0_15px_rgba(205,189,255,0.5)]" />
              <div className="md:pl-16 order-2 md:order-2">
                <h3 className="text-2xl font-headline font-bold text-foreground">
                  SDET Intern
                </h3>
                <span className="text-primary font-label text-sm uppercase tracking-widest mb-4">
                  Safe Security &bull; Mar 2021 — Oct 2021
                </span>
                <p className="text-muted max-w-md">
                  Started writing initial test scripts and working with Jenkins.
                  Promoted to a permanent role after 7 months for high
                  performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-24">
            <span className="text-tertiary font-label text-sm uppercase tracking-[0.2em] mb-4 block">
              Discover More
            </span>
            <h2 className="font-headline text-5xl font-bold text-foreground">
              Explore.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/blogs"
              className="group p-8 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors duration-300"
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">
                article
              </span>
              <h3 className="font-headline text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                Blogs
              </h3>
              <p className="text-muted leading-relaxed">
                Articles on testing, DevOps, and software engineering published
                on Medium.
              </p>
            </Link>
            <Link
              href="/lifestyle"
              className="group p-8 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors duration-300"
            >
              <span className="material-symbols-outlined text-tertiary text-4xl mb-6 block">
                explore
              </span>
              <h3 className="font-headline text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                Lifestyle
              </h3>
              <p className="text-muted leading-relaxed">
                Travel stories from around the world and a curated reading list
                of 60+ books.
              </p>
            </Link>
            <Link
              href="/resume"
              className="group p-8 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors duration-300"
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">
                description
              </span>
              <h3 className="font-headline text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                Resume
              </h3>
              <p className="text-muted leading-relaxed">
                Professional experience, technical skills, and the journey so
                far.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto bg-primary-container rounded-4xl p-16 md:p-24 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="z-10 text-center md:text-left">
            <h2 className="font-headline text-5xl md:text-7xl font-black text-on-primary-container tracking-tight mb-6">
              LET&apos;S <br />
              CONNECT
              <span className="italic opacity-80 text-primary-fixed">.</span>
            </h2>
            <p className="text-on-primary-container/80 text-lg max-w-md">
              Always open to interesting conversations about testing, DevOps, or
              your next travel destination.
            </p>
          </div>
          <div className="z-10">
            <a
              className="inline-block bg-on-primary-container text-primary-container px-12 py-6 rounded-full font-headline text-xl font-bold hover:scale-105 transition-transform"
              href="https://www.linkedin.com/in/gaurav-goyal-4a850a173/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in Touch
            </a>
          </div>
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-white/10 blur-[100px] rounded-full rotate-45" />
        </div>
      </section>
    </>
  );
}
