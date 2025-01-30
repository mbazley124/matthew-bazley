import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Neural Narratives</h1>
          <p className="text-lg text-gray-600">
            Matthew Bazley | UCL Neuroscience MSc graduate and copyeditor exploring the fascinating world of biology
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4">
        <section>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">The Neural Basis of Decision Making</CardTitle>
              <p className="text-gray-500">January 28, 2025</p>
            </CardHeader>
            <CardContent>
              <img 
                src="/api/placeholder/800/600"
                alt="Neural pathways visualization"
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <p className="text-gray-700">
                Recent advances in neuroscience have shed light on how our brains make decisions. Through a combination of fMRI studies and computational modeling, researchers have identified key neural circuits involved in processing risk and reward. This post explores the fascinating intersection of cognitive psychology and neurobiology in decision-making processes...
              </p>
            </CardContent>
            <CardFooter>
              <button className="text-blue-600 hover:text-blue-800">Read more →</button>
            </CardFooter>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Epigenetics: Beyond the DNA Sequence</CardTitle>
              <p className="text-gray-500">January 25, 2025</p>
            </CardHeader>
            <CardContent>
              <img 
                src="/api/placeholder/800/600"
                alt="DNA double helix illustration"
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <p className="text-gray-700">
                While DNA has long been considered the blueprint of life, epigenetic modifications reveal a more complex story. These chemical changes to our genetic material can dramatically influence gene expression without altering the underlying DNA sequence. In this post, we'll explore how environmental factors can leave lasting marks on our genome...
              </p>
            </CardContent>
            <CardFooter>
              <button className="text-blue-600 hover:text-blue-800">Read more →</button>
            </CardFooter>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">The Microbiome Revolution</CardTitle>
              <p className="text-gray-500">January 22, 2025</p>
            </CardHeader>
            <CardContent>
              <img 
                src="/api/placeholder/800/600"
                alt="Microscopic view of bacteria"
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <p className="text-gray-700">
                The human microbiome has emerged as a crucial player in health and disease. From metabolism to immune function, the trillions of microorganisms living in and on us play essential roles in our biology. This post examines recent discoveries about how our microscopic companions influence our well-being...
              </p>
            </CardContent>
            <CardFooter>
              <button className="text-blue-600 hover:text-blue-800">Read more →</button>
            </CardFooter>
          </Card>
        </section>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-4xl mx-auto py-6 px-4 text-center text-gray-600">
          © 2025 Neural Narratives by Matthew Bazley. All rights reserved.
        </div>
      </footer>
    </div>
  );
}