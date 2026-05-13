import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ThermoGuard AI — Continuous Thermal-Risk Intelligence" },
      {
        name: "description",
        content:
          "AI-assisted thermal-risk monitoring for electrical panels, switchgear, and critical power environments. Detect anomalies earlier and prioritise maintenance.",
      },
      { name: "author", content: "ThermoGuard AI" },
      { property: "og:title", content: "ThermoGuard AI — Continuous Thermal-Risk Intelligence" },
      {
        property: "og:description",
        content:
          "Continuous thermal monitoring, AI-assisted anomaly detection, and risk-scored alerts for electrical panels and switchgear.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ThermoGuard AI — Continuous Thermal-Risk Intelligence" },
      {
        name: "twitter:description",
        content:
          "Continuous thermal-risk intelligence for critical electrical environments.",
      },
      { name: "description", content: "ThermoGuard AI monitors electrical panels for thermal risks, detecting anomalies early for predictive maintenance." },
      { property: "og:description", content: "ThermoGuard AI monitors electrical panels for thermal risks, detecting anomalies early for predictive maintenance." },
      { name: "twitter:description", content: "ThermoGuard AI monitors electrical panels for thermal risks, detecting anomalies early for predictive maintenance." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/sgsiVzzK6HfSnH9NDk0uolRzx4M2/social-images/social-1778677390305-file_000000004e6072439aeda9f5f931818c.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/sgsiVzzK6HfSnH9NDk0uolRzx4M2/social-images/social-1778677390305-file_000000004e6072439aeda9f5f931818c.webp" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "ThermoGuard AI",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "AI-assisted thermal-risk monitoring and predictive maintenance platform for electrical panels, switchgear, and critical power environments.",
        }),
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
