import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function Projects() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-4">
      <section className="grid gap-8">
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl font-bold hover:text-primary transition-colors">
              Chemogenetic inhibition of striatal cholinergic neurons on hallucination-like perception
            </CardTitle>
            <p className="text-muted-foreground">MSc Neuroscience Dissertation</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <iframe 
              src="/Chemogenetic%20inhibition%20of%20striatal%20cholinergic%20neurons%20on%20hallucination-like%20perception%20-%20MB.pdf"
              className="w-full h-[600px] rounded-lg border"
              title="Dissertation PDF"
            />
            <p className="text-muted-foreground leading-relaxed">
              My MSc dissertation exploring the role of striatal cholinergic neurons in hallucination-like perception through chemogenetic inhibition techniques. This research contributes to our understanding of the neural mechanisms underlying perceptual processing and psychiatric conditions.
            </p>
          </CardContent>
          <CardFooter>
            <a 
              href="/Chemogenetic%20inhibition%20of%20striatal%20cholinergic%20neurons%20on%20hallucination-like%20perception%20-%20MB.pdf" 
              target="_blank"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Download PDF →
            </a>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl font-bold hover:text-primary transition-colors">
              Biosecurity, Pandemic Preparedness and the three Ps of Open Science
            </CardTitle>
            <p className="text-muted-foreground">Research Article [work in progress]</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <iframe 
              src="/biosecurity-paper.pdf"
              className="w-full h-[600px] rounded-lg border"
              title="Biosecurity Article PDF"
            />
            <p className="text-muted-foreground leading-relaxed">
              An exploration of how open science practices intersect with biosecurity concerns and pandemic preparedness, examining the roles of preprints, peer review, and preregistration in modern scientific discourse.
            </p>
          </CardContent>
          <CardFooter>
            <a 
              href="/biosecurity-paper.pdf"
              target="_blank"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Download PDF →
            </a>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl font-bold hover:text-primary transition-colors">
              Journal Publication Policies on Biosecurity and Dual-Use Research of Concern
            </CardTitle>
            <p className="text-muted-foreground">Research Article</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <iframe 
              src="/journal-policies.pdf"
              className="w-full h-[600px] rounded-lg border"
              title="Journal Policies PDF"
            />
            <p className="text-muted-foreground leading-relaxed">
              An analysis of how academic journals handle biosecurity concerns and dual-use research of concern (DURC) in their publication policies, examining the balance between open science and security considerations.
            </p>
          </CardContent>
          <CardFooter>
            <a 
              href="/journal-policies.pdf"
              target="_blank"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Download PDF →
            </a>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
} 