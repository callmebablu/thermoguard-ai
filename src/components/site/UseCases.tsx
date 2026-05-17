import { Building2, Factory, HousePlug, Server, Wrench, Zap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const cases = [
  {
    icon: Building2,
    tag: "Enclosed assets",
    title: "Equipment Rooms",
    body: "Monitor thermal behaviour across enclosed equipment rooms where panels, fans, and load patterns affect operating temperature.",
    image: "/sections/use-cases/equipment-rooms.png",
    alt: "Equipment room with electrical panels and cooling fans.",
  },
  {
    icon: Zap,
    tag: "Priority points",
    title: "Electrical Panels & Switchgear",
    body: "Track priority heat-risk points around breakers, connections, and switchgear before abnormal heat becomes a failure.",
    image: "/sections/use-cases/electrical-panels-switchgear.png",
    alt: "Electrical switchgear cabinet with monitored heat-risk area.",
  },
  {
    icon: Server,
    tag: "Cooling reliability",
    title: "Data Centres & Server Rooms",
    body: "Support cooling reliability and early warning across rooms where temperature control directly affects uptime.",
    image: "/sections/use-cases/data-centres-server-rooms.png",
    alt: "Data centre server room with cooling airflow.",
  },
  {
    icon: HousePlug,
    tag: "Facilities teams",
    title: "Commercial Buildings",
    body: "Give facilities teams continuous visibility over critical electrical spaces that are often checked only periodically.",
    image: "/sections/use-cases/commercial-buildings.png",
    alt: "Commercial building plant room with thermal monitoring context.",
  },
  {
    icon: Factory,
    tag: "Plant operations",
    title: "Industrial Facilities",
    body: "Help operations teams monitor electrical assets and thermal conditions in demanding production or plant environments.",
    image: "/sections/use-cases/industrial-facilities.png",
    alt: "Industrial facility equipment room with electrical assets.",
  },
  {
    icon: Wrench,
    tag: "Client evidence",
    title: "Maintenance Service Providers",
    body: "Provide service teams with clearer evidence, alerts, and risk history for proactive client maintenance.",
    image: "/sections/use-cases/maintenance-service-providers.png",
    alt: "Maintenance inspection tools near electrical equipment.",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Use Cases"
          title="Built for environments where heat risk cannot be ignored"
          description="ThermoGuard AI supports teams responsible for critical electrical assets, cooling reliability, and operational continuity across equipment-heavy environments."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, index) => (
            <article
              key={c.title}
              className="panel reveal group overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_18px_44px_oklch(0.82_0.13_205_/_14%)]"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="relative m-3 aspect-[4/3] overflow-hidden rounded-md bg-elevated">
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/18 to-primary/8" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-70" />
              </div>
              <div className="px-5 pb-6 pt-2">
                <div className="flex items-center justify-between gap-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/25">
                    <c.icon className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <span className="text-mono truncate text-[10px] uppercase text-muted-foreground">
                    {c.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
