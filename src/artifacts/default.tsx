import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b">
        <div className="max-w-[85%] md:max-w-3xl mx-auto py-6 px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-blue-500">Matthew Bazley</h1>
          <p className="text-sm md:text-lg text-muted-foreground mt-1">
            Neuroscience MSc graduate
          </p>
        </div>
      </header>

      <div className="bg-card border-b sticky top-0 z-50">
        <div className="max-w-[85%] md:max-w-3xl mx-auto px-4">
          <div className="flex h-10 items-center justify-around text-sm">
            <Link to="/" className="text-blue-500 hover:text-blue-600 font-medium">
              Projects
            </Link>
            <Link to="/about" className="text-blue-500 hover:text-blue-600 font-medium">
              About
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-card border-b">
        <div className="max-w-3xl mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            <div className="flex-1">
              <div className="text-xs md:text-base text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  A UCL Neuroscience graduate with research experience at the Schmack Lab in the Francis Crick Institute, where I conducted a first-class project using chemogenetic techniques. My project focused on investigating the effect of inhibiting striatal cholinergic neurons on readouts of hallucination-like perception in trained mice during a behavioural task, where I developed experimental management and data analysis skills.
                </p>
                <p>
                  I'm looking to build a career in clinical research to directly contribute to improving health outcomes. I've also maintained a side focus on science communication, publishing articles in UCL's Pi Media magazine as an undergrad and now writing pieces on open science and publishing practices, with a focus on biosecurity and science policy implications.
                </p>
              </div>
            </div>
            <div className="mx-auto md:mx-0 md:ml-8 flex-shrink-0">
              <img
                src="/profile.jpg"
                alt="Profile photo"
                className="w-40 h-40 md:w-48 md:h-48 rounded-lg object-cover object-center shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto py-16 px-4">
        <section className="grid gap-4 md:gap-6">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="space-y-2">
              <CardTitle className="text-lg md:text-2xl font-bold hover:text-primary transition-colors">
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-base md:text-xl font-semibold">MSc Neuroscience</h3>
                  <p className="text-xs md:text-base text-muted-foreground">University College London (UCL) | 2022-2024</p>
                  <ul className="mt-2 text-xs md:text-base text-muted-foreground list-disc list-inside space-y-1">
                    <li>High 2:1 (68%)</li>
                    <li>Dissertation project awarded first class</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-semibold">BSc Biomedical Sciences</h3>
                  <p className="text-xs md:text-base text-muted-foreground">University College London (UCL) | 2019-2022</p>
                  <ul className="mt-2 text-xs md:text-base text-muted-foreground list-disc list-inside space-y-1">
                    <li>High 2:1 (68%)</li>
                    <li>Dissertation/writing modules (75% and 68%)</li>
                    <li>'Early Development of Pain in Humans', supervised by Prof. Maria Fitzgerald</li>
                    <li>Won best lab technique presentation prize (PHOL0004)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-semibold">Ibstock Place School</h3>
                  <p className="text-xs md:text-base text-muted-foreground">2007-2017</p>
                  <ul className="mt-2 text-xs md:text-base text-muted-foreground list-disc list-inside space-y-1">
                    <li>AAA at A2 in Biology, Chemistry and Mathematics</li>
                    <li>10 A* at IGCSE</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}