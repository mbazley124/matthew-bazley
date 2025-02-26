import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Home() {
  return (
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
  );
} 