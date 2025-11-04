import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ParticleBackground from "@/components/ParticleBackground";
import Book3D from "@/components/Book3D";
import CountdownTimer from "@/components/CountdownTimer";
import { Check, Star, BookOpen, Heart, Sparkles, Shield, Gift, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }, []);

  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <span className="text-primary font-semibold">✨ Transform Your Prayer Life Today</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Discover the Ancient Prayer Method That{" "}
              <span className="text-gradient glow-text">Transformed 10,000+ Lives</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              A step-by-step faith journey that brings peace, purpose, and powerful answers to your prayers in just 21 days
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 glow-effect hover:scale-105 transition-transform"
                onClick={scrollToPrice}
              >
                <Sparkles className="mr-2" />
                Start Your Journey Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6"
                onClick={scrollToPrice}
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 pt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-muted-foreground">4.9/5 from 2,847 reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Do You Feel Like Your Prayers Are{" "}
              <span className="text-gradient">Going Unanswered?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              You're not alone. Thousands of believers struggle with feeling disconnected during prayer, 
              questioning if God is truly listening, and wondering why their faith doesn't bring the peace 
              and transformation they desperately seek.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              {[
                { title: "Feeling Distant", desc: "Your prayers feel empty and one-sided" },
                { title: "Lack of Peace", desc: "Anxiety and worry still dominate your mind" },
                { title: "No Direction", desc: "You're unsure if you're praying correctly" }
              ].map((item, i) => (
                <Card key={i} className="bg-card border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section with 3D Book */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <Book3D />
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
                <span className="text-primary font-semibold">The Solution</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gradient">Prayer & Faith Mastery</span>
                <br />Complete Guide
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                This comprehensive program reveals the time-tested prayer methods used by spiritual leaders 
                throughout history. Learn how to deepen your connection with God, receive clear guidance, 
                and experience the transformative power of authentic faith.
              </p>

              <div className="space-y-4">
                {[
                  "21-Day Structured Prayer Journey",
                  "Ancient Prayer Techniques Revealed",
                  "Daily Guided Meditations & Reflections",
                  "Breakthrough Strategies for Answered Prayer",
                  "Faith-Building Exercises & Practices"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 py-6 glow-effect"
                onClick={scrollToPrice}
              >
                Get Instant Access
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Real People, <span className="text-gradient">Real Transformations</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Sarah Mitchell",
                  role: "Mother of 3",
                  text: "After years of struggling with prayer, this program changed everything. I now feel God's presence daily and have peace I never thought possible.",
                  rating: 5
                },
                {
                  name: "David Chen",
                  role: "Business Owner",
                  text: "The ancient techniques revealed in this guide helped me breakthrough spiritual barriers. My faith has never been stronger.",
                  rating: 5
                },
                {
                  name: "Maria Rodriguez",
                  role: "Teacher",
                  text: "I was skeptical at first, but the 21-day journey completely transformed my prayer life. I finally understand how to truly connect with God.",
                  rating: 5
                },
                {
                  name: "James Thompson",
                  role: "Pastor",
                  text: "Even as a pastor, this program taught me prayer methods I'd never encountered. It's revolutionized my ministry and personal faith.",
                  rating: 5
                }
              ].map((testimonial, i) => (
                <Card key={i} className="bg-card border-primary/20 text-left">
                  <CardHeader>
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features/Modules Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                What's Inside <span className="text-gradient">The Program</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to transform your prayer life and deepen your faith
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: BookOpen, title: "Complete Prayer Guide", desc: "200+ pages of in-depth teachings" },
                { icon: Heart, title: "Daily Devotionals", desc: "21 days of guided spiritual growth" },
                { icon: Sparkles, title: "Ancient Techniques", desc: "Time-tested prayer methods revealed" },
                { icon: Zap, title: "Breakthrough Strategies", desc: "Overcome spiritual obstacles" },
                { icon: Shield, title: "Faith Protection", desc: "Guard your spiritual journey" },
                { icon: Gift, title: "Bonus Resources", desc: "Extra materials & worksheets" }
              ].map((module, i) => {
                const Icon = module.icon;
                return (
                  <Card key={i} className="bg-card border-primary/20 hover:border-primary/50 transition-all hover:glow-effect">
                    <CardHeader>
                      <Icon className="w-12 h-12 text-primary mb-4" />
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{module.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <span className="text-primary font-semibold">🎁 Limited Time Bonuses</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Order Today & Receive <span className="text-gradient">These Exclusive Bonuses</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                { 
                  title: "Bonus #1: Prayer Journal Template", 
                  value: "$29 Value",
                  desc: "Track your spiritual journey with our beautifully designed prayer journal" 
                },
                { 
                  title: "Bonus #2: Guided Audio Meditations", 
                  value: "$47 Value",
                  desc: "10 professionally recorded meditation sessions to deepen your practice" 
                },
                { 
                  title: "Bonus #3: Faith Community Access", 
                  value: "$97 Value",
                  desc: "Join our private community of believers supporting each other's journey" 
                }
              ].map((bonus, i) => (
                <Card key={i} className="bg-card border-primary/30">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl">{bonus.title}</CardTitle>
                        <CardDescription className="text-lg mt-2">{bonus.desc}</CardDescription>
                      </div>
                      <div className="text-primary font-bold text-xl whitespace-nowrap ml-4">
                        {bonus.value}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-2xl font-bold text-primary">
                Total Bonus Value: <span className="text-gradient glow-text">$173</span>
              </p>
              <p className="text-muted-foreground mt-2">Yours FREE when you order today!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl md:text-5xl font-bold">
                Special Launch <span className="text-gradient">Offer</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Limited time pricing - This offer expires soon!
              </p>
            </div>

            <Card className="bg-card border-primary/30 glow-effect">
              <CardHeader className="text-center pb-8">
                <div className="space-y-4">
                  <CardTitle className="text-3xl">Prayer & Faith Mastery</CardTitle>
                  <div>
                    <div className="text-muted-foreground line-through text-2xl">$297</div>
                    <div className="text-6xl font-bold text-gradient glow-text">$97</div>
                    <div className="text-muted-foreground mt-2">One-time payment • Lifetime access</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  {[
                    "Complete Prayer & Faith Mastery Guide",
                    "21-Day Transformation Journey",
                    "Ancient Prayer Techniques",
                    "Daily Devotionals & Meditations",
                    "All 3 Exclusive Bonuses ($173 Value)",
                    "Lifetime Access & Updates",
                    "30-Day Money-Back Guarantee"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">⏰ Special price ends in:</p>
                    <CountdownTimer hours={24} />
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full text-xl py-8 glow-effect hover:scale-105 transition-transform"
                    onClick={() => window.open('https://buy.stripe.com/test_placeholder', '_blank')}
                  >
                    <Sparkles className="mr-2" />
                    Get Instant Access Now
                  </Button>

                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4" />
                      <span>Secure Checkout • SSL Encrypted</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4" />
                      <span>30-Day Money-Back Guarantee</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl md:text-5xl font-bold">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "What format is the program in?",
                  a: "Prayer & Faith Mastery is delivered as a comprehensive digital guide (PDF) with accompanying audio meditations. You'll get instant access to download all materials immediately after purchase."
                },
                {
                  q: "Is this suitable for beginners?",
                  a: "Absolutely! This program is designed for believers at all levels - whether you're just starting your prayer journey or looking to deepen an existing practice. The 21-day structure guides you step-by-step."
                },
                {
                  q: "What if it doesn't work for me?",
                  a: "We offer a 30-day money-back guarantee. If you complete the program and don't see transformation in your prayer life, simply email us for a full refund. No questions asked."
                },
                {
                  q: "How long do I have access?",
                  a: "Lifetime! Once you purchase, you'll have permanent access to all materials, including any future updates we release."
                },
                {
                  q: "Is this affiliated with a specific denomination?",
                  a: "No. The prayer principles taught are universal and applicable to all Christian denominations. The focus is on deepening your personal relationship with God."
                },
                {
                  q: "Can I share this with my family?",
                  a: "Yes! Your purchase includes access for your immediate household. We encourage families to grow in faith together."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-primary/20 px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Your <span className="text-gradient glow-text">Transformation</span> Begins Today
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of believers who have already discovered the power of authentic prayer 
              and experienced life-changing faith breakthroughs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="text-xl px-12 py-8 glow-effect hover:scale-105 transition-transform"
                onClick={scrollToPrice}
              >
                <Sparkles className="mr-2" />
                Start Your Journey Now - Only $97
              </Button>
            </div>

            <div className="pt-8 space-y-2">
              <p className="text-sm text-muted-foreground">✓ Instant Digital Access</p>
              <p className="text-sm text-muted-foreground">✓ 30-Day Money-Back Guarantee</p>
              <p className="text-sm text-muted-foreground">✓ Lifetime Updates Included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/10 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="text-2xl font-bold text-gradient">Prayer & Faith Mastery</div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
              <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>© 2024 Prayer & Faith Mastery. All rights reserved.</p>
              <p className="mt-2">
                This site is not affiliated with any religious organization. 
                Results may vary based on individual commitment and practice.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
