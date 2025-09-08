import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Download, Shield, Zap, Users, ArrowRight, Check, Search, Layout, Sprout } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header
        className="relative"
        style={{
          background: "linear-gradient(to right, #dcfce7, #bbf7d0, #86efac)",
          color: "#15803d",
        }}
      >
        <div className="relative container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <Sprout className="w-8 h-8" style={{ color: "#15803d" }} />
              </div>
              <span className="text-2xl font-bold" style={{ color: "#15803d" }}>
                Sprout
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:opacity-80 transition-opacity font-medium" style={{ color: "#15803d" }}>
                Home
              </a>
              <a
                href="#features"
                className="hover:opacity-80 transition-opacity font-medium"
                style={{ color: "#15803d" }}
              >
                Features
              </a>
              <a href="#apps" className="hover:opacity-80 transition-opacity font-medium" style={{ color: "#15803d" }}>
                Apps
              </a>
              <a
                href="#pricing"
                className="hover:opacity-80 transition-opacity font-medium"
                style={{ color: "#15803d" }}
              >
                Pricing
              </a>
              <a
                href="#manual"
                className="hover:opacity-80 transition-opacity font-medium"
                style={{ color: "#15803d" }}
              >
                Manual
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">Windows Explorer for Mac 🚀</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Bring Windows Explorer
            <span className="text-green-600"> to your Mac</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Experience the familiar Windows file management interface on macOS. Navigate, organize, and manage your
            files with the explorer you know and love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
              <Download className="w-5 h-5 mr-2" />
              Buy Now - $5
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 bg-transparent border-green-600 text-green-600 hover:bg-green-50"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-green-500 text-green-500" />
              <span>4.8/5 rating</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>50k+ downloads</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              <span>Secure & Private</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Sprout?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Get the Windows file management experience you're familiar with, perfectly adapted for macOS.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Layout className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-foreground">Familiar Interface</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Navigate with the same Windows Explorer layout and shortcuts you know by heart.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-foreground">Advanced Search</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Powerful search capabilities with filters and instant results across your entire system.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-foreground">Lightning Fast</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Optimized for macOS with native performance and minimal resource usage.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Users Are Saying</h2>
            <p className="text-xl text-muted-foreground">See how Sprout is helping Mac users work more efficiently.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-pretty">
                  "Finally! A file manager that works like Windows Explorer. Made my transition to Mac so much easier."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">S</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sarah Chen</p>
                    <p className="text-sm text-muted-foreground">Software Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-pretty">
                  "Best $5 I've ever spent. It's like having my Windows PC file management on Mac."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">M</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Mike Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Designer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-pretty">
                  "Sprout saved me hours of relearning file management. Works exactly as expected."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">A</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Alex Thompson</p>
                    <p className="text-sm text-muted-foreground">Business Analyst</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Simple, One-Time Purchase</h2>
            <p className="text-xl text-muted-foreground">Buy once, use forever. No subscriptions, no hidden fees.</p>
          </div>
          <div className="max-w-md mx-auto">
            <Card className="border-green-200 shadow-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-600 text-white">Best Value</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-foreground text-2xl">Sprout for Mac</CardTitle>
                <CardDescription className="text-muted-foreground">Lifetime license for one Mac</CardDescription>
                <div className="text-5xl font-bold text-foreground">
                  $5<span className="text-lg text-muted-foreground">/lifetime</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-muted-foreground">Windows Explorer interface</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-muted-foreground">Advanced search & filters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-muted-foreground">Native macOS performance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-muted-foreground">Lifetime updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-muted-foreground">Email support</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                  <Download className="w-5 h-5 mr-2" />
                  Buy Now - $5
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Ready to Feel at Home on Mac?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Join thousands of Windows users who've made the switch to Mac without giving up their favorite file manager.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
              <Download className="w-5 h-5 mr-2" />
              Get Sprout for $5
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 bg-transparent border-green-600 text-green-600 hover:bg-green-50"
            >
              View Screenshots
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Sprout className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Sprout</span>
              </div>
              <p className="text-white/80 text-sm">Bringing familiar file management to Mac users worldwide.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Screenshots
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    System Requirements
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
            <p>&copy; 2024 Sprout. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
