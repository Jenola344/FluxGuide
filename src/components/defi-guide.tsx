"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { explainDeFiConcept } from "@/app/actions";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const concepts = [
  "Impermanent Loss",
  "Automated Market Maker (AMM)",
  "Liquidity Pool",
  "Yield Farming",
  "Slippage",
  "Decentralized Exchange (DEX)",
];

export default function DeFiGuide() {
  const [selectedConcept, setSelectedConcept] = useState<string | undefined>(undefined);
  const [explanation, setExplanation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchExplanation = async () => {
    if (!selectedConcept) {
      setError("Please select a concept to explain.");
      return;
    }
    setError("");
    setIsLoading(true);
    setExplanation("");

    try {
      const result = await explainDeFiConcept({ concept: selectedConcept });
      if (result && result.explanation) {
        setExplanation(result.explanation);
      } else {
        throw new Error("No explanation received.");
      }
    } catch (e) {
      setError("Failed to get explanation. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="animate-fade-in-up" style={{animationDelay: '700ms'}}>
      <CardHeader>
        <CardTitle>Contextual DeFi Guide</CardTitle>
        <CardDescription>AI-powered explanations for complex DeFi topics.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 min-h-[180px]">
        <Select onValueChange={setSelectedConcept} value={selectedConcept}>
          <SelectTrigger>
            <SelectValue placeholder="Select a DeFi concept" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>DeFi Concepts</SelectLabel>
              {concepts.map((concept) => (
                <SelectItem key={concept} value={concept}>{concept}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {isLoading && (
          <div className="flex items-center justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-accent" />
          </div>
        )}

        {error && !isLoading && (
            <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}

        {explanation && !isLoading && (
          <div className="rounded-lg border bg-muted/50 p-4 space-y-2 animate-fade-in-up">
            <h3 className="font-semibold text-foreground">{selectedConcept}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{explanation}</p>
          </div>
        )}

      </CardContent>
      <CardFooter>
        <Button onClick={handleFetchExplanation} disabled={isLoading || !selectedConcept} className="w-full transition-transform duration-300 hover:scale-105">
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Explain Concept
        </Button>
      </CardFooter>
    </Card>
  );
}
