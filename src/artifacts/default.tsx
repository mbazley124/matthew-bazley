import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b">
        <div className="max-w-5xl mx-auto py-12 px-4">
          <h1 className="text-5xl font-bold text-primary mb-4">Neural Narratives</h1>
          <p className="text-xl text-muted-foreground">
            Matthew Bazley | UCL Neuroscience MSc graduate and copyeditor exploring the fascinating world of biology
          </p>
        </div>
      </header>

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