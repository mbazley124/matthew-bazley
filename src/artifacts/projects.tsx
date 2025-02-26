import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b">
        <div className="max-w-5xl mx-auto py-12 px-4">
          <h1 className="text-5xl font-bold tracking-tight text-blue-500">Matthew Bazley</h1>
          <p className="text-xl text-muted-foreground mt-2">
            Neuroscience MSc graduate
          </p>
        </div>
      </header>

      <div className="bg-card border-b sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex h-14 items-center space-x-8">
            <a href="/" className="text-blue-500 hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="/projects" className="text-blue-500 hover:text-blue-600 font-medium">
              Projects
            </a>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto py-16 px-4">
        <section className="grid gap-8">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="space-y-2">
              <div className="flex gap-8">
                <div className="flex-1">
                  <CardTitle className="text-2xl font-bold hover:text-primary transition-colors">
                    Chemogenetic inhibition of striatal cholinergic neurons on hallucination-like perception
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">MSc Neuroscience Dissertation</p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    My MSc dissertation exploring the role of striatal cholinergic neurons in hallucination-like perception through chemogenetic inhibition techniques. This research contributes to our understanding of the neural mechanisms underlying perceptual processing and psychiatric conditions.
                  </p>
                  <div className="mt-4">
                    <a 
                      href="/Chemogenetic%20inhibition%20of%20striatal%20cholinergic%20neurons%20on%20hallucination-like%20perception%20-%20MB.pdf" 
                      target="_blank"
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
                <div className="w-96">
                  <iframe 
                    src="/Chemogenetic%20inhibition%20of%20striatal%20cholinergic%20neurons%20on%20hallucination-like%20perception%20-%20MB.pdf"
                    className="w-full h-[300px] rounded-lg border"
                    title="Dissertation PDF"
                  />
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="space-y-2">
              <div className="flex gap-8">
                <div className="flex-1">
                  <CardTitle className="text-2xl font-bold hover:text-primary transition-colors">
                    Biosecurity, Pandemic Preparedness and the three Ps of Open Science
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">Research Article [work in progress]</p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    An exploration of how open science practices intersect with biosecurity concerns and pandemic preparedness, examining the roles of preprints, peer review, and preregistration in modern scientific discourse.
                  </p>
                  <div className="mt-4">
                    <a 
                      href="/biosecurity-paper.pdf"
                      target="_blank"
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
                <div className="w-96">
                  <iframe 
                    src="/biosecurity-paper.pdf"
                    className="w-full h-[300px] rounded-lg border"
                    title="Biosecurity Article PDF"
                  />
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="space-y-2">
              <div className="flex gap-8">
                <div className="flex-1">
                  <CardTitle className="text-2xl font-bold hover:text-primary transition-colors">
                    Journal Publication Policies on Biosecurity and Dual-Use Research of Concern
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">Research Article</p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    An analysis of how academic journals handle biosecurity concerns and dual-use research of concern (DURC) in their publication policies, examining the balance between open science and security considerations.
                  </p>
                  <div className="mt-4">
                    <a 
                      href="/journal-policies.pdf"
                      target="_blank"
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
                <div className="w-96">
                  <iframe 
                    src="/journal-policies.pdf"
                    className="w-full h-[300px] rounded-lg border"
                    title="Journal Policies PDF"
                  />
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="space-y-2">
              <div className="flex gap-8">
                <div className="flex-1">
                  <CardTitle className="text-2xl font-bold hover:text-primary transition-colors">
                    A dangerous bias
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">Published in Pi Media | March 2020</p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    An exploration of how under-representation in STEM can have significant consequences for our daily lives, examining issues from biomedical research to product design and artificial intelligence.
                  </p>
                  <div className="mt-4">
                    <a 
                      href="https://uclpimedia.com/online/a-dangerous-bias" 
                      target="_blank"
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Read Article →
                    </a>
                  </div>
                </div>
                <div className="w-96">
                  <img 
                    src="/pimedia-page-001.jpg"
                    alt="Article illustration showing gender bias in research"
                    className="w-full h-[300px] rounded-lg object-cover"
                  />
                </div>
              </div>
            </CardHeader>
          </Card>
        </section>
      </main>

      <footer className="bg-card border-t mt-16">
        <div className="max-w-5xl mx-auto py-8 px-4 text-center text-muted-foreground">
          © 2025 Neural Narratives by Matthew Bazley. All rights reserved.
        </div>
      </footer>
    </div>
  );
} 