import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ParticleBackground from "@/components/ParticleBackground";
import Book3D from "@/components/Book3D";
import CountdownTimer from "@/components/CountdownTimer";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import AnimatedIcon from "@/components/AnimatedIcon";
import AnimatedCounter from "@/components/AnimatedCounter";
import AnimatedGradient from "@/components/AnimatedGradient";
import { Check, Star, BookOpen, Heart, Sparkles, Shield, Gift, Zap, Users, TrendingUp, Award, Crown, Flame, Target } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
      <AnimatedGradient />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollReveal direction="down" delay={0.2}>
              <motion.div 
                className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-primary font-semibold flex items-center gap-2">
                  <AnimatedIcon icon={Sparkles} size={20} variant="glow" />
                  Transform Your Prayer Life Today
                </span>
              </motion.div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4}>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Discover the Ancient Prayer Method That{" "}
                <span className="text-gradient glow-text">Transformed 10,000+ Lives</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.6}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                A step-by-step faith journey that brings peace, purpose, and powerful answers to your prayers in just 21 days
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6 glow-effect"
                    onClick={scrollToPrice}
                  >
                    <AnimatedIcon icon={Sparkles} size={20} variant="pulse" />
                    <span className="ml-2">Start Your Journey Now</span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-lg px-8 py-6"
                    onClick={scrollToPrice}
                  >
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={1}>
              <div className="flex items-center justify-center gap-2 pt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-muted-foreground">
                  4.9/5 from <AnimatedCounter value={2847} /> reviews
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section - NEW */}
      <section className="py-20 bg-card/30 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Users, value: 10000, suffix: "+", label: "Lives Transformed" },
                { icon: TrendingUp, value: 98, suffix: "%", label: "Success Rate" },
                { icon: Award, value: 21, label: "Day Program" },
                { icon: Crown, value: 5, suffix: "/5", label: "Average Rating" }
              ].map((stat, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                  <Card className="bg-card border-primary/20 text-center hover:border-primary/50 transition-all hover:glow-effect">
                    <CardHeader>
                      <AnimatedIcon 
                        icon={stat.icon} 
                        size={48} 
                        variant="pulse" 
                        delay={i * 0.2}
                        className="text-primary mx-auto mb-4"
                      />
                      <CardTitle className="text-4xl font-bold">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </CardTitle>
                      <CardDescription className="text-lg">{stat.label}</CardDescription>
                    </CardHeader>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem Section */}
      <ParallaxSection speed={0.3}>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <ScrollReveal direction="down">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Do You Feel Like Your Prayers Are{" "}
                  <span className="text-gradient">Going Unanswered?</span>
                </h2>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  You're not alone. Thousands of believers struggle with feeling disconnected during prayer, 
                  questioning if God is truly listening, and wondering why their faith doesn't bring the peace 
                  and transformation they desperately seek.
                </p>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-6 pt-8">
                {[
                  { icon: Heart, title: "Feeling Distant", desc: "Your prayers feel empty and one-sided" },
                  { icon: Shield, title: "Lack of Peace", desc: "Anxiety and worry still dominate your mind" },
                  { icon: Target, title: "No Direction", desc: "You're unsure if you're praying correctly" }
                ].map((item, i) => (
                  <ScrollReveal key={i} direction="up" delay={0.3 + i * 0.1}>
                    <motion.div whileHover={{ y: -10, scale: 1.02 }}>
                      <Card className="bg-card border-primary/20 hover:border-primary/50 transition-all h-full">
                        <CardHeader>
                          <AnimatedIcon 
                            icon={item.icon} 
                            size={40} 
                            variant="bounce" 
                            delay={i * 0.2}
                            className="text-primary mb-4"
                          />
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Solution Section with 3D Book */}
      <section className="py-20 bg-card/30 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <Book3D />
            </ScrollReveal>
            
            <div className="order-1 lg:order-2 space-y-6">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
                  <span className="text-primary font-semibold flex items-center gap-2">
                    <AnimatedIcon icon={Flame} size={20} variant="glow" />
                    The Solution
                  </span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.3}>
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="text-gradient">Prayer & Faith Mastery</span>
                  <br />Complete Guide
                </h2>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.4}>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  This comprehensive program reveals the time-tested prayer methods used by spiritual leaders 
                  throughout history. Learn how to deepen your connection with God, receive clear guidance, 
                  and experience the transformative power of authentic faith.
                </p>
              </ScrollReveal>

              <div className="space-y-4">
                {[
                  "21-Day Structured Prayer Journey",
                  "Ancient Prayer Techniques Revealed",
                  "Daily Guided Meditations & Reflections",
                  "Breakthrough Strategies for Answered Prayer",
                  "Faith-Building Exercises & Practices"
                ].map((feature, i) => (
                  <ScrollReveal key={i} direction="right" delay={0.5 + i * 0.1}>
                    <motion.div 
                      className="flex items-start gap-3"
                      whileHover={{ x: 10 }}
                    >
                      <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-lg">{feature}</span>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal direction="right" delay={1}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto text-lg px-8 py-6 glow-effect"
                    onClick={scrollToPrice}
                  >
                    Get Instant Access
                  </Button>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <ParallaxSection speed={0.4}>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Real People, <span className="text-gradient">Real Transformations</span>
                </h2>
              </ScrollReveal>

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
                  <ScrollReveal key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
                    <motion.div whileHover={{ y: -10, scale: 1.02 }}>
                      <Card className="bg-card border-primary/20 text-left h-full hover:border-primary/50 transition-all hover:glow-effect">
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
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Features/Modules Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-bold">
                  What's Inside <span className="text-gradient">The Program</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-xl text-muted-foreground">
                  Everything you need to transform your prayer life and deepen your faith
                </p>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: BookOpen, title: "Complete Prayer Guide", desc: "200+ pages of in-depth teachings" },
                { icon: Heart, title: "Daily Devotionals", desc: "21 days of guided spiritual growth" },
                { icon: Sparkles, title: "Ancient Techniques", desc: "Time-tested prayer methods revealed" },
                { icon: Zap, title: "Breakthrough Strategies", desc: "Overcome spiritual obstacles" },
                { icon: Shield, title: "Faith Protection", desc: "Build unshakeable spiritual foundation" },
                { icon: Gift, title: "Bonus Resources", desc: "Extra materials & worksheets" }
              ].map((module, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                  <motion.div whileHover={{ y: -10, scale: 1.05 }}>
                    <Card className="bg-card border-primary/20 hover:border-primary/50 transition-all hover:glow-effect h-full">
                      <CardHeader>
                        <AnimatedIcon 
                          icon={module.icon} 
                          size={48} 
                          variant="pulse" 
                          delay={i * 0.15}
                          className="text-primary mb-4"
                        />
                        <CardTitle className="text-xl">{module.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{module.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <ParallaxSection speed={0.5}>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <ScrollReveal>
                  <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                    <span className="text-primary font-semibold flex items-center gap-2">
                      <AnimatedIcon icon={Gift} size={20} variant="bounce" />
                      Limited Time Bonuses
                    </span>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <h2 className="text-4xl md:text-5xl font-bold">
                    Order Today & Receive <span className="text-gradient">These Exclusive Bonuses</span>
                  </h2>
                </ScrollReveal>
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
                  <ScrollReveal key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
                    <motion.div whileHover={{ scale: 1.02, x: 10 }}>
                      <Card className="bg-card border-primary/30 hover:border-primary/50 transition-all hover:glow-effect">
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
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.5}>
                <div className="text-center mt-8">
                  <p className="text-2xl font-bold text-primary">
                    Total Bonus Value: <span className="text-gradient glow-text">
                      $<AnimatedCounter value={173} />
                    </span>
                  </p>
                  <p className="text-muted-foreground mt-2">Yours FREE when you order today!</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Special Launch <span className="text-gradient">Offer</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-xl text-muted-foreground">
                  Limited time pricing - This offer expires soon!
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={0.3}>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Card className="bg-card border-primary/30 glow-effect">
                  <CardHeader className="text-center pb-8">
                    <div className="space-y-4">
                      <CardTitle className="text-3xl">Prayer & Faith Mastery</CardTitle>
                      <div>
                        <div className="text-muted-foreground line-through text-2xl">$297</div>
                        <div className="text-6xl font-bold text-gradient glow-text">
                          $<AnimatedCounter value={97} />
                        </div>
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
                        <motion.div 
                          key={i} 
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-lg">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-4">⏰ Special price ends in:</p>
                        <CountdownTimer hours={24} />
                      </div>

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          size="lg" 
                          className="w-full text-xl py-8 glow-effect"
                          onClick={() => window.open('https://buy.stripe.com/test_placeholder', '_blank')}
                        >
                          <AnimatedIcon icon={Sparkles} size={24} variant="pulse" />
                          <span className="ml-2">Get Instant Access Now</span>
                        </Button>
                      </motion.div>

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
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Frequently Asked <span className="text-gradient">Questions</span>
                </h2>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
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
                  <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-primary/20 px-6 rounded-lg hover:border-primary/50 transition-all">
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <ParallaxSection speed={0.6}>
        <section className="py-20 relative bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <ScrollReveal>
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                  Your <span className="text-gradient glow-text">Transformation</span> Begins Today
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                  Join thousands of believers who have already discovered the power of authentic prayer 
                  and experienced life-changing faith breakthroughs.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg" 
                      className="text-xl px-12 py-8 glow-effect"
                      onClick={scrollToPrice}
                    >
                      <AnimatedIcon icon={Sparkles} size={24} variant="pulse" />
                      <span className="ml-2">Start Your Journey Now - Only $97</span>
                    </Button>
                  </motion.div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <div className="pt-8 space-y-2">
                  <p className="text-sm text-muted-foreground">✓ Instant Digital Access</p>
                  <p className="text-sm text-muted-foreground">✓ 30-Day Money-Back Guarantee</p>
                  <p className="text-sm text-muted-foreground">✓ Lifetime Updates Included</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/10">
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
