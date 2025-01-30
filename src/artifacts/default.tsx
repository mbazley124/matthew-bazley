import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

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
                The Neural Basis of Decision Making
              </CardTitle>
              <p className="text-muted-foreground">January 28, 2025</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <img 
                src="/api/placeholder/800/600"
                alt="Neural pathways visualization"
                className="w-full h-72 object-cover rounded-lg"
              />
              <p className="text-muted-foreground leading-relaxed">
                Recent advances in neuroscience have shed light on how our brains make decisions. Through a combination of fMRI studies and computational modeling, researchers have identified key neural circuits involved in processing risk and reward. This post explores the fascinating intersection of cognitive psychology and neurobiology in decision-making processes...
              </p>
            </CardContent>
            <CardFooter>
              <button className="text-primary hover:text-primary/80 font-medium transition-colors">
                Read more →
              </button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl font-bold hover:text-primary transition-colors">
                Epigenetics: Beyond the DNA Sequence
              </CardTitle>
              <p className="text-muted-foreground">January 25, 2025</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <img 
                src="/api/placeholder/800/600"
                alt="DNA double helix illustration"
                className="w-full h-72 object-cover rounded-lg"
              />
              <p className="text-muted-foreground leading-relaxed">
                While DNA has long been considered the blueprint of life, epigenetic modifications reveal a more complex story. These chemical changes to our genetic material can dramatically influence gene expression without altering the underlying DNA sequence. In this post, we'll explore how environmental factors can leave lasting marks on our genome...
              </p>
            </CardContent>
            <CardFooter>
              <button className="text-primary hover:text-primary/80 font-medium transition-colors">
                Read more →
              </button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl font-bold hover:text-primary transition-colors">
                The Microbiome Revolution
              </CardTitle>
              <p className="text-muted-foreground">January 22, 2025</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <img 
                src="/api/placeholder/800/600"
                alt="Microscopic view of bacteria"
                className="w-full h-72 object-cover rounded-lg"
              />
              <p className="text-muted-foreground leading-relaxed">
                The human microbiome has emerged as a crucial player in health and disease. From metabolism to immune function, the trillions of microorganisms living in and on us play essential roles in our biology. This post examines recent discoveries about how our microscopic companions influence our well-being...
              </p>
            </CardContent>
            <CardFooter>
              <button className="text-primary hover:text-primary/80 font-medium transition-colors">
                Read more →
              </button>
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