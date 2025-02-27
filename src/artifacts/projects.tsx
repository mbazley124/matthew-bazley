import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

export default function Projects() {
  console.log('Projects component rendering');
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

      <main className="max-w-4xl mx-auto py-8 px-4">
        <section className="grid gap-6">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pt-4 pb-2 md:py-6">
              <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                <div className="flex-1 flex flex-col justify-center">
                  <CardTitle className="text-sm md:text-xl font-bold hover:text-primary transition-colors">
                    Chemogenetic inhibition of striatal cholinergic neurons on hallucination-like perception
                  </CardTitle>
                  <p className="text-xs md:text-base text-muted-foreground mt-1 md:mt-2">MSc Neuroscience Dissertation</p>
                  <div className="mt-2 md:mt-3">
                    <a 
                      href="/Chemogenetic%20inhibition%20of%20striatal%20cholinergic%20neurons%20on%20hallucination-like%20perception%20-%20MB.pdf" 
                      target="_blank"
                      className="text-xs md:text-base text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-80">
                  <div className="hidden md:block">
                    <object 
                      data="/Chemogenetic%20inhibition%20of%20striatal%20cholinergic%20neurons%20on%20hallucination-like%20perception%20-%20MB.pdf#zoom=50&view=FitH"
                      type="application/pdf"
                      className="w-full h-[250px] rounded-lg border"
                    >
                      <p>PDF cannot be displayed</p>
                    </object>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pt-4 pb-2 md:py-6">
              <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                <div className="flex-1 flex flex-col justify-center">
                  <CardTitle className="text-sm md:text-xl font-bold hover:text-primary transition-colors">
                    Biosecurity, Pandemic Preparedness and the three Ps of Open Science
                  </CardTitle>
                  <p className="text-xs md:text-base text-muted-foreground mt-1 md:mt-2">Unpublished article [work in progress]</p>
                  <div className="mt-2 md:mt-3">
                    <a 
                      href="/Biosecurity, Pandemic Preparedness and the three Ps of Open Science_ Preprints, Peer-review and Preregistration [work in progress].pdf"
                      target="_blank"
                      className="text-xs md:text-base text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-80">
                  <div className="hidden md:block">
                    <object 
                      data="/Biosecurity, Pandemic Preparedness and the three Ps of Open Science_ Preprints, Peer-review and Preregistration [work in progress].pdf#zoom=50&view=FitH"
                      type="application/pdf"
                      className="w-full h-[250px] rounded-lg border"
                    >
                      <p>PDF cannot be displayed</p>
                    </object>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pt-4 pb-2 md:py-6">
              <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                <div className="flex-1 flex flex-col justify-center">
                  <CardTitle className="text-sm md:text-xl font-bold hover:text-primary transition-colors">
                    Journal Publication Policies on Biosecurity and Dual-Use Research of Concern
                  </CardTitle>
                  <p className="text-xs md:text-base text-muted-foreground mt-1 md:mt-2">Unpublished article [work in progress]</p>
                  <div className="mt-2 md:mt-3">
                    <a 
                      href="/journal-policies.pdf"
                      target="_blank"
                      className="text-xs md:text-base text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-80">
                  <div className="hidden md:block">
                    <object 
                      data="/journal-policies.pdf#zoom=50&view=FitH"
                      type="application/pdf"
                      className="w-full h-[250px] rounded-lg border"
                    >
                      <p>PDF cannot be displayed</p>
                    </object>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pt-4 pb-2 md:py-6">
              <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                <div className="flex-1 flex flex-col justify-center">
                  <CardTitle className="text-sm md:text-xl font-bold hover:text-primary transition-colors">
                    A dangerous bias
                  </CardTitle>
                  <p className="text-xs md:text-base text-muted-foreground mt-1 md:mt-2">Published in Pi Media | March 2020</p>
                  <div className="mt-2 md:mt-3">
                    <a 
                      href="https://uclpimedia.com/online/a-dangerous-bias" 
                      target="_blank"
                      className="text-xs md:text-base text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Read Article →
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-80">
                  <div className="hidden md:block">
                    <img 
                      src="/pimedia-page-001.jpg"
                      alt="Article illustration showing gender bias in research"
                      className="w-full h-[200px] rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pt-4 pb-2 md:py-6">
              <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                <div className="flex-1 flex flex-col justify-center">
                  <CardTitle className="text-sm md:text-xl font-bold hover:text-primary transition-colors">
                    Mental health in retrospect
                  </CardTitle>
                  <p className="text-xs md:text-base text-muted-foreground mt-1 md:mt-2">Published in Pi Media | December 2019</p>
                  <div className="mt-2 md:mt-3">
                    <a 
                      href="https://uclpimedia.com/online/mental-health-in-retrospect" 
                      target="_blank"
                      className="text-xs md:text-base text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Read Article →
                    </a>
                    <p className="text-xs md:text-sm text-muted-foreground mt-2">
                      This article was selected for a bi-yearly in-print issue of the magazine, read{" "}
                      <a 
                        href="https://static1.squarespace.com/static/5d0dc22f70b70c00015d510a/t/6218bb3a3b6bf04996044e98/1645788049150/Shift.pdf"
                        target="_blank"
                        className="text-primary hover:text-primary/80 underline"
                      >
                        here
                      </a>
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-80">
                  <div className="hidden md:block">
                    <img 
                      src="/mental+health+01_final.jpg"
                      alt="Mental health article illustration"
                      className="w-full h-[200px] rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </section>
      </main>
    </div>
  );
} 