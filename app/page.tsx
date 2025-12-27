import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Zap, Users, BarChart3 } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="font-bold text-sm">TF</span>
              </div>
              <span className="text-xl font-semibold">task-flow</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/auth/sign-in">
                <Button variant="ghost">Sign in</Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button>Get started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden -mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-8 inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-sm">
                <Zap className="mr-2 h-4 w-4" />
                <span className="text-muted-foreground">Purpose-built for modern teams</span>
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Plan and build products <span className="text-muted-foreground">with clarity</span>
              </h1>
              <p className="mb-10 text-pretty text-lg text-muted-foreground sm:text-xl">
                task-flow is a purpose-built tool for planning and building products. Streamline your workflow with an
                issue tracker and task manager designed for speed and simplicity.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/auth/sign-up">
                  <Button size="lg" className="group">
                    Start building for free
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline">
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl">
            <div className="h-[40rem] w-[68rem] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="-mt-24 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to ship faster
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Built for teams who want to focus on what matters
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Issue Tracking</h3>
              <p className="text-muted-foreground">
                Track bugs, features, and tasks with a clean, intuitive interface that keeps your team aligned.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Built for speed. Navigate instantly, search effortlessly, and get work done without friction.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Team Collaboration</h3>
              <p className="text-muted-foreground">
                Work together seamlessly with real-time updates, comments, and mentions that keep everyone in sync.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Insights & Analytics</h3>
              <p className="text-muted-foreground">
                Understand your team&apos;s progress with powerful analytics and reporting tools built right in.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Keyboard Shortcuts</h3>
              <p className="text-muted-foreground">
                Power users love our comprehensive keyboard shortcuts. Do everything without touching your mouse.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Customizable Workflows</h3>
              <p className="text-muted-foreground">
                Adapt task-flow to match your team&apos;s unique process with custom statuses, labels, and views.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="-mt-24 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-12 md:p-16">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to transform your workflow?
              </h2>
              <p className="mb-8 text-pretty text-lg text-muted-foreground">
                Join teams who are building better products with task-flow. Start free, no credit card required.
              </p>
              <Link href="/auth/sign-up">
                <Button size="lg" className="group">
                  Get started now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="font-bold text-sm">TF</span>
              </div>
              <span className="text-sm text-muted-foreground">© 2025 task-flow. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
