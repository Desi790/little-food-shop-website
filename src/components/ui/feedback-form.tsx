
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    rating: "",
    feedback: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      feedback: e.target.value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      rating: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!formData.rating) {
      toast.error("Please select a rating");
      setIsSubmitting(false);
      return;
    }

    if (!formData.feedback.trim()) {
      toast.error("Please provide some feedback");
      setIsSubmitting(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your feedback!");
      setFormData({
        rating: "",
        feedback: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Share Your Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="rating">How was your experience with us?</Label>
            <Select
              value={formData.rating}
              onValueChange={handleSelectChange}
            >
              <SelectTrigger id="rating">
                <SelectValue placeholder="Select a rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">★★★★★ Excellent</SelectItem>
                <SelectItem value="4">★★★★☆ Very Good</SelectItem>
                <SelectItem value="3">★★★☆☆ Good</SelectItem>
                <SelectItem value="2">★★☆☆☆ Fair</SelectItem>
                <SelectItem value="1">★☆☆☆☆ Poor</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="feedback">Your Feedback</Label>
            <Textarea
              id="feedback"
              placeholder="Tell us about your experience..."
              className="min-h-[120px]"
              value={formData.feedback}
              onChange={handleTextareaChange}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FeedbackForm;
