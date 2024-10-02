import BreadCrumbTimeLine from "@/components/elements/BreadCrumbTimeLine";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {Activity, FolderTree, ScanEye} from 'lucide-react'
import React from "react";

export default function DashboardLayout({children, userId, pathname}: {children: React.ReactElement, userId:string, pathname: string}) {
  return (
    <div className="w-full h-full flex items-center space-x-5 border p-3 relative bg-background">
        <Card className="hidden sm:block w-[500px] rounded-md h-full bg-primary/10 backdrop-blur-md shadow-lg ">
            <CardHeader>
                <CardTitle>SKYNVISION</CardTitle>
                <CardDescription>We treat you remotely with no worries</CardDescription>
            </CardHeader>
            <CardContent>
                <nav className="w-full">
                    <ul className="space-y-8 p-3 w-full">
                        <Link to="/dashboard/$userId/activity" params={{userId: userId}}>
                          {({isActive}) => (
                                  <li className={`w-full flex space-x-4 hover:bg-primary/20 p-3 rounded-md ${!isActive ?? "bg-primary/35"}`}>
                                      <Activity className="size-8" />
                                      <p className="text-lg font-medium">Recent Activity</p>
                                  </li>
                              )} 
                        </Link>
                          <Link to="/dashboard/$userId/analyzer" params={{ userId: userId}}>
                              {({ isActive }) => (
                                  <li className={`w-full flex space-x-4 hover:bg-primary/20 p-3 rounded-md ${!isActive ?? "bg-primary/35"}`}>
                                      <ScanEye className="size-8" />
                                      <p className="text-lg font-medium">AI Analyzer</p>
                                  </li>
                              )}
                          </Link>
                          <Link to="/dashboard/$userId/reports" params={{ userId: userId}}>
                              {({ isActive }) => (
                                  <li className={`w-full flex space-x-4 hover:bg-primary/20 p-3 rounded-md ${!isActive ?? "bg-primary/35"}`}>
                                      <FolderTree className="size-8" />
                                      <p className="text-lg font-medium">Reports</p>
                                  </li>
                              )}
                          </Link>
                    </ul>
                </nav>
            </CardContent>
        </Card>
        {/* BreadCrumb section */}


        {/* Main content section */}
        <main className="w-full h-full flex flex-col items-center p-3 border overflow-y-scroll space-y-4 rounded-md">
           <div className="rounded-md flex items-center justify-center bg-primary/5 px-4 py-2">
                <BreadCrumbTimeLine path={pathname} />
           </div>
           {children}
        </main>
    </div>
  )
}
