import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MailIcon, PhoneIcon, MapPinIcon, ArrowRightIcon } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      brochure: false,
    },
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message sent successfully!",
        description: "We'll be in touch within 24 hours.",
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    submitContactForm.mutate(data);
  };

  return (
    <div>
      {/* Header */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="container px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-5xl font-bold mb-6">Get Started Today</h1>
            <p className="text-xl text-muted-foreground">
              Ready to transform your textile production? Let's discuss how StitchOS can work for your facility. 
              Our team of experts is here to help you succeed.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection className="py-20">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="font-display text-3xl font-bold mb-8">Contact Information</h2>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <MailIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">hello@stitchos.app</p>
                      <p className="text-muted-foreground text-sm">We typically respond within 2 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+880 1XXX-XXXXX</p>
                      <p className="text-muted-foreground text-sm">Available 9 AM - 6 PM BST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                      <p className="text-muted-foreground text-sm">Born in Bangladesh, serving globally</p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                    alt="Modern textile manufacturing in Bangladesh" 
                    className="w-full h-64 object-cover" 
                  />
                </div>

                {/* Office Hours */}
                <div className="mt-8 bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-4">Office Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM BST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM BST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-green-900 mb-2">Message Sent!</h3>
                    <p className="text-green-700 mb-6">
                      Thank you for your interest in StitchOS. Our team will contact you within 24 hours to discuss your textile production needs.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)} 
                      variant="outline"
                      data-testid="button-send-another"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your full name" 
                                  {...field} 
                                  data-testid="input-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email"
                                  placeholder="your.email@company.com" 
                                  {...field} 
                                  data-testid="input-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your company name" 
                                  {...field} 
                                  data-testid="input-company"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input 
                                  type="tel"
                                  placeholder="+1 (555) 123-4567" 
                                  {...field} 
                                  data-testid="input-phone"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea 
                                rows={4}
                                placeholder="Tell us about your production facility and how we can help..." 
                                {...field} 
                                data-testid="input-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="brochure"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                data-testid="checkbox-brochure"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-normal">
                                Send me the StitchOS product brochure
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-brand-gradient text-white hover:opacity-90 transition-opacity"
                        disabled={submitContactForm.isPending}
                        data-testid="button-submit-contact"
                      >
                        {submitContactForm.isPending ? "Sending..." : (
                          <>
                            Send Message
                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Additional Info */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold mb-6">What Happens Next?</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Initial Consultation</h3>
                <p className="text-muted-foreground text-sm">
                  We'll schedule a 30-minute call to understand your production challenges and goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Custom Demo</h3>
                <p className="text-muted-foreground text-sm">
                  See StitchOS in action with scenarios specific to your textile production processes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Pilot Proposal</h3>
                <p className="text-muted-foreground text-sm">
                  Receive a detailed proposal for a pilot implementation on your production line.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-card p-6 rounded-lg border inline-block">
                <p className="font-medium mb-2">🕐 Average Response Time: 2 hours</p>
                <p className="text-muted-foreground text-sm">
                  Most inquiries receive a detailed response within the same business day
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
