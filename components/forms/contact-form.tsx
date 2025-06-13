"use client";

// Import necessary dependencies
import { zodResolver } from "@hookform/resolvers/zod"; // Resolver for Zod validation schema with react-hook-form
import { useForm } from "react-hook-form"; // Hook to manage form state and validation
import * as z from "zod"; // Schema validation library

// Import UI components and custom hooks
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useModalStore } from "@/hooks/use-modal-store";
import { Icons } from "../common/icons";

// Define the form schema using Zod for validation
const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must contain at least 3 characters.",
  }),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, {
    message: "Please write something more descriptive.",
  }),
  social: z.string().url().optional().or(z.literal("")), // Optional social URL
});

export function ContactForm() {
  // Access modal store for showing modal on successful form submission
  const storeModal = useModalStore();

  // Initialize form with default values and validation schema
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema), // Use Zod for schema-based validation
    defaultValues: {
      name: "",
      email: "",
      message: "",
      social: "",
    },
  });

  // Submit handler function for form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Send form data to API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      // Reset form fields after submission
      form.reset();
      // Show modal if submission was successfula

      console.log(response.status);
      if (response.status === 200) {
        storeModal.onOpen({
          title: "Thank you!",
          description:
            "Your message has been received! I appreciate your contact and will get back to you shortly.",
          icon: Icons.successAnimated,
        });
      }
    } catch (err) {
      console.log("Err!", err); // Log any error that occurs during form submission
    }
  }

  return (
    // Wrap form using UI Form component to provide context
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)} // Handle submit using react-hook-form
        className="space-y-8 min-w-full"
      >
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage /> {/* Shows validation error if any */}
            </FormItem>
          )}
        />

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Optional Social Field */}
        <FormField
          control={form.control}
          name="social"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Social (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Link for social account" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
