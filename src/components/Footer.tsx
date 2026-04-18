export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-16 px-6 md:px-12 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 max-w-screen-2xl mx-auto">
        <div className="space-y-4">
          <div className="font-headline font-bold text-foreground text-xl uppercase tracking-tighter">
            Gaurav Goyal
          </div>
          <p className="text-muted text-sm tracking-wide max-w-xs leading-relaxed">
            SDET by profession, DevOps enthusiast by passion. Building quality
            software and exploring the world.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <div className="space-y-4">
            <h5 className="text-primary font-headline text-xs uppercase tracking-widest font-bold">
              Connect
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-muted text-sm hover:text-primary underline-offset-4 hover:underline transition-opacity opacity-80 hover:opacity-100"
                  href="https://github.com/gaurav-goy4l"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="text-muted text-sm hover:text-primary underline-offset-4 hover:underline transition-opacity opacity-80 hover:opacity-100"
                  href="https://www.linkedin.com/in/gaurav-goyal-4a850a173/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="text-muted text-sm hover:text-primary underline-offset-4 hover:underline transition-opacity opacity-80 hover:opacity-100"
                  href="https://medium.com/@gaurav-goyal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medium
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-primary font-headline text-xs uppercase tracking-widest font-bold">
              Explore
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-muted text-sm hover:text-primary underline-offset-4 hover:underline transition-opacity opacity-80 hover:opacity-100"
                  href="/travel"
                >
                  Travel
                </a>
              </li>
              <li>
                <a
                  className="text-muted text-sm hover:text-primary underline-offset-4 hover:underline transition-opacity opacity-80 hover:opacity-100"
                  href="/books"
                >
                  Books
                </a>
              </li>
              <li>
                <a
                  className="text-muted text-sm hover:text-primary underline-offset-4 hover:underline transition-opacity opacity-80 hover:opacity-100"
                  href="/blogs"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-outline-variant/10 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-muted text-xs tracking-widest">
          &copy; {new Date().getFullYear()} GAURAV GOYAL. ALL RIGHTS RESERVED.
        </span>
        <div className="flex gap-4 items-center">
          <span className="text-primary material-symbols-outlined text-sm">
            terminal
          </span>
          <span className="text-muted text-xs tracking-widest">
            BUILT WITH INTENT
          </span>
        </div>
      </div>
    </footer>
  );
}
