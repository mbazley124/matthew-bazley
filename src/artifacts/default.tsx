import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b">
        <div className="max-w-5xl mx-auto py-12 px-4">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h1 className="text-5xl font-bold tracking-tight text-blue-500">Matthew Bazley</h1>
              <p className="text-xl text-muted-foreground mt-2">
                Neuroscience MSc graduate
              </p>
              <div className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  A UCL Neuroscience graduate with research experience at the Schmack Lab in the Francis Crick Institute, where I conducted a first-class project using chemogenetic techniques. My project focused on investigating the effect of inhibiting striatal cholinergic neurons on readouts of hallucination-like perception in trained mice during a behavioural task, where I developed experimental management and data analysis skills.
                </p>
                <p>
                  Beyond research, I have an interest in science communication and broader issues relating to science. I have published articles in UCL's Pi Media magazine as an undergrad and am currently working on reviewing research on open science and publishing practices, with a focus on biosecurity and science policy implications.
                </p>
              </div>
            </div>
            <div className="ml-8 flex-shrink-0">
              <img
                src="/profile.jpg"
                alt="Profile photo"
                className="w-48 h-48 rounded-lg object-cover object-center shadow-lg"
              />
            </div>
          </div>
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
              <CardTitle className="text-2xl font-bold hover:text-primary transition-colors">
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">MSc Neuroscience</h3>
                  <p className="text-muted-foreground">University College London (UCL) | 2022-2024</p>
                  <ul className="mt-2 text-muted-foreground list-disc list-inside space-y-1">
                    <li>High 2:1 (68%)</li>
                    <li>Dissertation project awarded first class</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">BSc Biomedical Sciences</h3>
                  <p className="text-muted-foreground">University College London (UCL) | 2019-2022</p>
                  <ul className="mt-2 text-muted-foreground list-disc list-inside space-y-1">
                    <li>High 2:1 (68%)</li>
                    <li>Dissertation/writing modules (75% and 68%)</li>
                    <li>'Early Development of Pain in Humans', supervised by Prof. Maria Fitzgerald</li>
                    <li>Won best lab technique presentation prize (PHOL0004)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Ibstock Place School</h3>
                  <p className="text-muted-foreground">2007-2017</p>
                  <ul className="mt-2 text-muted-foreground list-disc list-inside space-y-1">
                    <li>AAA at A2 in Biology, Chemistry and Mathematics</li>
                    <li>10 A* at IGCSE</li>
                  </ul>
                </div>
              </div>
            </CardContent>
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