import { AreaChart, Bell, Home as HomeIcon, LineChart, Package2, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import AnalyticsDashboard from "@/components/analytics-dashboard";
import TradeCard from "@/components/trade-card";
import DeFiGuide from "@/components/defi-guide";
import { Wallet } from "lucide-react";

export default function Home() {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <div className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6 text-accent" />
            <span className="group-data-[collapsible=icon]:hidden">FluxGuide</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton href="#" isActive tooltip="Dashboard">
                <HomeIcon className="h-5 w-5" />
                <span className="group-data-[collapsible=icon]:hidden">Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#" tooltip="Trade">
                <Wallet className="h-5 w-5" />
                <span className="group-data-[collapsible=icon]:hidden">Trade</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#" tooltip="Analytics">
                <LineChart className="h-5 w-5" />
                <span className="group-data-[collapsible=icon]:hidden">Analytics</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6 sticky top-0 z-10">
          <SidebarTrigger />
          <h1 className="flex-1 text-lg font-semibold md:text-2xl">Dashboard</h1>
          <Button variant="outline" size="icon" className="h-9 w-9">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <Button className="relative overflow-hidden group">
            <span className="transition-all duration-500 ease-in-out group-hover:pr-4">Connect Wallet</span>
            <Wallet className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100" />
            <div className="absolute inset-0 -translate-x-full transform bg-white bg-opacity-20 transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
          </Button>
        </header>
        <main className="flex-1 space-y-6 p-4 md:p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="animate-fade-in-up" style={{animationDelay: '100ms'}}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
                  <Wallet className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,403.56</div>
                  <p className="text-xs text-muted-foreground">+5.2% from last month</p>
                </CardContent>
              </Card>
              <Card className="animate-fade-in-up" style={{animationDelay: '200ms'}}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">24h P&L</CardTitle>
                  <AreaChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-success">+$250.43</div>
                  <p className="text-xs text-muted-foreground">+1.2% today</p>
                </CardContent>
              </Card>
              <Card className="animate-fade-in-up" style={{animationDelay: '300ms'}}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Yield APY</CardTitle>
                  <LineChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12.5%</div>
                  <p className="text-xs text-muted-foreground">Across all positions</p>
                </CardContent>
              </Card>
              <Card className="animate-fade-in-up" style={{animationDelay: '400ms'}}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Gas Price (Gwei)</CardTitle>
                  <Fuel className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">25</div>
                  <p className="text-xs text-muted-foreground">Priority: 0.5 Gwei</p>
                </CardContent>
              </Card>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <AnalyticsDashboard />
              </div>
              <div className="space-y-6">
                <TradeCard />
                <DeFiGuide />
              </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
