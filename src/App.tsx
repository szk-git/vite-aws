import React from 'react';
import {
  Shield,
  Scan,
  Bell,
  ShoppingBag,
  Building2,
  Calendar,
  FileText,
  Smartphone,
} from 'lucide-react';
import Header from './components/Header';
import Feature from './components/Feature';
import NewsletterForm from './components/NewsletterForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Say Goodbye to Warranty Woes
              </h1>
              <p className="text-xl text-gray-600">
                Effortlessly manage all your warranties, guarantees, and insurance in one place.
              </p>
              <NewsletterForm />
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
                alt="App Interface"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              icon={Shield}
              title="All-in-One Management"
              description="Manage warranties, guarantees & insurance seamlessly in a single platform."
            />
            <Feature
              icon={Scan}
              title="Smart Document Scanning"
              description="Instantly extract and organize warranty information from documents."
            />
            <Feature
              icon={Bell}
              title="Automatic Reminders"
              description="Never miss a warranty expiration with smart notifications."
            />
            <Feature
              icon={ShoppingBag}
              title="Parts Marketplace"
              description="Access extended warranties and replacement parts with ease."
            />
            <Feature
              icon={Building2}
              title="Warranty as a Service"
              description="Comprehensive warranty management solutions for businesses."
            />
            <Feature
              icon={Calendar}
              title="Expiration Tracking"
              description="Visual timeline of all your warranty expiration dates."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Upload Documents</h3>
              <p className="text-gray-600">Scan or upload your warranty documents</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Access Anywhere</h3>
              <p className="text-gray-600">Manage your warranties on any device</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Bell className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Stay Updated</h3>
              <p className="text-gray-600">Receive timely reminders and updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold">Claimz</span>
            </div>
            <p className="text-gray-600">Simplifying life, one warranty at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;