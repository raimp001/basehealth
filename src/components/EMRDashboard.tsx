'use client';  // Mark this as a client component if it uses client-side interactivity

import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  BookIcon, CalendarIcon, FlaskRoundIcon, HospitalIcon,
  MenuIcon, PhoneIcon, PillIcon, SettingsIcon, VideoIcon,
  WalletIcon, WebcamIcon, XIcon
} from "@/icons";

export default function EMRDashboard() {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Link href="#" className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base" prefetch={false}>
              <HospitalIcon className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">EMR Dashboard</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8" prefetch={false}>
                  <WebcamIcon className="h-5 w-5" />
                  <span className="sr-only">Chat</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Chat</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="#" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" prefetch={false}>
                  <BookIcon className="h-5 w-5" />
                  <span className="sr-only">Medical Diary</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Medical Diary</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="#" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" prefetch={false}>
                  <CalendarIcon className="h-5 w-5" />
                  <span className="sr-only">Appointments</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Appointments</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="#" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" prefetch={false}>
                  <PhoneIcon className="h-5 w-5" />
                  <span className="sr-only">Call</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Call</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="#" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" prefetch={false}>
                  <VideoIcon className="h-5 w-5" />
                  <span className="sr-only">Telemedicine</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Telemedicine</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8" prefetch={false}>
                  <WalletIcon className="h-5 w-5" />
                  <span className="sr-only">Wallet</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Wallet</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="#" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" prefetch={false}>
                  <SettingsIcon className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-1 flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="#" className="flex items-center gap-4 px-2.5 text-foreground" prefetch={false}>
                  <WebcamIcon className="h-5 w-5" />
                  Chat
                </Link>
                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                  <BookIcon className="h-5 w-5" />
                  Medical Diary
                </Link>
                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                  <CalendarIcon className="h-5 w-5" />
                  Appointments
                </Link>
                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                  <PhoneIcon className="h-5 w-5" />
                  Call
                </Link>
                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                  <VideoIcon className="h-5 w-5" />
                  Telemedicine
                </Link>
                <Link href="#" className="flex items-center gap-4 px-2.5 bg-accent text-accent-foreground transition-colors hover:text-foreground" prefetch={false}>
                  <WalletIcon className="h-5 w-5" />
                  Wallet
                </Link>
                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                  <SettingsIcon className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#" prefetch={false}>
                    Dashboard
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Input type="text" placeholder="Type your concerns to get in touch with the doctors office" className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                <img src="/placeholder.svg" width={36} height={36} alt="Avatar" className="overflow-hidden rounded-full" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="ml-4">
            <div />
          </div>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Chat with Support</CardTitle>
                <CardDescription>Communicate with our support team for any questions or concerns.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                        <WebcamIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">Chat Portal</div>
                        <div className="text-sm text-muted-foreground">
                          Type your concerns to get in touch with the doctors office
                        </div>
                      </div>
                    </div>
                    <Input type="text" placeholder="Type your concerns to get in touch with the doctors office" className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Medical Diary</CardTitle>
                <CardDescription>Document your medical history, symptoms, and progress.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                        <BookIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">Symptoms Diary</div>
                        <div className="text-sm text-muted-foreground">
                          Type your symptoms to document your progress
                        </div>
                      </div>
                    </div>
                    <Input type="text" placeholder="Type your symptoms to document your progress" className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Medications</CardTitle>
                <CardDescription>Review and update your medications.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
                        <PillIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">Medications</div>
                        <div className="text-sm text-muted-foreground">Review and update your medications</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Review Medications</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Lab Results</CardTitle>
                <CardDescription>View your latest lab results.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
                        <FlaskRoundIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">Lab Results</div>
                        <div className="text-sm text-muted-foreground">View your latest lab results</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">View Lab Results</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>View your upcoming appointments.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

