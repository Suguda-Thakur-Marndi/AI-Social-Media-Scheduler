import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider> 
        
        <SidebarInset className="bg-sidebar! border-none">
            <div className="m-1 px-4 rounded-lg border-border
            dark:border-[#e0e1e11a] shadow-xs bg-background h-full">
                <div className="px-3 py-2">{children}</div>

            </div>
      <div>{children}</div></SidebarInset>
    </SidebarProvider>
  );
}