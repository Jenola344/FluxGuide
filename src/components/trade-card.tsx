"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowDown } from "lucide-react";
import { EthIcon, UsdcIcon } from "./icons";

const tokens = [
  { name: "ETH", icon: <EthIcon className="h-6 w-6" /> },
  { name: "USDC", icon: <UsdcIcon className="h-6 w-6" /> },
  { name: "WBTC", icon: <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs">B</div> },
  { name: "DAI", icon: <div className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-xs">D</div> },
];

export default function TradeCard() {
  const [fromToken, setFromToken] = useState(tokens[0]);
  const [toToken, setToToken] = useState(tokens[1]);
  const [fromAmount, setFromAmount] = useState("1.0");
  const [toAmount, setToAmount] = useState("3000.00");

  const handleSwapTokens = () => {
    const tempToken = fromToken;
    const tempAmount = fromAmount;
    setFromToken(toToken);
    setFromAmount(toAmount);
    setToToken(tempToken);
    setToAmount(tempAmount);
  };

  return (
    <Card className="animate-fade-in-up" style={{animationDelay: '600ms'}}>
      <CardHeader>
        <CardTitle>Swap Tokens</CardTitle>
        <CardDescription>Instant trades on a decentralized exchange.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="from">From</Label>
          <div className="flex gap-2">
            <Input id="from" value={fromAmount} onChange={(e) => setFromAmount(e.target.value)} placeholder="0.0" />
            <Select onValueChange={(val) => setFromToken(tokens.find(t => t.name === val) || tokens[0])} value={fromToken.name}>
              <SelectTrigger className="w-[140px]">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    {fromToken.icon}
                    <span>{fromToken.name}</span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {tokens.map((token) => (
                  <SelectItem key={token.name} value={token.name}>
                    <div className="flex items-center gap-2">
                      {token.icon}
                      <span>{token.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-center my-[-0.5rem]">
            <Button variant="ghost" size="icon" onClick={handleSwapTokens} className="rounded-full border bg-card hover:bg-muted z-10 transition-transform duration-300 hover:rotate-180">
                <ArrowDown className="h-4 w-4"/>
            </Button>
        </div>
        <div className="space-y-2">
          <Label htmlFor="to">To</Label>
          <div className="flex gap-2">
            <Input id="to" value={toAmount} readOnly placeholder="0.0" />
            <Select onValueChange={(val) => setToToken(tokens.find(t => t.name === val) || tokens[1])} value={toToken.name}>
              <SelectTrigger className="w-[140px]">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    {toToken.icon}
                    <span>{toToken.name}</span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {tokens.map((token) => (
                  <SelectItem key={token.name} value={token.name}>
                    <div className="flex items-center gap-2">
                      {token.icon}
                      <span>{token.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="text-sm text-muted-foreground pt-2">1 ETH = 3,000.00 USDC</div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105">Swap</Button>
      </CardFooter>
    </Card>
  );
}
