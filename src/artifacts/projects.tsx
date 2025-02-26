import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

export default function Projects() {
  console.log('Projects component rendering');
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
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex h-14 items-center space-x-8">
            <Link to="/" className="text-blue-500 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/projects" className="text-blue-500 hover:text-blue-600 font-medium">
              Projects
            </Link>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto py-16 px-4">
        <section className="grid gap-6">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="space-y-2">
              <div className="flex gap-6">
                <div className="flex-1">
                  <CardTitle className="text-xl font-bold hover:text-primary transition-colors">
                    Chemogenetic inhibition of striatal cholinergic neurons on hallucination-like perception
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">MSc Neuroscience Dissertation</p>
                  <div className="mt-3">
                    <a 
                      href="/Chemogenetic%20inhibition%20of%20striatal%20cholinergic%20neurons%20on%20hallucination-like%20perception%20-%20MB.pdf" 
                      target="_blank"
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
                <div className="w-80">
                  <iframe 
                    src="/Chemogenetic%20inhibition%20of%20striatal%20cholinergic%20neurons%20on%20hallucination-like%20perception%20-%20MB.pdf#view=FitH"
                    className="w-full h-[250px] rounded-lg border"
                    title="Dissertation PDF"
                  />
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="space-y-2">
              <div className="flex gap-6">
                <div className="flex-1">
                  <CardTitle className="text-xl font-bold hover:text-primary transition-colors">
                    Biosecurity, Pandemic Preparedness and the three Ps of Open Science
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">Unpublished article [work in progress]</p>
                  <div className="mt-3">
                    <a 
                      href="/biosecurity-paper.pdf"
                      target="_blank"
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
                <div className="w-80">
                  <iframe 
                    src="/biosecurity-paper.pdf"
                    className="w-full h-[250px] rounded-lg border"
                    title="Biosecurity Article PDF"
                  />
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="space-y-2">
              <div className="flex gap-6">
                <div className="flex-1">
                  <CardTitle className="text-xl font-bold hover:text-primary transition-colors">
                    Journal Publication Policies on Biosecurity and Dual-Use Research of Concern
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">Unpublished article [work in progress]</p>
                  <div className="mt-3">
                    <a 
                      href="/journal-policies.pdf"
                      target="_blank"
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
                <div className="w-80">
                  <iframe 
                    src="/journal-policies.pdf"
                    className="w-full h-[250px] rounded-lg border"
                    title="Journal Policies PDF"
                  />
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="space-y-2">
              <div className="flex gap-6">
                <div className="flex-1">
                  <CardTitle className="text-xl font-bold hover:text-primary transition-colors">
                    A dangerous bias
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">Published in Pi Media | March 2020</p>
                  <div className="mt-3">
                    <a 
                      href="https://uclpimedia.com/online/a-dangerous-bias" 
                      target="_blank"
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Read Article →
                    </a>
                  </div>
                </div>
                <div className="w-80">
                  <img 
                    src="/pimedia-page-001.jpg"
                    alt="Article illustration showing gender bias in research"
                    className="w-full h-[250px] rounded-lg object-cover"
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