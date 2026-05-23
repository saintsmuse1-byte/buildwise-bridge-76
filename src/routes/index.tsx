import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Experience } from "@/components/site/Experience";
import { Contact, Footer } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BuildWise Consulting — Building Project Management in KZN" },
      {
        name: "description",
        content:
          "James Robinson's BuildWise Consulting bridges homeowners and builders across KwaZulu-Natal — reviewing quotations, monitoring workmanship and protecting your interests.",
      },
      { property: "og:title", content: "BuildWise Consulting — Building Project Management" },
      {
        property: "og:description",
        content:
          "Independent project management for residential builds across KwaZulu-Natal. Quotation review, workmanship monitoring and practical guidance.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-[var(--ivory)]">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
